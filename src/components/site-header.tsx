"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { trackEvent } from "@/lib/analytics";
import { contactLinks } from "@/lib/collection";
import { InstagramIcon, WhatsAppIcon } from "@/components/social-icons";

const navItems = [
  { label: "Home", href: "/" },
  { label: "The House", href: "/house" },
  { label: "Blog", href: "/blogs" },
  { label: "Ready to Wear", href: "/ready-to-wear" },
  { label: "Enquire", href: "/#viewing" },
];

const collectionItems = [
  { label: "EHSAAS", description: "The inaugural saree collection", href: "/collection/ehsaas" },
  { label: "RAGA", description: "The second expression", href: "/collection/raga" },
];

export function SiteHeader() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCollectionOpen, setIsCollectionOpen] = useState(false);
  const [isHeaderHovered, setIsHeaderHovered] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);
  const [isCompactMode, setIsCompactMode] = useState(false);
  const lastScrollY = useRef(0);
  const directionStartY = useRef(0);
  const scrollDirection = useRef<"up" | "down" | null>(null);
  const animationFrame = useRef<number | null>(null);

  useEffect(() => {
    const updateHeader = () => {
      const currentScrollY = window.scrollY;
      const nextDirection = currentScrollY > lastScrollY.current ? "down" : "up";

      if (nextDirection !== scrollDirection.current) {
        scrollDirection.current = nextDirection;
        directionStartY.current = currentScrollY;
      }

      const directionalDistance = Math.abs(currentScrollY - directionStartY.current);

      setHasScrolled(currentScrollY > 40);
      if (currentScrollY < 120) {
        setIsHeaderVisible(true);
        setIsCompactMode(false);
      } else if (nextDirection === "down" && directionalDistance > 36) {
        setIsHeaderVisible(false);
      } else if (nextDirection === "up" && directionalDistance > 18) {
        setIsCompactMode(true);
        setIsHeaderVisible(true);
      }

      lastScrollY.current = currentScrollY;
    };

    const handleScroll = () => {
      if (animationFrame.current !== null) return;
      animationFrame.current = window.requestAnimationFrame(() => {
        updateHeader();
        animationFrame.current = null;
      });
    };

    updateHeader();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (animationFrame.current !== null) {
        window.cancelAnimationFrame(animationFrame.current);
      }
    };
  }, []);

  const isHome = pathname === "/";
  const isInteracting = isHeaderHovered || isMenuOpen || isCollectionOpen;
  const isTransparent = isHome && !hasScrolled && !isInteracting;
  const isCompact = isHome && isCompactMode && !isMenuOpen;
  const headerVisible = isHeaderVisible || isMenuOpen || isCollectionOpen;
  const borderColor = isTransparent ? "border-stone-100/25" : "border-stone-900/10";
  const interactiveHoverColor = isTransparent ? "hover:text-[#f4dfc7]" : "hover:text-[#7e271e]";

  return (
    <header
      className={`${isHome ? "fixed" : "sticky"} inset-x-0 top-0 z-50 will-change-transform transition-[transform,background-color,color,box-shadow] ease-[cubic-bezier(0.22,1,0.36,1)] ${
        isTransparent
          ? "bg-transparent text-[#fff7ec]"
          : "bg-[#f6f0e7] text-[#1d1915] shadow-[0_8px_28px_rgba(29,25,21,0.08)]"
      }`}
      style={{
        transform: headerVisible ? "translate3d(0, 0, 0)" : "translate3d(0, -100%, 0)",
        transitionDuration: "360ms, 160ms, 160ms, 180ms",
      }}
      onMouseEnter={() => setIsHeaderHovered(true)}
      onMouseLeave={() => setIsHeaderHovered(false)}
      onKeyDown={(event) => {
        if (event.key === "Escape") {
          setIsCollectionOpen(false);
          setIsMenuOpen(false);
        }
      }}
    >
      <div className={`overflow-hidden bg-[#7e271e] text-[#fff7ec] transition-[max-height,opacity,padding] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
        isCompact ? "max-h-0 py-0 opacity-0" : "max-h-10 px-4 py-1.5 opacity-100"
      } text-center text-[10px] font-semibold uppercase tracking-[0.16em] sm:text-[11px]`}>
        Discover the ANURRAKTI collections
        <Link className="ml-3 underline underline-offset-4" href="/collection">
          Explore
        </Link>
      </div>

      <div className={`relative mx-auto flex max-w-[90rem] items-center justify-between px-4 transition-[height] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] sm:px-8 ${isCompact ? "h-14" : "h-16 lg:h-[4.5rem]"}`}>
        <p className={`hidden text-[10px] uppercase tracking-[0.2em] lg:block ${isTransparent ? "text-stone-100/80" : "text-stone-500"}`}>
          Crafted in India
        </p>

        <Link
          href="/"
          className="absolute left-1/2 flex -translate-x-1/2 items-center"
          aria-label="Anurrakti home"
        >
          <Image
            src="/logos/anurrakti-stamp.png"
            alt="ANURRAKTI"
            width={1206}
            height={890}
            className={`w-auto object-contain transition-[height,filter] ease-[cubic-bezier(0.22,1,0.36,1)] ${isCompact ? "h-12" : "h-[4rem] sm:h-[4.35rem]"} ${isTransparent ? "brightness-0 invert" : ""}`}
            style={{ transitionDuration: "500ms, 160ms" }}
          />
        </Link>

        <div className="ml-auto flex items-center gap-1.5">
          <a
            href={contactLinks.instagram}
            target="_blank"
            rel="noreferrer"
            className={`inline-flex h-10 w-10 items-center justify-center transition-colors ${interactiveHoverColor} focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-current`}
            aria-label="Open ANURRAKTI on Instagram"
            onClick={() => trackEvent("direct_contact_click", { channel: "instagram", placement: "header" })}
          >
            <InstagramIcon className="h-5 w-5" />
          </a>
          <a
            href={contactLinks.whatsappPrimary}
            target="_blank"
            rel="noreferrer"
            className={`inline-flex h-10 w-10 items-center justify-center transition-colors ${interactiveHoverColor} focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-current`}
            aria-label="Text ANURRAKTI on WhatsApp"
            onClick={() => {
              trackEvent("whatsapp_click", { placement: "header" });
              trackEvent("direct_contact_click", { channel: "whatsapp", placement: "header" });
            }}
          >
            <WhatsAppIcon className="h-5 w-5" />
          </a>
          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center lg:hidden"
            aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-navigation"
            onClick={() => setIsMenuOpen((isOpen) => !isOpen)}
          >
            <span className="sr-only">Menu</span>
            <span className="grid gap-1.5" aria-hidden="true">
              <span className={`h-px w-6 bg-current transition-transform ${isMenuOpen ? "translate-y-[7px] rotate-45" : ""}`} />
              <span className={`h-px w-6 bg-current transition-opacity ${isMenuOpen ? "opacity-0" : ""}`} />
              <span className={`h-px w-6 bg-current transition-transform ${isMenuOpen ? "-translate-y-[7px] -rotate-45" : ""}`} />
            </span>
          </button>
        </div>
      </div>

      <nav
        className={`hidden overflow-hidden border-t transition-[max-height,opacity,border-color] ease-[cubic-bezier(0.22,1,0.36,1)] lg:block ${borderColor} ${isCompact ? "max-h-0 opacity-0" : "max-h-12 opacity-100"}`}
        style={{ transitionDuration: "500ms, 500ms, 160ms" }}
        aria-label="Primary navigation"
      >
        <ul className="mx-auto flex h-11 max-w-5xl items-center justify-center gap-8 type-nav font-medium">
          {navItems.slice(0, 1).map((item) => (
            <li key={item.href}><Link className={`transition-colors ${interactiveHoverColor}`} href={item.href}>{item.label}</Link></li>
          ))}
          <li
            className="relative h-full"
            onMouseEnter={() => setIsCollectionOpen(true)}
            onMouseLeave={() => setIsCollectionOpen(false)}
          >
            <Link
              href="/collection"
              className={`flex h-full items-center gap-1.5 transition-colors ${interactiveHoverColor}`}
              aria-haspopup="menu"
              aria-expanded={isCollectionOpen}
              onFocus={() => setIsCollectionOpen(true)}
            >
              Collections
              <svg aria-hidden="true" viewBox="0 0 16 16" className={`h-3 w-3 transition-transform ${isCollectionOpen ? "rotate-180" : ""}`}><path d="m4 6 4 4 4-4" fill="none" stroke="currentColor" strokeWidth="1.3" /></svg>
            </Link>
            {isCollectionOpen ? (
              <div className="absolute left-1/2 top-full w-72 -translate-x-1/2 border border-stone-900/10 bg-[#fffaf2] p-3 shadow-[0_18px_40px_rgba(29,25,21,0.14)]" role="menu">
                {collectionItems.map((item) => (
                  <Link key={item.label} href={item.href} role="menuitem" className="group block px-4 py-3 transition-colors hover:bg-[#f2e7d8]" onBlur={() => setIsCollectionOpen(false)}>
                    <span className="block font-serif text-lg tracking-[0.08em] group-hover:text-[#7e271e]">{item.label}</span>
                    <span className="mt-1 block text-[10px] uppercase tracking-[0.13em] text-stone-500">{item.description}</span>
                  </Link>
                ))}
              </div>
            ) : null}
          </li>
          {navItems.slice(1).map((item) => (
            <li key={item.href}><Link className={`transition-colors ${interactiveHoverColor}`} href={item.href} onClick={() => {
              if (item.label === "The House") trackEvent("the_house_click", { placement: "header" });
            }}>{item.label}</Link></li>
          ))}
        </ul>
      </nav>

      {isMenuOpen ? (
        <nav id="mobile-navigation" className="border-t border-stone-900/10 bg-[#fffaf2] px-5 py-5 lg:hidden" aria-label="Mobile navigation">
          <ul className="mx-auto grid max-w-7xl gap-0.5">
            <li><Link href="/collection" className="block border-b border-stone-900/10 py-3.5 font-serif text-[clamp(1.2rem,5vw,1.5rem)] leading-tight" onClick={() => setIsMenuOpen(false)}>Collections</Link></li>
            {navItems.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="block border-b border-stone-900/10 py-3.5 font-serif text-[clamp(1.2rem,5vw,1.5rem)] leading-tight" onClick={() => {
                  setIsMenuOpen(false);
                  if (item.label === "The House") trackEvent("the_house_click", { placement: "mobile_header" });
                }}>{item.label}</Link>
              </li>
            ))}
          </ul>
        </nav>
      ) : null}
    </header>
  );
}
