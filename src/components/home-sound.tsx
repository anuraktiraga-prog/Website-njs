"use client";

import { useEffect, useRef, useState } from "react";
import { trackEvent } from "@/lib/analytics";

const ambientSound = "/audio/anurrakti-ambient.mp3";

export function HomeSound() {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [needsInteraction, setNeedsInteraction] = useState(false);

  const playSound = async (source: "autoplay" | "control" | "interaction") => {
    const audio = audioRef.current;
    if (!audio) return;

    try {
      audio.volume = 0.22;
      await audio.play();
      setIsPlaying(true);
      setNeedsInteraction(false);
      trackEvent("ambient_sound_play", { placement: "home", source });
    } catch {
      setIsPlaying(false);
      setNeedsInteraction(true);
    }
  };

  const pauseSound = () => {
    const audio = audioRef.current;
    if (!audio) return;

    audio.pause();
    setIsPlaying(false);
    trackEvent("ambient_sound_pause", { placement: "home" });
  };

  useEffect(() => {
    const autoplayTimer = window.setTimeout(() => {
      void playSound("autoplay");
    }, 0);

    const enableAfterInteraction = () => {
      void playSound("interaction");
    };

    window.addEventListener("pointerdown", enableAfterInteraction, { once: true });
    window.addEventListener("keydown", enableAfterInteraction, { once: true });

    return () => {
      window.clearTimeout(autoplayTimer);
      window.removeEventListener("pointerdown", enableAfterInteraction);
      window.removeEventListener("keydown", enableAfterInteraction);
    };
  }, []);

  return (
    <div className="fixed bottom-5 right-5 z-[60]">
      <audio ref={audioRef} src={ambientSound} loop preload="auto" />
      <button
        type="button"
        onClick={() => {
          if (isPlaying) {
            pauseSound();
            return;
          }

          void playSound("control");
        }}
        className="inline-flex min-h-11 items-center gap-2 rounded-full border border-[#fff7ec]/30 bg-[#1d1915]/72 px-4 py-2 text-[0.68rem] font-medium uppercase tracking-[0.18em] text-[#fff7ec] shadow-[0_14px_38px_rgba(29,25,21,0.18)] backdrop-blur transition-colors hover:bg-[#7e271e]/88 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#fff7ec]"
        aria-pressed={isPlaying}
        aria-label={isPlaying ? "Pause ANURRAKTI ambient sound" : "Play ANURRAKTI ambient sound"}
      >
        <span className="relative flex h-3 w-3 items-center justify-center" aria-hidden="true">
          <span className={`absolute h-3 w-3 rounded-full bg-[#fff7ec] ${isPlaying ? "animate-ping opacity-55" : "opacity-30"}`} />
          <span className="relative h-1.5 w-1.5 rounded-full bg-[#fff7ec]" />
        </span>
        {isPlaying ? "Sound on" : needsInteraction ? "Tap for sound" : "Sound"}
      </button>
    </div>
  );
}
