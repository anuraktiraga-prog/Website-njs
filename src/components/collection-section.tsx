import { ImageFrame } from "@/components/image-frame";
import { collectionImages } from "@/lib/collection";

export function CollectionSection() {
  return (
    <section id="collection" className="section-shell">
      <div className="section-heading">
        <p className="eyebrow">Current selection</p>
        <h2 className="section-title">Drapes with presence, made to be seen slowly.</h2>
      </div>

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {collectionImages.map((image) => (
          <article key={image.src} className="group">
            <ImageFrame
              image={image}
              className="aspect-[3/4]"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
              imageClassName="transition-transform duration-700 group-hover:scale-[1.035]"
            />
            <div className="mt-4 flex items-start justify-between gap-4">
              <div>
                <h3 className="font-serif text-2xl text-stone-950">
                  {image.title}
                </h3>
                <p className="mt-1 text-sm leading-6 text-stone-600">
                  {image.note}
                </p>
              </div>
              <p className="max-w-24 text-right text-[0.65rem] uppercase tracking-[0.18em] text-stone-500">
                {image.palette}
              </p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
