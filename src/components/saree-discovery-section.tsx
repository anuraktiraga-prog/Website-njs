import Image from "next/image";
import Link from "next/link";
import { campaignImages } from "@/lib/collection";

export function SareeDiscoverySection() {
  const image = campaignImages[1];

  return (
    <section className="page-width" aria-labelledby="indian-sarees">
      <div className="home-story-grid border-y border-[var(--border-soft)] py-[var(--section-space)]">
        {image ? (
          <figure className="media-frame media-portrait">
            <Image src={image.src} alt={image.alt} fill sizes="(max-width: 767px) 92vw, 45vw" className="object-cover" />
          </figure>
        ) : null}
        <div className="max-w-xl">
          <p className="eyebrow">The ANURRAKTI point of view</p>
          <h2 id="indian-sarees" className="section-title mt-5 max-w-[14ch]">Wear what speaks to your soul.</h2>
          <p className="type-lead mt-7 text-[var(--ink-soft)]">A piece chosen from the heart becomes more than what you wear. It carries your story, your presence and the feeling of a moment.</p>
          <div className="type-body mt-6 space-y-5 text-[var(--ink-soft)]">
            <p>ANURRAKTI approaches the Indian saree as something personal: a drape chosen for its colour, composition and the feeling it creates.</p>
            <p>EHSAAS, RAGA and NOOR each bring together six one-of-one sarees. Eighteen pieces, each with an identity of its own.</p>
          </div>
          <Link className="editorial-link mt-6" href="/house">Discover the House <span aria-hidden="true">→</span></Link>
          <div className="mt-8 border-t border-[var(--border-soft)] pt-6">
            <p className="eyebrow">A closer look</p>
            <p className="type-caption mt-3 leading-relaxed text-[var(--ink-soft)]">Explore the <Link className="underline underline-offset-4" href="/collection">complete saree collection</Link> for full drapes, closer textile views and confirmed colour palettes. Material composition, design details and current availability are shared through private enquiry for the exact piece you are considering.</p>
            <p className="type-caption mt-4 leading-relaxed text-[var(--ink-soft)]">Begin your discovery with our guides to <Link className="underline underline-offset-4" href="/blogs/types-of-sarees-in-india">types of sarees</Link> and <Link className="underline underline-offset-4" href="/blogs/saree-fabrics-explained">saree fabrics</Link>.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
