import Image from "next/image";
import { campaignImages } from "@/lib/collection";

const craftNotes = [
  "Indian textile heritage, reimagined.",
  "Emotion, expressed through the drape.",
  "Made to be collected, not consumed.",
];

export function CraftSection() {
  const housePortrait = campaignImages[1];

  return (
    <section
      id="craft"
      className="scroll-mt-28 border-y border-stone-950/10 bg-[#211d19] text-stone-100"
    >
      <div className="mx-auto grid max-w-7xl gap-14 px-5 py-20 sm:px-8 sm:py-24 lg:grid-cols-[minmax(0,0.9fr)_minmax(24rem,1.1fr)] lg:gap-20 lg:py-28">
        <div className="max-w-2xl self-center">
          <p className="eyebrow text-stone-300">The House</p>
          <h2 className="section-title mt-5 max-w-xl !text-[#f6f0e7]">
            Pieces made to be remembered.
          </h2>
          <p className="mt-7 max-w-xl text-base leading-7 text-stone-300 sm:text-lg sm:leading-8">
            ANURRAKTI is a study in memory, craft and character—where Indian
            heritage meets a contemporary eye.
          </p>
          <div className="mt-10 grid gap-0">
            {craftNotes.map((note, index) => (
              <p
                key={note}
                className="border-t border-stone-100/20 py-5 text-base leading-7 text-stone-300 sm:text-lg"
              >
                <span className="mr-5 font-serif text-2xl text-[#d7b98e]">
                  0{index + 1}
                </span>
                {note}
              </p>
            ))}
          </div>
        </div>

        <div className="lg:pt-8">
          <div className="grid grid-cols-[1.15fr_0.85fr] items-start gap-3 sm:gap-5">
            <figure className="relative aspect-[4/5] overflow-hidden bg-stone-900">
              <Image
                src={housePortrait.src}
                alt={housePortrait.alt}
                fill
                sizes="(max-width: 639px) 56vw, (max-width: 1023px) 54vw, 32vw"
                className="object-cover"
              />
              <div className="pointer-events-none absolute inset-0 bg-[#211d19]/20" />
              <figcaption className="absolute bottom-4 left-4 text-[0.6rem] uppercase tracking-[0.24em] text-stone-100/80 sm:bottom-6 sm:left-6">
                The House / in motion
              </figcaption>
            </figure>
            <figure className="relative mt-10 aspect-[4/5] overflow-hidden bg-stone-900 sm:mt-16">
              <Image
                src="/images/campaign/house-textile-closeup.png"
                alt="Close-up of ANURRAKTI textile folds and illustrated fabric"
                fill
                sizes="(max-width: 639px) 42vw, (max-width: 1023px) 40vw, 24vw"
                className="object-cover"
              />
              <figcaption className="absolute bottom-4 left-4 text-[0.6rem] uppercase tracking-[0.24em] text-stone-100/80 sm:bottom-6 sm:left-6">
                Material study
              </figcaption>
            </figure>
          </div>
        </div>
      </div>
    </section>
  );
}
