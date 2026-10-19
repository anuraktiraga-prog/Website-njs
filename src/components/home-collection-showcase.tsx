import Image from "next/image";
import Link from "next/link";
import { collectionPath, collections } from "@/lib/collection";

export function HomeCollectionShowcase() {
  const orderedCollections = [...collections].reverse();

  return (
    <section className="section-shell" aria-labelledby="home-collections-title">
      <header className="section-intro">
        <div>
          <p className="eyebrow">The collections</p>
          <h2 id="home-collections-title" className="section-title mt-4 max-w-xl">Three moods.<br />Eighteen singular sarees.</h2>
        </div>
        <Link href="/collection" className="editorial-link">View all sarees <span aria-hidden="true">→</span></Link>
      </header>
      <div className="home-collection-grid">
        {orderedCollections.map((collection) => {
          const image = collection.pieces[0];
          if (!image) return null;
          return (
            <article key={collection.id} aria-labelledby={`home-${collection.id}-title`}>
              <Link href={collectionPath(collection)} className="group block focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#7e271e]">
                <figure>
                  <div className="media-frame media-portrait">
                    <Image src={image.src} alt={image.alt} fill sizes="(max-width: 767px) 92vw, 31vw" className="object-cover transition-transform duration-700 group-hover:scale-[1.025] motion-reduce:transition-none" />
                  </div>
                  <figcaption className="mt-5 flex items-center justify-between gap-4 border-b border-[var(--border-soft)] pb-5">
                    <div>
                      <p className="eyebrow">Collection {collection.number}</p>
                      <h3 id={`home-${collection.id}-title`} className="mt-2 font-serif text-[clamp(1.75rem,2.5vw,2.5rem)] leading-none">{collection.name}</h3>
                    </div>
                    <span className="type-label flex items-center gap-3">Explore <span aria-hidden="true" className="text-lg transition-transform group-hover:translate-x-1">→</span></span>
                  </figcaption>
                </figure>
              </Link>
            </article>
          );
        })}
      </div>
    </section>
  );
}
