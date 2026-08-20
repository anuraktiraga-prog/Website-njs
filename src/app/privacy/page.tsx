import type { Metadata } from "next";
import Link from "next/link";
import { SiteHeader } from "@/components/site-header";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Learn what information ANURRAKTI collects through its website, why it is used, which services process it and the choices available to you.",
  alternates: { canonical: "/privacy" },
  robots: { index: true, follow: true },
};

export default function PrivacyPage() {
  return (
    <>
      <SiteHeader />
      <main className="flex-1">
        <article className="section-shell max-w-4xl">
          <p className="eyebrow">Legal / Privacy policy</p>
          <h1 className="type-page-title mt-5 max-w-3xl font-serif text-stone-950">
            Your privacy, held with care.
          </h1>
          <p className="type-lead mt-6 max-w-2xl text-stone-700">
            This policy explains how ANURRAKTI handles information when you visit the website, submit an enquiry or contact us through a linked service.
          </p>
          <p className="mt-5 text-sm text-stone-500">Last updated: 20 August 2026</p>

          <div className="mt-14 grid gap-12 text-base leading-7 text-stone-700">
            <PolicySection number="01" title="Information you provide">
              <p>
                When you submit an enquiry, we receive the information entered in the form: your name, phone number, optional email address, area of interest and message. If you contact us through WhatsApp, Instagram or by phone, the relevant service and ANURRAKTI receive the information you choose to share through that channel.
              </p>
              <p className="mt-4">
                Please do not submit payment-card details, government identifiers, passwords, health information or other sensitive personal information through the website enquiry form.
              </p>
            </PolicySection>

            <PolicySection number="02" title="Technical and usage information">
              <p>
                The website uses Google Analytics, Vercel Analytics and Vercel Speed Insights to understand visits and improve performance. Depending on the provider and your settings, these services may process information such as pages viewed, approximate location derived from network information, device and browser type, referral source, interactions, performance measurements and IP-related technical data. Cookies or similar technologies may be used by a provider under its own terms.
              </p>
            </PolicySection>

            <PolicySection number="03" title="How we use information">
              <ul className="grid gap-3 border-l border-[#7e271e]/35 pl-6">
                <li>to respond to enquiries and discuss pieces, availability, viewings, ready-to-wear or gifting;</li>
                <li>to maintain appropriate records of client communications;</li>
                <li>to operate, secure, diagnose and improve the website;</li>
                <li>to understand aggregated website usage and content performance; and</li>
                <li>to comply with legal obligations and protect legitimate rights.</li>
              </ul>
              <p className="mt-4">ANURRAKTI does not sell personal information submitted through the enquiry form.</p>
            </PolicySection>

            <PolicySection number="04" title="Where information is processed">
              <p>
                Website enquiries are forwarded to and recorded in a Google Sheet managed for ANURRAKTI. Website and analytics data may also be processed by Google and Vercel. Direct messages or calls are processed through the provider you choose, such as WhatsApp, Instagram or your telecommunications provider. These companies apply their own privacy terms and may process information in countries other than your own.
              </p>
            </PolicySection>

            <PolicySection number="05" title="Sharing and disclosure">
              <p>
                Information may be available to people who need it to operate ANURRAKTI and respond to you, and to service providers that host, analyse or support the website and enquiry workflow. We may also disclose information when required by law, to respond to lawful process, or to protect rights, safety and security. We do not authorise service providers to use enquiry information for their own unrelated marketing.
              </p>
            </PolicySection>

            <PolicySection number="06" title="Retention and security">
              <p>
                We retain enquiry information only for as long as reasonably needed to respond, maintain relevant business records, resolve issues and meet legal requirements. Retention can vary with the nature of the conversation. Reasonable administrative and technical measures are used to protect information, but no online transmission or storage system can be guaranteed completely secure.
              </p>
            </PolicySection>

            <PolicySection number="07" title="Your choices and rights">
              <p>
                You may ask to access, correct or delete enquiry information held by ANURRAKTI, withdraw from future direct contact, or raise a privacy question. Some information may need to be retained where permitted or required for legal, security or record-keeping reasons. Rights and available remedies vary by location and applicable law.
              </p>
              <p className="mt-4">
                You can also use browser controls to limit cookies or analytics technologies. Blocking them may change how parts of the website function or how accurately visits are measured.
              </p>
            </PolicySection>

            <PolicySection number="08" title="Children's privacy">
              <p>
                The enquiry service is not directed at children, and ANURRAKTI does not knowingly seek personal information from children through it. A parent or guardian who believes a child has submitted information can contact us to request review and appropriate deletion.
              </p>
            </PolicySection>

            <PolicySection number="09" title="Updates to this policy">
              <p>
                We may update this policy when the website, service providers or privacy practices change. The most recent revision date will appear at the top of this page. Material changes should be reviewed before you submit new information.
              </p>
            </PolicySection>

            <PolicySection number="10" title="Contact us about privacy">
              <p>
                Submit a request through our <Link href="/contact" className="underline decoration-[#7e271e] underline-offset-4">Contact Us page</Link> and include “Privacy” in the message. To protect your information, we may need to verify that a request relates to you before acting on it.
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
