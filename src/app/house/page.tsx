import type { Metadata } from "next";
import { CraftSection } from "@/components/craft-section";
import { SiteHeader } from "@/components/site-header";

export const metadata: Metadata = {
  title: { absolute: "House of ANURRAKTI | Indian Saree House" },
  description:
    "Discover the House of ANURRAKTI, its point of view and its approach to unique Indian sarees shaped by colour, movement and personal expression.",
  alternates: { canonical: "/house" },
  openGraph: {
    title: "House of ANURRAKTI",
    description:
      "The point of view behind ANURRAKTI and its unique, one-of-one Indian sarees.",
    url: "/house",
  },
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
