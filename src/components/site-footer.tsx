import Link from "next/link";
import { contactLinks } from "@/lib/collection";
import { FooterEnquiryCta } from "@/components/footer-enquiry-cta";

const footerLinks = [
  { href: "/about", label: "About us" },
  { href: "/contact", label: "Contact us" },
  { href: "/blogs", label: "Journal" },
  { href: "/privacy", label: "Privacy policy" },
  { href: "/terms", label: "Terms & conditions" },
];

export function SiteFooter() {
  return (
    <footer className="border-t border-[var(--border-soft)] bg-[var(--background)]">
      <FooterEnquiryCta />
      <div className="page-width py-10 sm:py-14">
        <div className="flex flex-wrap items-end justify-between gap-6 border-b border-[var(--border-soft)] pb-8">
          <Link href="/" aria-label="ANURRAKTI home" className="font-serif text-[clamp(2.5rem,7.5vw,7rem)] leading-none tracking-[-0.04em]">ANURRAKTI</Link>
          <p className="type-caption max-w-xs text-[var(--ink-soft)]">Crafted once.<br />Remembered for a lifetime.</p>
        </div>
        <div className="mt-6 flex flex-wrap items-center justify-between gap-x-8 gap-y-5">
          <nav aria-label="Footer navigation">
            <ul className="flex flex-wrap gap-x-6 gap-y-1">
              {footerLinks.map((link) => (
                <li key={link.href}><Link href={link.href} className="editorial-link">{link.label}</Link></li>
              ))}
              <li><a href={contactLinks.instagram} target="_blank" rel="noreferrer" className="editorial-link">Instagram <span aria-hidden="true">↗</span></a></li>
            </ul>
          </nav>
          <p className="type-caption text-[var(--muted)]">© {new Date().getFullYear()} ANURRAKTI</p>
        </div>
      </div>
    </footer>
  );
}
