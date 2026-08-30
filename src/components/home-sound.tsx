"use client";

import { useEffect, useRef } from "react";
import { trackEvent } from "@/lib/analytics";

const ambientSound = "/audio/anurrakti-ambient.mp3";

declare global {
  interface Window {
    __anurraktiIntroSoundPlayed?: boolean;
  }
}

export function HomeSound() {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const hasAttemptedPlayback = useRef(false);

  const playSound = async () => {
    const audio = audioRef.current;
    if (!audio || hasAttemptedPlayback.current || window.__anurraktiIntroSoundPlayed) return;

    hasAttemptedPlayback.current = true;

    try {
      audio.currentTime = 0;
      audio.volume = 0.42;
      await audio.play();
      window.__anurraktiIntroSoundPlayed = true;
      trackEvent("ambient_sound_play", { placement: "home", source: "interaction" });
    } catch {
      hasAttemptedPlayback.current = false;
      trackEvent("ambient_sound_blocked", { placement: "home", source: "interaction" });
    }
  };

  useEffect(() => {
    const playAfterInteraction = () => void playSound();

    window.addEventListener("pointerdown", playAfterInteraction, { passive: true, once: true });
    window.addEventListener("keydown", playAfterInteraction, { once: true });

    return () => {
      window.removeEventListener("pointerdown", playAfterInteraction);
      window.removeEventListener("keydown", playAfterInteraction);
    };
  }, []);

  return <audio ref={audioRef} src={ambientSound} preload="none" />;
}
