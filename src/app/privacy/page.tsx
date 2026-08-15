import type { Metadata } from "next";
import Link from "next/link";
import { SiteHeader } from "@/components/site-header";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy information for visitors to the ANURRAKTI website.",
};

export default function PrivacyPage() {
  return (
    <>
      <SiteHeader />
      <main className="flex-1">
        <article className="section-shell max-w-4xl">
          <p className="eyebrow">Privacy policy</p>
          <h1 className="section-title mt-5 max-w-3xl">Your privacy, held with care.</h1>
          <p className="mt-6 max-w-2xl text-base leading-7 text-stone-700">
            This policy explains how ANURRAKTI handles information submitted through this website. Last updated: August 12, 2026.
          </p>

          <div className="mt-12 grid gap-10 text-base leading-7 text-stone-700">
            <section>
              <h2 className="font-serif text-3xl leading-none text-stone-900">Information we collect</h2>
              <p className="mt-4">When you submit an enquiry, we collect the details you choose to provide: your name, phone number, email address, area of interest and message. We also receive limited technical and usage information through analytics tools.</p>
            </section>
            <section>
              <h2 className="font-serif text-3xl leading-none text-stone-900">How we use it</h2>
              <p className="mt-4">We use enquiry information to respond to you, arrange private viewings, answer availability or collection questions, and maintain our client communications. We do not sell your personal information.</p>
            </section>
            <section>
              <h2 className="font-serif text-3xl leading-none text-stone-900">Where it is stored</h2>
              <p className="mt-4">Website enquiries are recorded in a Google Sheet managed by ANURRAKTI. Our site also uses Google Analytics, Vercel Analytics and Vercel Speed Insights to understand site visits and improve performance. These providers may process technical information such as device, browser and usage data under their own privacy terms.</p>
            </section>
            <section>
              <h2 className="font-serif text-3xl leading-none text-stone-900">Your choices</h2>
              <p className="mt-4">You may ask us to access, correct or delete your enquiry information, or ask us to stop contacting you. You can also manage analytics cookies through your browser settings.</p>
            </section>
            <section>
              <h2 className="font-serif text-3xl leading-none text-stone-900">Contact</h2>
              <p className="mt-4">For a privacy request or question, please contact us through the <Link href="/#viewing" className="underline decoration-[#7e271e] underline-offset-4">Private enquiry form</Link> and include “Privacy” in your message, or send us a direct message on Instagram.</p>
            </section>
          </div>
        </article>
      </main>
    </>
  );
}
