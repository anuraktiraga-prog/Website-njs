import type { Metadata } from "next";
import { CollectionSection } from "@/components/collection-section";
import { CollectionMarquee } from "@/components/collection-marquee";
import { SiteHeader } from "@/components/site-header";
import { ViewingSection } from "@/components/viewing-section";
import { collectionImages, collectionSlug } from "@/lib/collection";
import { CollectionDepthTracker } from "@/components/collection-depth-tracker";

export const metadata: Metadata = {
  title: "EHSAAS Collection",
  description:
    "Explore EHSAAS, a considered collection of singular Indian sarees by ANURRAKTI.",
  alternates: { canonical: "/collection" },
  openGraph: {
    title: "EHSAAS Collection | ANURRAKTI",
    description:
      "Explore EHSAAS, a considered collection of singular Indian sarees by ANURRAKTI.",
    url: "/collection",
    images: [{ url: "/images/campaign/red-grey-portrait.jpg", width: 1760, height: 2200, alt: "ANURRAKTI campaign portrait" }],
  },
};

export default function CollectionPage() {
  const collectionStructuredData = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "EHSAAS Collection",
    itemListElement: collectionImages.map((piece, index) => ({
      "@type": "ListItem",
      position: index + 1,
      url: `https://www.anurrakti.com/collection/${collectionSlug(piece)}`,
      name: piece.title,
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
        <CollectionMarquee />
        <CollectionSection />
        <ViewingSection />
      </main>
    </>
  );
}
