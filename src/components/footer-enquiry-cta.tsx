"use client";

import Link from "next/link";
import { WhatsAppIcon } from "@/components/social-icons";
import { trackEvent } from "@/lib/analytics";
import { contactLinks } from "@/lib/collection";

export function FooterEnquiryCta() {
  return (
    <section className="bg-[#421712] px-5 py-14 text-[#fff7ec] sm:px-8 sm:py-16 lg:px-12" aria-labelledby="footer-enquiry-heading">
      <div className="mx-auto grid max-w-[90rem] gap-8 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-end">
        <div>
          <p className="text-[0.7rem] font-semibold uppercase tracking-[0.24em] text-[#f4dfc7]">Private enquiry</p>
          <h2 id="footer-enquiry-heading" className="mt-4 max-w-3xl font-serif text-[clamp(2rem,4vw,3.6rem)] leading-[1.02] tracking-[-0.025em]">
            Found a piece that stayed with you?
          </h2>
          <p className="mt-5 max-w-xl text-base leading-7 text-[#f4dfc7]/85">
            Tell us which saree you are considering and we will share the confirmed details for that piece.
          </p>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row">
          <a
            className="btn-light gap-2"
            href={contactLinks.whatsappPrimary}
            target="_blank"
            rel="noreferrer"
            onClick={() => {
              trackEvent("whatsapp_click", { placement: "footer_enquiry" });
              trackEvent("direct_contact_click", { channel: "whatsapp", placement: "footer_enquiry" });
            }}
          >
            <WhatsAppIcon className="h-4 w-4" />
            Speak with ANURRAKTI
          </a>
          <Link className="btn-ghost" href="/contact">View contact options</Link>
        </div>
      </div>
    </section>
  );
}
