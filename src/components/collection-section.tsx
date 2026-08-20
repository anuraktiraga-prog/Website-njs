import { CollectionCard } from "@/components/collection-card";
import { collectionPath, collections, type CollectionArchive } from "@/lib/collection";
import Link from "next/link";

type CollectionSectionProps = {
  featuredOnly?: boolean;
  collection?: CollectionArchive;
};

export function CollectionSection({
  featuredOnly = false,
  collection = collections[0],
}: CollectionSectionProps) {
  const pieces = featuredOnly ? collection.pieces.slice(0, 3) : collection.pieces;

  return (
    <section id="collection" className="section-shell overflow-hidden">
      <div className="mb-12 grid gap-8 lg:mb-16 lg:grid-cols-[minmax(10rem,0.3fr)_minmax(0,1fr)] lg:gap-12">
        <p className="eyebrow animate-[collection-rise_600ms_ease-out_both] lg:pt-4">
          {featuredOnly ? "Selected pieces" : `${collection.number} ${collection.name}`}
        </p>
        <div className="min-w-0 animate-[collection-rise_700ms_ease-out_100ms_both]">
          <h2 className="section-title max-w-4xl font-serif text-stone-950">
            {featuredOnly ? "Pieces with a point of view." : `${collection.name} collection.`}
          </h2>
          <p className="type-body mt-6 max-w-[40rem] text-stone-700 sm:mt-8">
            {featuredOnly
              ? "Created individually. Chosen personally. Never designed to disappear into a room."
              : collection.description}
          </p>
        </div>
      </div>

      <div className={`grid gap-x-5 gap-y-12 ${featuredOnly ? "sm:grid-cols-3 lg:gap-x-8" : "sm:grid-cols-2 lg:grid-cols-3"}`}>
        {pieces.map((image, index) => (
          <CollectionCard key={image.src} image={image} index={index} variant={featuredOnly ? "featured" : "archive"} />
        ))}
      </div>

      {featuredOnly ? (
        <div className="mt-10 flex justify-center">
          <Link className="btn-secondary" href={collectionPath(collection)}>
            Explore {collection.name}
          </Link>
        </div>
      ) : null}
    </section>
  );
}
