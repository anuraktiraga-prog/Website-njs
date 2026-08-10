const navItems = [
  { label: "Collection", href: "#collection" },
  { label: "Craft", href: "#craft" },
  { label: "Viewing", href: "#viewing" },
];

export function SiteHeader() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-stone-950/10 bg-[rgba(246,240,231,0.78)] backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 sm:px-8">
        <a
          href="#top"
          className="font-serif text-lg uppercase tracking-[0.28em] text-stone-950"
          aria-label="A Jendra home"
        >
          A Jendra
        </a>
        <nav aria-label="Primary navigation">
          <ul className="flex items-center gap-4 text-xs uppercase tracking-[0.18em] text-stone-700 sm:gap-7">
            {navItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="transition-colors hover:text-stone-950 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-stone-950"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
