"use client";

import { FormEvent, useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";

const GOOGLE_SHEETS_ENDPOINT =
  "https://script.google.com/macros/s/AKfycbzxlncpCkQhIwLSlZkIgS1ZI-siqMtWeSjtDvQ9xgqa-I8JTZp-oomh6atD-rgJcO08/exec";

export function EnquiryForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);

    // The Apps Script endpoint accepts a standard form body. `no-cors` avoids
    // a browser preflight request while the submission is recorded in Sheets.
    setStatus("sending");
    void fetch(GOOGLE_SHEETS_ENDPOINT, {
      method: "POST",
      mode: "no-cors",
      body: new URLSearchParams(
        Array.from(formData.entries()).map(([key, value]) => [key, String(value)]),
      ),
    }).then(() => {
      form.reset();
      setStatus("sent");
    }).catch(() => {
      setStatus("idle");
    });
  }

  return (
    <form onSubmit={handleSubmit} className="mt-8" aria-label="Enquiry form">
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
          <Label htmlFor="enquiry-product">I am interested in</Label>
          <select id="enquiry-product" name="product" defaultValue="Private viewing" className="enquiry-field bg-[#f9f5ef] text-[#1d1915]">
            <option>Private viewing</option>
            <option>EHSAAS collection</option>
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
          {status === "sending" ? "Sending…" : "Send enquiry"}
          <BottomLine />
        </button>
        <p className="text-sm text-stone-600" aria-live="polite">
          {status === "sent" ? "Thank you. Your enquiry has been received." : ""}
        </p>
      </div>
    </form>
  );
}

function Field({ children, className }: { children: React.ReactNode; className?: string }) {
  return <div className={cn("flex w-full flex-col gap-2", className)}>{children}</div>;
}

function BottomLine() {
  return <span className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-[#d6ad86] to-transparent opacity-0 transition duration-500 group-hover/btn:opacity-100" />;
}
