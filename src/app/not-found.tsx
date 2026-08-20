import Image from "next/image";
import Link from "next/link";
import { SiteHeader } from "@/components/site-header";
import { contactLinks } from "@/lib/collection";

const navigationLinks = [
  { label: "Return Home", href: "/" },
  { label: "Explore Collections", href: "/collection" },
  { label: "The House", href: "/house" },
];

export default function NotFound() {
  return (
    <>
      <SiteHeader />
      <main className="relative isolate flex min-h-[calc(100svh-9rem)] flex-1 items-center overflow-hidden bg-[#0f0c0a] px-5 py-16 text-[#fff7ec] sm:px-8 lg:px-12">
        <Image
          src="/images/campaign/red-grey-portrait.jpg"
          alt=""
          fill
          priority
          sizes="100vw"
          className="absolute inset-0 -z-20 object-cover object-[52%_28%] opacity-35"
        />
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_72%_28%,rgba(126,39,30,0.28),transparent_34%),linear-gradient(90deg,rgba(15,12,10,0.96),rgba(15,12,10,0.78)_42%,rgba(15,12,10,0.52))]" />
        <div className="absolute inset-x-0 bottom-0 -z-10 h-1/2 bg-gradient-to-t from-[#7e271e]/38 to-transparent" />

        <section className="mx-auto grid w-full max-w-[82rem] gap-10 lg:grid-cols-[minmax(0,0.85fr)_minmax(16rem,0.35fr)] lg:items-end">
          <div className="max-w-3xl">
            <p className="archive-index text-[#f4dfc7]">
              <span>404</span>
              <span className="geometry-line" aria-hidden="true" />
              <span>Page not found</span>
            </p>
            <h1 className="type-display mt-6 max-w-4xl font-serif text-[#fff7ec]">
              This thread of the story has slipped away.
            </h1>
            <p className="type-body mt-6 max-w-2xl text-[#f4dfc7]/86">
              The page you are looking for may have moved, changed its name, or
              no longer exists. Return to the House and continue discovering
              ANURRAKTI.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              {navigationLinks.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="inline-flex min-h-12 items-center justify-center border border-[#fff7ec]/22 px-5 text-[0.7rem] font-medium uppercase tracking-[0.2em] text-[#fff7ec] transition-colors hover:border-[#fff7ec] hover:bg-[#fff7ec] hover:text-[#1d1915] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#fff7ec]"
                >
                  {item.label}
                </Link>
              ))}
            </div>

            <a
              href={contactLinks.whatsappPrimary}
              target="_blank"
              rel="noreferrer"
              className="mt-6 inline-flex text-[0.72rem] uppercase tracking-[0.22em] text-[#f4dfc7]/78 underline underline-offset-8 transition-colors hover:text-[#fff7ec]"
            >
              Need help finding a piece? Text us on WhatsApp
            </a>
          </div>

          <div className="hidden justify-self-end lg:block">
            <div className="relative h-52 w-52 opacity-85">
              <Image
                src="/logos/anurrakti-stamp.png"
                alt="ANURRAKTI"
                fill
                sizes="13rem"
                className="object-contain brightness-0 invert"
              />
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
