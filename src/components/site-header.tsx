"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const navItems = [
  { label: "Home", href: "/" },
  { label: "EHSAAS", href: "/collection" },
  { label: "Ready to wear", href: "/#ready-to-wear" },
  { label: "The House", href: "/#craft" },
  { label: "Enquire", href: "/#viewing" },
];

export function SiteHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-stone-100/15 bg-[rgba(29,25,21,0.82)] text-stone-50 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 sm:px-8">
        <Link
          href="/"
          className="flex items-center gap-3 font-serif text-base uppercase tracking-[0.2em] sm:text-lg sm:tracking-[0.24em]"
          aria-label="Anurrakti home"
        >
          <Image
            src="/logos/anurrakti-knot-red.png"
            alt=""
            width={661}
            height={609}
            className="h-9 w-9 object-contain"
          />
          <span>ANURRAKTI</span>
        </Link>

        <nav className="hidden md:block" aria-label="Primary navigation">
          <ul className="flex items-center gap-6 text-xs uppercase tracking-[0.18em] text-stone-200 lg:gap-8">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link className="transition-colors hover:text-white" href={item.href}>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center md:hidden"
          aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-navigation"
          onClick={() => setIsMenuOpen((isOpen) => !isOpen)}
        >
          <span className="sr-only">Menu</span>
          <span className="grid gap-1.5" aria-hidden="true">
            <span className={`h-px w-6 bg-stone-100 transition-transform ${isMenuOpen ? "translate-y-[7px] rotate-45" : ""}`} />
            <span className={`h-px w-6 bg-stone-100 transition-opacity ${isMenuOpen ? "opacity-0" : ""}`} />
            <span className={`h-px w-6 bg-stone-100 transition-transform ${isMenuOpen ? "-translate-y-[7px] -rotate-45" : ""}`} />
          </span>
        </button>
      </div>

      {isMenuOpen ? (
        <nav id="mobile-navigation" className="border-t border-stone-100/15 bg-stone-950 px-5 py-6 md:hidden" aria-label="Mobile navigation">
          <ul className="mx-auto grid max-w-7xl gap-1">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="block border-b border-stone-100/10 py-4 font-serif text-2xl text-[#fff5df]"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      ) : null}
    </header>
  );
}
