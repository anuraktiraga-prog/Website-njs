import Image from "next/image";
import Link from "next/link";
import { ImageFrame } from "@/components/image-frame";
import { campaignImages, contactLinks } from "@/lib/collection";

export function HeroSection() {
  const [heroImage, secondaryImage, thirdImage] = campaignImages;

  return (
    <section
      id="top"
      className="relative min-h-screen overflow-hidden bg-stone-950 text-stone-50"
    >
      <Image
        src={heroImage.src}
        alt={heroImage.alt}
        width={heroImage.width}
        height={heroImage.height}
        preload
        loading="eager"
        sizes="100vw"
        className="absolute inset-0 h-full w-full object-cover object-[50%_22%]"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-stone-950/50 via-stone-950/15 to-stone-950/80" />

      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col justify-end px-5 pb-8 pt-28 sm:px-8 lg:pb-10">
        <div className="max-w-3xl">
          <p className="mb-5 text-xs uppercase tracking-[0.3em] text-stone-200">
            A new expression of the drape
          </p>
          <h1 className="font-serif text-6xl leading-[0.9] text-[#fff5df] sm:text-8xl lg:text-9xl">
            ANURRAKTI
          </h1>
          <p className="mt-6 max-w-xl text-base leading-7 text-stone-100 sm:text-lg">
            Sarees made to be remembered.
          </p>
        </div>

        <div className="mt-10 grid gap-6 border-t border-stone-50/25 pt-6 lg:grid-cols-[1fr_auto] lg:items-end">
          <div className="flex flex-wrap gap-3">
            <Link className="btn-light" href="/collection">
              Discover EHSAAS
            </Link>
            <a
              className="btn-ghost"
              href={contactLinks.whatsappPrimary}
              target="_blank"
              rel="noreferrer"
            >
              Enquire on WhatsApp
            </a>
          </div>
          <div className="hidden gap-3 sm:grid sm:grid-cols-2">
            {[secondaryImage, thirdImage].map((image) => (
              <ImageFrame
                key={image.src}
                image={image}
                className="h-40 w-28 border border-stone-50/20"
                sizes="112px"
                imageClassName="object-[50%_22%]"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
