"use client";

import { useId, useRef, useState } from "react";
import { Eyebrow, btnClass, type BtnVariant } from "@/components/UI";
import { site } from "@/lib/site";
import { submitBrief, briefErrorCopy } from "@/lib/submitBrief";
import BriefSuccess from "@/components/BriefSuccess";
import {
  inferCtaLocation,
  pagePath,
  scrollPct,
  useAnalytics,
} from "@/lib/analytics";

/**
 * The brief form. Company, name, email and phone are required; the
 * note is optional. Posts to /api/brief.
 */

export default function BriefButton({
  children,
  variant = "violet",
  size = "md",
  className = "",
  /* Where the button was pressed. Goes into the message so the first
     reply can be specific rather than "how can I help". */
  context,
  /* Prefills the market field on a city page. */
  market,
  /* Funnel location: header / hero / section id / footer. Inferred
     from the DOM when omitted. */
  location,
}: {
  children: React.ReactNode;
  variant?: BtnVariant;
  size?: "md" | "lg";
  className?: string;
  context?: string;
  market?: string;
  location?: string;
}) {
  const ref = useRef<HTMLDialogElement>(null);
  const [sent, setSent] = useState(false);
  const [pending, setPending] = useState(false);
  const [error, setError] = useState("");
  const id = useId();
  const { track } = useAnalytics();
  const openedAt = useRef(0);
  const sourceRef = useRef(location ?? "page");
  const lastFieldRef = useRef("");
  const focusedRef = useRef(new Set<string>());
  const submittedRef = useRef(false);
  const ctaLabel = typeof children === "string" ? children : "Send a brief";

  const open = (e: React.MouseEvent<HTMLButtonElement>) => {
    setSent(false);
    setPending(false);
    setError("");
    submittedRef.current = false;
    focusedRef.current = new Set();
    lastFieldRef.current = "";
    openedAt.current = Date.now();
    sourceRef.current = location ?? inferCtaLocation(e.currentTarget);
    track("brief_open", {
      source_location: sourceRef.current,
      page: pagePath(),
      scroll_pct: scrollPct(),
    });
    ref.current?.showModal();
  };

  const onFieldFocus = (field: string) => {
    lastFieldRef.current = field;
    if (focusedRef.current.has(field)) return;
    focusedRef.current.add(field);
    track("brief_field_focus", { field });
  };

  const onDialogClose = () => {
    if (submittedRef.current) return;
    track("brief_abandon", {
      last_field: lastFieldRef.current || "none",
      seconds_open: Math.round((Date.now() - openedAt.current) / 1000),
    });
  };

  const submit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (pending) return;
    const f = new FormData(e.currentTarget);
    const get = (k: string) => String(f.get(k) ?? "").trim();

    submittedRef.current = true;
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
    });
    setPending(false);

    if (result.ok) {
      setSent(true);
      return;
    }
    submittedRef.current = false;
    setError(briefErrorCopy(result.error));
  };

  const field =
    "mt-2 h-12 w-full rounded-sm border border-rule-sand bg-sand px-4 text-body text-on-sand outline-none transition-colors focus:border-violet-deep";
  const label = "eyebrow block text-on-sand-dim";

  return (
    <>
      <button
        type="button"
        onClick={open}
        className={btnClass(variant, size, className)}
        data-cta="1"
        data-cta-location={location}
        data-cta-variant="default"
        data-cta-label={ctaLabel}
      >
        {children}
        <span className="row-arrow">→</span>
      </button>

      <dialog
        ref={ref}
        aria-labelledby={`${id}-title`}
        onClose={onDialogClose}
        className="brief-dialog w-[min(34rem,calc(100vw-2rem))] rounded-(--radius-card) bg-sand-2 p-0 text-on-sand"
      >
        {sent ? (
          <div className="p-6 md:p-8">
            <div className="flex items-start justify-between gap-6">
              <BriefSuccess recorded />
              <button
                type="button"
                onClick={() => ref.current?.close()}
                aria-label="Close"
                className="-mt-1 -mr-1 flex h-10 w-10 shrink-0 items-center justify-center text-on-sand-dim transition-colors hover:bg-sand-3 hover:text-on-sand"
              >
                <span aria-hidden className="text-h3 leading-none">
                  ×
                </span>
              </button>
            </div>
          </div>
        ) : (
        <form onSubmit={submit} className="p-6 md:p-8">
          <div className="flex items-start justify-between gap-6">
            <div>
              <Eyebrow>Tell us who you are</Eyebrow>
              <h2
                id={`${id}-title`}
                className="mt-3 font-display text-h2 text-balance"
              >
                A person will write back.
              </h2>
            </div>
            <button
              type="button"
              onClick={() => ref.current?.close()}
              aria-label="Close"
              className="-mt-1 -mr-1 flex h-10 w-10 shrink-0 items-center justify-center text-on-sand-dim transition-colors hover:bg-sand-3 hover:text-on-sand"
            >
              <span aria-hidden className="text-h3 leading-none">
                ×
              </span>
            </button>
          </div>

          {context && (
            <p className="mt-4 text-body-s text-on-sand-dim">
              About <span className="text-on-sand">{context}</span>.
            </p>
          )}

          {/* Honeypot. Off-screen rather than display:none, because
              some bots skip hidden inputs but fill positioned ones.
              tabIndex and aria-hidden keep it away from real users. */}
          <div aria-hidden="true" className="absolute -left-[9999px] h-0 w-0 overflow-hidden">
            <label htmlFor={`${id}-cw`}>Company website</label>
            <input
              id={`${id}-cw`}
              name="company_website"
              tabIndex={-1}
              autoComplete="off"
            />
          </div>

          <div className="mt-7 grid gap-5 sm:grid-cols-2">
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

          <div className="mt-5">
            <label className={label} htmlFor={`${id}-detail`}>
              Note
            </label>
            <textarea
              id={`${id}-detail`}
              name="detail"
              rows={3}
              className="mt-2 w-full rounded-sm border border-rule-sand bg-sand p-4 text-body text-on-sand outline-none transition-colors focus:border-violet-deep"
              onFocus={() => onFieldFocus("detail")}
            />
          </div>

          <div className="mt-7 flex flex-wrap items-center gap-4">
            <button
              type="submit"
              disabled={pending}
              className={`${btnClass("violet", "lg")} disabled:opacity-60`}
            >
              {pending ? "Sending…" : "Request a plan"}
              {pending ? null : <span className="row-arrow">→</span>}
            </button>
            <p className="text-body-s text-on-sand-dim">
              {site.sla.acknowledge}
            </p>
          </div>
          {error ? (
            <p className="mt-4 text-body-s text-violet-deep" role="alert">
              {error}{" "}
              <a href={`mailto:${site.email}`} className="link-underline">
                {site.email}
              </a>
            </p>
          ) : null}

          <p className="mt-5 border-t border-rule-sand pt-4 text-caption text-on-sand-dim">
            {site.sla.plan} We reply from {site.email}.
          </p>
        </form>
        )}
      </dialog>
    </>
  );
}
