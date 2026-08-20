"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const minimumDisplayMs = 1700;

export function LoadingScreen() {
  const [progress, setProgress] = useState(0);
  const [isLeaving, setIsLeaving] = useState(false);
  const [isHidden, setIsHidden] = useState(false);

  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    const startTime = window.performance.now();
    const progressTimer = window.setInterval(() => {
      setProgress((current) => {
        if (current >= 92) return current;
        const nextStep = current < 45 ? 7 : current < 75 ? 4 : 2;
        return Math.min(current + nextStep, 92);
      });
    }, 95);
    let finishTimer: number | undefined;
    let hideTimer: number | undefined;

    document.body.style.overflow = "hidden";

    const completeIntro = () => {
      const elapsed = window.performance.now() - startTime;
      const remaining = Math.max(minimumDisplayMs - elapsed, 0);

      finishTimer = window.setTimeout(() => {
        setProgress(100);

        hideTimer = window.setTimeout(() => {
          setIsLeaving(true);

          hideTimer = window.setTimeout(() => {
            document.body.style.overflow = previousOverflow;
            setIsHidden(true);
          }, 620);
        }, 360);
      }, remaining);
    };

    if (document.readyState === "complete") {
      completeIntro();
    } else {
      window.addEventListener("load", completeIntro, { once: true });
    }

    return () => {
      window.clearInterval(progressTimer);
      if (finishTimer) window.clearTimeout(finishTimer);
      if (hideTimer) window.clearTimeout(hideTimer);
      window.removeEventListener("load", completeIntro);
      document.body.style.overflow = previousOverflow;
    };
  }, []);

  if (isHidden) return null;

  const logoFill = `${100 - progress}%`;

  return (
    <div
      className={`fixed inset-0 z-[999] flex min-h-[100svh] items-center justify-center bg-[#0d0b09] text-[#fff7ec] transition-opacity duration-700 ease-out ${
        isLeaving ? "pointer-events-none opacity-0" : "opacity-100"
      }`}
      role="status"
      aria-live="polite"
      aria-label={`ANURRAKTI website loading ${progress}%`}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(126,39,30,0.28),transparent_38%),linear-gradient(180deg,rgba(255,247,236,0.05),transparent_42%)]" />
      <div className="relative flex flex-col items-center px-6 text-center">
        <div className="relative h-40 w-40 sm:h-52 sm:w-52" aria-hidden="true">
          <Image
            src="/logos/anurrakti-stamp.png"
            alt=""
            fill
            priority
            sizes="13rem"
            className="object-contain brightness-0"
          />
          <div
            className="absolute inset-0 overflow-hidden transition-[clip-path] duration-300 ease-out"
            style={{ clipPath: `inset(${logoFill} 0 0 0)` }}
          >
            <Image
              src="/logos/anurrakti-stamp.png"
              alt=""
              fill
              priority
              sizes="13rem"
              className="object-contain brightness-0 invert"
            />
          </div>
        </div>

        <p className="mt-7 text-[0.68rem] font-medium uppercase tracking-[0.34em] text-[#fff7ec]/72">
          Entering the House
        </p>
        <div className="mt-5 h-px w-56 overflow-hidden bg-[#fff7ec]/16">
          <div
            className="h-full bg-[#fff7ec] transition-[width] duration-300 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>
        <p className="mt-4 min-w-16 text-[0.72rem] uppercase tracking-[0.28em] text-[#fff7ec]/70">
          {String(progress).padStart(2, "0")}%
        </p>
      </div>
    </div>
  );
}
