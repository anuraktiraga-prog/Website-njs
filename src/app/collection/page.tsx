import type { Metadata } from "next";
import Link from "next/link";
import { CollectionChoiceCard } from "@/components/collection-choice-card";
import { SiteHeader } from "@/components/site-header";
import { ViewingSection } from "@/components/viewing-section";
import { collectionPath, collections } from "@/lib/collection";

export const metadata: Metadata = {
  title: "Designer Sarees | Exclusive Collections",
  description:
    "Explore eighteen unique designer sarees across the EHSAAS, RAGA and NOOR collections from the House of ANURRAKTI, available by private enquiry.",
  alternates: { canonical: "/collection" },
  openGraph: {
    title: "Designer Sarees | Exclusive Collections | ANURRAKTI",
    description:
      "Explore eighteen unique designer sarees across the EHSAAS, RAGA and NOOR collections from the House of ANURRAKTI.",
    url: "/collection",
    images: [{ url: "/images/campaign/red-grey-portrait.jpg", width: 1760, height: 2200, alt: "ANURRAKTI campaign portrait" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Designer Sarees | Exclusive Collections | ANURRAKTI",
    description:
      "Explore eighteen unique designer sarees across the EHSAAS, RAGA and NOOR collections from the House of ANURRAKTI.",
    images: ["/images/campaign/red-grey-portrait.jpg"],
  },
};

export default function CollectionPage() {
  const collectionUrl = "https://www.anurrakti.com/collection";
  const collectionStructuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CollectionPage",
        "@id": `${collectionUrl}#webpage`,
        url: collectionUrl,
        name: "ANURRAKTI Designer Saree Collections",
        description:
          "Explore eighteen unique designer sarees across the EHSAAS, RAGA and NOOR collections from ANURRAKTI.",
        inLanguage: "en-IN",
        isPartOf: { "@id": "https://www.anurrakti.com/#website" },
        mainEntity: { "@id": `${collectionUrl}#item-list` },
      },
      {
        "@type": "ItemList",
        "@id": `${collectionUrl}#item-list`,
        name: "ANURRAKTI saree collections",
        numberOfItems: collections.length,
        itemListElement: collections.map((collection, index) => ({
          "@type": "ListItem",
          position: index + 1,
          name: collection.name,
          url: `https://www.anurrakti.com${collectionPath(collection)}`,
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
            item: "https://www.anurrakti.com/",
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Collections",
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionStructuredData).replace(/</g, "\\u003c") }}
      />
      <main className="flex-1">
        <section className="section-shell border-b border-stone-900/10 py-14 sm:py-20 lg:py-24">
          <div className="max-w-3xl">
            <p className="eyebrow">From the House of ANURRAKTI</p>
            <h1 className="type-display mt-5 max-w-3xl font-serif text-stone-950">
              <span className="sr-only">Exclusive designer saree collections from ANURRAKTI: </span>
              Choose what speaks to you.
            </h1>
            <p className="type-body mt-6 max-w-2xl text-stone-700">
              EHSAAS, RAGA and NOOR carry distinct moods of the ANURRAKTI language,
              each shaped by emotion, artistry and the enduring presence of the drape.
            </p>
          </div>

          <div className="mt-12 grid auto-rows-fr gap-6 lg:grid-cols-3">
            {collections.map((collection, index) => (
              <CollectionChoiceCard key={collection.id} collection={collection} index={index} />
            ))}
          </div>

          <div className="mt-14 grid gap-8 border-t border-stone-900/10 pt-10 lg:grid-cols-2 lg:gap-16">
            <h2 className="type-subheading max-w-lg font-serif text-stone-950">
              Three collections, eighteen individual expressions.
            </h2>
            <div className="max-w-2xl space-y-5 text-base leading-7 text-stone-700">
              <p>
                Each collection page brings its six sarees together as a complete visual
                chapter. From there, individual product pages offer a full-drape image,
                closer textile views, the confirmed colour palette and current availability.
              </p>
              <p>
                Begin with the collection whose mood draws you in, then take time with
                the pieces one by one. If a particular saree speaks to you, private enquiry
                is available for material composition, design details and guidance before
                you decide.
              </p>
            </div>
          </div>
        </section>

        <section className="section-shell border-b border-stone-900/10 py-14 sm:py-20" aria-labelledby="explore-sarees">
          <div className="grid gap-8 lg:grid-cols-[0.65fr_1.35fr] lg:gap-16">
            <div>
              <p className="eyebrow">Exploring the collection</p>
              <h2 id="explore-sarees" className="type-subheading mt-4 max-w-lg font-serif text-stone-950">
                Find an Indian saree that feels distinctly yours.
              </h2>
            </div>
            <div className="max-w-2xl space-y-5 text-base leading-7 text-stone-700">
              <p>
                This collection hub brings all eighteen ANURRAKTI sarees into one
                considered journey. EHSAAS begins with colour, illustration and
                expressive drape; RAGA moves through a quieter language of textile,
                shadow and ceremonial colour; NOOR introduces a more elevated study
                of light, ornament and singular presence. Each collection offers a
                different atmosphere while every saree remains a one-of-one piece.
              </p>
              <p>
                Explore the current ANURRAKTI collections online, then continue to
                the individual saree that draws you in. The House is enquiry-led
                rather than built around immediate checkout, leaving space to
                confirm availability, material composition and design details
                before a decision is made.
              </p>
              <p>
                Open a collection to compare its six sarees together, or continue to
                an individual page for the complete drape, detailed photographs,
                recorded palette and availability. Private enquiry is the final step
                when you would like confirmed material composition, closer design
                information or help considering a particular piece.
              </p>
              <p>
                Choosing can begin with appearance or with purpose. Our guides to
                <Link className="mx-1 underline underline-offset-4 hover:text-stone-950" href="/blogs/saree-colour-combinations">saree colour combinations</Link>
                and
                <Link className="mx-1 underline underline-offset-4 hover:text-stone-950" href="/blogs/how-to-choose-saree-for-every-occasion">choosing a saree for an occasion</Link>
                offer practical ways to narrow the possibilities before you enquire.
              </p>
            </div>
          </div>
        </section>
        <ViewingSection />
      </main>
    </>
  );
}
