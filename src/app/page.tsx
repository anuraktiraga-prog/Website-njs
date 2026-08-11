import { CollectionSection } from "@/components/collection-section";
import { CraftSection } from "@/components/craft-section";
import { HeroSection } from "@/components/hero-section";
import { ReadyToWearSection } from "@/components/ready-to-wear-section";
import { SiteHeader } from "@/components/site-header";
import { ViewingSection } from "@/components/viewing-section";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main className="flex-1">
        <HeroSection />
        <CollectionSection />
        <ReadyToWearSection />
        <CraftSection />
        <ViewingSection />
      </main>
    </>
  );
}
