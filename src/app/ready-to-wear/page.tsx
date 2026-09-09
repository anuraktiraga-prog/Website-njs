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
  twitter: {
    card: "summary_large_image",
    title: "Ready to Wear | ANURRAKTI",
    description: "A forthcoming ready-to-wear expression from ANURRAKTI.",
    images: ["/images/campaign/blue-check-portrait-anurrakti.png"],
  },
};

export default function ReadyToWearPage() {
  return (
    <>
      <SiteHeader />
      <main className="flex-1">
        <ReadyToWearReveal />
        <section className="section-shell border-t border-stone-900/10 py-16 sm:py-24">
          <div className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20">
            <div>
              <p className="eyebrow text-[#7e271e]">A forthcoming expression</p>
              <h1 className="type-section mt-5 max-w-xl font-serif text-stone-950">
                <span className="sr-only">ANURRAKTI Ready to Wear: </span>
                A considered approach to everyday dressing.
              </h1>
            </div>
            <div className="max-w-2xl space-y-6 text-base leading-8 text-stone-700">
              <p>
                ANURRAKTI Ready to Wear will extend the House&apos;s point of view into
                considered clothing for everyday life. The forthcoming collection is
                being shaped around ease, character and personal expression, with the
                same attention to colour, movement and feeling that defines the wider
                ANURRAKTI world.
              </p>
              <p>
                This page is an early introduction rather than a product catalogue.
                Silhouettes, availability, sizing and material information will be
                shared here when the collection is ready. Until then, the current saree
                collections remain available to explore through their individual product
                pages and private enquiry.
              </p>
              <p>
                If you would like to hear about the ready-to-wear launch, contact the
                House and tell us what you are drawn to. We can note your interest and
                help you explore the pieces that are available now without making an
                assumption about fit, fabric or occasion before those details are confirmed.
              </p>
              <p>
                Future updates will be published on this page, keeping the collection
                information, imagery and ways to enquire together in one place. That will
                make it clear when the expression moves from preview to availability.
                Until then, the page remains limited to confirmed information instead of
                presenting unannounced products, materials, sizing or launch dates.
              </p>
              <p>
                The existing saree collections remain separate from this preview. Their
                product pages contain the currently available imagery, recorded palettes
                and enquiry references, so visitors looking for an ANURRAKTI piece today
                can continue without mistaking future ready-to-wear plans for available stock.
              </p>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
