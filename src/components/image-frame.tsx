"use client";

import Image from "next/image";
import { motion, useMotionValue, useReducedMotion, useSpring, useTransform } from "motion/react";
import type { BrandImage } from "@/lib/collection";

type ImageFrameProps = {
  image: BrandImage;
  className?: string;
  imageClassName?: string;
  priority?: boolean;
  sizes: string;
  caption?: string;
  noBleed?: boolean;
};

export function ImageFrame({
  image,
  className = "",
  imageClassName = "",
  priority = false,
  sizes,
  caption,
  noBleed = false,
}: ImageFrameProps) {
  const pointerX = useMotionValue(0);
  const pointerY = useMotionValue(0);
  const reduceMotion = useReducedMotion();
  const imageX = useSpring(useTransform(pointerX, [-1, 1], [-8, 8]), { stiffness: 55, damping: 20 });
  const imageY = useSpring(useTransform(pointerY, [-1, 1], [-6, 6]), { stiffness: 55, damping: 20 });

  function handlePointerMove(event: React.PointerEvent<HTMLElement>) {
    if (noBleed) return;
    if (reduceMotion || event.pointerType === "touch") return;
    const bounds = event.currentTarget.getBoundingClientRect();
    pointerX.set(((event.clientX - bounds.left) / bounds.width - 0.5) * 2);
    pointerY.set(((event.clientY - bounds.top) / bounds.height - 0.5) * 2);
  }

  function resetPointer() {
    if (!reduceMotion) {
      pointerX.set(0);
      pointerY.set(0);
    }
  }

  return (
    <figure
      className={`relative overflow-hidden bg-stone-200 ${className}`}
      onPointerMove={handlePointerMove}
      onPointerLeave={resetPointer}
    >
      <motion.div className={`h-full w-full motion-reduce:transform-none ${noBleed ? "" : "scale-[1.06]"}`} style={noBleed ? undefined : { x: imageX, y: imageY }}>
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
        <figcaption className="pointer-events-none absolute inset-x-0 bottom-0 bg-stone-950/55 px-6 py-4 text-xs uppercase tracking-[0.2em] text-stone-100">
          {caption}
        </figcaption>
      ) : null}
    </figure>
  );
}
