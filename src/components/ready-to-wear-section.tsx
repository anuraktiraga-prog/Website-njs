import Link from "next/link";
import { campaignImages } from "@/lib/collection";
import { ImageFrame } from "@/components/image-frame";

export function ReadyToWearSection() {
  const [image] = campaignImages.slice(-1);

  return (
    <section id="ready-to-wear" className="border-y border-stone-950/10 bg-[#eadfce]">
      <div className="section-shell grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
        <div className="max-w-xl">
          <p className="eyebrow">Ready to wear</p>
          <h2 className="section-title mt-5">A new expression, soon.</h2>
          <p className="mt-6 text-base leading-7 text-stone-700">
            Dresses and kurtis are taking shape—everyday pieces crafted with
            the same passion, colour and feeling.
          </p>
          <Link className="btn-secondary mt-8" href="/ready-to-wear">Stay tuned</Link>
        </div>
        <ImageFrame
          image={image}
          className="aspect-[4/3] bg-stone-900 sm:aspect-[16/10]"
          imageClassName="object-[50%_26%]"
          sizes="(max-width: 1024px) 100vw, 55vw"
          caption="The next chapter"
        />
      </div>
    </section>
  );
}
