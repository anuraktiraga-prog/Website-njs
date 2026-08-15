"use client";

import { type PointerEvent, useState } from "react";
import Link from "next/link";
import { ImageFrame } from "@/components/image-frame";
import { collectionSlug, type CollectionPiece } from "@/lib/collection";
import { trackEvent } from "@/lib/analytics";

function getDisplayName(title: string) {
  const match = title.match(/^(\d+)(?:\s+(.+))?$/);
  return match ? { number: match[1], name: match[2] } : { number: "", name: title };
}

export function CollectionCard({ image, index }: { image: CollectionPiece; index: number }) {
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const isFeatured = index === 0 || index === 3;
  const display = getDisplayName(image.title);
  const href = `/collection/${collectionSlug(image)}`;

  const updateTilt = (event: PointerEvent<HTMLElement>) => {
    if (!isFeatured || event.pointerType === "touch") return;
    const bounds = event.currentTarget.getBoundingClientRect();
    setTilt({
      x: ((event.clientY - bounds.top) / bounds.height - 0.5) * -3,
      y: ((event.clientX - bounds.left) / bounds.width - 0.5) * 3,
    });
  };

  return (
    <article
      className="group animate-[collection-rise_700ms_ease-out_both] [perspective:1100px]"
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
        className="block rounded-[0.55rem] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#7e271e]"
        style={isFeatured ? { transform: `rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)` } : undefined}
      >
        <div className="relative overflow-hidden rounded-[0.55rem] border border-stone-900/10 bg-[#e7dccd] p-2.5 shadow-[0_5px_18px_rgba(61,45,33,0.06)] transition-[background-color,transform,box-shadow] duration-500 ease-out group-hover:-translate-y-1 group-hover:bg-[#f7f0e6] group-hover:shadow-[0_14px_30px_rgba(61,45,33,0.12)] sm:p-3">
          <div className="overflow-hidden rounded-[0.35rem]">
            <ImageFrame
              image={image}
              className="aspect-[4/5]"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              imageClassName="brightness-[0.88] saturate-[0.82] transition-[filter,transform] duration-700 group-hover:brightness-105 group-hover:saturate-110 group-hover:scale-[1.035]"
            />
          </div>

          <div className="relative z-10 px-1 pb-1 pt-4 sm:px-2 sm:pt-5">
            <div className="flex items-start justify-between gap-4">
              <div className="min-w-0">
                <div className="flex items-baseline gap-3">
                  {display.number ? (
                    <span className="archive-index text-[#7e271e]">
                      <span>{display.number}</span>
                      <span className="geometry-line" aria-hidden="true" />
                    </span>
                  ) : null}
                  {display.name ? (
                    <h3 className="truncate font-serif text-[clamp(1.15rem,1.8vw,1.5rem)] leading-tight text-stone-950">
                      {display.name}
                    </h3>
                  ) : null}
                </div>
                <p className="mt-2 line-clamp-1 text-sm italic leading-6 text-stone-700">{image.note}</p>
              </div>
            </div>

            <div className="mt-4 flex items-center justify-between border-t border-stone-900/10 pt-3 text-[0.66rem] font-medium uppercase tracking-[0.18em] text-[#7e271e]">
              <span>View piece</span>
              <span aria-hidden="true" className="text-base leading-none transition-transform duration-300 group-hover:translate-x-1">→</span>
            </div>
          </div>
        </div>
      </Link>
    </article>
  );
}
