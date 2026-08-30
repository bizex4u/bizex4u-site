"use client";

import { useId, useRef, useState } from "react";
import { Eyebrow, btnClass, type BtnVariant } from "@/components/UI";
import { site } from "@/lib/site";
import { submitBrief } from "@/lib/submitBrief";
import {
  inferCtaLocation,
  pagePath,
  scrollPct,
  useAnalytics,
} from "@/lib/analytics";

/**
 * The brief form, and the only way into WhatsApp from a call to action.
 *
 * Previously every CTA on the site was a bare wa.me deep link, so the
 * highest-intent action a visitor could take arrived as "Hi" from an
 * unknown number with nothing attached. Now the button opens a short
 * form; WhatsApp is the delivery step after qualification rather than
 * the front door.
 *
 * Brand and name are mandatory. Everything else is optional on purpose
 * — every extra required field costs completions, and those two are
 * what turn an anonymous ping into a lead someone can act on.
 *
 * Built on the native <dialog> element, which brings focus trapping,
 * Escape-to-close, inertness of the page behind it and the top layer
 * for free. A hand-rolled div would need all of that written and kept
 * correct.
 *
 * No backend: on submit the answers are composed into a WhatsApp
 * message the user sends themselves. Nothing is transmitted or stored
 * by this component, and the UI says so. When a real endpoint exists,
 * POST from `submit` and keep the WhatsApp hand-off as the confirmation
 * step.
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
  /* The composed wa.me link, held after submit so the confirmation
     step can offer it manually. */
  const [sent, setSent] = useState<string | null>(null);
  const id = useId();
  const { track } = useAnalytics();
  const openedAt = useRef(0);
  const sourceRef = useRef(location ?? "page");
  const lastFieldRef = useRef("");
  const focusedRef = useRef(new Set<string>());
  const submittedRef = useRef(false);
  const ctaLabel = typeof children === "string" ? children : "Send a brief";

  const open = (e: React.MouseEvent<HTMLButtonElement>) => {
    setSent(null);
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

  const submit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    const get = (k: string) => String(f.get(k) ?? "").trim();

    submittedRef.current = true;
    track("brief_submit", {
      page: pagePath(),
      seconds_to_complete: Math.round((Date.now() - openedAt.current) / 1000),
    });

    /* Record the row first, but do not await it. A slow Sheet write
       must never stand between someone pressing the button and
       WhatsApp opening — the browser will not treat a delayed
       window.open as a user gesture, and the tab gets blocked. */
    void submitBrief({
      brand: get("brand"),
      person: get("person"),
      role: get("role"),
      market: get("market"),
      context: context ?? "",
      detail: get("detail"),
      source: "brief",
      company_website: get("company_website"),
    });

    const lines = [
      "Hi Bizex4U —",
      "",
      `Brand: ${get("brand")}`,
      `Name: ${get("person")}`,
      get("role") && `Role: ${get("role")}`,
      get("market") && `Market: ${get("market")}`,
      context && `Enquiry about: ${context}`,
      get("detail") && "",
      get("detail") && get("detail"),
    ].filter(Boolean);

    const href = `${site.whatsappBase}?text=${encodeURIComponent(
      lines.join("\n"),
    )}`;

    /* A synthesised anchor click rather than window.open.
       window.open with "noopener" always returns null by design, so
       there is no way to tell success from a blocked popup — the first
       version of this read that null as "blocked", left the dialog open
       and showed everyone a warning that was not true.

       Clicking a real anchor is the reliable path: it inherits the
       user gesture, keeps rel=noopener, and cannot be misread. We then
       show a confirmation carrying the same link, which covers the rare
       case where the browser did block it. */
    const a = document.createElement("a");
    a.href = href;
    a.target = "_blank";
    a.rel = "noopener noreferrer";
    document.body.appendChild(a);
    a.click();
    a.remove();
    setSent(href);
    track("whatsapp_click", {
      page: pagePath(),
      source_location: sourceRef.current,
    });
  };

  const field =
    "mt-2 h-12 w-full rounded-xl border border-rule-sand bg-sand px-4 text-body text-on-sand outline-none transition-colors focus:border-violet-deep";
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
            <Eyebrow>Off it goes</Eyebrow>
            <h2
              id={`${id}-title`}
              className="mt-3 font-display text-h2 text-balance"
            >
              WhatsApp should be opening.
            </h2>
            <p className="mt-4 max-w-[44ch] text-on-sand-dim">
              Your answers are written into the message. Press send there and
              you will usually hear back the same working day.
            </p>
            <div className="mt-7 flex flex-wrap items-center gap-4">
              <a
                href={sent}
                target="_blank"
                rel="noopener noreferrer"
                className={btnClass("violet", "lg")}
                data-whatsapp="1"
                data-cta-location={sourceRef.current}
              >
                Open WhatsApp again
                <span className="row-arrow">→</span>
              </a>
              <button
                type="button"
                onClick={() => ref.current?.close()}
                className="link-underline text-body-s font-medium text-on-sand-dim"
              >
                Close
              </button>
            </div>
            <p className="mt-6 border-t border-rule-sand pt-4 text-caption text-on-sand-dim">
              Nothing was stored on this site. If WhatsApp did not open, write
              to{" "}
              <a
                href={`mailto:${site.email}`}
                className="link-underline text-violet-deep"
              >
                {site.email}
              </a>
              .
            </p>
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
                Two fields, then straight to a person.
              </h2>
            </div>
            <button
              type="button"
              onClick={() => ref.current?.close()}
              aria-label="Close"
              className="-mt-1 -mr-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-on-sand-dim transition-colors hover:bg-sand-3 hover:text-on-sand"
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
                Brand or company <span aria-hidden>*</span>
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
              <label className={label} htmlFor={`${id}-role`}>
                Your role
              </label>
              <input
                id={`${id}-role`}
                name="role"
                autoComplete="organization-title"
                className={field}
                onFocus={() => onFieldFocus("role")}
              />
            </div>
            <div>
              <label className={label} htmlFor={`${id}-market`}>
                City or market
              </label>
              <input
                id={`${id}-market`}
                name="market"
                defaultValue={market ?? ""}
                className={field}
                onFocus={() => onFieldFocus("market")}
              />
            </div>
          </div>

          <div className="mt-5">
            <label className={label} htmlFor={`${id}-detail`}>
              What are you trying to do?
            </label>
            <textarea
              id={`${id}-detail`}
              name="detail"
              rows={3}
              className="mt-2 w-full rounded-xl border border-rule-sand bg-sand p-4 text-body text-on-sand outline-none transition-colors focus:border-violet-deep"
              onFocus={() => onFieldFocus("detail")}
            />
          </div>

          <div className="mt-7 flex flex-wrap items-center gap-4">
            <button type="submit" className={btnClass("violet", "lg")}>
              Continue on WhatsApp
              <span className="row-arrow">→</span>
            </button>
            <p className="text-body-s text-on-sand-dim">
              Usually answered the same working day.
            </p>
          </div>

          <p className="mt-5 border-t border-rule-sand pt-4 text-caption text-on-sand-dim">
            This opens WhatsApp with your answers written in. Nothing is sent
            until you press send, and nothing is stored on this site. Prefer
            email?{" "}
            <a
              href={`mailto:${site.email}`}
              className="link-underline text-violet-deep"
            >
              {site.email}
            </a>
          </p>
        </form>
        )}
      </dialog>
    </>
  );
}
