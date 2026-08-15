import { CollectionCard } from "@/components/collection-card";
import { ehsaasCollection } from "@/lib/collection";
import Link from "next/link";

type CollectionSectionProps = {
  featuredOnly?: boolean;
};

export function CollectionSection({ featuredOnly = false }: CollectionSectionProps) {
  const pieces = featuredOnly ? ehsaasCollection.slice(0, 3) : ehsaasCollection;

  return (
    <section id="collection" className="section-shell overflow-hidden">
      <div className="mb-12 grid gap-8 lg:mb-16 lg:grid-cols-[minmax(10rem,0.3fr)_minmax(0,1fr)] lg:gap-12">
        <p className="eyebrow animate-[collection-rise_600ms_ease-out_both] lg:pt-4">
          {featuredOnly ? "Selected pieces" : "01 EHSAAS"}
        </p>
        <div className="min-w-0 animate-[collection-rise_700ms_ease-out_100ms_both]">
          <h2 className="section-title max-w-4xl font-serif text-stone-950">
            {featuredOnly ? "Pieces with a point of view." : "EHSAAS collection."}
          </h2>
          <p className="type-body mt-6 max-w-[40rem] text-stone-700 sm:mt-8">
            {featuredOnly
              ? "Created individually. Chosen personally. Never designed to disappear into a room."
              : "Six distinct pieces, each held in its own language of colour, texture and memory. The collection will continue to evolve."}
          </p>
        </div>
      </div>

      <div className="grid gap-x-5 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
        {pieces.map((image, index) => (
          <CollectionCard key={image.src} image={image} index={index} />
        ))}
      </div>

      {featuredOnly ? (
        <div className="mt-10 flex justify-center">
          <Link className="btn-secondary" href="/collection">Explore EHSAAS</Link>
        </div>
      ) : null}
    </section>
  );
}
