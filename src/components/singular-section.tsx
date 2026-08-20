import Image from "next/image";
import { campaignImages } from "@/lib/collection";

export function SingularSection() {
  const images = campaignImages.slice(1, 3);

  return (
    <section className="border-y border-stone-900/10 bg-[#211d19] text-stone-100">
      <div className="mx-auto grid max-w-[90rem] gap-10 px-5 py-16 sm:px-8 sm:py-20 lg:grid-cols-[0.85fr_1.15fr] lg:items-center lg:gap-20 lg:px-12 lg:py-24">
        <div className="max-w-xl">
          <p className="eyebrow text-stone-300">Chosen by feeling</p>
          <h2 className="section-title mt-5 max-w-lg !text-[#f6f0e7]">
            Wear what speaks to your soul.
          </h2>
          <p className="type-body mt-6 max-w-lg text-stone-300">
            The right piece should feel instinctive—an expression of who you
            are, carried with confidence and remembered with emotion.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-3 sm:gap-5">
          {images.map((image, index) => (
            <figure
              key={image.src}
              className={`relative overflow-hidden bg-stone-900 ${index === 0 ? "aspect-[4/5]" : "mt-10 aspect-[4/5] sm:mt-16"}`}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                sizes="(max-width: 1023px) 50vw, 30vw"
                className="object-cover"
              />
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
