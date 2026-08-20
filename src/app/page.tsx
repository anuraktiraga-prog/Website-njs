import { BrandPropositionSection } from "@/components/brand-proposition-section";
import { CollectionSection } from "@/components/collection-section";
import { HeroSection } from "@/components/hero-section";
import { HomeSound } from "@/components/home-sound";
import { LoadingScreen } from "@/components/loading-screen";
import { SiteHeader } from "@/components/site-header";
import { SingularSection } from "@/components/singular-section";
import { ViewingSection } from "@/components/viewing-section";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main className="flex-1">
        <HomeSound />
        <LoadingScreen />
        <HeroSection />
        <BrandPropositionSection />
        <CollectionSection featuredOnly />
        <SingularSection />
        <ViewingSection />
      </main>
    </>
  );
}
