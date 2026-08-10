export function ViewingSection() {
  return (
    <section id="viewing" className="section-shell">
      <div className="grid gap-10 lg:grid-cols-[1fr_0.82fr] lg:items-end">
        <div>
          <p className="eyebrow">Private viewing</p>
          <h2 className="section-title max-w-3xl">
            Some pieces are worn. Others become part of your story.
          </h2>
        </div>
        <div className="max-w-xl lg:ml-auto">
          <p className="text-base leading-7 text-stone-700">
            The inquiry experience is prepared for the next decision: private
            appointments, WhatsApp conversations, request pricing, or a
            considered bag flow when the house is ready to sell online.
          </p>
          <p className="mt-7 inline-flex border border-stone-950/15 px-5 py-4 text-xs font-bold uppercase tracking-[0.16em] text-stone-700">
            Enquiry method pending
          </p>
        </div>
      </div>
    </section>
  );
}
