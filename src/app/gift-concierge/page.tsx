import type { Metadata } from "next";
import Link from "next/link";
import { GiftConciergeForm } from "@/components/gift-concierge-form";
import { SiteHeader } from "@/components/site-header";

export const metadata: Metadata = {
  title: "Gift Concierge",
  description: "A personal ANURRAKTI conversation for choosing a singular gift.",
  alternates: { canonical: "/gift-concierge" },
  openGraph: {
    title: "Gift with intention | ANURRAKTI",
    description: "Tell us about her. We will help you find something singular.",
    url: "/gift-concierge",
    images: [{ url: "/images/campaign/red-grey-portrait.jpg", width: 1760, height: 2200, alt: "ANURRAKTI campaign portrait" }],
  },
};

export default function GiftConciergePage() {
  return (
    <>
      <SiteHeader />
      <main className="flex-1">
        <section className="section-shell border-b border-stone-900/10 py-16 sm:py-24 lg:py-32">
          <div className="max-w-3xl">
            <p className="eyebrow">Private gifting / ANURRAKTI</p>
            <h1 className="type-display mt-5 max-w-2xl font-serif text-stone-950">Gift with intention.</h1>
            <p className="type-body mt-6 max-w-xl text-stone-700">Tell us about her. We will help you find something singular.</p>
          </div>
          <div className="mt-12 max-w-5xl border-t border-stone-900/15 pt-8 sm:mt-16 sm:pt-10">
            <GiftConciergeForm />
          </div>
        </section>
        <section className="section-shell py-14 sm:py-20" aria-labelledby="gift-next-step">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div><p className="eyebrow">Continue exploring</p><h2 id="gift-next-step" className="type-subheading mt-3 font-serif text-stone-950">Discover something singular.</h2></div>
            <Link href="/collection" className="btn-secondary">Explore collections</Link>
          </div>
        </section>
      </main>
    </>
  );
}
