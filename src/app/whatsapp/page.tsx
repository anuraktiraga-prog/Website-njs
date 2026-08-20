import type { Metadata } from "next";
import Link from "next/link";
import { WhatsAppRedirect } from "@/components/whatsapp-redirect";
import { defaultWhatsAppMessage } from "@/lib/collection";

export const metadata: Metadata = {
  title: "Opening WhatsApp",
  description: "Continue your ANURRAKTI enquiry on WhatsApp.",
  robots: {
    index: false,
    follow: false,
  },
};

type WhatsAppPageProps = {
  searchParams: Promise<{
    phone?: string;
    text?: string;
  }>;
};

export default async function WhatsAppPage({ searchParams }: WhatsAppPageProps) {
  const { phone = "918800219663", text = defaultWhatsAppMessage } = await searchParams;

  return (
    <main className="flex min-h-svh items-center justify-center bg-[#f6f0e7] px-5 py-16 text-center text-[#1d1915]">
      <section className="max-w-xl">
        <p className="eyebrow">Private enquiry</p>
        <h1 className="mt-5 font-serif text-5xl leading-none tracking-[-0.04em] sm:text-6xl">
          Opening WhatsApp.
        </h1>
        <p className="mt-6 text-base leading-7 text-stone-700">
          If WhatsApp does not open automatically, use the button below to continue your conversation with ANURRAKTI.
        </p>
        <WhatsAppRedirect phone={phone} text={text} />
        <p className="mt-6 text-sm text-stone-500">
          Prefer to stay here?{" "}
          <Link href="/#viewing" className="underline decoration-[#7e271e] underline-offset-4">
            Return to enquiry
          </Link>
        </p>
      </section>
    </main>
  );
}
