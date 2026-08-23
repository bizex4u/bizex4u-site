"use client";

import { useState } from "react";
import { site } from "@/lib/site";

/**
 * No backend is wired up yet, so the form composes a well-formed email
 * rather than pretending to submit. Swap `handleSubmit` for a POST to
 * your form endpoint (Formspree, Resend, an API route) when ready.
 */

const field =
  "mt-2 h-12 w-full rounded-[2px] border border-rule bg-transparent px-3 text-body outline-none transition-colors focus:border-accent";

const label = "eyebrow block";

export default function ContactForm() {
  const [sent, setSent] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const body = [
      `Name: ${data.get("name")}`,
      `Company: ${data.get("company")}`,
      `Email: ${data.get("email")}`,
      `Phone: ${data.get("phone")}`,
      "",
      String(data.get("message") ?? ""),
    ].join("\n");

    window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(
      `Enquiry from ${data.get("company") || data.get("name")}`,
    )}&body=${encodeURIComponent(body)}`;
    setSent(true);
  }

  return (
    <form onSubmit={handleSubmit} className="max-w-[34rem]">
      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label className={label} htmlFor="name">
            Name
          </label>
          <input id="name" name="name" required className={field} />
        </div>
        <div>
          <label className={label} htmlFor="company">
            Company
          </label>
          <input id="company" name="company" required className={field} />
        </div>
        <div>
          <label className={label} htmlFor="email">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            className={field}
          />
        </div>
        <div>
          <label className={label} htmlFor="phone">
            Phone
          </label>
          <input id="phone" name="phone" type="tel" className={field} />
        </div>
      </div>

      <div className="mt-6">
        <label className={label} htmlFor="message">
          What would you like to talk about?
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          className="mt-2 w-full rounded-[2px] border border-rule bg-transparent p-3 text-body outline-none transition-colors focus:border-accent"
        />
      </div>

      <button
        type="submit"
        className="mt-8 rounded-[2px] bg-ink px-6 py-3.5 font-mono text-meta uppercase tracking-[0.08em] text-paper transition-opacity hover:opacity-85"
      >
        Send enquiry →
      </button>

      {sent && (
        <p role="status" className="mt-5 text-[0.9375rem] text-ink-60">
          Your email client should have opened with the message ready to send.
          If it did not, write to{" "}
          <a href={`mailto:${site.email}`} className="link-underline text-ink">
            {site.email}
          </a>
          .
        </p>
      )}
    </form>
  );
}
