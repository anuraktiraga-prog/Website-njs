import Link from "next/link";
import { contactLinks } from "@/lib/collection";

export function SiteFooter() {
  return (
    <footer className="border-t border-stone-900/10 bg-[#efe5d7]">
      <div className="mx-auto grid max-w-[90rem] gap-7 px-5 py-9 sm:px-8 lg:grid-cols-[0.22fr_0.58fr_0.2fr] lg:items-center lg:px-12">
        <p className="font-serif text-sm uppercase tracking-[0.16em] text-stone-800">
          ANURRAKTI
        </p>
        <nav aria-label="Footer navigation">
          <ul className="flex flex-wrap gap-x-6 gap-y-3 text-[10px] font-semibold uppercase tracking-[0.16em] text-stone-600">
            <li><Link href="/about" className="transition-colors hover:text-[#7e271e]">About us</Link></li>
            <li><Link href="/contact" className="transition-colors hover:text-[#7e271e]">Contact us</Link></li>
            <li><Link href="/blogs" className="transition-colors hover:text-[#7e271e]">Blog</Link></li>
            <li><Link href="/privacy" className="transition-colors hover:text-[#7e271e]">Privacy policy</Link></li>
            <li><Link href="/terms" className="transition-colors hover:text-[#7e271e]">Terms &amp; conditions</Link></li>
            <li><a href={contactLinks.instagram} target="_blank" rel="noreferrer" className="transition-colors hover:text-[#7e271e]">Instagram</a></li>
          </ul>
        </nav>
        <p className="text-[10px] uppercase tracking-[0.14em] text-stone-500 lg:text-right">
          © {new Date().getFullYear()} ANURRAKTI
        </p>
      </div>
    </footer>
  );
}
