"use client";

import Link, { type LinkProps } from "next/link";
import type { AnchorHTMLAttributes, ReactNode } from "react";
import { trackEvent } from "@/lib/analytics";

type AnalyticsLinkProps = LinkProps &
  Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href" | "onClick"> & {
    eventName: string;
    eventProperties?: Record<string, string | number | boolean>;
    additionalEvents?: Array<{
      name: string;
      properties?: Record<string, string | number | boolean>;
    }>;
    children: ReactNode;
  };

export function AnalyticsLink({ eventName, eventProperties, additionalEvents, children, ...props }: AnalyticsLinkProps) {
  return (
    <Link
      {...props}
      onClick={() => {
        trackEvent(eventName, eventProperties);
        additionalEvents?.forEach((event) => trackEvent(event.name, event.properties));
      }}
    >
      {children}
    </Link>
  );
}
