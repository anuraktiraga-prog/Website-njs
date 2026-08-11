import Image from "next/image";

const navItems = [
  { label: "EHSAAS", href: "#collection" },
  { label: "Ready to wear", href: "#ready-to-wear" },
  { label: "The House", href: "#craft" },
  { label: "Enquire", href: "#viewing" },
];

export function SiteHeader() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-stone-100/15 bg-[rgba(29,25,21,0.72)] text-stone-50 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 sm:px-8">
        <a
          href="#top"
          className="flex items-center gap-3 font-serif text-lg uppercase tracking-[0.24em]"
          aria-label="Anurrakti home"
        >
          <span className="flex h-9 w-9 items-center justify-center">
            <Image
              src="/images/brand/anurrakti-knot-red.png"
              alt=""
              width={661}
              height={609}
              className="h-9 w-9 object-contain"
            />
          </span>
          <span>ANURRAKTI</span>
        </a>
        <nav aria-label="Primary navigation">
          <ul className="flex items-center gap-3 text-[0.6rem] uppercase tracking-[0.15em] text-stone-200 sm:gap-5 sm:text-xs sm:tracking-[0.18em] lg:gap-7">
            {navItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="hidden transition-colors hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-stone-50 sm:inline"
                >
                  {item.label}
                </a>
              </li>
            ))}
            <li>
              <a href="#collection" className="sm:hidden">
                Menu
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
