import { BrandPropositionSection } from "@/components/brand-proposition-section";
import { CollectionSection } from "@/components/collection-section";
import { HeroSection } from "@/components/hero-section";
import { HomeCollectionShowcase } from "@/components/home-collection-showcase";
import { HomeSound } from "@/components/home-sound";
import { InstagramGallery } from "@/components/instagram-gallery";
import { SareeDiscoverySection } from "@/components/saree-discovery-section";
import { SiteHeader } from "@/components/site-header";
import { SingularSection } from "@/components/singular-section";
import { ViewingSection } from "@/components/viewing-section";
import { collectionPath, collections } from "@/lib/collection";

const homeStructuredData = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": "https://www.anurrakti.com/#webpage",
  url: "https://www.anurrakti.com/",
  name: "Unique Indian Sarees | One-of-One Designs | ANURRAKTI",
  description:
    "Discover twelve one-of-one Indian sarees across the EHSAAS and RAGA collections from ANURRAKTI.",
  inLanguage: "en-IN",
  isPartOf: { "@id": "https://www.anurrakti.com/#website" },
  about: { "@id": "https://www.anurrakti.com/#organization" },
  mainEntity: {
    "@type": "ItemList",
    name: "ANURRAKTI saree collections",
    numberOfItems: collections.length,
    itemListElement: collections.map((collection, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: collection.name,
      url: `https://www.anurrakti.com${collectionPath(collection)}`,
    })),
  },
};

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main className="flex-1">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(homeStructuredData).replace(/</g, "\\u003c"),
          }}
        />
        <HomeSound />
        <HeroSection />
        <HomeCollectionShowcase />
        <BrandPropositionSection />
        <SareeDiscoverySection />
        <CollectionSection featuredOnly />
        <SingularSection />
        <ViewingSection />
        <InstagramGallery />
      </main>
    </>
  );
}
