"use client";

import { useEffect, useRef } from "react";
import { trackEvent } from "@/lib/analytics";

const DEPTH_THRESHOLDS = [25, 50, 75, 90];

export function CollectionDepthTracker() {
  const tracked = useRef(new Set<number>());

  useEffect(() => {
    const updateDepth = () => {
      const scrollableHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (scrollableHeight <= 0) return;

      const depth = (window.scrollY / scrollableHeight) * 100;
      DEPTH_THRESHOLDS.forEach((threshold) => {
        if (depth >= threshold && !tracked.current.has(threshold)) {
          tracked.current.add(threshold);
          trackEvent("collection_depth_viewed", { depth_percent: threshold });
        }
      });
    };

    window.addEventListener("scroll", updateDepth, { passive: true });
    updateDepth();
    return () => window.removeEventListener("scroll", updateDepth);
  }, []);

  return null;
}
