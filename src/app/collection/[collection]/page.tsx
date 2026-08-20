import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CollectionMarquee } from "@/components/collection-marquee";
import { CollectionSection } from "@/components/collection-section";
import { SiteHeader } from "@/components/site-header";
import { ViewingSection } from "@/components/viewing-section";
import { CollectionDepthTracker } from "@/components/collection-depth-tracker";
import { collectionPath, collections, getCollection, productPath } from "@/lib/collection";

type ArchivePageProps = {
  params: Promise<{ collection: string }>;
};

export function generateStaticParams() {
  return collections.map((collection) => ({ collection: collection.id }));
}

export async function generateMetadata({ params }: ArchivePageProps): Promise<Metadata> {
  const { collection: collectionId } = await params;
  const collection = getCollection(collectionId);

  if (!collection) return {};

  return {
    title: `${collection.name} Collection`,
    description: collection.description,
    alternates: { canonical: collectionPath(collection) },
    openGraph: {
      title: `${collection.name} Collection | ANURRAKTI`,
      description: collection.description,
      url: collectionPath(collection),
      images: [{ url: collection.pieces[0].src, width: 1080, height: 1350, alt: collection.pieces[0].alt }],
    },
  };
}

export default async function ArchivePage({ params }: ArchivePageProps) {
  const { collection: collectionId } = await params;
  const collection = getCollection(collectionId);

  if (!collection) notFound();

  const collectionUrl = `https://www.anurrakti.com${collectionPath(collection)}`;
  const collectionStructuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CollectionPage",
        "@id": `${collectionUrl}#webpage`,
        url: collectionUrl,
        name: `${collection.name} Collection | ANURRAKTI`,
        description: collection.description,
        inLanguage: "en-IN",
        isPartOf: { "@id": "https://www.anurrakti.com/#website" },
        mainEntity: { "@id": `${collectionUrl}#item-list` },
      },
      {
        "@type": "ItemList",
        "@id": `${collectionUrl}#item-list`,
        name: `${collection.name} Collection`,
        numberOfItems: collection.pieces.length,
        itemListElement: collection.pieces.map((piece, index) => ({
          "@type": "ListItem",
          position: index + 1,
          url: `https://www.anurrakti.com${productPath(piece)}`,
          name: `${piece.collectionName} ${piece.title}`,
        })),
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${collectionUrl}#breadcrumb`,
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: "https://www.anurrakti.com",
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Collections",
            item: "https://www.anurrakti.com/collection",
          },
          {
            "@type": "ListItem",
            position: 3,
            name: collection.name,
            item: collectionUrl,
          },
        ],
      },
    ],
  };

  return (
    <>
      <SiteHeader />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(collectionStructuredData).replace(/</g, "\\u003c"),
        }}
      />
      <main className="flex-1">
        <CollectionDepthTracker />
        <CollectionMarquee
          images={collection.heroImages}
          eyebrow={collection.number}
          title={collection.name}
          copy={collection.note}
        />
        <CollectionSection collection={collection} />
        <ViewingSection />
      </main>
    </>
  );
}
