import Link from "next/link";

export function SareeDiscoverySection() {
  return (
    <section className="border-b border-white/10 bg-[#211d19] px-5 py-12 text-[#f8f0e5] sm:px-8 sm:py-14 lg:px-12 lg:py-16" aria-labelledby="indian-sarees">
      <div className="mx-auto grid max-w-[90rem] gap-8 lg:grid-cols-[0.42fr_0.58fr] lg:gap-14">
        <header>
          <p className="text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-[#d8c8b6]">
            Unique Indian sarees by ANURRAKTI
          </p>
          <h2 id="indian-sarees" className="mt-4 max-w-xl font-serif text-[clamp(2.1rem,3.5vw,3.8rem)] leading-[0.98] tracking-[-0.035em]">
            Eighteen sarees.<br />Eighteen individual expressions.
          </h2>
        </header>

        <div>
          <p className="max-w-3xl font-serif text-[clamp(1.25rem,1.7vw,1.7rem)] leading-[1.3] text-[#fff7ec]">
            ANURRAKTI approaches the Indian saree as something personal: a drape
            chosen for its colour, composition and the feeling it creates.
          </p>

          <div className="mt-6 grid gap-5 border-t border-white/15 pt-5 text-[0.82rem] leading-6 text-[#d8c8b6] sm:grid-cols-2 sm:gap-7">
            <div className="space-y-4">
              <p>
                The EHSAAS, RAGA and NOOR collections each contain six one-of-one sarees,
                allowing every piece to retain an identity of its own rather than
                becoming one of many identical editions.
              </p>
              <p>
                Begin with the complete <Link className="text-[#fff7ec] underline decoration-white/40 underline-offset-4 transition hover:decoration-white" href="/collection">saree collection</Link>,
                then open an individual piece to study its full drape, closer textile
                views and confirmed colour palette.
              </p>
            </div>
            <div className="space-y-4">
              <p>
                Material composition, design details and current availability are
                shared through private enquiry so that the information relates to
                the exact saree you are considering.
              </p>
              <p>
                If you are still deciding what suits you, explore the <Link className="text-[#fff7ec] underline decoration-white/40 underline-offset-4 transition hover:decoration-white" href="/blogs/types-of-sarees-in-india">types of sarees found across India</Link>,
                understand how <Link className="text-[#fff7ec] underline decoration-white/40 underline-offset-4 transition hover:decoration-white" href="/blogs/saree-fabrics-explained">saree fabrics differ</Link>,
                or consider how colour and occasion shape the way a saree feels when worn.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
