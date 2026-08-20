import type { Metadata } from "next";
import { ReadyToWearReveal } from "@/components/ready-to-wear-reveal";
import { SiteHeader } from "@/components/site-header";

export const metadata: Metadata = {
  title: "Ready to Wear",
  description: "A forthcoming ready-to-wear expression from ANURRAKTI.",
  alternates: { canonical: "/ready-to-wear" },
  openGraph: {
    title: "Ready to Wear | ANURRAKTI",
    description: "A forthcoming ready-to-wear expression from ANURRAKTI.",
    url: "/ready-to-wear",
    images: [
      {
        url: "/images/campaign/blue-check-portrait-anurrakti.png",
        width: 1080,
        height: 1350,
        alt: "ANURRAKTI ready to wear expression",
      },
    ],
  },
};

export default function ReadyToWearPage() {
  return (
    <>
      <SiteHeader />
      <main className="flex-1">
        <ReadyToWearReveal />
      </main>
    </>
  );
}
