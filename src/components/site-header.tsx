"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { WhatsAppIcon } from "@/components/social-icons";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Ready to wear", href: "/ready-to-wear" },
  { label: "The House", href: "/#craft" },
  { label: "Enquire", href: "/#viewing" },
];

const collectionItems = [
  { label: "EHSAAS", description: "The inaugural saree collection", href: "/collection" },
  { label: "Ready to wear", description: "Coming soon", href: "/ready-to-wear" },
];

export function SiteHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCollectionOpen, setIsCollectionOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-stone-900/10 bg-[#f6f0e7] text-[#1d1915]">
      <div className="bg-[#7e271e] px-4 py-2 text-center text-[10px] font-semibold uppercase tracking-[0.18em] text-[#fff7ec] sm:text-[11px]">
        Discover the first ANURRAKTI expression — EHSAAS
        <Link className="ml-3 underline underline-offset-4" href="/collection">
          Explore
        </Link>
      </div>

      <div className="relative mx-auto flex h-18 max-w-[90rem] items-center justify-between px-5 sm:px-8 lg:h-20">
        <p className="hidden text-[10px] uppercase tracking-[0.2em] text-stone-500 lg:block">
          Crafted in India
        </p>

        <Link
          href="/"
          className="absolute left-1/2 flex -translate-x-1/2 items-center gap-2 font-serif text-[0.92rem] uppercase tracking-[0.22em] sm:text-base"
          aria-label="Anurrakti home"
        >
          <Image
            src="/logos/anurrakti-knot-red.png"
            alt=""
            width={661}
            height={609}
            className="h-7 w-7 object-contain sm:h-8 sm:w-8"
          />
          <span>ANURRAKTI</span>
        </Link>

        <div className="ml-auto hidden items-center gap-5 lg:flex">
          <Link className="text-[10px] uppercase tracking-[0.18em] transition-colors hover:text-[#7e271e]" href="/#viewing">
            Private viewing
          </Link>
          <a
            href="https://wa.me/918800219663?text=Hello%20ANURRAKTI%2C%20I%20would%20like%20to%20enquire%20about%20the%20collection."
            target="_blank"
            rel="noreferrer"
            aria-label="Enquire on WhatsApp"
            className="grid h-8 w-8 place-items-center rounded-full border border-stone-900/20 transition-colors hover:border-[#7e271e] hover:text-[#7e271e]"
          >
            <WhatsAppIcon className="h-3.5 w-3.5" />
          </a>
        </div>

        <button
          type="button"
          className="ml-auto inline-flex h-10 w-10 items-center justify-center lg:hidden"
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

      <nav className="hidden border-t border-stone-900/10 lg:block" aria-label="Primary navigation">
        <ul className="mx-auto flex h-12 max-w-4xl items-center justify-center gap-9 text-[11px] font-medium uppercase tracking-[0.14em]">
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
              Collection
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
            <li key={item.href}><Link className="transition-colors hover:text-[#7e271e]" href={item.href}>{item.label}</Link></li>
          ))}
        </ul>
      </nav>

      {isMenuOpen ? (
        <nav id="mobile-navigation" className="border-t border-stone-900/10 bg-[#fffaf2] px-5 py-5 lg:hidden" aria-label="Mobile navigation">
          <ul className="mx-auto grid max-w-7xl gap-1">
            <li><Link href="/collection" className="block border-b border-stone-900/10 py-4 font-serif text-2xl" onClick={() => setIsMenuOpen(false)}>Collection — EHSAAS</Link></li>
            {navItems.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="block border-b border-stone-900/10 py-4 font-serif text-2xl" onClick={() => setIsMenuOpen(false)}>{item.label}</Link>
              </li>
            ))}
          </ul>
        </nav>
      ) : null}
    </header>
  );
}
