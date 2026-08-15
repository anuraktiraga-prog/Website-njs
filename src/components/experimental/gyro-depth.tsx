"use client";

import { useEffect, useState, type ReactNode } from "react";
import { useReducedMotion } from "motion/react";

// Keep this opt-in and isolated. Flip only after device testing and brand approval.
export const ENABLE_GYRO_DEPTH_EXPERIMENT = false;

type GyroDepthProps = {
  children: ReactNode;
  className?: string;
};

export function GyroDepth({ children, className = "" }: GyroDepthProps) {
  const reduceMotion = useReducedMotion();
  const [permissionRequested, setPermissionRequested] = useState(false);
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const supported = ENABLE_GYRO_DEPTH_EXPERIMENT && typeof window !== "undefined" && "DeviceOrientationEvent" in window;

  useEffect(() => {
    if (!ENABLE_GYRO_DEPTH_EXPERIMENT || !supported || !permissionRequested || reduceMotion) return;

    const onOrientation = (event: DeviceOrientationEvent) => {
      const gamma = Math.max(-15, Math.min(15, event.gamma ?? 0));
      const beta = Math.max(-15, Math.min(15, (event.beta ?? 0) - 45));
      setOffset({ x: gamma * 0.16, y: beta * 0.1 });
    };

    window.addEventListener("deviceorientation", onOrientation, { passive: true });
    return () => window.removeEventListener("deviceorientation", onOrientation);
  }, [permissionRequested, reduceMotion, supported]);

  async function requestPermission() {
    if (!ENABLE_GYRO_DEPTH_EXPERIMENT || !supported) return;
    const orientation = window.DeviceOrientationEvent as typeof DeviceOrientationEvent & {
      requestPermission?: () => Promise<"granted" | "denied">;
    };
    if (orientation.requestPermission) {
      const result = await orientation.requestPermission();
      if (result !== "granted") return;
    }
    setPermissionRequested(true);
  }

  return (
    <div className={`relative ${className}`}>
      <div
        style={{
          transform: `translate3d(${offset.x}px, ${offset.y}px, 0)`,
          willChange: ENABLE_GYRO_DEPTH_EXPERIMENT ? "transform" : undefined,
        }}
      >
        {children}
      </div>
      {ENABLE_GYRO_DEPTH_EXPERIMENT && supported && !permissionRequested ? (
        <button
          type="button"
          onClick={() => void requestPermission()}
          className="absolute bottom-5 right-5 z-20 min-h-10 border border-stone-100/45 bg-stone-950/45 px-3 text-[0.62rem] uppercase tracking-[0.18em] text-stone-100 backdrop-blur-sm"
        >
          Enable depth
        </button>
      ) : null}
    </div>
  );
}
