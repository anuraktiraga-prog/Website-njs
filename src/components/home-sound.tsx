"use client";

import { useEffect, useRef } from "react";
import { trackEvent } from "@/lib/analytics";

const ambientSound = "/audio/anurrakti-ambient.mp3";

declare global {
  interface Window {
    __anurraktiIntroSoundPlayed?: boolean;
    __anurraktiSiteReady?: boolean;
  }
}

export function HomeSound() {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const hasAttemptedPlayback = useRef(false);
  const shouldWaitForInteraction = useRef(false);
  const isSiteReady = useRef(false);
  const isAudioReady = useRef(false);
  const playbackTimer = useRef<number | undefined>(undefined);

  const playSound = async (source: "autoplay" | "interaction") => {
    const audio = audioRef.current;
    if (!audio || hasAttemptedPlayback.current || window.__anurraktiIntroSoundPlayed) return;

    hasAttemptedPlayback.current = true;

    try {
      audio.currentTime = 0;
      audio.volume = 0.42;
      await audio.play();
      window.__anurraktiIntroSoundPlayed = true;
      trackEvent("ambient_sound_play", { placement: "home", source });
    } catch {
      if (source === "autoplay") {
        hasAttemptedPlayback.current = false;
        shouldWaitForInteraction.current = true;
      }
      trackEvent("ambient_sound_blocked", { placement: "home", source });
    }
  };

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const tryAutoplayWhenReady = () => {
      if (!isSiteReady.current || !isAudioReady.current) return;

      playbackTimer.current = window.setTimeout(() => {
        void playSound("autoplay");
      }, 120);
    };

    const playAfterSiteReady = () => {
      isSiteReady.current = true;
      tryAutoplayWhenReady();
    };

    const markAudioReady = () => {
      isAudioReady.current = true;
      tryAutoplayWhenReady();
    };

    const enableAfterInteraction = () => {
      if (!shouldWaitForInteraction.current) return;
      void playSound("interaction");
    };

    window.addEventListener("anurrakti:site-ready", playAfterSiteReady, { once: true });
    window.addEventListener("pointerdown", enableAfterInteraction, { passive: true });
    window.addEventListener("keydown", enableAfterInteraction);
    audio.addEventListener("canplaythrough", markAudioReady, { once: true });

    if (audio.readyState >= HTMLMediaElement.HAVE_FUTURE_DATA) {
      markAudioReady();
    } else {
      audio.load();
    }

    if (window.__anurraktiSiteReady) {
      window.setTimeout(playAfterSiteReady, 0);
    }

    return () => {
      if (playbackTimer.current) window.clearTimeout(playbackTimer.current);
      window.removeEventListener("anurrakti:site-ready", playAfterSiteReady);
      window.removeEventListener("pointerdown", enableAfterInteraction);
      window.removeEventListener("keydown", enableAfterInteraction);
      audio.removeEventListener("canplaythrough", markAudioReady);
    };
  }, []);

  return <audio ref={audioRef} src={ambientSound} preload="auto" />;
}
