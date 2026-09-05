"use client";

import { useRef, useState } from "react";
import { site } from "@/lib/site";
import { submitBrief, briefErrorCopy } from "@/lib/submitBrief";
import { pagePath, scrollPct, useAnalytics } from "@/lib/analytics";
import BriefSuccess from "@/components/BriefSuccess";

const field =
  "mt-2 h-12 w-full rounded-sm border border-rule-sand bg-sand px-4 text-body outline-none transition-colors focus:border-violet-deep";

const label = "eyebrow block text-on-sand-dim";

export default function ContactForm() {
  const [sent, setSent] = useState(false);
  const [pending, setPending] = useState(false);
  const [error, setError] = useState("");
  const { track } = useAnalytics();
  const openedAt = useRef(0);
  const openedRef = useRef(false);
  const focusedRef = useRef(new Set<string>());

  function openIfNeeded() {
    if (openedRef.current) return;
    openedRef.current = true;
    openedAt.current = Date.now();
    track("brief_open", {
      source_location: "contact-form",
      page: pagePath(),
      scroll_pct: scrollPct(),
    });
  }

  function onFieldFocus(name: string) {
    openIfNeeded();
    if (focusedRef.current.has(name)) return;
    focusedRef.current.add(name);
    track("brief_field_focus", { field: name });
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (pending) return;
    openIfNeeded();
    const data = new FormData(e.currentTarget);
    const get = (k: string) => String(data.get(k) ?? "").trim();

    track("brief_submit", {
      page: pagePath(),
      seconds_to_complete: Math.round((Date.now() - openedAt.current) / 1000),
    });

    setError("");
    setPending(true);
    const result = await submitBrief({
      brand: get("company"),
      person: get("name"),
      email: get("email"),
      phone: get("phone"),
      detail: get("message"),
      source: "contact",
      company_website: get("company_website"),
      location: "contact-form",
    });
    setPending(false);

    if (result.ok) {
      setSent(true);
      return;
    }
    setError(briefErrorCopy(result.error));
  }

  if (sent) {
    return (
      <BriefSuccess recorded />
    );
  }

  return (
    <form onSubmit={handleSubmit} className="relative max-w-[34rem]">
      <div
        aria-hidden="true"
        className="absolute -left-[9999px] h-0 w-0 overflow-hidden"
      >
        <label htmlFor="company_website">Company website</label>
        <input
          id="company_website"
          name="company_website"
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label className={label} htmlFor="company">
            Company name <span aria-hidden>*</span>
          </label>
          <input
            id="company"
            name="company"
            required
            autoComplete="organization"
            className={field}
            onFocus={() => onFieldFocus("company")}
          />
        </div>
        <div>
          <label className={label} htmlFor="name">
            Your name <span aria-hidden>*</span>
          </label>
          <input
            id="name"
            name="name"
            required
            autoComplete="name"
            className={field}
            onFocus={() => onFieldFocus("name")}
          />
        </div>
        <div>
          <label className={label} htmlFor="email">
            Email <span aria-hidden>*</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            autoComplete="email"
            spellCheck={false}
            className={field}
            onFocus={() => onFieldFocus("email")}
          />
        </div>
        <div>
          <label className={label} htmlFor="phone">
            Phone <span aria-hidden>*</span>
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            inputMode="tel"
            required
            minLength={8}
            autoComplete="tel"
            className={field}
            onFocus={() => onFieldFocus("phone")}
          />
        </div>
      </div>

      <div className="mt-6">
        <label className={label} htmlFor="message">
          Note
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          className="mt-2 w-full rounded-sm border border-rule-sand bg-sand p-4 text-body outline-none transition-colors focus:border-violet-deep"
          onFocus={() => onFieldFocus("message")}
        />
      </div>

      <button
        type="submit"
        disabled={pending}
        data-cta="1"
        data-cta-location="contact-form"
        data-cta-variant="default"
        data-cta-label="Request a plan"
        className="group mt-8 inline-flex min-h-12 items-center gap-2.5 rounded-sm bg-violet-deep px-6 font-medium text-white transition-colors duration-200 hover:bg-plum disabled:opacity-60"
      >
        {pending ? "Sending…" : "Request a plan"}
        {pending ? null : <span className="row-arrow">→</span>}
      </button>
      {error ? (
        <p className="mt-4 text-body-s text-violet-deep" role="alert">
          {error}{" "}
          <a href={`mailto:${site.email}`} className="link-underline">
            {site.email}
          </a>
        </p>
      ) : null}
      <p className="mt-4 max-w-[46ch] text-body-s text-on-sand-dim">
        {site.sla.acknowledge} {site.sla.plan}
      </p>
    </form>
  );
}
