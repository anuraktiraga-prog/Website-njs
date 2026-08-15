import { BrandPropositionSection } from "@/components/brand-proposition-section";
import { CollectionSection } from "@/components/collection-section";
import { HeroSection } from "@/components/hero-section";
import { SiteHeader } from "@/components/site-header";
import { SingularSection } from "@/components/singular-section";
import { ViewingSection } from "@/components/viewing-section";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main className="flex-1">
        <HeroSection />
        <BrandPropositionSection />
        <CollectionSection featuredOnly />
        <SingularSection />
        <ViewingSection />
      </main>
    </>
  );
}
