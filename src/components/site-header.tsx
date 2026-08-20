"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { trackEvent } from "@/lib/analytics";
import { contactLinks } from "@/lib/collection";
import { InstagramIcon, WhatsAppIcon } from "@/components/social-icons";

const navItems = [
  { label: "Home", href: "/" },
  { label: "The House", href: "/house" },
  { label: "Ready to Wear", href: "/ready-to-wear" },
  { label: "Gift Concierge", href: "/gift-concierge" },
  { label: "Enquire", href: "/#viewing" },
];

const collectionItems = [
  { label: "EHSAAS", description: "The inaugural saree collection", href: "/collection/ehsaas" },
  { label: "RAGA", description: "The second expression", href: "/collection/raga" },
];

export function SiteHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCollectionOpen, setIsCollectionOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-[#f6f0e7] text-[#1d1915]">
      <div className="bg-[#7e271e] px-4 py-1.5 text-center text-[10px] font-semibold uppercase tracking-[0.16em] text-[#fff7ec] sm:text-[11px]">
        Discover the ANURRAKTI collections
        <Link className="ml-3 underline underline-offset-4" href="/collection">
          Explore
        </Link>
      </div>

      <div className="relative mx-auto flex h-16 max-w-[90rem] items-center justify-between px-4 sm:px-8 lg:h-[4.5rem]">
        <p className="hidden text-[10px] uppercase tracking-[0.2em] text-stone-500 lg:block">
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
            className="h-[4rem] w-auto object-contain sm:h-[4.35rem]"
          />
        </Link>

        <div className="ml-auto flex items-center gap-1.5">
          <a
            href={contactLinks.instagram}
            target="_blank"
            rel="noreferrer"
            className="inline-flex h-10 w-10 items-center justify-center text-[#1d1915] transition-colors hover:text-[#7e271e] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#7e271e]"
            aria-label="Open ANURRAKTI on Instagram"
            onClick={() => trackEvent("direct_contact_click", { channel: "instagram", placement: "header" })}
          >
            <InstagramIcon className="h-5 w-5" />
          </a>
          <a
            href={contactLinks.whatsappPrimary}
            target="_blank"
            rel="noreferrer"
            className="inline-flex h-10 w-10 items-center justify-center text-[#1d1915] transition-colors hover:text-[#7e271e] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#7e271e]"
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
              <span className={`h-px w-6 bg-[#1d1915] transition-transform ${isMenuOpen ? "translate-y-[7px] rotate-45" : ""}`} />
              <span className={`h-px w-6 bg-[#1d1915] transition-opacity ${isMenuOpen ? "opacity-0" : ""}`} />
              <span className={`h-px w-6 bg-[#1d1915] transition-transform ${isMenuOpen ? "-translate-y-[7px] -rotate-45" : ""}`} />
            </span>
          </button>
        </div>
      </div>

      <nav className="hidden border-t border-stone-900/10 lg:block" aria-label="Primary navigation">
        <ul className="mx-auto flex h-11 max-w-4xl items-center justify-center gap-8 type-nav font-medium">
          {navItems.slice(0, 1).map((item) => (
            <li key={item.href}><Link className="transition-colors hover:text-[#7e271e]" href={item.href}>{item.label}</Link></li>
          ))}
          <li
            className="relative h-full"
            onMouseEnter={() => setIsCollectionOpen(true)}
            onMouseLeave={() => setIsCollectionOpen(false)}
          >
            <Link
              href="/collection"
              className="flex h-full items-center gap-1.5 transition-colors hover:text-[#7e271e]"
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
            <li key={item.href}><Link className="transition-colors hover:text-[#7e271e]" href={item.href} onClick={() => {
              if (item.label === "The House") trackEvent("the_house_click", { placement: "header" });
              if (item.label === "Gift Concierge") trackEvent("gift_concierge_start", { placement: "header" });
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
                  if (item.label === "Gift Concierge") trackEvent("gift_concierge_start", { placement: "mobile_header" });
                }}>{item.label}</Link>
              </li>
            ))}
          </ul>
        </nav>
      ) : null}
    </header>
  );
}
