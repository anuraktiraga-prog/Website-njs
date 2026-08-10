import { ImageFrame } from "@/components/image-frame";
import { collectionImages } from "@/lib/collection";

export function HeroSection() {
  const [heroImage, secondaryImage] = collectionImages;

  return (
    <section
      id="top"
      className="relative min-h-screen overflow-hidden border-b border-stone-950/10 pt-16"
    >
      <div className="mx-auto grid max-w-7xl gap-8 px-5 py-8 sm:px-8 lg:min-h-[calc(100vh-4rem)] lg:grid-cols-[0.82fr_1.18fr] lg:items-end lg:py-10">
        <div className="relative z-10 flex max-w-xl flex-col justify-end pb-2 lg:min-h-[76vh]">
          <p className="mb-5 text-xs uppercase tracking-[0.3em] text-stone-600">
            Textile-led occasion wear
          </p>
          <h1 className="font-serif text-6xl leading-[0.92] text-stone-950 sm:text-7xl lg:text-8xl">
            A Jendra
          </h1>
          <p className="mt-6 max-w-md text-base leading-7 text-stone-700 sm:text-lg">
            Sculptural drapes, intricate borders and richly composed Indian
            textiles for intimate celebrations and statement dressing.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a className="btn-primary" href="#collection">
              View collection
            </a>
            <a className="btn-secondary" href="#viewing">
              Book private viewing
            </a>
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-[0.72fr_1fr] lg:items-end">
          <ImageFrame
            image={secondaryImage}
            className="hidden aspect-[3/4] sm:block"
            sizes="(max-width: 1024px) 38vw, 27vw"
            imageClassName="object-[52%_48%]"
          />
          <ImageFrame
            image={heroImage}
            className="aspect-[4/5] min-h-[520px] lg:min-h-[76vh]"
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 62vw, 48vw"
            priority
            imageClassName="object-[50%_45%]"
          />
        </div>
      </div>
    </section>
  );
}
