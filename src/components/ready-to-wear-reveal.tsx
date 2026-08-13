"use client";

import { useEffect, useState } from "react";
import { TextFlippingBoard } from "@/components/ui/text-flipping-board";

const REVEAL_CYCLE_MS = 12_000;

export function ReadyToWearReveal() {
  const [cycle, setCycle] = useState(0);

  useEffect(() => {
    const interval = window.setInterval(() => setCycle((current) => current + 1), REVEAL_CYCLE_MS);
    return () => window.clearInterval(interval);
  }, []);

  return (
    <section className="flex min-h-[calc(100svh-8rem)] items-center justify-center bg-[#eadfce] px-5 py-16 text-center sm:px-10">
      <div className="w-full max-w-2xl">
        <p className="eyebrow mb-8">ANURRAKTI / Ready to wear</p>
        <TextFlippingBoard
          key={cycle}
          text="COMING SOON"
          duration={2.4}
          className="mx-auto max-w-2xl"
        />
        <p className="mt-8 text-xs uppercase tracking-[0.2em] text-stone-600">Stay tuned</p>
      </div>
    </section>
  );
}
