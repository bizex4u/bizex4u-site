"use client";

import { useState } from "react";
import { site } from "@/lib/site";

/**
 * No backend is wired up yet, so the form composes a well-formed email
 * rather than pretending to submit. Swap `handleSubmit` for a POST to
 * your form endpoint (Formspree, Resend, an API route) when ready.
 */

const field =
  "mt-2 h-12 w-full rounded-xl border border-rule-sand bg-sand px-4 text-body outline-none transition-colors focus:border-violet-deep";

const label = "eyebrow block text-on-sand-dim";

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
          className="mt-2 w-full rounded-xl border border-rule-sand bg-sand p-4 text-body outline-none transition-colors focus:border-violet-deep"
        />
      </div>

      <button
        type="submit"
        className="group mt-8 inline-flex min-h-12 items-center gap-2.5 rounded-full bg-violet-deep px-6 font-medium text-white transition-colors duration-200 hover:bg-violet"
      >
        Send enquiry <span className="row-arrow">→</span>
      </button>

      {sent && (
        <p role="status" className="mt-5 text-body-s text-on-sand-dim">
          Your email client should have opened with the message ready to send.
          If it did not, write to{" "}
          <a href={`mailto:${site.email}`} className="link-underline text-violet-deep">
            {site.email}
          </a>
          .
        </p>
      )}
    </form>
  );
}
