export function ViewingSection() {
  return (
    <section id="viewing" className="section-shell">
      <div className="grid gap-10 lg:grid-cols-[1fr_0.82fr] lg:items-end">
        <div>
          <p className="eyebrow">Private viewing</p>
          <h2 className="section-title max-w-3xl">
            Build the next step around the way the brand actually sells.
          </h2>
        </div>
        <div className="max-w-xl lg:ml-auto">
          <p className="text-base leading-7 text-stone-700">
            This first version is ready for a real inquiry flow once you decide
            whether customers should buy online, request pricing, message on
            WhatsApp, or book appointments.
          </p>
          <p className="mt-7 inline-flex border border-stone-950/15 px-5 py-4 text-xs font-bold uppercase tracking-[0.16em] text-stone-700">
            Contact method pending
          </p>
        </div>
      </div>
    </section>
  );
}
