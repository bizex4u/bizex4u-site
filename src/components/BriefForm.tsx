"use client";

import { useId, useRef, useState } from "react";
import { Eyebrow, btnClass } from "@/components/UI";
import { site } from "@/lib/site";
import { submitBrief, briefErrorCopy } from "@/lib/submitBrief";
import { pagePath, scrollPct, useAnalytics } from "@/lib/analytics";
import BriefSuccess from "@/components/BriefSuccess";

/**
 * The brief, as a form you can fill on the page.
 *
 * City and market pages were converting only through a dialog button.
 * A buyer who has just read a cost or catchment section should not have
 * to hunt for a modal. This is the same qualification as BriefButton,
 * sitting in the document.
 */

type Surface = "sand" | "plum";

export default function BriefForm({
  context,
  market,
  location = "inline-form",
  heading = "Request a plan",
  lede = "A person will write back within one working day.",
  submitLabel = "Request a plan",
  surface = "sand",
}: {
  context?: string;
  market?: string;
  location?: string;
  heading?: string;
  lede?: string;
  submitLabel?: string;
  surface?: Surface;
}) {
  const id = useId();
  const [sent, setSent] = useState(false);
  const [pending, setPending] = useState(false);
  const [error, setError] = useState("");
  const { track } = useAnalytics();
  const openedAt = useRef(0);
  const openedRef = useRef(false);
  const focusedRef = useRef(new Set<string>());
  const lastFieldRef = useRef("");
  const plum = surface === "plum";

  const field = plum
    ? "mt-1.5 h-11 w-full rounded-sm border border-white/20 bg-plum-2 px-3 text-body text-on-plum outline-none transition-colors focus:border-white"
    : "mt-1.5 h-11 w-full rounded-sm border border-rule-sand bg-sand px-3 text-body text-on-sand outline-none transition-colors focus:border-violet-deep";
  const label = plum
    ? "eyebrow block text-on-plum-dim"
    : "eyebrow block text-on-sand-dim";
  const dim = plum ? "text-on-plum-dim" : "text-on-sand-dim";

  const openIfNeeded = () => {
    if (openedRef.current) return;
    openedRef.current = true;
    openedAt.current = Date.now();
    track("brief_open", {
      source_location: location,
      page: pagePath(),
      scroll_pct: scrollPct(),
    });
  };

  const onFieldFocus = (name: string) => {
    openIfNeeded();
    lastFieldRef.current = name;
    if (focusedRef.current.has(name)) return;
    focusedRef.current.add(name);
    track("brief_field_focus", { field: name });
  };

  const submit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    openIfNeeded();
    if (pending) return;
    const f = new FormData(e.currentTarget);
    const get = (k: string) => String(f.get(k) ?? "").trim();

    track("brief_submit", {
      page: pagePath(),
      seconds_to_complete: Math.round((Date.now() - openedAt.current) / 1000),
    });

    setError("");
    setPending(true);
    const result = await submitBrief({
      brand: get("brand"),
      person: get("person"),
      email: get("email"),
      phone: get("phone"),
      market: get("market") || market,
      context: context ?? "",
      detail: get("detail"),
      source: "brief",
      company_website: get("company_website"),
      location,
    });
    setPending(false);

    if (result.ok) {
      setSent(true);
      return;
    }
    setError(briefErrorCopy(result.error));
  };

  if (sent) {
    return (
      <BriefSuccess
        recorded
        tone={plum ? "plum" : "sand"}
      />
    );
  }

  return (
    <form onSubmit={submit} className="relative">
      <Eyebrow tone={plum ? "plum" : "sand"}>{heading}</Eyebrow>
      <p className="mt-2 font-display text-h3 text-balance">{lede}</p>
      {context ? (
        <p className={`mt-2 text-body-s ${dim}`}>
          About <span className={plum ? "text-on-plum" : "text-on-sand"}>{context}</span>.
        </p>
      ) : null}

      <div
        aria-hidden="true"
        className="absolute -left-[9999px] h-0 w-0 overflow-hidden"
      >
        <label htmlFor={`${id}-cw`}>Company website</label>
        <input
          id={`${id}-cw`}
          name="company_website"
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      <div className="mt-5 grid gap-4 sm:grid-cols-2">
        <div>
          <label className={label} htmlFor={`${id}-brand`}>
            Company name <span aria-hidden>*</span>
          </label>
          <input
            id={`${id}-brand`}
            name="brand"
            required
            autoComplete="organization"
            className={field}
            onFocus={() => onFieldFocus("brand")}
          />
        </div>
        <div>
          <label className={label} htmlFor={`${id}-person`}>
            Your name <span aria-hidden>*</span>
          </label>
          <input
            id={`${id}-person`}
            name="person"
            required
            autoComplete="name"
            className={field}
            onFocus={() => onFieldFocus("person")}
          />
        </div>
        <div>
          <label className={label} htmlFor={`${id}-email`}>
            Email <span aria-hidden>*</span>
          </label>
          <input
            id={`${id}-email`}
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
          <label className={label} htmlFor={`${id}-phone`}>
            Phone <span aria-hidden>*</span>
          </label>
          <input
            id={`${id}-phone`}
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
        {market ? (
          <input type="hidden" name="market" value={market} />
        ) : null}
      </div>

      <div className="mt-4">
        <label className={label} htmlFor={`${id}-detail`}>
          Note
        </label>
        <textarea
          id={`${id}-detail`}
          name="detail"
          rows={3}
          className={
            plum
              ? "mt-1.5 w-full rounded-sm border border-white/20 bg-plum-2 p-3 text-body text-on-plum outline-none transition-colors focus:border-white"
              : "mt-1.5 w-full rounded-sm border border-rule-sand bg-sand p-3 text-body text-on-sand outline-none transition-colors focus:border-violet-deep"
          }
          onFocus={() => onFieldFocus("detail")}
        />
      </div>

      <div className="mt-5 flex flex-wrap items-center gap-3">
        <button
          type="submit"
          disabled={pending}
          data-cta="1"
          data-cta-location={location}
          data-cta-variant="default"
          data-cta-label={submitLabel}
          className={`${btnClass(plum ? "sand" : "violet", "md")} disabled:opacity-60`}
        >
          {pending ? "Sending…" : submitLabel}
          {pending ? null : <span className="row-arrow">→</span>}
        </button>
        <p className={`text-body-s ${dim}`}>{site.sla.acknowledge}</p>
      </div>
      {error ? (
        <p className={`mt-4 text-body-s ${plum ? "text-violet-lift" : "text-violet-deep"}`} role="alert">
          {error}{" "}
          <a href={`mailto:${site.email}`} className="link-underline">
            {site.email}
          </a>
        </p>
      ) : null}
    </form>
  );
}
