import { CollectionSection } from "@/components/collection-section";
import { SiteHeader } from "@/components/site-header";
import { ViewingSection } from "@/components/viewing-section";

export default function CollectionPage() {
  return (
    <>
      <SiteHeader />
      <main className="flex-1">
        <CollectionSection />
        <ViewingSection />
      </main>
    </>
  );
}
