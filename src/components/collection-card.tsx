"use client";

import { type PointerEvent, useState } from "react";
import Link from "next/link";
import { ImageFrame } from "@/components/image-frame";
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
        className={`transition-[transform,box-shadow] duration-500 ease-out ${isFeatured ? "group-hover:shadow-[0_24px_40px_rgba(29,25,21,0.2)]" : ""}`}
        style={isFeatured ? { transform: `rotateX(${tilt.x}deg) rotateY(${tilt.y}deg) translateZ(0)` } : undefined}
      >
        <Link
          href={`/collection/${collectionSlug(image)}`}
          className="block focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#7e271e]"
          aria-label={`View details for ${image.title}`}
        >
          <ImageFrame
            image={image}
            className="aspect-[4/5]"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            imageClassName="transition-transform duration-700 group-hover:scale-[1.035]"
          />
        </Link>
      </div>
      <div className="mt-5">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h3 className="font-serif text-2xl text-stone-950">{image.title}</h3>
            <p className="mt-1 max-w-sm text-sm italic leading-6 text-stone-600">{image.note}</p>
          </div>
          <p className="max-w-24 text-right text-[0.65rem] uppercase tracking-[0.18em] text-stone-500">{image.palette}</p>
        </div>
        <p className="mt-4 text-sm leading-6 text-stone-700">
          {image.description[0]}
          <br />
          {image.description[1]}
        </p>
        <Link
          href={`/collection/${collectionSlug(image)}`}
          className="mt-5 inline-flex text-xs font-medium uppercase tracking-[0.2em] text-[#7e271e] transition-opacity hover:opacity-65 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#7e271e]"
        >
          View piece <span aria-hidden="true" className="ml-2">→</span>
        </Link>
      </div>
    </article>
  );
}
