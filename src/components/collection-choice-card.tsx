"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { useReducedMotion } from "motion/react";
import { collectionPath, type CollectionArchive } from "@/lib/collection";

export function CollectionChoiceCard({
  collection,
  index,
}: {
  collection: CollectionArchive;
  index: number;
}) {
  const reduceMotion = useReducedMotion();
  const [activeIndex, setActiveIndex] = useState(0);
  const slides = useMemo(
    () =>
      collection.pieces.flatMap((piece) =>
        (piece.detailImageMetadata ?? []).map((image) => ({
          src: image.src,
          alt: image.alt,
        })),
      ),
    [collection.pieces],
  );
  const visibleSlides = slides.length ? slides : [{ src: collection.pieces[0].src, alt: collection.pieces[0].alt }];

  useEffect(() => {
    if (reduceMotion || visibleSlides.length < 2) return;

    const interval = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % visibleSlides.length);
    }, 2600 + index * 350);

    return () => window.clearInterval(interval);
  }, [index, reduceMotion, visibleSlides.length]);

  return (
    <Link
      href={collectionPath(collection)}
      className="group relative isolate flex min-h-[31rem] overflow-hidden bg-stone-950 text-white shadow-[0_18px_42px_rgba(29,25,21,0.16)] transition-[transform,box-shadow] duration-500 hover:-translate-y-1 hover:shadow-[0_22px_54px_rgba(29,25,21,0.22)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#7e271e] sm:min-h-[36rem] md:border md:border-stone-900/10 lg:min-h-[42rem]"
      aria-label={`Discover the ${collection.name} collection`}
    >
      <div className="absolute inset-0" aria-hidden="true">
        {visibleSlides.map((slide, slideIndex) => (
          <Image
            key={slide.src}
            src={slide.src}
            alt=""
            fill
            sizes="(max-width: 1023px) 100vw, 45vw"
            priority={index === 0 && slideIndex === 0}
            className={`object-cover transition-[opacity,transform] duration-[1400ms] ease-out group-hover:scale-[1.025] motion-reduce:transition-none ${
              slideIndex === activeIndex ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}
      </div>

      <div className="absolute inset-0 bg-stone-950/40 sm:bg-stone-950/48" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#7e271e]/72 via-stone-950/32 to-stone-950/10 sm:from-stone-950/88" />
      <div className="absolute inset-0 bg-gradient-to-r from-stone-950/30 via-transparent to-transparent sm:from-stone-950/48" />

      <div className="relative z-10 flex min-h-full w-full flex-col justify-end p-6 pb-8 sm:p-9 lg:p-10">
        <p className="text-[0.72rem] font-medium uppercase tracking-[0.24em] text-[#f4dfc7]">
          Collection {collection.number}
        </p>
        <h2 className="mt-3 font-serif text-[clamp(3.45rem,18vw,4.85rem)] leading-[0.86] tracking-[-0.055em] text-[#fff7ec] sm:mt-4 sm:text-[clamp(4.2rem,8.5vw,8rem)]">
          {collection.name}
        </h2>
        <p className="mt-4 max-w-[18rem] text-[0.98rem] leading-7 text-stone-100 sm:mt-5 sm:max-w-md sm:text-lg">
          {collection.note}
        </p>
        <p className="mt-7 max-w-[13rem] text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-[#f4dfc7] sm:mt-9 sm:max-w-none sm:text-xs">
          Discover the collection <span aria-hidden="true">→</span>
        </p>
      </div>

      <div className="absolute bottom-8 right-6 z-10 flex gap-1.5 sm:bottom-6" aria-hidden="true">
        {visibleSlides.slice(0, 6).map((slide, slideIndex) => (
          <span
            key={slide.src}
            className={`h-1.5 rounded-full transition-all duration-500 ${
              slideIndex === activeIndex ? "w-7 bg-[#fff7ec]" : "w-1.5 bg-white/45"
            }`}
          />
        ))}
      </div>
    </Link>
  );
}
