import type { Metadata } from "next";
import { CollectionChoiceCard } from "@/components/collection-choice-card";
import { SiteHeader } from "@/components/site-header";
import { ViewingSection } from "@/components/viewing-section";
import { collectionPath, collections } from "@/lib/collection";

export const metadata: Metadata = {
  title: "Collections",
  description:
    "Explore the EHSAAS and RAGA collections from the House of ANURRAKTI.",
  alternates: { canonical: "/collection" },
  openGraph: {
    title: "Collections | ANURRAKTI",
    description:
      "Explore the EHSAAS and RAGA collections from the House of ANURRAKTI.",
    url: "/collection",
    images: [{ url: "/images/campaign/red-grey-portrait.jpg", width: 1760, height: 2200, alt: "ANURRAKTI campaign portrait" }],
  },
};

export default function CollectionPage() {
  const collectionStructuredData = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "ANURRAKTI Collections",
    hasPart: collections.map((collection) => ({
      "@type": "Collection",
      name: collection.name,
      url: `https://www.anurrakti.com${collectionPath(collection)}`,
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
        <section className="section-shell border-b border-stone-900/10 py-14 sm:py-20 lg:py-24">
          <div className="max-w-3xl">
            <p className="eyebrow">From the House of ANURRAKTI</p>
            <h1 className="type-display mt-5 max-w-3xl font-serif text-stone-950">
              Choose what speaks to you.
            </h1>
            <p className="type-body mt-6 max-w-2xl text-stone-700">
              EHSAAS and RAGA carry different moods of the ANURRAKTI language—each
              shaped by emotion, artistry and the enduring presence of the drape.
            </p>
          </div>

          <div className="mt-12 grid auto-rows-fr gap-6 lg:grid-cols-2">
            {collections.map((collection, index) => (
              <CollectionChoiceCard key={collection.id} collection={collection} index={index} />
            ))}
          </div>
        </section>
        <ViewingSection />
      </main>
    </>
  );
}
