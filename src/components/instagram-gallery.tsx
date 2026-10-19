import Image from "next/image";
import { InstagramIcon } from "@/components/social-icons";
import { contactLinks } from "@/lib/collection";

const instagramImages = [
  {
    src: "/images/campaign/red-anurrakti-rocks.png",
    alt: "ANURRAKTI red saree campaign photographed among rocks",
  },
  {
    src: "/images/campaign/blue-check-portrait-anurrakti.png",
    alt: "ANURRAKTI blue checked saree campaign portrait",
  },
  {
    src: "/images/campaign/anurrakti-staircase.png",
    alt: "ANURRAKTI black and grey saree campaign on a red staircase",
  },
  {
    src: "/images/campaign/anurrakti-garden.png",
    alt: "ANURRAKTI ivory saree photographed in a night garden",
  },
  {
    src: "/images/campaign/grey-anurrakti-rocks.png",
    alt: "ANURRAKTI grey saree campaign photographed among rocks",
  },
  {
    src: "/images/campaign/red-grey-portrait.jpg",
    alt: "ANURRAKTI red and grey drape in low evening light",
  },
] as const;

export function InstagramGallery() {
  return (
    <section className="section-shell" aria-labelledby="instagram-gallery-title">
      <header className="section-intro">
        <div>
          <p className="eyebrow">From the campaign</p>
          <h2 id="instagram-gallery-title" className="section-title mt-4">The world of ANURRAKTI.</h2>
        </div>
        <a className="editorial-link" href={contactLinks.instagram} target="_blank" rel="noreferrer">
          Follow @anurrakti <span aria-hidden="true">↗</span>
        </a>
      </header>
      <ul className="home-social-strip list-none">
        {instagramImages.map((image) => (
          <li key={image.src}>
            <a href={contactLinks.instagram} target="_blank" rel="noreferrer" aria-label={`View on Instagram: ${image.alt}`} className="media-frame media-portrait group block focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#7e271e]">
              <Image src={image.src} alt={image.alt} fill sizes="(max-width: 767px) 70vw, 16vw" className="object-cover transition-transform duration-700 group-hover:scale-[1.025] motion-reduce:transition-none" />
              <span className="absolute inset-0 grid place-items-center bg-stone-950/0 text-white opacity-0 transition duration-300 group-hover:bg-stone-950/20 group-hover:opacity-100 group-focus-visible:bg-stone-950/20 group-focus-visible:opacity-100">
                <InstagramIcon className="h-7 w-7" />
              </span>
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}
