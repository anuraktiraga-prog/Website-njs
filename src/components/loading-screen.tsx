"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const revealDelayMs = 140;
const minimumVisibleMs = 360;
const exitDelayMs = 90;
const fadeDurationMs = 220;

declare global {
  interface Window {
    __anurraktiSiteReady?: boolean;
  }
}

export function LoadingScreen() {
  const [progress, setProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [isLeaving, setIsLeaving] = useState(false);
  const [isHidden, setIsHidden] = useState(false);

  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    const startTime = window.performance.now();
    let visibleStartTime = 0;
    let animationFrame: number | undefined;
    let finishTimer: number | undefined;
    let hideTimer: number | undefined;
    let hasCompleted = false;

    const animateProgress = () => {
      const elapsed = window.performance.now() - startTime;
      const loadRatio = Math.min(elapsed / 700, 1);
      const easedProgress = 18 + (1 - Math.pow(1 - loadRatio, 2)) * 78;
      setProgress((current) => Math.max(current, Math.min(Math.round(easedProgress), 96)));

      if (!hasCompleted) {
        animationFrame = window.requestAnimationFrame(animateProgress);
      }
    };

    const announceReady = () => {
      window.__anurraktiSiteReady = true;
      window.dispatchEvent(new Event("anurrakti:site-ready"));
    };

    const completeIntro = () => {
      if (hasCompleted) return;
      hasCompleted = true;
      if (revealTimer) window.clearTimeout(revealTimer);

      if (!visibleStartTime) {
        announceReady();
        setIsHidden(true);
        return;
      }

      const elapsedVisibleTime = window.performance.now() - visibleStartTime;
      const remaining = Math.max(minimumVisibleMs - elapsedVisibleTime, 0);

      finishTimer = window.setTimeout(() => {
        if (animationFrame) window.cancelAnimationFrame(animationFrame);
        setProgress(100);

        hideTimer = window.setTimeout(() => {
          setIsLeaving(true);

          hideTimer = window.setTimeout(() => {
            document.body.style.overflow = previousOverflow;
            setIsHidden(true);
            announceReady();
          }, fadeDurationMs);
        }, exitDelayMs);
      }, remaining);
    };

    const revealTimer = window.setTimeout(() => {
      if (hasCompleted) return;

      visibleStartTime = window.performance.now();
      document.body.style.overflow = "hidden";
      setIsVisible(true);
      animationFrame = window.requestAnimationFrame(animateProgress);
    }, revealDelayMs);

    if (document.readyState === "complete") {
      completeIntro();
    } else {
      window.addEventListener("load", completeIntro, { once: true });
    }

    return () => {
      if (revealTimer) window.clearTimeout(revealTimer);
      if (animationFrame) window.cancelAnimationFrame(animationFrame);
      if (finishTimer) window.clearTimeout(finishTimer);
      if (hideTimer) window.clearTimeout(hideTimer);
      window.removeEventListener("load", completeIntro);
      document.body.style.overflow = previousOverflow;
    };
  }, []);

  if (isHidden || !isVisible) return null;

  const logoFill = `${100 - progress}%`;

  return (
    <div
      className={`fixed inset-0 z-[999] flex min-h-[100svh] items-center justify-center bg-[#0d0b09] text-[#fff7ec] transition-opacity duration-300 ease-out ${
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
