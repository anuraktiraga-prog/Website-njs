import { CraftSection } from "@/components/craft-section";
import { SiteHeader } from "@/components/site-header";

export const metadata = {
  title: "The House",
  description: "The story and point of view behind ANURRAKTI.",
  alternates: { canonical: "/house" },
};

export default function HousePage() {
  return (
    <>
      <SiteHeader />
      <main className="flex-1">
        <CraftSection />
      </main>
    </>
  );
}
