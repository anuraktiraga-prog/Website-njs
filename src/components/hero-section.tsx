"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useMotionValue, useReducedMotion, useScroll, useSpring, useTransform } from "motion/react";
import { useEffect, useRef, useState } from "react";
import { campaignImages } from "@/lib/collection";
import { GyroDepth } from "@/components/experimental/gyro-depth";
import { trackEvent } from "@/lib/analytics";

export function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isImageReady, setIsImageReady] = useState(false);
  const [isContentVisible, setIsContentVisible] = useState(false);
  const prefersReducedMotion = useReducedMotion();
  const pointerX = useMotionValue(0);
  const pointerY = useMotionValue(0);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const [heroImage] = campaignImages;

  const backdropY = useTransform(scrollYProgress, [0, 1], [0, -12]);
  const backdropScale = useTransform(scrollYProgress, [0, 1], [1.04, 1.07]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.72, 1], [1, 1, 0]);
  const imageX = useSpring(useTransform(pointerX, [-1, 1], [-8, 8]), { stiffness: 42, damping: 20, mass: 0.7 });
  const imagePointerY = useSpring(useTransform(pointerY, [-1, 1], [-6, 6]), { stiffness: 42, damping: 20, mass: 0.7 });
  const imageY = useTransform([backdropY, imagePointerY], ([scrollOffset, pointerOffset]) => Number(scrollOffset) + Number(pointerOffset));
  const contentX = useSpring(useTransform(pointerX, [-1, 1], [5, -5]), { stiffness: 50, damping: 20, mass: 0.6 });
  const contentY = useSpring(useTransform(pointerY, [-1, 1], [4, -4]), { stiffness: 50, damping: 20, mass: 0.6 });

  useEffect(() => {
    if (!isImageReady) return;
    const revealTimer = window.setTimeout(() => setIsContentVisible(true), 500);
    return () => window.clearTimeout(revealTimer);
  }, [isImageReady]);

  if (!heroImage) return null;

  function handlePointerMove(event: React.PointerEvent<HTMLElement>) {
    if (prefersReducedMotion || event.pointerType === "touch") return;
    const bounds = event.currentTarget.getBoundingClientRect();
    pointerX.set(((event.clientX - bounds.left) / bounds.width - 0.5) * 2);
    pointerY.set(((event.clientY - bounds.top) / bounds.height - 0.5) * 2);
  }

  function resetPointer() {
    if (prefersReducedMotion) return;
    pointerX.set(0);
    pointerY.set(0);
  }

  return (
    <section ref={sectionRef} id="top" className="relative min-h-[clamp(42rem,116svh,72rem)] bg-stone-950 text-stone-50" onPointerMove={handlePointerMove} onPointerLeave={resetPointer}>
      <GyroDepth className="sticky top-0 min-h-[100svh] overflow-hidden">
        <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
          <motion.div className="absolute -inset-8" style={{ x: imageX, y: imageY, scale: backdropScale }}>
            <Image
              src={heroImage.src}
              alt=""
              width={heroImage.width}
              height={heroImage.height}
              preload
              loading="eager"
              sizes="100vw"
              onLoad={() => setIsImageReady(true)}
              className="h-full w-full object-cover object-[52%_28%]"
            />
          </motion.div>
          <video
            className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-[0.28] mix-blend-screen"
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            poster={heroImage.src}
            aria-hidden="true"
          >
            <source src="/videos/house-drape-study.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-stone-950/35" />
          <div className="absolute inset-y-0 left-0 w-2/3 bg-stone-950/25" />
        </div>

        <motion.div className="relative z-10 mx-auto flex min-h-[100svh] max-w-7xl flex-col justify-end px-5 pb-[calc(2.5rem+env(safe-area-inset-bottom))] pt-28 sm:px-8 lg:pb-14" style={{ opacity: contentOpacity, x: contentX, y: contentY }}>
          <div className="max-w-2xl">
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={isContentVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
              className="mb-5 text-xs uppercase tracking-[0.3em] text-stone-200"
            >
              A new expression of the drape
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 32, letterSpacing: "0.08em" }}
              animate={isContentVisible ? { opacity: 1, y: 0, letterSpacing: "-0.035em" } : { opacity: 0, y: 32, letterSpacing: "0.08em" }}
              transition={{ duration: 1.35, delay: isContentVisible ? 0.12 : 0, ease: [0.22, 1, 0.36, 1] }}
              className="type-page-title max-w-2xl font-serif text-[#fff5df]"
            >
              Wear what cannot be repeated.
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={isContentVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
              transition={{ duration: 0.9, delay: isContentVisible ? 0.55 : 0, ease: [0.22, 1, 0.36, 1] }}
              className="mt-5 max-w-lg type-body text-stone-100"
            >
              One of one Indian clothing, created for women who carry heritage with presence.
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={isContentVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 14 }}
            transition={{ duration: 0.85, delay: isContentVisible ? 0.8 : 0, ease: [0.22, 1, 0.36, 1] }}
            className="mt-8 border-t border-stone-50/25 pt-5"
          >
            <div className="grid grid-cols-3 gap-2 sm:flex sm:flex-wrap sm:gap-3">
              <Link className="btn-light min-w-0 px-2 text-center sm:px-5" href="/collection" onClick={() => trackEvent("hero_discover_click")}>Discover</Link>
              <Link className="btn-ghost min-w-0 px-2 text-center sm:px-5" href="/house" onClick={() => trackEvent("the_house_click", { placement: "hero" })}>The House</Link>
              <Link className="btn-ghost min-w-0 px-2 text-center sm:px-5" href="/#viewing">Enquire</Link>
            </div>
          </motion.div>
        </motion.div>
      </GyroDepth>
    </section>
  );
}
