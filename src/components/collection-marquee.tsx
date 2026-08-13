"use client";

import Image from "next/image";
import { campaignImages, ehsaasCollection } from "@/lib/collection";

const images = [...campaignImages, ...ehsaasCollection];

export function CollectionMarquee() {
  return (
    <section className="relative isolate h-[29rem] overflow-hidden border-b border-stone-900/10 bg-[#1d1915] sm:h-[34rem] lg:h-[38rem]">
      <div className="collection-marquee">
        {[0, 1, 2].map((row) => (
          <div className="collection-marquee-row" key={row}>
            {[...images, ...images].map((image, index) => (
              <div className="collection-marquee-card" key={`${row}-${image.src}-${index}`}>
                <Image
                  src={image.src}
                  alt=""
                  fill
                  sizes="(max-width: 640px) 30vw, 20vw"
                  className="object-cover"
                  style={{ objectPosition: "center" }}
                />
              </div>
            ))}
          </div>
        ))}
      </div>
      <div className="pointer-events-none absolute inset-0 z-10 bg-[linear-gradient(90deg,rgba(29,25,21,0.9),transparent_32%,transparent_68%,rgba(29,25,21,0.9)),linear-gradient(0deg,rgba(29,25,21,0.92),transparent_35%,transparent_65%,rgba(29,25,21,0.6))]" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-20 mx-auto max-w-[90rem] px-5 pb-9 sm:px-8 sm:pb-12">
        <p className="eyebrow text-[#f4dfc7]">The first expression</p>
        <h1 className="type-display mt-3 max-w-2xl font-serif text-[#fff7ec]">
          EHSAAS
        </h1>
        <p className="mt-5 max-w-md text-sm leading-6 text-[#f4dfc7]/85 sm:text-base">
          A study of colour, texture and memory. Discover each image in the world of EHSAAS.
        </p>
      </div>
    </section>
  );
}
