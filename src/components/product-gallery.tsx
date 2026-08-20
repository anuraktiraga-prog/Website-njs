"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { trackEvent } from "@/lib/analytics";

export type ProductGalleryView = {
  src: string;
  alt: string;
  label: string;
  position: string;
  fit?: "cover" | "contain";
  imageViewType?: "product" | "detail";
};

export function ProductGallery({
  views,
  desktopClassName = "",
}: {
  views: ProductGalleryView[];
  desktopClassName?: string;
}) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [isZoomed, setIsZoomed] = useState(false);
  const carouselRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (lightboxIndex === null) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeButtonRef.current?.focus();
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setLightboxIndex(null);
    };
    window.addEventListener("keydown", closeOnEscape);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", closeOnEscape);
    };
  }, [lightboxIndex]);

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
    setIsZoomed(false);
    trackEvent("product_image_fullscreen_open", { image_view: views[index].imageViewType ?? "product" });
  };

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
            onClick={() => openLightbox(index)}
            className="group relative aspect-[4/5] w-full shrink-0 snap-center cursor-zoom-in overflow-hidden bg-transparent text-left focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#7e271e]"
            aria-label={`Open ${view.label} in full screen`}
          >
            <Image src={view.src} alt={view.alt} fill sizes="100vw" preload={index === 0} className={`${view.fit === "contain" ? "object-contain" : "object-cover group-hover:scale-[1.025]"} transition-transform duration-700 ease-out motion-reduce:transition-none`} style={{ objectPosition: view.position }} />
            <span className="pointer-events-none absolute inset-x-3 bottom-3 translate-y-2 bg-stone-950/75 px-3 py-2 text-center text-[0.65rem] uppercase tracking-[0.18em] text-[#fff5df] opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100 group-focus-visible:translate-y-0 group-focus-visible:opacity-100 motion-reduce:transition-none">Open full image</span>
          </button>
        ))}
      </div>

      <div className="mt-4 flex items-center justify-center gap-2 sm:hidden" aria-label="Gallery slides">
        {views.map((view, index) => (
          <span key={view.label} className={`h-1.5 rounded-full transition-all ${index === activeIndex ? "w-7 bg-[#7e271e]" : "w-1.5 bg-stone-300"}`} />
        ))}
      </div>

      <div className={`hidden gap-6 sm:flex sm:h-[min(68svh,42rem)] sm:items-stretch ${desktopClassName}`}>
        {views.slice(0, 1).map((view, index) => (
          <button
            key={view.label}
            type="button"
            onClick={() => openLightbox(index)}
            className="group relative h-full aspect-[4/5] cursor-zoom-in overflow-hidden bg-transparent text-left focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#7e271e]"
            aria-label={`Open ${view.label} in full screen`}
          >
            <Image src={view.src} alt={view.alt} fill sizes="(max-width: 1023px) 50vw, 40vw" preload={index === 0} className={`${view.fit === "contain" ? "object-contain" : "object-cover group-hover:scale-[1.035]"} transition-transform duration-700 ease-out motion-reduce:transition-none`} style={{ objectPosition: view.position }} />
            <span className="pointer-events-none absolute inset-x-4 bottom-4 translate-y-2 bg-stone-950/75 px-3 py-2 text-center text-[0.65rem] uppercase tracking-[0.18em] text-[#fff5df] opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100 group-focus-visible:translate-y-0 group-focus-visible:opacity-100 motion-reduce:transition-none">Open full image</span>
          </button>
        ))}
        <div className="flex h-full flex-col gap-6">
          {views.slice(1, 4).map((view, index) => (
            <button
              key={view.label}
              type="button"
              onClick={() => openLightbox(index + 1)}
              className="group relative aspect-[4/5] h-[calc((100%-3rem)/3)] cursor-zoom-in overflow-hidden bg-transparent text-left focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#7e271e]"
              aria-label={`Open ${view.label} in full screen`}
            >
              <Image src={view.src} alt={view.alt} fill sizes="(max-width: 1023px) 28vw, 14vw" className={`${view.fit === "contain" ? "object-contain" : "object-cover group-hover:scale-[1.035]"} transition-transform duration-700 ease-out motion-reduce:transition-none`} style={{ objectPosition: view.position }} />
              <span className="pointer-events-none absolute inset-x-4 bottom-4 translate-y-2 bg-stone-950/75 px-3 py-2 text-center text-[0.65rem] uppercase tracking-[0.18em] text-[#fff5df] opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100 group-focus-visible:translate-y-0 group-focus-visible:opacity-100 motion-reduce:transition-none">Open full image</span>
            </button>
          ))}
        </div>
      </div>

      {lightboxIndex !== null ? (
        <div className="fixed inset-0 z-[100] flex min-h-[100svh] items-center justify-center bg-stone-950/95 p-4 sm:p-8" role="dialog" aria-modal="true" aria-label="Full screen product image">
          <button ref={closeButtonRef} type="button" onClick={() => setLightboxIndex(null)} className="absolute right-5 top-5 z-10 min-h-11 px-3 py-2 text-xs uppercase tracking-[0.18em] text-[#fff5df] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#fff5df] sm:right-8 sm:top-8" aria-label="Close full screen image">
            Close <span aria-hidden="true" className="ml-1 text-lg leading-none">×</span>
          </button>
          <button type="button" onClick={previous} className="absolute left-3 top-1/2 z-10 -translate-y-1/2 px-3 py-4 text-3xl text-[#fff5df] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#fff5df] sm:left-8" aria-label="Previous image">‹</button>
          <figure className="relative h-[88svh] w-[90vw] max-w-6xl overflow-auto [touch-action:pinch-zoom]">
            <button type="button" onClick={() => setIsZoomed((current) => !current)} className="absolute inset-0 block cursor-zoom-in focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#fff5df]" aria-label={isZoomed ? "Return to full image" : "Zoom image"}>
              <Image src={views[lightboxIndex].src} alt={views[lightboxIndex].alt} fill sizes="90vw" className={`object-contain transition-transform duration-300 motion-reduce:transition-none ${isZoomed ? "scale-150 cursor-zoom-out" : ""}`} />
            </button>
          </figure>
          <button type="button" onClick={next} className="absolute right-3 top-1/2 z-10 -translate-y-1/2 px-3 py-4 text-3xl text-[#fff5df] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#fff5df] sm:right-8" aria-label="Next image">›</button>
        </div>
      ) : null}
    </>
  );
}
