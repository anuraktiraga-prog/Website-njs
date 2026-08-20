import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { SiteHeader } from "@/components/site-header";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Discover ANURRAKTI, an Indian fashion house shaped by textile, memory, emotion and considered design.",
  alternates: { canonical: "/about" },
  openGraph: {
    title: "About ANURRAKTI",
    description:
      "An Indian fashion house shaped by textile, memory, emotion and considered design.",
    url: "/about",
    images: [
      {
        url: "/images/campaign/anurrakti-staircase.png",
        width: 1122,
        height: 1402,
        alt: "ANURRAKTI campaign portrait on a red staircase",
      },
    ],
  },
};

const principles = [
  {
    number: "01",
    title: "Heritage, reimagined",
    body: "Indian textile traditions are approached with respect and a contemporary eye—allowing material, motif and movement to remain visible.",
  },
  {
    number: "02",
    title: "Emotion through the drape",
    body: "A piece is considered not only as cloth, but as something carried into celebrations, rituals, portraits and personal memory.",
  },
  {
    number: "03",
    title: "Made to feel singular",
    body: "The intention is a considered wardrobe: pieces chosen personally and designed to hold their own character.",
  },
];

export default function AboutPage() {
  const aboutStructuredData = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "@id": "https://www.anurrakti.com/about#webpage",
    url: "https://www.anurrakti.com/about",
    name: "About ANURRAKTI",
    description:
      "Discover ANURRAKTI, an Indian fashion house shaped by textile, memory, emotion and considered design.",
    inLanguage: "en-IN",
    isPartOf: { "@id": "https://www.anurrakti.com/#website" },
    about: { "@id": "https://www.anurrakti.com/#organization" },
  };

  return (
    <>
      <SiteHeader />
      <main className="flex-1">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(aboutStructuredData).replace(/</g, "\\u003c"),
          }}
        />
        <section className="border-b border-stone-900/10 bg-[#f6f0e7]">
          <div className="mx-auto grid max-w-[90rem] gap-10 px-5 py-16 sm:px-8 sm:py-24 lg:grid-cols-[0.8fr_1.2fr] lg:items-center lg:gap-20 lg:px-12 lg:py-28">
            <div className="max-w-xl">
              <p className="eyebrow text-[#7e271e]">About ANURRAKTI</p>
              <h1 className="type-page-title mt-5 font-serif text-stone-950">
                Pieces made to be remembered.
              </h1>
              <p className="type-lead mt-7 text-stone-700">
                ANURRAKTI is an Indian fashion house shaped by memory, craft and character—where textile heritage meets a contemporary eye.
              </p>
            </div>
            <figure className="relative aspect-[4/5] overflow-hidden bg-stone-900">
              <Image
                src="/images/campaign/anurrakti-staircase.png"
                alt="Woman wearing a black and grey ANURRAKTI saree against a red staircase"
                fill
                priority
                sizes="(max-width: 1023px) 100vw, 55vw"
                className="object-cover"
              />
              <figcaption className="absolute bottom-5 left-5 text-[10px] uppercase tracking-[0.2em] text-stone-100/85 sm:bottom-7 sm:left-7">
                The House / in motion
              </figcaption>
            </figure>
          </div>
        </section>

        <section className="section-shell border-b border-stone-900/10" aria-labelledby="point-of-view">
          <div className="grid gap-10 lg:grid-cols-[0.34fr_0.66fr] lg:gap-16">
            <p className="eyebrow lg:pt-2">Our point of view</p>
            <div>
              <h2 id="point-of-view" className="section-title max-w-3xl">
                Made once. Remembered longer.
              </h2>
              <p className="type-body mt-7 max-w-2xl text-stone-700">
                A singular piece can hold more than material. It can hold identity, memory and the way a woman chooses to be seen. ANURRAKTI brings that belief into the relationship between textile, silhouette and detail.
              </p>
            </div>
          </div>

          <div className="mt-14 grid gap-px bg-stone-900/15 lg:grid-cols-3">
            {principles.map((principle) => (
              <article key={principle.number} className="bg-[#f7f1e8] p-7 sm:p-8">
                <p className="eyebrow">{principle.number}</p>
                <h3 className="mt-5 font-serif text-2xl leading-tight text-stone-950">{principle.title}</h3>
                <p className="mt-4 text-sm leading-relaxed text-stone-700">{principle.body}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="bg-[#211d19] text-[#f6f0e7]">
          <div className="mx-auto grid max-w-[90rem] gap-12 px-5 py-16 sm:px-8 sm:py-20 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:gap-20 lg:px-12 lg:py-24">
            <figure className="relative aspect-[3/2] overflow-hidden bg-stone-900">
              <Image
                src="/images/campaign/house-textile-closeup.png"
                alt="Close view of illustrated ANURRAKTI textile folds"
                fill
                sizes="(max-width: 1023px) 100vw, 58vw"
                className="object-cover"
              />
            </figure>
            <div className="max-w-xl">
              <p className="eyebrow !text-stone-400">The work</p>
              <h2 className="mt-5 font-serif text-4xl leading-tight sm:text-5xl">
                Begin with the textile. Follow the feeling.
              </h2>
              <p className="mt-6 leading-relaxed text-stone-300">
                Explore the current collections or begin a private conversation about a piece, an occasion or a considered gift.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link href="/collection" className="btn-light">Explore collections</Link>
                <Link href="/contact" className="btn-ghost border border-stone-100/30 !text-stone-100">Contact us</Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
