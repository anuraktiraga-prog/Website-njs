import { CollectionSection } from "@/components/collection-section";
import { CraftSection } from "@/components/craft-section";
import { HeroSection } from "@/components/hero-section";
import { SiteHeader } from "@/components/site-header";
import { ViewingSection } from "@/components/viewing-section";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main className="flex-1">
        <HeroSection />
        <CollectionSection />
        <CraftSection />
        <ViewingSection />
      </main>
    </>
  );
}
