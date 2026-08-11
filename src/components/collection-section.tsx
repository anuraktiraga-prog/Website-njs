import { CollectionCard } from "@/components/collection-card";
import { ehsaasCollection } from "@/lib/collection";

export function CollectionSection() {
  return (
    <section id="collection" className="section-shell overflow-hidden">
      <div className="mb-12 grid gap-8 lg:mb-16 lg:grid-cols-[minmax(10rem,0.3fr)_minmax(0,1fr)] lg:gap-12">
        <p className="eyebrow animate-[collection-rise_600ms_ease-out_both] lg:pt-4">01 EHSAAS</p>
        <div className="min-w-0 animate-[collection-rise_700ms_ease-out_100ms_both]">
          <h2 className="font-serif text-[clamp(2.45rem,9vw,6.25rem)] leading-[0.88] tracking-[-0.04em] text-stone-950">
            <span className="block whitespace-nowrap">The EHSAAS</span>
            <span className="block">collection.</span>
          </h2>
          <p className="mt-6 max-w-[40rem] text-base leading-7 text-stone-700 sm:mt-8 sm:text-lg sm:leading-8">
            Six distinct drapes, each held in its own language of colour,
            texture and memory. The collection will continue to evolve.
          </p>
        </div>
      </div>

      <div className="grid gap-x-5 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
        {ehsaasCollection.map((image, index) => (
          <CollectionCard key={image.src} image={image} index={index} />
        ))}
      </div>
    </section>
  );
}
