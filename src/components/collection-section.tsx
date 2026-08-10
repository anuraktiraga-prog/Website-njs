import { ImageFrame } from "@/components/image-frame";
import { collectionImages } from "@/lib/collection";

export function CollectionSection() {
  return (
    <section id="collection" className="section-shell">
      <div className="section-heading">
        <p className="eyebrow">01 EHSAAS</p>
        <div>
          <h2 className="section-title">An Ode to Timeless Elegance.</h2>
          <p className="mt-6 max-w-2xl text-base leading-7 text-stone-700">
            Explore the House edit of distinctive drapes. Each saree is shown
            without a model, allowing textile, colour and craft to take centre
            stage.
          </p>
        </div>
      </div>

      <div className="grid gap-x-5 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
        {collectionImages.map((image) => (
          <article key={image.src} className="group">
            <ImageFrame
              image={image}
              className="aspect-[4/5]"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              imageClassName="transition-transform duration-700 group-hover:scale-[1.035]"
            />
            <div className="mt-5">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="font-serif text-2xl text-stone-950">
                    {image.title}
                  </h3>
                  <p className="mt-1 max-w-sm text-sm italic leading-6 text-stone-600">
                    {image.note}
                  </p>
                </div>
                <p className="max-w-24 text-right text-[0.65rem] uppercase tracking-[0.18em] text-stone-500">
                  {image.palette}
                </p>
              </div>
              <p className="mt-4 text-sm leading-6 text-stone-700">
                {image.description[0]}
                <br />
                {image.description[1]}
              </p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
