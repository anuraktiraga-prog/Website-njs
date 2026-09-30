import Image from "next/image";
import Link from "next/link";
import {
  collectionPath,
  collections,
  productPath,
  type CollectionArchive,
} from "@/lib/collection";

function CollectionTriptych({ collection }: { collection: CollectionArchive }) {
  const pieces = collection.pieces.slice(0, 3);

  return (
    <article aria-labelledby={`home-${collection.id}-title`}>
      <header className="mb-5 flex items-end justify-between gap-5 border-b border-stone-900/15 pb-4 sm:mb-6">
        <div>
          <p className="eyebrow">Collection {collection.number}</p>
          <h3
            id={`home-${collection.id}-title`}
            className="mt-2 font-serif text-[clamp(1.7rem,2.5vw,2.5rem)] leading-none tracking-[-0.02em] text-stone-950"
          >
            {collection.name}
          </h3>
        </div>
        <Link
          href={collectionPath(collection)}
          className="group inline-flex items-center gap-2 pb-0.5 text-[0.66rem] font-semibold uppercase tracking-[0.17em] text-stone-600 transition-colors hover:text-[#7e271e] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#7e271e]"
        >
          Explore <span aria-hidden="true" className="transition-transform group-hover:translate-x-1">→</span>
        </Link>
      </header>

      <ul className="grid list-none grid-cols-3 gap-2 sm:gap-3">
        {pieces.map((piece) => (
          <li key={piece.src}>
            <Link
              href={productPath(piece)}
              aria-label={`View ${collection.name} piece ${piece.title}`}
              className="group block focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#7e271e]"
            >
              <figure>
                <div className="relative aspect-[4/5] overflow-hidden bg-[#e7dccd]">
                  <Image
                    src={piece.src}
                    alt={piece.alt}
                    fill
                    sizes="(max-width: 1023px) 31vw, 15vw"
                    className="object-cover transition duration-700 ease-out group-hover:scale-[1.025] group-hover:brightness-105"
                  />
                </div>
                <figcaption className="mt-3 flex items-center justify-between gap-2 text-[0.62rem] font-medium uppercase tracking-[0.16em] text-stone-600 sm:text-[0.68rem]">
                  <span>{collection.name} {piece.title}</span>
                  <span aria-hidden="true" className="text-sm leading-none opacity-0 transition group-hover:translate-x-0.5 group-hover:opacity-100">→</span>
                </figcaption>
              </figure>
            </Link>
          </li>
        ))}
      </ul>
    </article>
  );
}

export function HomeCollectionShowcase() {
  const orderedCollections = [collections[2], collections[1], collections[0]].filter(
    (collection): collection is CollectionArchive => Boolean(collection),
  );

  return (
    <section
      className="border-b border-stone-900/10 bg-[#f8f4ee] px-5 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24"
      aria-labelledby="home-collections-title"
    >
      <div className="mx-auto max-w-[90rem]">
        <header className="mb-10 text-center sm:mb-14">
          <p className="eyebrow">The collections</p>
          <h2 id="home-collections-title" className="type-section mt-4 font-serif text-stone-950">
            Three moods. Eighteen singular sarees.
          </h2>
        </header>

        <div className="grid gap-14 lg:grid-cols-3 lg:gap-5">
          {orderedCollections.map((collection) => (
            <CollectionTriptych key={collection.id} collection={collection} />
          ))}
        </div>
      </div>
    </section>
  );
}
