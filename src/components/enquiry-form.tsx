"use client";

import { FormEvent, useRef, useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";
import { trackEvent } from "@/lib/analytics";

const ENQUIRY_ENDPOINT = "/api/enquiry";

export function EnquiryForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const hasStarted = useRef(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);

    setStatus("sending");
    void fetch(ENQUIRY_ENDPOINT, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: new URLSearchParams(
        Array.from(formData.entries()).map(([key, value]) => [key, String(value)]),
      ),
    }).then((response) => {
      if (!response.ok) throw new Error("Enquiry submission failed");
      form.reset();
      setStatus("sent");
      trackEvent("enquiry_completion");
      if (String(formData.get("product") || "") !== "Private enquiry") {
        trackEvent("product_enquiry_completion");
      }
    }).catch(() => setStatus("error"));
  }

  return (
    <form
      onSubmit={handleSubmit}
      onFocus={() => {
        if (hasStarted.current) return;
        hasStarted.current = true;
        trackEvent("enquiry_form_start");
      }}
      className="mt-8"
      aria-label="Enquiry form"
    >
      <div className="grid gap-4 sm:grid-cols-2">
        <Field>
          <Label htmlFor="enquiry-name">Name</Label>
          <Input id="enquiry-name" name="name" required autoComplete="name" placeholder="Your name" />
        </Field>
        <Field>
          <Label htmlFor="enquiry-phone">Phone</Label>
          <Input id="enquiry-phone" name="phone" required type="tel" autoComplete="tel" placeholder="Your number" />
        </Field>
      </div>
      <div className="mt-4 grid gap-4">
        <Field>
          <Label htmlFor="enquiry-email">Email <span className="font-normal text-stone-500">(optional)</span></Label>
          <Input id="enquiry-email" name="email" type="email" autoComplete="email" placeholder="Your email address" />
        </Field>
        <Field>
          <Label htmlFor="enquiry-product">I am considering</Label>
          <select id="enquiry-product" name="product" defaultValue="Private enquiry" className="enquiry-field bg-[#f9f5ef] text-[#1d1915]">
            <option>Private enquiry</option>
            <option>EHSAAS collection</option>
            <option>RAGA collection</option>
            <option>Custom enquiry</option>
            <option>Other</option>
          </select>
        </Field>
        <Field>
          <Label htmlFor="enquiry-message">Message</Label>
          <textarea id="enquiry-message" name="message" required rows={4} placeholder="Tell us what you have in mind" className="enquiry-field resize-y bg-[#f9f5ef]" />
        </Field>
      </div>
      <div className="flex flex-wrap items-center gap-4 pt-1">
        <button className="group/btn relative mt-6 min-h-12 w-full overflow-hidden bg-[#1d1915] px-5 text-xs font-bold uppercase tracking-[0.16em] text-[#fffaf2] transition-colors hover:bg-[#7e271e] disabled:cursor-wait disabled:opacity-65 sm:w-auto" type="submit" disabled={status === "sending"}>
          {status === "sending" ? "Sending…" : "Begin the conversation"}
          <BottomLine />
        </button>
        <p className="text-sm text-stone-600" aria-live="polite" role={status === "error" || status === "sent" ? "status" : undefined}>
          {status === "sent" ? "Thank you. The House will be in touch." : null}
          {status === "error" ? "We couldn’t send that just now. Please try again or speak with ANURRAKTI directly." : null}
        </p>
      </div>
    </form>
  );
}

function Field({ children, className }: { children: React.ReactNode; className?: string }) {
  return <div className={cn("flex w-full flex-col gap-2", className)}>{children}</div>;
}

function BottomLine() {
  return <span className="absolute inset-x-0 bottom-0 h-px bg-[#d6ad86] opacity-0 transition duration-500 group-hover/btn:opacity-100" />;
}
