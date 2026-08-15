"use client";

import { contactLinks } from "@/lib/collection";
import { InstagramIcon, WhatsAppIcon } from "@/components/social-icons";
import { EnquiryForm } from "@/components/enquiry-form";
import { trackEvent } from "@/lib/analytics";

export function ViewingSection() {
  return (
    <section id="viewing" className="section-shell border-t border-stone-900/10 py-16 sm:py-20 lg:px-12 lg:py-24">
      <div>
        <p className="eyebrow">Private access</p>
        <h2 className="type-section mt-5 max-w-3xl font-serif">Begin a conversation.</h2>
        <p className="type-body mt-5 max-w-xl text-stone-700">
          For a piece, a gift, or a private recommendation.
        </p>
      </div>

      <div className="mt-10 max-w-5xl border-t border-stone-900/15 pt-8 sm:mt-12 sm:pt-10">
        <div className="max-w-4xl">
          <EnquiryForm />
          <div className="mt-7 flex flex-wrap gap-3">
            <a className="btn-primary gap-2" href={contactLinks.whatsappPrimary} target="_blank" rel="noreferrer" onClick={() => { trackEvent("whatsapp_click", { placement: "enquiry" }); trackEvent("direct_contact_click", { channel: "whatsapp" }); }}><WhatsAppIcon className="h-4 w-4" />Speak with ANURRAKTI</a>
            <a className="btn-secondary" href={contactLinks.call} onClick={() => trackEvent("direct_contact_click", { channel: "phone" })}>Call ANURRAKTI</a>
            <a className="btn-secondary gap-2" href={contactLinks.instagram} target="_blank" rel="noreferrer" onClick={() => trackEvent("direct_contact_click", { channel: "instagram" })}><InstagramIcon className="h-4 w-4" />DM on Instagram</a>
          </div>
        </div>
      </div>
    </section>
  );
}
