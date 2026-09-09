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
    <section
      className="overflow-hidden border-t border-stone-900/10 bg-[#fbf8f3] py-16 sm:py-20 lg:py-24"
      aria-labelledby="instagram-gallery-title"
    >
      <div className="mx-auto max-w-[90rem] px-5 sm:px-8 lg:px-12">
        <header className="mb-9 text-center sm:mb-12">
          <p className="eyebrow">@anurrakti</p>
          <h2
            id="instagram-gallery-title"
            className="mt-4 text-[clamp(1.2rem,2.2vw,1.75rem)] font-medium uppercase tracking-[0.3em] text-stone-800"
          >
            Follow us on Instagram
          </h2>
        </header>

        <ul className="-mx-5 flex list-none gap-3 overflow-x-auto px-5 pb-3 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden sm:-mx-8 sm:gap-4 sm:px-8 lg:mx-0 lg:grid lg:grid-cols-6 lg:overflow-visible lg:px-0 lg:pb-0">
          {instagramImages.map((image) => (
            <li key={image.src} className="w-[68vw] max-w-[18rem] shrink-0 sm:w-[36vw] lg:w-auto lg:max-w-none">
              <a
                href={contactLinks.instagram}
                target="_blank"
                rel="noreferrer"
                aria-label={`View on Instagram: ${image.alt}`}
                className="group relative block aspect-[4/5] overflow-hidden rounded-[1.15rem] bg-stone-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#7e271e]"
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  sizes="(max-width: 639px) 68vw, (max-width: 1023px) 36vw, 16vw"
                  className="object-cover transition duration-700 ease-out group-hover:scale-[1.035]"
                />
                <span className="absolute inset-0 grid place-items-center bg-stone-950/0 text-white opacity-0 transition duration-300 group-hover:bg-stone-950/22 group-hover:opacity-100 group-focus-visible:bg-stone-950/22 group-focus-visible:opacity-100">
                  <InstagramIcon className="h-7 w-7" />
                </span>
              </a>
            </li>
          ))}
        </ul>

        <div className="mt-9 flex justify-center sm:mt-11">
          <a className="btn-secondary gap-2" href={contactLinks.instagram} target="_blank" rel="noreferrer">
            <InstagramIcon className="h-4 w-4" />
            Follow @anurrakti
          </a>
        </div>
      </div>
    </section>
  );
}
