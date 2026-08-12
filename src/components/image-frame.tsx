"use client";

import Image from "next/image";
import { motion, useMotionValue, useSpring, useTransform } from "motion/react";
import type { BrandImage } from "@/lib/collection";

type ImageFrameProps = {
  image: BrandImage;
  className?: string;
  imageClassName?: string;
  priority?: boolean;
  sizes: string;
  caption?: string;
};

export function ImageFrame({
  image,
  className = "",
  imageClassName = "",
  priority = false,
  sizes,
  caption,
}: ImageFrameProps) {
  const pointerX = useMotionValue(0);
  const pointerY = useMotionValue(0);
  const imageX = useSpring(useTransform(pointerX, [-1, 1], [-18, 18]), { stiffness: 55, damping: 18 });
  const imageY = useSpring(useTransform(pointerY, [-1, 1], [-14, 14]), { stiffness: 55, damping: 18 });

  function handlePointerMove(event: React.PointerEvent<HTMLElement>) {
    if (event.pointerType === "touch") return;
    const bounds = event.currentTarget.getBoundingClientRect();
    pointerX.set(((event.clientX - bounds.left) / bounds.width - 0.5) * 2);
    pointerY.set(((event.clientY - bounds.top) / bounds.height - 0.5) * 2);
  }

  function resetPointer() {
    pointerX.set(0);
    pointerY.set(0);
  }

  return (
    <figure
      className={`relative overflow-hidden bg-stone-200 ${className}`}
      onPointerMove={handlePointerMove}
      onPointerLeave={resetPointer}
    >
      <motion.div className="h-full w-full scale-[1.14]" style={{ x: imageX, y: imageY }}>
        <Image
          src={image.src}
          alt={image.alt}
          width={image.width}
          height={image.height}
          preload={priority}
          loading={priority ? "eager" : "lazy"}
          sizes={sizes}
          className={`h-full w-full object-cover ${imageClassName}`}
        />
      </motion.div>
      {caption ? (
        <figcaption className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-stone-950/70 to-transparent px-6 pb-6 pt-16 text-xs uppercase tracking-[0.2em] text-stone-100">
          {caption}
        </figcaption>
      ) : null}
    </figure>
  );
}
