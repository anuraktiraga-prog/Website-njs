import Link from "next/link";

export function SareeDiscoverySection() {
  return (
    <section className="border-b border-white/10 bg-[#211d19] px-5 py-16 text-[#f8f0e5] sm:px-8 sm:py-20 lg:px-12 lg:py-24" aria-labelledby="indian-sarees">
      <div className="mx-auto max-w-[90rem]">
        <header className="grid gap-6 lg:grid-cols-[0.32fr_0.68fr] lg:gap-16">
          <p className="text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-[#d8c8b6] lg:pt-3">
            Unique Indian sarees by ANURRAKTI
          </p>
          <h2 id="indian-sarees" className="max-w-4xl font-serif text-[clamp(2.45rem,5.4vw,5.8rem)] leading-[0.95] tracking-[-0.035em]">
            Twelve sarees.<br />Twelve individual expressions.
          </h2>
        </header>

        <div className="mt-12 grid gap-10 border-t border-white/15 pt-10 sm:mt-16 sm:pt-12 lg:grid-cols-[0.32fr_0.68fr] lg:gap-16">
          <div className="flex items-end gap-7 lg:block">
            <p className="font-serif text-[clamp(5rem,11vw,9rem)] leading-[0.72] tracking-[-0.06em] text-[#f1d9bc]" aria-hidden="true">12</p>
            <div className="mt-8 grid grid-cols-2 gap-6 text-[0.66rem] uppercase tracking-[0.2em] text-[#d8c8b6]">
              <p><span className="block font-serif text-2xl normal-case tracking-normal text-[#fff7ec]">06</span>EHSAAS</p>
              <p><span className="block font-serif text-2xl normal-case tracking-normal text-[#fff7ec]">06</span>RAGA</p>
            </div>
          </div>

          <div>
            <p className="max-w-3xl font-serif text-[clamp(1.45rem,2.4vw,2.25rem)] leading-[1.25] text-[#fff7ec]">
              ANURRAKTI approaches the Indian saree as something personal: a drape
              chosen for its colour, composition and the feeling it creates.
            </p>

            <div className="mt-9 grid gap-7 border-t border-white/15 pt-8 text-sm leading-7 text-[#d8c8b6] md:grid-cols-2 md:gap-10">
              <div className="space-y-5">
                <p>
                  The EHSAAS and RAGA collections each contain six one-of-one sarees,
                  allowing every piece to retain an identity of its own rather than
                  becoming one of many identical editions.
                </p>
                <p>
                  Begin with the complete <Link className="text-[#fff7ec] underline decoration-white/40 underline-offset-4 transition hover:decoration-white" href="/collection">saree collection</Link>,
                  then open an individual piece to study its full drape, closer textile
                  views and confirmed colour palette.
                </p>
              </div>
              <div className="space-y-5">
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
      </div>
    </section>
  );
}
