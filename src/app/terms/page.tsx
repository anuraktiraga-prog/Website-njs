import type { Metadata } from "next";
import Link from "next/link";
import { SiteHeader } from "@/components/site-header";

export const metadata: Metadata = {
  title: "Terms and Conditions",
  description: "Terms and conditions governing use of the ANURRAKTI website and its enquiry services.",
  alternates: { canonical: "/terms" },
  robots: { index: true, follow: true },
};

export default function TermsPage() {
  return (
    <>
      <SiteHeader />
      <main className="flex-1">
        <article className="section-shell max-w-4xl">
          <p className="eyebrow">Legal / Terms and conditions</p>
          <h1 className="type-page-title mt-5 max-w-3xl font-serif text-stone-950">
            Terms and conditions.
          </h1>
          <p className="type-lead mt-6 max-w-2xl text-stone-700">
            These terms govern your use of the ANURRAKTI website and its enquiry services.
          </p>
          <p className="mt-5 text-sm text-stone-500">Last updated: 20 August 2026</p>

          <div className="mt-14 grid gap-12 text-base leading-7 text-stone-700">
            <PolicySection number="01" title="Acceptance of these terms">
              <p>
                By accessing or using this website, you agree to these terms and our <Link href="/privacy" className="underline decoration-[#7e271e] underline-offset-4">Privacy Policy</Link>. If you do not agree, please do not use the website or submit information through it.
              </p>
            </PolicySection>

            <PolicySection number="02" title="About this website">
              <p>
                This website presents ANURRAKTI collections, editorial content, ready-to-wear pieces, gifting services and ways to contact the House. Website content is provided for general information and may be changed, corrected or withdrawn without notice.
              </p>
            </PolicySection>

            <PolicySection number="03" title="Availability, enquiries and orders">
              <p>
                Displaying a piece does not guarantee that it remains available. Submitting an enquiry, sending a message or discussing a piece does not by itself create a reservation, order or contract of sale. A purchase is confirmed only when ANURRAKTI communicates acceptance and the applicable price, payment, delivery and other order terms are agreed.
              </p>
            </PolicySection>

            <PolicySection number="04" title="Product information">
              <p>
                We aim to describe pieces and display colours accurately. Textile colour, texture, scale and finish can appear differently because of photography, lighting and screen settings. Handmade or individually finished elements may carry natural variation. Please ask for any detail that is material to your decision before confirming a purchase.
              </p>
            </PolicySection>

            <PolicySection number="05" title="Pricing, payment, delivery and returns">
              <p>
                The website does not currently provide a public checkout. Pricing, taxes, payment method, delivery, alteration, cancellation and return terms will be communicated for the specific transaction. Where those written transaction terms differ from this page, the transaction-specific terms govern that purchase to the extent permitted by applicable law.
              </p>
            </PolicySection>

            <PolicySection number="06" title="Permitted use">
              <p>You may use this website for lawful, personal and non-commercial purposes. You must not:</p>
              <ul className="mt-4 grid gap-3 border-l border-[#7e271e]/35 pl-6">
                <li>interfere with the security, availability or operation of the website;</li>
                <li>submit false, unlawful, abusive or misleading information;</li>
                <li>attempt to obtain unauthorised access to any account, system or data;</li>
                <li>copy, scrape or reuse website content for commercial purposes without written permission; or</li>
                <li>use the website in a way that infringes another person&apos;s rights or applicable law.</li>
              </ul>
            </PolicySection>

            <PolicySection number="07" title="Intellectual property">
              <p>
                Unless otherwise stated, the ANURRAKTI name, logos, website design, photographs, text, artwork and other original content are owned by or licensed to ANURRAKTI. No ownership rights are transferred to you. Limited personal viewing does not grant permission to reproduce, modify, publish, sell or commercially exploit that material.
              </p>
            </PolicySection>

            <PolicySection number="08" title="Third-party services and links">
              <p>
                The website may link to WhatsApp, Instagram, Google and other third-party services. Those services operate under their own terms and privacy practices. ANURRAKTI is not responsible for third-party websites, availability, content or actions merely because a link is provided.
              </p>
            </PolicySection>

            <PolicySection number="09" title="Disclaimers and liability">
              <p>
                We take reasonable care with the website, but do not promise that it will always be uninterrupted, error-free or free from harmful components. To the fullest extent permitted by applicable law, ANURRAKTI is not liable for indirect or consequential loss arising solely from use of, or inability to use, this website. Nothing in these terms excludes liability or consumer rights that cannot lawfully be excluded.
              </p>
            </PolicySection>

            <PolicySection number="10" title="Changes and governing law">
              <p>
                We may update these terms when the website, services or legal requirements change. The revised date will appear above. These terms are governed by laws applicable in India, and disputes are subject to courts with competent jurisdiction, without limiting any mandatory rights available under applicable law.
              </p>
            </PolicySection>

            <PolicySection number="11" title="Contact">
              <p>
                Questions about these terms can be sent through our <Link href="/contact" className="underline decoration-[#7e271e] underline-offset-4">Contact Us page</Link>. Please include “Terms” in your message so it can be directed appropriately.
              </p>
            </PolicySection>
          </div>
        </article>
      </main>
    </>
  );
}

function PolicySection({
  number,
  title,
  children,
}: {
  number: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="border-t border-stone-900/15 pt-7">
      <p className="eyebrow">{number}</p>
      <h2 className="mt-3 font-serif text-3xl leading-tight text-stone-950">{title}</h2>
      <div className="mt-4">{children}</div>
    </section>
  );
}
