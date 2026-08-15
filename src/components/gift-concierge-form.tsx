"use client";

import { FormEvent, useRef, useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";
import { GOOGLE_SHEETS_ENDPOINT } from "@/components/enquiry-form";
import { trackEvent } from "@/lib/analytics";

type Status = "idle" | "sending" | "sent" | "error";

export function GiftConciergeForm() {
  const [status, setStatus] = useState<Status>("idle");
  const hasStarted = useRef(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const message = [
      `Choosing for: ${data.get("recipient") || "Not specified"}`,
      `Occasion: ${data.get("occasion") || "Not specified"}`,
      `What she usually wears: ${data.get("style") || "Not specified"}`,
      `Preferred colour families: ${data.get("colours") || "Not specified"}`,
      `Approximate budget: ${data.get("budget") || "Not specified"}`,
      `City / delivery location: ${data.get("city") || "Not specified"}`,
      `Preferred contact method: ${data.get("contactMethod") || "Not specified"}`,
    ].join("\n");

    setStatus("sending");
    void fetch(GOOGLE_SHEETS_ENDPOINT, {
      method: "POST",
      mode: "no-cors",
      body: new URLSearchParams({
        name: String(data.get("name") || ""),
        phone: String(data.get("phone") || ""),
        email: String(data.get("email") || ""),
        product: "Gift Concierge",
        message,
      }),
    }).then(() => {
      form.reset();
      setStatus("sent");
      trackEvent("gift_concierge_completion");
    }).catch(() => setStatus("error"));
  }

  return (
    <form
      onSubmit={handleSubmit}
      onFocus={() => {
        if (hasStarted.current) return;
        hasStarted.current = true;
        trackEvent("gift_concierge_start");
      }}
      className="grid gap-6"
      aria-label="Gift Concierge enquiry form"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <Field><Label htmlFor="gift-name">Your name</Label><Input id="gift-name" name="name" required autoComplete="name" placeholder="Your name" /></Field>
        <Field><Label htmlFor="gift-phone">Phone</Label><Input id="gift-phone" name="phone" required type="tel" autoComplete="tel" placeholder="Your number" /></Field>
      </div>
      <Field><Label htmlFor="gift-email">Email <span className="font-normal text-stone-500">(optional)</span></Label><Input id="gift-email" name="email" type="email" autoComplete="email" placeholder="Your email address" /></Field>
      <div className="grid gap-5 sm:grid-cols-2">
        <SelectField id="gift-recipient" name="recipient" label="Who are you choosing for?" options={["My partner", "A family member", "A friend", "A wedding couple", "Someone else"]} />
        <SelectField id="gift-occasion" name="occasion" label="What is the occasion?" options={["Wedding gifting", "Anniversary", "Birthday", "Festive occasion", "A personal gesture", "Other"]} />
      </div>
      <Field><Label htmlFor="gift-style">What does she usually wear?</Label><textarea id="gift-style" name="style" required rows={3} placeholder="A few words about her style, silhouettes or the pieces she reaches for" className="enquiry-field resize-y bg-[#f9f5ef]" /></Field>
      <div className="grid gap-5 sm:grid-cols-2">
        <InputField id="gift-colours" name="colours" label="Preferred colour families" placeholder="For example, ivory, burgundy or deep blue" />
        <SelectField id="gift-budget" name="budget" label="Approximate budget" options={["Under ₹50,000", "₹50,000 – ₹1,00,000", "₹1,00,000 – ₹2,00,000", "Above ₹2,00,000", "I would prefer to discuss this"]} />
      </div>
      <div className="grid gap-5 sm:grid-cols-2">
        <InputField id="gift-city" name="city" label="City or delivery location" placeholder="City (optional)" />
        <SelectField id="gift-contact" name="contactMethod" label="Preferred contact method" options={["WhatsApp", "Phone call", "Email", "Instagram DM"]} />
      </div>
      <div className="flex flex-wrap items-center gap-4">
        <button className="group/btn relative min-h-12 w-full bg-[#1d1915] px-5 text-xs font-bold uppercase tracking-[0.16em] text-[#fffaf2] transition-colors hover:bg-[#7e271e] disabled:cursor-wait disabled:opacity-65 sm:w-auto" type="submit" disabled={status === "sending"}>
          {status === "sending" ? "Sending…" : "Begin the conversation"}
          <span className="absolute inset-x-0 bottom-0 h-px bg-[#d6ad86] opacity-0 transition duration-500 group-hover/btn:opacity-100" />
        </button>
        <p className="text-sm text-stone-600" aria-live="polite" role={status === "error" || status === "sent" ? "status" : undefined}>
          {status === "sent" ? "Thank you. The House will be in touch." : null}
          {status === "error" ? "We couldn’t send that just now. Please try again or speak with ANURRAKTI directly." : null}
        </p>
      </div>
    </form>
  );
}

function Field({ children }: { children: React.ReactNode }) {
  return <div className="flex w-full flex-col gap-2">{children}</div>;
}

function InputField({ id, name, label, placeholder }: { id: string; name: string; label: string; placeholder: string }) {
  return <Field><Label htmlFor={id}>{label}</Label><Input id={id} name={name} placeholder={placeholder} /></Field>;
}

function SelectField({ id, name, label, options }: { id: string; name: string; label: string; options: string[] }) {
  return <Field><Label htmlFor={id}>{label}</Label><select id={id} name={name} required className={cn("enquiry-field bg-[#f9f5ef] text-[#1d1915]")} defaultValue=""><option value="" disabled>Select one</option>{options.map((option) => <option key={option}>{option}</option>)}</select></Field>;
}
