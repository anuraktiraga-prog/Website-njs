"use client";

import { FormEvent, useState } from "react";

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
    <form onSubmit={handleSubmit} className="mt-8 grid gap-4" aria-label="Enquiry form">
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="grid gap-2 text-xs font-bold uppercase tracking-[0.16em] text-stone-700">
          Name
          <input name="name" required autoComplete="name" className="enquiry-field" />
        </label>
        <label className="grid gap-2 text-xs font-bold uppercase tracking-[0.16em] text-stone-700">
          Phone
          <input name="phone" required type="tel" autoComplete="tel" className="enquiry-field" />
        </label>
      </div>
      <label className="grid gap-2 text-xs font-bold uppercase tracking-[0.16em] text-stone-700">
        Email <span className="normal-case tracking-normal text-stone-500">(optional)</span>
        <input name="email" type="email" autoComplete="email" className="enquiry-field" />
      </label>
      <label className="grid gap-2 text-xs font-bold uppercase tracking-[0.16em] text-stone-700">
        I am interested in
        <select name="product" defaultValue="Private viewing" className="enquiry-field bg-transparent">
          <option>Private viewing</option>
          <option>EHSAAS collection</option>
          <option>Custom enquiry</option>
          <option>Other</option>
        </select>
      </label>
      <label className="grid gap-2 text-xs font-bold uppercase tracking-[0.16em] text-stone-700">
        Message
        <textarea name="message" required rows={4} className="enquiry-field resize-y" />
      </label>
      <div className="flex flex-wrap items-center gap-4 pt-1">
        <button className="btn-primary" type="submit" disabled={status === "sending"}>
          {status === "sending" ? "Sending…" : "Send enquiry"}
        </button>
        <p className="text-sm text-stone-600" aria-live="polite">
          {status === "sent" ? "Thank you. Your enquiry has been received." : ""}
        </p>
      </div>
    </form>
  );
}
