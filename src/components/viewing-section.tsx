"use client";

import { contactLinks } from "@/lib/collection";
import { WhatsAppIcon } from "@/components/social-icons";
import { EnquiryForm } from "@/components/enquiry-form";
import { CallConversionLink } from "@/components/call-conversion-link";
import { trackEvent } from "@/lib/analytics";

export function ViewingSection() {
  return (
    <section id="viewing" className="section-shell border-t border-[var(--border-soft)] scroll-mt-24" aria-labelledby="private-enquiry-heading">
      <div className="home-enquiry-grid">
        <div>
          <p className="eyebrow">Private enquiry</p>
          <h2 id="private-enquiry-heading" className="section-title mt-5 max-w-[14ch]">Tell us what speaks to you.</h2>
          <p className="type-body mt-6 max-w-md text-[var(--ink-soft)]">A piece, a colour, an occasion or simply a feeling. We will help you find what feels right.</p>
          <a className="btn-primary mt-8 gap-3" href={contactLinks.whatsappPrimary} target="_blank" rel="noreferrer" onClick={() => {
            trackEvent("whatsapp_click", { placement: "enquiry" });
            trackEvent("direct_contact_click", { channel: "whatsapp", placement: "enquiry" });
          }}><WhatsAppIcon className="h-4 w-4" />Speak with ANURRAKTI</a>
          <div className="mt-6 flex flex-wrap gap-x-7 gap-y-2">
            <CallConversionLink className="editorial-link" href={contactLinks.call} placement="enquiry">Call us <span aria-hidden="true">↗</span></CallConversionLink>
            <a className="editorial-link" href={contactLinks.instagram} target="_blank" rel="noreferrer" onClick={() => trackEvent("direct_contact_click", { channel: "instagram", placement: "enquiry" })}>DM on Instagram <span aria-hidden="true">↗</span></a>
          </div>
        </div>
        <div className="border-t border-[var(--border-soft)] pt-8 md:border-l md:border-t-0 md:pl-10 md:pt-0 lg:pl-14">
          <p className="eyebrow">Prefer to write?</p>
          <h3 className="type-subheading mt-4 font-serif">Send a private enquiry.</h3>
          <EnquiryForm />
        </div>
      </div>
    </section>
  );
}
