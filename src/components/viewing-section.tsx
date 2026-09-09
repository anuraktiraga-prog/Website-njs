"use client";

import { contactLinks } from "@/lib/collection";
import { InstagramIcon, WhatsAppIcon } from "@/components/social-icons";
import { EnquiryForm } from "@/components/enquiry-form";
import { CallConversionLink } from "@/components/call-conversion-link";
import { trackEvent } from "@/lib/analytics";

export function ViewingSection() {
  return (
    <section id="viewing" className="section-shell border-t border-stone-900/10 py-16 sm:py-20 lg:px-12 lg:py-24" aria-labelledby="private-enquiry-heading">
      <div>
        <p className="eyebrow">Private enquiry</p>
        <h2 id="private-enquiry-heading" className="type-section mt-5 max-w-3xl font-serif">Tell us what speaks to you.</h2>
        <p className="type-body mt-5 max-w-xl text-stone-700">
          A piece, a colour, an occasion or simply a feeling. We will help you
          find what feels right.
        </p>
      </div>

      <div className="mt-8 flex flex-wrap gap-3">
        <a className="btn-primary gap-2" href={contactLinks.whatsappPrimary} target="_blank" rel="noreferrer" onClick={() => { trackEvent("whatsapp_click", { placement: "enquiry" }); trackEvent("direct_contact_click", { channel: "whatsapp", placement: "enquiry" }); }}><WhatsAppIcon className="h-4 w-4" />Speak with ANURRAKTI</a>
        <CallConversionLink className="btn-secondary" href={contactLinks.call} placement="enquiry">Call ANURRAKTI</CallConversionLink>
        <a className="btn-secondary gap-2" href={contactLinks.instagram} target="_blank" rel="noreferrer" onClick={() => trackEvent("direct_contact_click", { channel: "instagram", placement: "enquiry" })}><InstagramIcon className="h-4 w-4" />DM on Instagram</a>
      </div>

      <div className="mt-10 max-w-5xl border-t border-stone-900/15 pt-8 sm:mt-12 sm:pt-10">
        <div className="max-w-4xl">
          <p className="eyebrow">Prefer to write?</p>
          <h3 className="mt-4 font-serif text-3xl leading-tight text-stone-950 sm:text-4xl">Send a private enquiry.</h3>
          <div className="mt-8">
            <EnquiryForm />
          </div>
        </div>
      </div>
    </section>
  );
}
