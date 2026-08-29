import Link from "next/link";

export function SareeDiscoverySection() {
  return (
    <section className="section-shell border-b border-stone-900/10 py-16 sm:py-20 lg:py-24" aria-labelledby="indian-sarees">
      <div className="grid gap-9 lg:grid-cols-[0.72fr_1.28fr] lg:gap-16">
        <div>
          <p className="eyebrow">Unique Indian sarees by ANURRAKTI</p>
          <h2 id="indian-sarees" className="type-section mt-5 max-w-xl font-serif text-stone-950">
            Twelve sarees. Twelve individual expressions.
          </h2>
        </div>

        <div className="max-w-2xl space-y-5 text-base leading-7 text-stone-700">
          <p>
            ANURRAKTI approaches the Indian saree as something personal: a drape
            chosen for its colour, composition and the feeling it creates. The
            EHSAAS and RAGA collections each contain six one-of-one sarees, allowing
            every piece to retain an identity of its own rather than becoming one
            of many identical editions.
          </p>
          <p>
            Begin with the complete <Link className="underline underline-offset-4 hover:text-stone-950" href="/collection">saree collection</Link>,
            then open an individual piece to study its full drape, closer textile
            views and confirmed colour palette. Material composition, design details
            and current availability are shared through private enquiry so that the
            information relates to the exact saree you are considering.
          </p>
          <p>
            If you are still deciding what suits you, the ANURRAKTI journal offers
            practical starting points. Explore the <Link className="underline underline-offset-4 hover:text-stone-950" href="/blogs/types-of-sarees-in-india">types of sarees found across India</Link>,
            understand how <Link className="underline underline-offset-4 hover:text-stone-950" href="/blogs/saree-fabrics-explained">saree fabrics differ</Link>,
            or consider how colour and occasion shape the way a saree feels when worn.
          </p>
        </div>
      </div>
    </section>
  );
}
