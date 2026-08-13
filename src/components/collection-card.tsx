"use client";

import { type PointerEvent, useState } from "react";
import Link from "next/link";
import { ImageFrame } from "@/components/image-frame";
import { Spotlight } from "@/components/ui/spotlight";
import { collectionSlug, type CollectionPiece } from "@/lib/collection";

export function CollectionCard({ image, index }: { image: CollectionPiece; index: number }) {
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const isFeatured = index === 0 || index === 3;

  const updateTilt = (event: PointerEvent<HTMLElement>) => {
    if (!isFeatured) return;
    const bounds = event.currentTarget.getBoundingClientRect();
    setTilt({
      x: ((event.clientY - bounds.top) / bounds.height - 0.5) * -5,
      y: ((event.clientX - bounds.left) / bounds.width - 0.5) * 5,
    });
  };

  return (
    <article
      className="group animate-[collection-rise_700ms_ease-out_both] [perspective:1100px]"
      style={{ animationDelay: `${180 + index * 90}ms` }}
      onPointerMove={updateTilt}
      onPointerLeave={() => setTilt({ x: 0, y: 0 })}
    >
      <div
        className="relative overflow-hidden rounded-[1.25rem] border border-stone-900/10 bg-[#e7dccd] p-3 shadow-[0_8px_28px_rgba(61,45,33,0.08)] transition-[background-color,transform,box-shadow] duration-500 ease-out group-hover:-translate-y-1 group-hover:bg-[#f7f0e6] group-hover:shadow-[0_18px_38px_rgba(61,45,33,0.16)] sm:p-4"
        style={isFeatured ? { transform: `rotateX(${tilt.x}deg) rotateY(${tilt.y}deg) translateZ(0)` } : undefined}
      >
        <Spotlight
          className="-top-24 left-1/2 z-10 w-[140%] opacity-0 transition-opacity duration-700 group-hover:opacity-100"
          fill="#d7b98e"
        />
        <Link
          href={`/collection/${collectionSlug(image)}`}
            className="block overflow-hidden rounded-[0.9rem] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#7e271e]"
          aria-label={`View details for ${image.title}`}
        >
          <ImageFrame
            image={image}
            className="aspect-[4/5]"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            imageClassName="brightness-[0.88] saturate-[0.82] transition-[filter,transform] duration-700 group-hover:brightness-105 group-hover:saturate-110 group-hover:scale-[1.035]"
          />
        </Link>
        <div className="relative z-10 px-1 pb-2 pt-5 sm:px-2 sm:pt-6">
          <div className="flex items-start justify-between gap-4">
            <div>
              <h3 className="font-serif text-[clamp(1.6rem,2vw,2.15rem)] leading-none text-stone-950">{image.title}</h3>
              <p className="mt-2 max-w-sm text-sm italic leading-[1.618] text-stone-700">{image.note}</p>
            </div>
            <p className="max-w-24 text-right text-[0.65rem] uppercase tracking-[0.18em] text-stone-600">{image.palette}</p>
          </div>
          <p className="mt-5 text-sm leading-[1.618] text-stone-800">
            {image.description[0]}
            <br />
            {image.description[1]}
          </p>
          <Link
            href={`/collection/${collectionSlug(image)}`}
            className="mt-6 inline-flex text-[0.68rem] font-medium uppercase tracking-[0.2em] text-[#7e271e] transition-opacity hover:opacity-65 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#7e271e]"
          >
            View piece <span aria-hidden="true" className="ml-2">→</span>
          </Link>
        </div>
      </div>
    </article>
  );
}
