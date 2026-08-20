"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { useReducedMotion } from "motion/react";
import { campaignImages, type BrandImage } from "@/lib/collection";

const fallbackImages = campaignImages.slice(0, 4);
const focalPoints = ["50% 24%", "50% 18%", "50% 20%", "50% 22%"];

type CollectionMarqueeProps = {
  images?: BrandImage[];
  eyebrow?: string;
  title?: string;
  copy?: string;
};

export function CollectionMarquee({
  images = fallbackImages,
  eyebrow = "01 Archive",
  title = "EHSAAS",
  copy = "A study of colour, texture and memory.",
}: CollectionMarqueeProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const reduceMotion = useReducedMotion();
  const editorialImages = images.length ? images : fallbackImages;
  const imageCount = editorialImages.length;

  useEffect(() => {
    if (reduceMotion) return;

    const interval = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % imageCount);
    }, 7200);

    return () => window.clearInterval(interval);
  }, [imageCount, reduceMotion]);

  return (
    <section className="relative isolate min-h-[clamp(34rem,68svh,48rem)] overflow-hidden border-b border-stone-900/10 bg-[#1d1915]">
      <div className="absolute inset-0" aria-live="polite">
        {editorialImages.map((image, index) => (
          <div
            key={image.src}
            className={`absolute inset-0 transition-opacity duration-[1800ms] ease-in-out motion-reduce:transition-none ${index === activeIndex ? "opacity-100" : "opacity-0"}`}
            aria-hidden={index !== activeIndex}
          >
            <Image
              src={image.src}
              alt={index === activeIndex ? image.alt : ""}
              fill
              priority={index === 0}
              sizes="100vw"
              className={`object-cover transition-transform duration-[7200ms] ease-linear motion-reduce:transition-none ${
                index === activeIndex ? "scale-110" : "scale-100"
              }`}
              style={{ objectPosition: focalPoints[index] ?? "50% 50%" }}
            />
          </div>
        ))}
      </div>

      <div className="pointer-events-none absolute inset-0 bg-stone-950/32" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[62%] bg-gradient-to-t from-[#7e271e]/55 via-[#7e271e]/22 to-transparent" />

      <div className="relative z-10 mx-auto flex min-h-[clamp(34rem,68svh,48rem)] max-w-[90rem] flex-col justify-end px-5 pb-10 sm:px-8 sm:pb-14 lg:px-12 lg:pb-16">
        <div className="flex items-end justify-between gap-8">
          <div className="max-w-xl">
            <div className="archive-index text-[#f4dfc7]">
              <span>Collection {eyebrow}</span>
              <span className="geometry-line" aria-hidden="true" />
              <span>{title}</span>
            </div>
            <h1 className="type-page-title mt-3 max-w-2xl font-serif text-[#fff7ec]">{title}</h1>
            <p className="type-body mt-5 max-w-md text-[#f4dfc7]/90">
              {copy}
            </p>
          </div>

          <p className="hidden shrink-0 pb-1 text-[0.68rem] uppercase tracking-[0.24em] text-[#f4dfc7]/80 sm:block">
            {String(activeIndex + 1).padStart(2, "0")} / {String(editorialImages.length).padStart(2, "0")}
          </p>
        </div>

        <Image
          src="/logos/anurrakti-knot-red.png"
          alt=""
          width={661}
          height={609}
          aria-hidden="true"
          className="pointer-events-none absolute right-5 top-8 h-14 w-14 object-contain opacity-55 [clip-path:inset(0_0_42%_0)] sm:right-10 sm:top-12 sm:h-20 sm:w-20"
        />
      </div>
    </section>
  );
}
