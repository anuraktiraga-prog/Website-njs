"use client";

import Image from "next/image";
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
  const display = getDisplayName(image.title);
  const href = productPath(image);
  const isFeaturedCard = variant === "featured";
  const defaultImageMetadata = image.detailImageMetadata?.find(
    (candidate) => candidate.imageViewType === "product" && candidate.alt.toLowerCase().includes("complete"),
  ) ?? image.detailImageMetadata?.find((candidate) => candidate.imageViewType === "detail");
  const defaultImage = defaultImageMetadata
    ? {
        ...image,
        src: defaultImageMetadata.src,
        alt: defaultImageMetadata.alt,
        imageViewType: defaultImageMetadata.imageViewType,
      }
    : image;

  return (
    <article
      className="group animate-[collection-rise_700ms_ease-out_both]"
      style={{ animationDelay: `${180 + index * 90}ms` }}
    >
      <Link
        href={href}
        aria-label={`View details for ${image.title}`}
        onClick={() => {
          trackEvent("collection_product_card_open", { product: image.title });
          trackEvent("archive_product_interaction", { product: image.title });
        }}
        className="block focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#7e271e]"
      >
        <figure>
          <div className="relative">
            <ImageFrame
              image={defaultImage}
              className="media-portrait"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              imageClassName="object-contain transition-opacity duration-700 group-hover:opacity-0 motion-reduce:transition-none"
              noBleed
            />
            <Image
              src={image.src}
              alt=""
              fill
              aria-hidden="true"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              className="pointer-events-none object-cover opacity-0 transition-[opacity,transform] duration-700 ease-out group-hover:scale-[1.025] group-hover:opacity-100 motion-reduce:transition-none"
            />
          </div>

          <figcaption className={`relative z-10 px-1 pb-1 pt-4 sm:px-2 sm:pt-5 ${isFeaturedCard ? "sm:pt-6" : ""}`}>
            <div className="flex items-start justify-between gap-4">
              <div className="min-w-0">
                <div className="flex items-baseline gap-3">
                  {display.number ? (
                    <span className={`archive-index ${isFeaturedCard ? "text-stone-600" : "text-[#7e271e]"}`}>
                      <span>{display.number}</span>
                      <span className="geometry-line" aria-hidden="true" />
                    </span>
                  ) : null}
                  {display.name ? (
                    <h3 className={`truncate font-serif leading-tight text-stone-950 ${isFeaturedCard ? "text-[clamp(1.05rem,1.5vw,1.3rem)]" : "text-[clamp(1.15rem,1.8vw,1.5rem)]"}`}>
                      {display.name}
                    </h3>
                  ) : null}
                </div>
                <p className="mt-2 line-clamp-1 text-sm italic leading-6 text-stone-700">{image.note}</p>
              </div>
            </div>

            <footer className={`mt-4 flex items-center justify-between border-t pt-3 type-label font-medium ${isFeaturedCard ? "border-stone-900/15 text-stone-600" : "border-stone-900/10 text-[#7e271e]"}`}>
              <span>View piece</span>
              <span aria-hidden="true" className="text-base leading-none transition-transform duration-300 group-hover:translate-x-1">→</span>
            </footer>
          </figcaption>
        </figure>
      </Link>
    </article>
  );
}
