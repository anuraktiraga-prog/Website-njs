"use client";

import type { AnchorHTMLAttributes, MouseEvent, ReactNode } from "react";
import { trackEvent } from "@/lib/analytics";

const callConversionDestination = "AW-18406520726/mWRhCK2BlOccEJbv9MhE";

type CallConversionLinkProps = Omit<
  AnchorHTMLAttributes<HTMLAnchorElement>,
  "href" | "onClick"
> & {
  href: `tel:${string}`;
  placement: string;
  children: ReactNode;
};

export function CallConversionLink({
  href,
  placement,
  children,
  ...props
}: CallConversionLinkProps) {
  function handleClick(event: MouseEvent<HTMLAnchorElement>) {
    trackEvent("direct_contact_click", { channel: "phone", placement });

    if (!window.gtag) return;

    event.preventDefault();

    let navigationStarted = false;
    const openDialer = () => {
      if (navigationStarted) return;
      navigationStarted = true;
      window.location.href = href;
    };
    const fallbackTimer = window.setTimeout(openDialer, 1000);

    window.gtag("event", "conversion", {
      send_to: callConversionDestination,
      value: 1,
      currency: "INR",
      event_callback: () => {
        window.clearTimeout(fallbackTimer);
        openDialer();
      },
    });
  }

  return (
    <a {...props} href={href} onClick={handleClick}>
      {children}
    </a>
  );
}
