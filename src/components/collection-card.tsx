"use client";

import { type PointerEvent, useEffect, useRef, useState } from "react";
import Link from "next/link";
import { ImageFrame } from "@/components/image-frame";
import { productPath, type CollectionPiece } from "@/lib/collection";
import { trackEvent } from "@/lib/analytics";

function getDisplayName(title: string) {
  const match = title.match(/^(\d+)(?:\s+(.+))?$/);
  return match ? { number: match[1], name: match[2] } : { number: "", name: title };
}

export function CollectionCard({
  image,
  index,
  variant = "archive",
}: {
  image: CollectionPiece;
  index: number;
  variant?: "archive" | "featured";
}) {
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [isMobileInView, setIsMobileInView] = useState(false);
  const cardRef = useRef<HTMLElement | null>(null);
  const isFeatured = index === 0 || index === 3;
  const display = getDisplayName(image.title);
  const href = productPath(image);
  const isFeaturedCard = variant === "featured";
  const isArchiveCard = variant === "archive";

  const updateTilt = (event: PointerEvent<HTMLElement>) => {
    if (!isFeatured || event.pointerType === "touch") return;
    const bounds = event.currentTarget.getBoundingClientRect();
    setTilt({
      x: ((event.clientY - bounds.top) / bounds.height - 0.5) * -3,
      y: ((event.clientX - bounds.left) / bounds.width - 0.5) * 3,
    });
  };

  useEffect(() => {
    const card = cardRef.current;
    if (!card || !("IntersectionObserver" in window)) return;

    const mobileQuery = window.matchMedia("(max-width: 639px)");
    if (!mobileQuery.matches) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsMobileInView(entry.isIntersecting && entry.intersectionRatio >= 0.5);
      },
      { threshold: [0, 0.5, 0.72] },
    );

    observer.observe(card);

    return () => observer.disconnect();
  }, []);

  return (
    <article
      ref={cardRef}
      className={`group animate-[collection-rise_700ms_ease-out_both] [perspective:1100px] ${
        isArchiveCard ? "max-sm:h-full max-sm:min-h-full max-sm:flex-none max-sm:snap-start max-sm:snap-always" : ""
      }`}
      style={{ animationDelay: `${180 + index * 90}ms` }}
      onPointerMove={updateTilt}
      onPointerLeave={() => setTilt({ x: 0, y: 0 })}
    >
      <Link
        href={href}
        aria-label={`View details for ${image.title}`}
        onClick={() => {
          trackEvent("collection_product_card_open", { product: image.title });
          trackEvent("archive_product_interaction", { product: image.title });
        }}
        className={`block rounded-[0.55rem] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#7e271e] ${
          isArchiveCard ? "max-sm:h-full max-sm:rounded-none" : ""
        }`}
        style={isFeatured ? { transform: `rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)` } : undefined}
      >
        <div className={`relative overflow-hidden border transition-[background-color,transform,box-shadow,opacity] duration-500 ease-out group-hover:-translate-y-1 ${
          isMobileInView
            ? "max-sm:-translate-y-1 max-sm:bg-[#fbf6ef] max-sm:opacity-100 max-sm:shadow-[0_16px_34px_rgba(61,45,33,0.14)]"
            : "max-sm:opacity-72 max-sm:shadow-none"
        } ${isFeaturedCard ? "rounded-none border-stone-900/15 bg-[#f3eadf] p-2 shadow-[0_8px_24px_rgba(61,45,33,0.05)] group-hover:bg-[#fbf6ef] group-hover:shadow-[0_16px_34px_rgba(61,45,33,0.12)] sm:p-2.5" : "rounded-[0.55rem] border-stone-900/10 bg-[#e7dccd] p-2.5 shadow-[0_5px_18px_rgba(61,45,33,0.06)] group-hover:bg-[#f7f0e6] group-hover:shadow-[0_14px_30px_rgba(61,45,33,0.12)] sm:p-3"} ${
          isArchiveCard ? "max-sm:h-full max-sm:rounded-none max-sm:border-0 max-sm:bg-stone-950 max-sm:p-0 max-sm:shadow-none max-sm:group-hover:translate-y-0" : ""
        }`}>
          <div className={`${isFeaturedCard ? "overflow-hidden" : "overflow-hidden rounded-[0.35rem]"} ${
            isArchiveCard ? "max-sm:absolute max-sm:inset-0 max-sm:rounded-none" : ""
          }`}>
            <ImageFrame
              image={image}
              className={`${isFeaturedCard ? "aspect-[3/4]" : "aspect-[4/5]"} ${isArchiveCard ? "max-sm:h-full max-sm:aspect-auto max-sm:bg-stone-950" : ""}`}
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              imageClassName={`object-contain transition-[filter] duration-700 group-hover:brightness-105 group-hover:saturate-110 ${
                isMobileInView
                  ? "max-sm:brightness-105 max-sm:saturate-110"
                  : "max-sm:brightness-[0.74] max-sm:saturate-[0.64]"
              } ${isArchiveCard ? "max-sm:object-contain" : ""} sm:brightness-[0.88] sm:saturate-[0.82]`}
              noBleed
            />
          </div>

          {isArchiveCard ? (
            <>
              <div className="pointer-events-none absolute inset-0 hidden bg-gradient-to-t from-[#0d0b09] via-[#0d0b09]/34 to-transparent max-sm:block" />
              <div className="pointer-events-none absolute inset-x-0 bottom-0 hidden h-1/2 bg-gradient-to-t from-[#7e271e]/58 via-[#7e271e]/16 to-transparent max-sm:block" />
              <p className="absolute right-5 top-5 z-10 hidden text-[0.66rem] uppercase tracking-[0.24em] text-[#fff7ec]/70 max-sm:block">
                {String(index + 1).padStart(2, "0")} / 06
              </p>
            </>
          ) : null}

          <div className={`relative z-10 px-1 pb-1 pt-4 sm:px-2 sm:pt-5 ${isFeaturedCard ? "sm:pt-6" : ""} ${
            isArchiveCard ? "max-sm:absolute max-sm:inset-x-0 max-sm:bottom-0 max-sm:px-6 max-sm:pb-[calc(2rem+env(safe-area-inset-bottom))] max-sm:pt-16" : ""
          }`}>
            <div className="flex items-start justify-between gap-4">
              <div className="min-w-0">
                <div className="flex items-baseline gap-3">
                  {display.number ? (
                    <span className={`archive-index ${isFeaturedCard ? "text-stone-500" : "text-[#7e271e]"} ${isArchiveCard ? "max-sm:text-[#f4dfc7]" : ""}`}>
                      <span>{display.number}</span>
                      <span className="geometry-line" aria-hidden="true" />
                    </span>
                  ) : null}
                  {isArchiveCard ? (
                    <h3 className="hidden font-serif text-[clamp(3.2rem,18vw,4.8rem)] leading-[0.88] tracking-[-0.055em] text-[#fff7ec] max-sm:block">
                      {image.collectionName} {image.title}
                    </h3>
                  ) : null}
                  {display.name ? (
                    <h3 className={`truncate font-serif leading-tight text-stone-950 ${isFeaturedCard ? "text-[clamp(1.05rem,1.5vw,1.3rem)]" : "text-[clamp(1.15rem,1.8vw,1.5rem)]"} ${
                      isArchiveCard ? "max-sm:hidden" : ""
                    }`}>
                      {display.name}
                    </h3>
                  ) : null}
                </div>
                <p className={`mt-2 line-clamp-1 text-sm italic leading-6 text-stone-700 ${
                  isArchiveCard ? "max-sm:mt-4 max-sm:line-clamp-2 max-sm:max-w-[19rem] max-sm:text-base max-sm:not-italic max-sm:leading-7 max-sm:text-stone-100" : ""
                }`}>{image.note}</p>
              </div>
            </div>

            <div className={`mt-4 flex items-center justify-between border-t pt-3 text-[0.66rem] font-medium uppercase tracking-[0.18em] ${isFeaturedCard ? "border-stone-900/15 text-stone-600" : "border-stone-900/10 text-[#7e271e]"} ${
              isArchiveCard ? "max-sm:mt-7 max-sm:border-[#fff7ec]/22 max-sm:text-[#f4dfc7]" : ""
            }`}>
              <span>View piece</span>
              <span aria-hidden="true" className="text-base leading-none transition-transform duration-300 group-hover:translate-x-1">→</span>
            </div>
          </div>
        </div>
      </Link>
    </article>
  );
}
