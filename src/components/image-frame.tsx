import Image from "next/image";
import type { CollectionImage } from "@/lib/collection";

type ImageFrameProps = {
  image: CollectionImage;
  className?: string;
  imageClassName?: string;
  priority?: boolean;
  sizes: string;
};

export function ImageFrame({
  image,
  className = "",
  imageClassName = "",
  priority = false,
  sizes,
}: ImageFrameProps) {
  return (
    <figure className={`overflow-hidden bg-stone-200 ${className}`}>
      <Image
        src={image.src}
        alt={image.alt}
        width={image.width}
        height={image.height}
        priority={priority}
        loading={priority ? "eager" : "lazy"}
        sizes={sizes}
        className={`h-full w-full object-cover ${imageClassName}`}
      />
    </figure>
  );
}
