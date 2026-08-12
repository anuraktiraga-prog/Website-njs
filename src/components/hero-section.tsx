"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useMotionValue, useScroll, useSpring, useTransform } from "motion/react";
import { useEffect, useRef, useState } from "react";
import { InstagramIcon, WhatsAppIcon } from "@/components/social-icons";
import { campaignImages, contactLinks } from "@/lib/collection";

export function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isImageReady, setIsImageReady] = useState(false);
  const [isContentVisible, setIsContentVisible] = useState(false);
  const pointerX = useMotionValue(0);
  const pointerY = useMotionValue(0);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const [heroImage] = campaignImages;

  const backdropY = useTransform(scrollYProgress, [0, 1], [0, -24]);
  const backdropScale = useTransform(scrollYProgress, [0, 1], [1.04, 1.12]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.72, 1], [1, 1, 0]);
  const imageX = useSpring(useTransform(pointerX, [-1, 1], [-14, 14]), { stiffness: 42, damping: 18, mass: 0.7 });
  const imagePointerY = useSpring(useTransform(pointerY, [-1, 1], [-10, 10]), { stiffness: 42, damping: 18, mass: 0.7 });
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
    <section ref={sectionRef} id="top" className="relative h-[116svh] bg-stone-950 text-stone-50" onPointerMove={handlePointerMove} onPointerLeave={resetPointer}>
      <div className="sticky top-0 h-[100svh] overflow-hidden">
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
          <div className="absolute inset-0 bg-gradient-to-b from-stone-950/30 via-stone-950/5 to-stone-950/85" />
          <div className="absolute inset-0 bg-gradient-to-r from-stone-950/42 via-transparent to-transparent" />
        </div>

        <motion.div className="relative z-10 mx-auto flex h-[100svh] max-w-7xl flex-col justify-end px-5 pb-10 pt-28 sm:px-8 lg:pb-14" style={{ opacity: contentOpacity, x: contentX, y: contentY }}>
          <div className="max-w-3xl">
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
              className="font-serif text-6xl leading-[0.9] text-[#fff5df] sm:text-8xl lg:text-9xl"
            >
              ANURRAKTI
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={isContentVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
              transition={{ duration: 0.9, delay: isContentVisible ? 0.55 : 0, ease: [0.22, 1, 0.36, 1] }}
              className="mt-6 max-w-xl text-base leading-7 text-stone-100 sm:text-lg"
            >
              Sarees made to be remembered.
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={isContentVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 14 }}
            transition={{ duration: 0.85, delay: isContentVisible ? 0.8 : 0, ease: [0.22, 1, 0.36, 1] }}
            className="mt-10 border-t border-stone-50/25 pt-6"
          >
            <div className="flex flex-wrap gap-3">
              <Link className="btn-light" href="/collection">Discover EHSAAS</Link>
              <a className="btn-ghost gap-2" href={contactLinks.whatsappPrimary} target="_blank" rel="noreferrer"><WhatsAppIcon className="h-4 w-4" />Connect with us</a>
              <a className="btn-ghost gap-2" href={contactLinks.instagram} target="_blank" rel="noreferrer"><InstagramIcon className="h-4 w-4" />DM on Instagram</a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
