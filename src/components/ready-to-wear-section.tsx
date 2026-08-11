import Image from "next/image";
import Link from "next/link";
import { campaignImages } from "@/lib/collection";

export function ReadyToWearSection() {
  const [image] = campaignImages.slice(-1);

  return (
    <section id="ready-to-wear" className="border-y border-stone-950/10 bg-[#eadfce]">
      <div className="section-shell grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
        <div className="max-w-xl">
          <p className="eyebrow">Ready to wear</p>
          <h2 className="section-title mt-5">Dresses &amp; kurtis, soon.</h2>
          <p className="mt-6 text-base leading-7 text-stone-700">
            A new expression of ANURRAKTI is taking shape: everyday pieces
            with the same attention to colour, craft and feeling.
          </p>
          <Link className="btn-secondary mt-8" href="/ready-to-wear">Stay tuned</Link>
        </div>
        <figure className="relative aspect-[4/3] overflow-hidden bg-stone-900 sm:aspect-[16/10]">
          <Image
            src={image.src}
            alt={image.alt}
            width={image.width}
            height={image.height}
            sizes="(max-width: 1024px) 100vw, 55vw"
            className="h-full w-full object-cover object-[50%_26%]"
          />
          <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-stone-950/70 to-transparent px-6 pb-6 pt-16 text-xs uppercase tracking-[0.2em] text-stone-100">
            The next chapter
          </figcaption>
        </figure>
      </div>
    </section>
  );
}
