import Image from "next/image";

const craftNotes = [
  "Rooted in Indian textile traditions and interpreted through a contemporary lens.",
  "Guided by emotion, artistry and the lasting character of the drape.",
  "Thoughtfully created for pieces that feel collected, not merely chosen.",
];

export function CraftSection() {
  return (
    <section
      id="craft"
      className="scroll-mt-28 border-y border-stone-950/10 bg-[#211d19] text-stone-100"
    >
      <div className="mx-auto grid max-w-7xl gap-14 px-5 py-20 sm:px-8 sm:py-24 lg:grid-cols-[minmax(0,0.9fr)_minmax(24rem,1.1fr)] lg:gap-20 lg:py-28">
        <div className="max-w-2xl self-center">
          <p className="eyebrow text-stone-300">The House</p>
          <h2 className="section-title mt-5 max-w-xl !text-[#f6f0e7]">
            ANURRAKTI was born from an appreciation for pieces that carry more
            than beauty.
          </h2>
          <p className="mt-7 max-w-xl text-base leading-7 text-stone-300 sm:text-lg sm:leading-8">
            Pieces that hold memory, craftsmanship and character. Each creation
            is designed with intention, allowing heritage to speak through
            colour, silhouette and story.
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
          <div className="relative aspect-[4/5] overflow-hidden bg-stone-900">
            <Image
              src="/images/campaign/house-textile-closeup.png"
              alt="Close-up of ANURRAKTI textile folds and illustrated fabric"
              fill
              sizes="(max-width: 1023px) 100vw, 48vw"
              className="object-cover"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#211d19]/85 via-transparent to-transparent" />
            <p className="absolute bottom-5 left-5 text-[0.65rem] uppercase tracking-[0.24em] text-stone-100/80 sm:bottom-7 sm:left-7">
              A study in cloth
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
