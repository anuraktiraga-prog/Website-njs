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
      className="group relative isolate flex min-h-[34rem] overflow-hidden border border-stone-900/10 bg-stone-950 text-white transition-[transform,box-shadow] duration-500 hover:-translate-y-1 hover:shadow-[0_22px_54px_rgba(29,25,21,0.22)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#7e271e] lg:min-h-[42rem]"
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

      <div className="absolute inset-0 bg-stone-950/48" />
      <div className="absolute inset-0 bg-gradient-to-t from-stone-950/88 via-stone-950/36 to-stone-950/12" />
      <div className="absolute inset-0 bg-gradient-to-r from-stone-950/48 via-transparent to-transparent" />

      <div className="relative z-10 flex min-h-full w-full flex-col justify-end p-7 sm:p-9 lg:p-10">
        <p className="text-[0.72rem] font-medium uppercase tracking-[0.24em] text-[#f4dfc7]">
          Collection {collection.number}
        </p>
        <h2 className="mt-4 font-serif text-[clamp(4.2rem,8.5vw,8rem)] leading-[0.85] tracking-[-0.055em] text-[#fff7ec]">
          {collection.name}
        </h2>
        <p className="mt-5 max-w-md text-base leading-7 text-stone-100 sm:text-lg">
          {collection.note}
        </p>
        <p className="mt-9 text-xs font-semibold uppercase tracking-[0.2em] text-[#f4dfc7]">
          Discover the collection <span aria-hidden="true">→</span>
        </p>
      </div>

      <div className="absolute bottom-6 right-6 z-10 flex gap-1.5" aria-hidden="true">
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
