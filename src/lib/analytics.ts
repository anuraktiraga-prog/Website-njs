"use client";

type AnalyticsValue = string | number | boolean;

type AnalyticsProperties = Record<string, AnalyticsValue>;

declare global {
  interface Window {
    gtag?: (command: "event", eventName: string, properties?: AnalyticsProperties) => void;
  }
}

/** Send intent-only events to the existing GA4 property. Never pass enquiry fields or message content. */
export function trackEvent(eventName: string, properties?: AnalyticsProperties) {
  if (typeof window === "undefined") return;
  window.gtag?.("event", eventName, properties);
}
