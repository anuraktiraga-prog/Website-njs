"use client";

import { useEffect } from "react";

type WhatsAppRedirectProps = {
  phone: string;
  text: string;
};

function safePhone(value: string) {
  return value.replace(/\D/g, "") || "918800219663";
}

function whatsappUrl(phone: string, text: string) {
  return `https://wa.me/${safePhone(phone)}?text=${encodeURIComponent(text)}`;
}

export function WhatsAppRedirect({ phone, text }: WhatsAppRedirectProps) {
  useEffect(() => {
    window.location.replace(whatsappUrl(phone, text));
  }, [phone, text]);

  return (
    <button
      type="button"
      className="mt-7 inline-flex min-h-12 items-center justify-center bg-[#7e271e] px-6 text-xs font-medium uppercase tracking-[0.2em] text-[#fff7ec] transition-colors hover:bg-[#1d1915] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#7e271e]"
      onClick={() => window.location.assign(whatsappUrl(phone, text))}
    >
      Open WhatsApp
    </button>
  );
}
