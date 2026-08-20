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

  const collectionStructuredData = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: `${collection.name} Collection`,
    itemListElement: collection.pieces.map((piece, index) => ({
      "@type": "ListItem",
      position: index + 1,
      url: `https://www.anurrakti.com${productPath(piece)}`,
      name: `${piece.collectionName} ${piece.title}`,
    })),
  };

  return (
    <>
      <SiteHeader />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionStructuredData) }}
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
