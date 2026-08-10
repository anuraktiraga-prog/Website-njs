import { ImageFrame } from "@/components/image-frame";
import { houseImages } from "@/lib/collection";

const craftNotes = [
  "Rooted in Indian textile traditions and interpreted through a contemporary lens.",
  "Guided by emotion, artistry and the lasting character of the drape.",
  "Thoughtfully created for pieces that feel collected, not merely chosen.",
];

export function CraftSection() {
  return (
    <section id="craft" className="border-y border-stone-950/10 bg-[#211d19] text-stone-100">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-20 sm:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:py-28">
        <div>
          <p className="eyebrow text-stone-300">The House</p>
          <h2 className="mt-5 font-serif text-4xl leading-tight sm:text-5xl">
            ANURRAKTI was born from an appreciation for pieces that carry more
            than beauty.
          </h2>
          <p className="mt-7 max-w-xl text-base leading-7 text-stone-300">
            Pieces that hold memory, craftsmanship and character. Each creation
            is designed with intention, allowing heritage to speak through
            colour, silhouette and story.
          </p>
          <div className="mt-10 grid gap-5">
            {craftNotes.map((note, index) => (
              <p
                key={note}
                className="border-t border-stone-100/20 pt-5 text-base leading-7 text-stone-300"
              >
                <span className="mr-5 font-serif text-2xl text-[#d7b98e]">
                  0{index + 1}
                </span>
                {note}
              </p>
            ))}
          </div>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:pt-14">
          {houseImages.map((image) => (
            <article key={image.src}>
              <ImageFrame
                image={image}
                className="aspect-[3/4]"
                sizes="(max-width: 768px) 100vw, 25vw"
              />
              <p className="mt-4 text-sm uppercase tracking-[0.2em] text-stone-300">
                {image.title}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
