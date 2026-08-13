"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export type ProductGalleryView = {
  src: string;
  alt: string;
  label: string;
  position: string;
  zoom?: number;
};

export function ProductGallery({ views }: { views: ProductGalleryView[] }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const carouselRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (lightboxIndex === null) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setLightboxIndex(null);
    };
    window.addEventListener("keydown", closeOnEscape);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", closeOnEscape);
    };
  }, [lightboxIndex]);

  const updateActiveSlide = () => {
    const carousel = carouselRef.current;
    if (!carousel) return;
    setActiveIndex(Math.round(carousel.scrollLeft / carousel.clientWidth));
  };

  const previous = () => {
    setLightboxIndex((current) => current === null ? null : (current - 1 + views.length) % views.length);
  };

  const next = () => {
    setLightboxIndex((current) => current === null ? null : (current + 1) % views.length);
  };

  return (
    <>
      <div
        ref={carouselRef}
        onScroll={updateActiveSlide}
        className="-mx-5 flex snap-x snap-mandatory overflow-x-auto px-5 pb-2 [scrollbar-width:none] sm:hidden"
      >
        {views.map((view, index) => (
          <button
            key={view.label}
            type="button"
            onClick={() => setLightboxIndex(index)}
            className="relative aspect-[4/5] w-full shrink-0 snap-center overflow-hidden bg-stone-200 text-left focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#7e271e]"
            aria-label={`Open ${view.label} in full screen`}
          >
            <Image src={view.src} alt={view.alt} fill sizes="100vw" preload={index === 0} className="object-cover" style={{ objectPosition: view.position, transform: `scale(${view.zoom ?? 1})` }} />
            <span className="absolute bottom-4 left-4 bg-[#f7f1e8]/90 px-3 py-2 text-[0.62rem] uppercase tracking-[0.18em] text-stone-800">{view.label}</span>
          </button>
        ))}
      </div>

      <div className="mt-4 flex items-center justify-center gap-2 sm:hidden" aria-label="Gallery slides">
        {views.map((view, index) => (
          <span key={view.label} className={`h-1.5 rounded-full transition-all ${index === activeIndex ? "w-7 bg-[#7e271e]" : "w-1.5 bg-stone-300"}`} />
        ))}
      </div>

      <div className="hidden gap-4 sm:grid sm:grid-cols-[minmax(0,1.9fr)_minmax(11rem,1fr)] sm:grid-rows-3 sm:aspect-[4/5]">
        {views.slice(0, 4).map((view, index) => (
          <button
            key={view.label}
            type="button"
            onClick={() => setLightboxIndex(index)}
            className={`group relative min-h-0 overflow-hidden bg-stone-200 text-left focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#7e271e] ${index === 0 ? "sm:row-span-3" : ""}`}
            aria-label={`Open ${view.label} in full screen`}
          >
            <Image src={view.src} alt={view.alt} fill sizes="(max-width: 1023px) 50vw, 40vw" preload={index === 0} className="object-cover transition-transform duration-700 group-hover:scale-[1.02]" style={{ objectPosition: view.position, transform: `scale(${view.zoom ?? 1})` }} />
            <span className="absolute bottom-4 left-4 bg-[#f7f1e8]/90 px-3 py-2 text-[0.62rem] uppercase tracking-[0.18em] text-stone-800">{view.label}</span>
          </button>
        ))}
      </div>

      {lightboxIndex !== null ? (
        <div className="fixed inset-0 z-[100] flex min-h-[100svh] items-center justify-center bg-stone-950/95 p-4 sm:p-8" role="dialog" aria-modal="true" aria-label="Full screen product image">
          <button type="button" onClick={() => setLightboxIndex(null)} className="absolute right-5 top-5 z-10 px-3 py-2 text-xs uppercase tracking-[0.18em] text-[#fff5df] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#fff5df] sm:right-8 sm:top-8" aria-label="Close full screen image">
            Close <span aria-hidden="true" className="ml-1 text-lg leading-none">×</span>
          </button>
          <button type="button" onClick={previous} className="absolute left-3 top-1/2 z-10 -translate-y-1/2 px-3 py-4 text-3xl text-[#fff5df] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#fff5df] sm:left-8" aria-label="Previous image">‹</button>
          <figure className="relative h-[82svh] w-full max-w-5xl">
            <Image src={views[lightboxIndex].src} alt={views[lightboxIndex].alt} fill sizes="100vw" className="object-contain" style={{ objectPosition: views[lightboxIndex].position }} />
            <figcaption className="absolute bottom-0 left-1/2 -translate-x-1/2 whitespace-nowrap bg-stone-950/70 px-3 py-2 text-[0.62rem] uppercase tracking-[0.18em] text-[#fff5df]">{views[lightboxIndex].label} · {lightboxIndex + 1} / {views.length}</figcaption>
          </figure>
          <button type="button" onClick={next} className="absolute right-3 top-1/2 z-10 -translate-y-1/2 px-3 py-4 text-3xl text-[#fff5df] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#fff5df] sm:right-8" aria-label="Next image">›</button>
        </div>
      ) : null}
    </>
  );
}
