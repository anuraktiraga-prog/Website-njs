"use client";

import Image from "next/image";
import Link from "next/link";
import { campaignImages, contactLinks } from "@/lib/collection";
import { trackEvent } from "@/lib/analytics";

export function HeroSection() {
  const [heroImage] = campaignImages;
  if (!heroImage) return null;

  return (
    <section id="top" className="home-hero relative -mt-px overflow-hidden bg-[#1d1915] text-[#fff5df]">
      <div className="absolute inset-0" aria-hidden="true">
        <Image src={heroImage.src} alt="" fill preload sizes="100vw" quality={70} className="object-cover object-[58%_28%]" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1d1915]/90 via-[#1d1915]/20 to-[#1d1915]/20" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#1d1915]/45 via-transparent to-transparent" />
      </div>
      <div className="home-hero-content page-width relative z-10 flex flex-col justify-end">
        <p className="type-label mb-6 text-[#fff5df]">A new expression of the drape</p>
        <h1 className="type-display max-w-[16ch] font-serif">
          <span className="sr-only">ANURRAKTI one-of-one sarees: </span>
          <span className="block">Crafted once.</span>
          <span className="block">Remembered for a lifetime.</span>
        </h1>
        <p className="type-body mt-6 max-w-md text-[#fff5df]">One-of-one Indian sarees, crafted with passion and chosen by the heart.</p>
        <div className="mt-8 flex flex-wrap items-center gap-4 sm:gap-7">
          <Link className="btn-light" href="/collection" onClick={() => trackEvent("hero_discover_click")}>
            Explore the sarees <span className="ml-5" aria-hidden="true">→</span>
          </Link>
          <a className="editorial-link text-[#fff5df] hover:!text-white" href={contactLinks.whatsappPrimary} target="_blank" rel="noreferrer" onClick={() => {
            trackEvent("whatsapp_click", { placement: "hero" });
            trackEvent("direct_contact_click", { channel: "whatsapp", placement: "hero" });
          }}>Private enquiry <span aria-hidden="true">↗</span></a>
        </div>
      </div>
    </section>
  );
}
