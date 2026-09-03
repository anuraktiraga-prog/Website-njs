import Image from "next/image";
import { campaignImages } from "@/lib/collection";

const craftNotes = [
  "Indian textile heritage, reimagined.",
  "Crafted with passion, chosen by feeling.",
  "Made to be collected, not consumed.",
];

export function CraftSection() {
  const housePortrait = campaignImages[1];

  return (
    <section
      id="craft"
      className="scroll-mt-28 border-b border-stone-950/10 bg-[#f6f0e7] text-[#1d1915]"
    >
      <div className="mx-auto grid max-w-7xl gap-14 px-5 py-16 sm:px-8 sm:py-24 lg:grid-cols-[minmax(0,0.82fr)_minmax(28rem,1.18fr)] lg:gap-24 lg:py-28">
        <div className="max-w-xl self-center lg:pb-8">
          <p className="eyebrow text-[#7e271e]">The House</p>
          <h1 className="section-title mt-5 max-w-xl text-[#1d1915]">
            <span className="sr-only">The House of ANURRAKTI: </span>
            Crafted once. Remembered for a lifetime.
          </h1>
          <p className="type-body mt-7 max-w-xl text-[#4d443d]">
            ANURRAKTI is a study in memory, craft and character, where Indian
            textile heritage becomes a deeply personal expression.
          </p>
          <div className="mt-7 max-w-xl space-y-5 text-base leading-7 text-[#4d443d]">
            <p>
              The House approaches the saree as both clothing and personal archive.
              Colour, illustration, border and movement are considered together, so a
              piece can carry atmosphere while leaving room for the wearer&apos;s own story.
              Each expression is presented through full product views and closer textile
              studies, allowing the complete drape and its details to be seen separately.
            </p>
            <p>
              ANURRAKTI&apos;s collections are made to be encountered slowly. Rather than
              treating every piece as interchangeable, the House gives each saree an
              individual place within a wider emotional world. Campaign images establish
              that world; dedicated product pages show the piece itself and provide the
              confirmed information available for private enquiry.
            </p>
            <p>
              The process of choosing begins with attention: a colour that stays with
              you, a composition that feels familiar, or a drape connected to a moment.
              Private enquiry creates space to ask about availability, material and
              details before making a decision.
            </p>
            <p>
              The online House is organised in layers: first the collection mood, then
              the complete product view, followed by closer studies and private enquiry.
              This keeps expression and product information connected without treating
              campaign atmosphere as evidence about a specific saree.
            </p>
          </div>
          <div className="mt-12 grid gap-0 border-t border-stone-900/15">
            {craftNotes.map((note, index) => (
              <p
                key={note}
                className="flex items-start gap-5 border-b border-stone-900/15 py-5 text-base leading-7 text-[#4d443d] sm:text-lg"
              >
                <span className="min-w-8 font-serif text-2xl leading-none text-[#7e271e]">
                  0{index + 1}
                </span>
                {note}
              </p>
            ))}
          </div>
        </div>

        <div className="lg:pt-8">
          <div className="relative grid grid-cols-[1.12fr_0.88fr] items-start gap-3 sm:gap-5">
            <figure className="group relative aspect-[4/5] overflow-hidden bg-stone-900 shadow-[0_18px_50px_rgba(61,45,33,0.14)]">
              <Image
                src={housePortrait.src}
                alt={housePortrait.alt}
                fill
                sizes="(max-width: 639px) 56vw, (max-width: 1023px) 54vw, 32vw"
                className="object-cover transition-transform duration-700 group-hover:scale-[1.025]"
              />
              <div className="pointer-events-none absolute inset-0 bg-[#211d19]/10" />
              <figcaption className="absolute bottom-4 left-4 text-[0.6rem] uppercase tracking-[0.24em] text-stone-100/85 sm:bottom-6 sm:left-6">
                The House / in motion
              </figcaption>
            </figure>
            <figure className="group relative mt-12 aspect-[4/5] overflow-hidden bg-stone-900 shadow-[0_14px_38px_rgba(61,45,33,0.1)] sm:mt-20">
              <Image
                src="/images/campaign/house-textile-closeup.png"
                alt="Close-up of ANURRAKTI textile folds and illustrated fabric"
                fill
                sizes="(max-width: 639px) 42vw, (max-width: 1023px) 40vw, 24vw"
                className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
              />
              <figcaption className="absolute bottom-4 left-4 text-[0.6rem] uppercase tracking-[0.24em] text-stone-100/85 sm:bottom-6 sm:left-6">
                Material study
              </figcaption>
            </figure>
          </div>
        </div>
      </div>
    </section>
  );
}
