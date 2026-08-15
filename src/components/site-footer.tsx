import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="border-t border-stone-900/10 bg-[#efe5d7]">
      <div className="mx-auto flex max-w-[90rem] flex-col gap-5 px-5 py-8 sm:px-8 md:flex-row md:items-center md:justify-between">
        <p className="font-serif text-sm uppercase tracking-[0.16em] text-stone-800">
          ANURRAKTI
        </p>
        <div className="flex flex-wrap gap-x-6 gap-y-3 text-[10px] font-semibold uppercase tracking-[0.16em] text-stone-600">
          <Link href="/privacy" className="transition-colors hover:text-[#7e271e]">
            Privacy policy
          </Link>
          <Link href="/#viewing" className="transition-colors hover:text-[#7e271e]">
            Private enquiry
          </Link>
          <Link href="/gift-concierge" className="transition-colors hover:text-[#7e271e]">
            Gift Concierge
          </Link>
          <a href="https://www.instagram.com/anurrakti/" target="_blank" rel="noreferrer" className="transition-colors hover:text-[#7e271e]">
            Instagram
          </a>
        </div>
        <p className="text-[10px] uppercase tracking-[0.14em] text-stone-500">
          © {new Date().getFullYear()} ANURRAKTI
        </p>
      </div>
    </footer>
  );
}
