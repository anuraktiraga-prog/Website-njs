import { contactLinks } from "@/lib/collection";

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
            For prices, availability and private viewings, begin a conversation
            with the House on WhatsApp. You can also send us a direct message on
            Instagram.
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <a
              className="btn-primary"
              href={contactLinks.whatsappPrimary}
              target="_blank"
              rel="noreferrer"
            >
              WhatsApp: 88002 19663
            </a>
            <a
              className="btn-secondary"
              href={contactLinks.whatsappSecondary}
              target="_blank"
              rel="noreferrer"
            >
              WhatsApp: 99587 04890
            </a>
            <a
              className="btn-secondary"
              href={contactLinks.instagram}
              target="_blank"
              rel="noreferrer"
            >
              DM on Instagram
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
