"use client";

import { useEffect, useRef } from "react";
import { trackEvent } from "@/lib/analytics";

const ambientSound = "/audio/anurrakti-ambient.mp3";

declare global {
  interface Window {
    __anurraktiIntroSoundPlayed?: boolean;
    __anurraktiHeroRevealStarted?: boolean;
  }
}

export function HomeSound() {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const hasAttemptedPlayback = useRef(false);
  const shouldWaitForInteraction = useRef(false);
  const isHeroReady = useRef(false);
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
      if (!isHeroReady.current || !isAudioReady.current) return;
      if (playbackTimer.current) window.clearTimeout(playbackTimer.current);

      playbackTimer.current = window.setTimeout(() => {
        void playSound("autoplay");
      }, 0);
    };

    const playWithHeroReveal = () => {
      isHeroReady.current = true;
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

    window.addEventListener("anurrakti:hero-reveal-start", playWithHeroReveal, { once: true });
    window.addEventListener("pointerdown", enableAfterInteraction, { passive: true });
    window.addEventListener("keydown", enableAfterInteraction);
    audio.addEventListener("canplay", markAudioReady, { once: true });
    audio.addEventListener("loadeddata", markAudioReady, { once: true });

    if (audio.readyState >= HTMLMediaElement.HAVE_CURRENT_DATA) {
      markAudioReady();
    } else {
      audio.load();
    }

    if (window.__anurraktiHeroRevealStarted) {
      window.setTimeout(playWithHeroReveal, 0);
    }

    return () => {
      if (playbackTimer.current) window.clearTimeout(playbackTimer.current);
      window.removeEventListener("anurrakti:hero-reveal-start", playWithHeroReveal);
      window.removeEventListener("pointerdown", enableAfterInteraction);
      window.removeEventListener("keydown", enableAfterInteraction);
      audio.removeEventListener("canplay", markAudioReady);
      audio.removeEventListener("loadeddata", markAudioReady);
    };
  }, []);

  return <audio ref={audioRef} src={ambientSound} preload="auto" />;
}
