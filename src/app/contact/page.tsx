import type { Metadata } from "next";
import Link from "next/link";
import { EnquiryForm } from "@/components/enquiry-form";
import { InstagramIcon, WhatsAppIcon } from "@/components/social-icons";
import { SiteHeader } from "@/components/site-header";
import { contactLinks } from "@/lib/collection";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Contact ANURRAKTI to find a collection piece that speaks to you or request a private recommendation.",
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Contact ANURRAKTI",
    description:
      "Tell us what speaks to you and begin a private conversation with ANURRAKTI.",
    url: "/contact",
  },
};

const contactMethods = [
  {
    label: "WhatsApp",
    detail: "+91 88002 19663",
    href: contactLinks.whatsappPrimary,
    icon: WhatsAppIcon,
  },
  {
    label: "WhatsApp",
    detail: "+91 99587 04890",
    href: contactLinks.whatsappSecondary,
    icon: WhatsAppIcon,
  },
  {
    label: "Call",
    detail: "+91 99587 04890",
    href: contactLinks.callSecondary,
  },
  {
    label: "Instagram",
    detail: "@anurrakti",
    href: contactLinks.instagram,
    icon: InstagramIcon,
  },
];

export default function ContactPage() {
  const contactStructuredData = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "@id": "https://www.anurrakti.com/contact#webpage",
    url: "https://www.anurrakti.com/contact",
    name: "Contact ANURRAKTI",
    description:
      "Contact ANURRAKTI to find a collection piece that speaks to you or request a private recommendation.",
    inLanguage: "en-IN",
    isPartOf: { "@id": "https://www.anurrakti.com/#website" },
    about: { "@id": "https://www.anurrakti.com/#organization" },
    mainEntity: {
      "@id": "https://www.anurrakti.com/#organization",
    },
  };

  return (
    <>
      <SiteHeader />
      <main className="flex-1">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(contactStructuredData).replace(/</g, "\\u003c"),
          }}
        />
        <section className="section-shell border-b border-stone-900/10 pb-14 pt-16 sm:pb-20 sm:pt-24">
          <p className="eyebrow">Contact us</p>
          <div className="mt-6 grid gap-8 lg:grid-cols-[0.68fr_0.32fr] lg:items-end lg:gap-16">
            <div>
              <h1 className="type-page-title max-w-4xl font-serif text-stone-950">
                Tell us what speaks to you.
              </h1>
              <p className="type-lead mt-7 max-w-2xl text-stone-700">
                A piece, a colour, an occasion or a feeling—we will help you find
                the expression that feels right.
              </p>
            </div>
            <p className="max-w-md text-sm leading-relaxed text-stone-600">
              Share the piece or occasion you have in mind. Please do not send payment details or other sensitive information through the enquiry form.
            </p>
          </div>
        </section>

        <section className="section-shell border-b border-stone-900/10 py-12 sm:py-16" aria-labelledby="direct-contact">
          <div className="grid gap-8 lg:grid-cols-[0.34fr_0.66fr] lg:gap-14">
            <div>
              <p className="eyebrow">Direct contact</p>
              <h2 id="direct-contact" className="mt-4 font-serif text-3xl leading-tight text-stone-950 sm:text-4xl">
                Choose how you would like to begin.
              </h2>
            </div>
            <div className="grid gap-px bg-stone-900/15 sm:grid-cols-2">
              {contactMethods.map((method) => {
                const Icon = method.icon;
                return (
                  <a
                    key={`${method.label}-${method.detail}`}
                    href={method.href}
                    target={method.label === "Call" ? undefined : "_blank"}
                    rel={method.label === "Call" ? undefined : "noreferrer"}
                    className="group bg-[#f7f1e8] p-6 transition-colors hover:bg-[#efe5d7] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-[#7e271e]"
                  >
                    <span className="flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.18em] text-stone-500">
                      {Icon ? <Icon className="h-4 w-4" /> : null}
                      {method.label}
                    </span>
                    <span className="mt-4 block font-serif text-2xl text-stone-950 transition-colors group-hover:text-[#7e271e]">
                      {method.detail}
                    </span>
                  </a>
                );
              })}
            </div>
          </div>
        </section>

        <section className="section-shell py-14 sm:py-20" aria-labelledby="contact-form-heading">
          <div className="max-w-4xl">
            <p className="eyebrow">Private enquiry</p>
            <h2 id="contact-form-heading" className="mt-4 font-serif text-4xl leading-tight text-stone-950 sm:text-5xl">
              What are you drawn to?
            </h2>
            <p className="mt-5 max-w-2xl text-stone-700">
              Your details are used to respond to this enquiry. Read our{" "}
              <Link href="/privacy" className="underline decoration-[#7e271e] underline-offset-4">
                Privacy Policy
              </Link>{" "}
              for more information.
            </p>
            <EnquiryForm />
          </div>
        </section>
      </main>
    </>
  );
}
