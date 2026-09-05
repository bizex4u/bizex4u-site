"use client";

import { useRef, useState } from "react";
import { site } from "@/lib/site";
import { submitBrief, briefErrorCopy } from "@/lib/submitBrief";
import { Eyebrow, btnClass } from "@/components/UI";
import { pagePath, scrollPct, useAnalytics } from "@/lib/analytics";
import BriefSuccess from "@/components/BriefSuccess";

/**
 * "What are you holding?"
 *
 * The highest-intent thing on the barter page. Barter is abstract
 * until someone names their own stock out loud, and this makes them
 * do it in three taps before handing the answers to email.
 *
 * IT COLLECTS, IT NEVER QUOTES. There is deliberately no output that
 * says "this buys you X" — that would be a rate card by implication,
 * it would be wrong for most inputs, and the entire barter page argues
 * that valuation is settled in writing by two parties rather than
 * calculated by a widget. The reward for filling it in is a faster,
 * better-informed first conversation, and that is the honest promise.
 *
 * Posts to /api/brief. The chips collect the holding; they never
 * imply a media rate.
 */

const categories = [
  "Finished goods",
  "Unsold or seasonal stock",
  "Manufacturing capacity",
  "Vouchers or gift cards",
  "Services or subscriptions",
  "Something else",
];

/* Bands, not a value. What they hold, never what media costs. */
const scales = [
  "Under ₹25 lakh",
  "₹25 lakh – ₹1 crore",
  "₹1 – 5 crore",
  "Over ₹5 crore",
  "Not sure yet",
];

const regions = ["North", "West", "South", "East", "National"];

export default function BarterSelector() {
  const [category, setCategory] = useState<string | null>(null);
  const [scale, setScale] = useState<string | null>(null);
  const [markets, setMarkets] = useState<string[]>([]);
  /* Brand and name are mandatory before this reaches email. The
     chips on their own describe an opportunity with nobody attached to
     it, which is not a lead. */
  const [brand, setBrand] = useState("");
  const [person, setPerson] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [note, setNote] = useState("");
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
      source_location: "start",
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

  const toggleMarket = (m: string) =>
    setMarkets((prev) =>
      prev.includes(m) ? prev.filter((x) => x !== m) : [...prev, m],
    );

  const named =
    brand.trim().length > 0 &&
    person.trim().length > 0 &&
    email.trim().length > 0 &&
    phone.replace(/\D/g, "").length >= 8;
  const chosen = Boolean(category && scale);
  const ready = chosen && named;

  const message = [
    "Hi Bizex4U — I'd like to look at a barter structure.",
    "",
    `Company: ${brand.trim()}`,
    `Name: ${person.trim()}`,
    `Email: ${email.trim()}`,
    `Phone: ${phone.trim()}`,
    category && `What we hold: ${category}`,
    scale && `Rough value: ${scale}`,
    markets.length > 0 && `Markets of interest: ${markets.join(", ")}`,
    note.trim() && "",
    note.trim(),
  ]
    .filter(Boolean)
    .join("\n");

  const mailto = `mailto:${site.email}?subject=${encodeURIComponent(
    `Barter enquiry — ${brand.trim()}`,
  )}&body=${encodeURIComponent(message)}`;

  const send = async () => {
    if (pending) return;
    openIfNeeded();
    track("brief_submit", {
      page: pagePath(),
      seconds_to_complete: Math.round(
        (Date.now() - openedAt.current) / 1000,
      ),
    });
    setError("");
    setPending(true);
    const result = await submitBrief({
      brand: brand.trim(),
      person: person.trim(),
      email: email.trim(),
      phone: phone.trim(),
      holding: category ?? "",
      value: scale ?? "",
      markets: markets.join(", "),
      context: "Barter advertising",
      detail: note.trim(),
      source: "barter",
      location: "start",
    });
    setPending(false);

    if (result.ok) {
      setSent(true);
      return;
    }
    setError(briefErrorCopy(result.error));
  };

  const chip = (active: boolean) =>
    `min-h-11 rounded-sm border px-4 py-2.5 text-body-s transition-colors duration-200 ${
      active
        ? "border-violet-deep bg-violet-deep text-white"
        : "border-rule-sand bg-sand text-on-sand-dim hover:border-on-sand/40 hover:text-on-sand"
    }`;

  return (
    <div className="rounded-(--radius-card) bg-sand-2 p-6 md:p-8">
      {sent ? (
        <BriefSuccess recorded />
      ) : (
      <>
      <fieldset>
        <Eyebrow as="legend" muted>01 — What are you holding?</Eyebrow>
        <div className="mt-4 flex flex-wrap gap-2.5">
          {categories.map((c) => (
            <button
              key={c}
              type="button"
              aria-pressed={category === c}
              onClick={() => setCategory(category === c ? null : c)}
              className={chip(category === c)}
            >
              {c}
            </button>
          ))}
        </div>
      </fieldset>

      <fieldset className="mt-8">
        <Eyebrow as="legend" muted>02 — Roughly what is it worth to you?</Eyebrow>
        <div className="mt-4 flex flex-wrap gap-2.5">
          {scales.map((s) => (
            <button
              key={s}
              type="button"
              aria-pressed={scale === s}
              onClick={() => setScale(scale === s ? null : s)}
              className={chip(scale === s)}
            >
              {s}
            </button>
          ))}
        </div>
        <p className="mt-3 text-body-s text-on-sand-dim">
          Your estimate is fine. The number that matters is agreed in writing
          later, by both of us.
        </p>
      </fieldset>

      <fieldset className="mt-8">
        <Eyebrow as="legend" muted>03 — Which markets? <span className="normal-case">(optional)</span></Eyebrow>
        <div className="mt-4 flex flex-wrap gap-2.5">
          {regions.map((r) => (
            <button
              key={r}
              type="button"
              aria-pressed={markets.includes(r)}
              onClick={() => toggleMarket(r)}
              className={chip(markets.includes(r))}
            >
              {r}
            </button>
          ))}
        </div>
      </fieldset>

      <fieldset className="mt-8">
        <Eyebrow as="legend" muted>04 — Who is asking?</Eyebrow>
        <div className="mt-4 grid gap-4 sm:grid-cols-2">
          <div>
            <Eyebrow as="label" muted className="block" htmlFor="barter-brand">
              Company name <span aria-hidden>*</span>
            </Eyebrow>
            <input
              id="barter-brand"
              value={brand}
              onChange={(e) => setBrand(e.target.value)}
              autoComplete="organization"
              required
              className="mt-2 h-12 w-full rounded-sm border border-rule-sand bg-sand px-4 text-body text-on-sand outline-none transition-colors focus:border-violet-deep"
              onFocus={() => onFieldFocus("brand")}
            />
          </div>
          <div>
            <Eyebrow as="label" muted className="block" htmlFor="barter-person">
              Your name <span aria-hidden>*</span>
            </Eyebrow>
            <input
              id="barter-person"
              value={person}
              onChange={(e) => setPerson(e.target.value)}
              autoComplete="name"
              required
              className="mt-2 h-12 w-full rounded-sm border border-rule-sand bg-sand px-4 text-body text-on-sand outline-none transition-colors focus:border-violet-deep"
              onFocus={() => onFieldFocus("person")}
            />
          </div>
          <div>
            <Eyebrow as="label" muted className="block" htmlFor="barter-email">
              Email <span aria-hidden>*</span>
            </Eyebrow>
            <input
              id="barter-email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              autoComplete="email"
              spellCheck={false}
              required
              className="mt-2 h-12 w-full rounded-sm border border-rule-sand bg-sand px-4 text-body text-on-sand outline-none transition-colors focus:border-violet-deep"
              onFocus={() => onFieldFocus("email")}
            />
          </div>
          <div>
            <Eyebrow as="label" muted className="block" htmlFor="barter-phone">
              Phone <span aria-hidden>*</span>
            </Eyebrow>
            <input
              id="barter-phone"
              type="tel"
              inputMode="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              autoComplete="tel"
              required
              minLength={8}
              className="mt-2 h-12 w-full rounded-sm border border-rule-sand bg-sand px-4 text-body text-on-sand outline-none transition-colors focus:border-violet-deep"
              onFocus={() => onFieldFocus("phone")}
            />
          </div>
          <div className="sm:col-span-2">
            <Eyebrow as="label" muted className="block" htmlFor="barter-note">
              Note
            </Eyebrow>
            <textarea
              id="barter-note"
              value={note}
              onChange={(e) => setNote(e.target.value)}
              rows={3}
              className="mt-2 w-full rounded-sm border border-rule-sand bg-sand p-4 text-body text-on-sand outline-none transition-colors focus:border-violet-deep"
              onFocus={() => onFieldFocus("note")}
            />
          </div>
        </div>
      </fieldset>

      <div className="mt-9 border-t border-rule-sand pt-6">
        {ready ? (
          <>
            <button
              type="button"
              data-cta="1"
              data-cta-location="start"
              data-cta-variant="default"
              data-cta-label="Request a plan"
              disabled={pending}
              onClick={() => void send()}
              className={`${btnClass("violet", "lg")} disabled:opacity-60`}
            >
              {pending ? "Sending…" : "Request a plan"}
              {pending ? null : <span className="row-arrow">→</span>}
            </button>
            {error ? (
              <p className="mt-4 text-body-s text-violet-deep" role="alert">
                {error}{" "}
                <a href={mailto} className="link-underline">
                  {site.email}
                </a>
              </p>
            ) : null}
            <p className="mt-4 max-w-[52ch] text-body-s text-on-sand-dim">
              {site.sla.acknowledge} {site.sla.plan}
            </p>
          </>
        ) : (
          <p className="text-body-s text-on-sand-dim">
            {!chosen
              ? "Pick a category and a rough value, then tell us who is asking."
              : "Add your company, your name, email and phone."}
          </p>
        )}

        <p className="mt-5 max-w-[56ch] text-body-s text-on-sand-dim">
          You will get a straight answer on whether barter suits what you are
          holding — including when it does not, and when a cash buy would serve
          you better.
        </p>
      </div>
      </>
      )}
    </div>
  );
}
