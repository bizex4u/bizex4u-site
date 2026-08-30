"use client";

import { useRef, useState } from "react";
import { site } from "@/lib/site";
import { submitBrief } from "@/lib/submitBrief";
import { Eyebrow } from "@/components/UI";
import { pagePath, scrollPct, useAnalytics } from "@/lib/analytics";

/**
 * "What are you holding?"
 *
 * The highest-intent thing on the barter page. Barter is abstract
 * until someone names their own stock out loud, and this makes them
 * do it in three taps before handing the answers to WhatsApp
 * pre-filled.
 *
 * IT COLLECTS, IT NEVER QUOTES. There is deliberately no output that
 * says "this buys you X" — that would be a rate card by implication,
 * it would be wrong for most inputs, and the entire barter page argues
 * that valuation is settled in writing by two parties rather than
 * calculated by a widget. The reward for filling it in is a faster,
 * better-informed first conversation, and that is the honest promise.
 *
 * Nothing is transmitted from this component. The selections only ever
 * become text in a WhatsApp draft that the user sends themselves.
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
  /* Brand and name are mandatory before this reaches WhatsApp. The
     chips on their own describe an opportunity with nobody attached to
     it, which is not a lead. */
  const [brand, setBrand] = useState("");
  const [person, setPerson] = useState("");
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

  const named = brand.trim().length > 0 && person.trim().length > 0;
  const chosen = Boolean(category && scale);
  const ready = chosen && named;

  const message = [
    "Hi Bizex4U — I'd like to look at a barter structure.",
    "",
    `Brand: ${brand.trim()}`,
    `Name: ${person.trim()}`,
    category && `What we hold: ${category}`,
    scale && `Rough value: ${scale}`,
    markets.length > 0 && `Markets of interest: ${markets.join(", ")}`,
  ]
    .filter(Boolean)
    .join("\n");

  const href = `${site.whatsappBase}?text=${encodeURIComponent(message)}`;

  const chip = (active: boolean) =>
    `min-h-11 rounded-full border px-4 py-2.5 text-body-s transition-colors duration-200 ${
      active
        ? "border-violet-deep bg-violet-deep text-white"
        : "border-rule-sand bg-sand text-on-sand-dim hover:border-on-sand/40 hover:text-on-sand"
    }`;

  return (
    <div className="rounded-(--radius-card) bg-sand-2 p-6 md:p-8">
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
              Brand or company <span aria-hidden>*</span>
            </Eyebrow>
            <input
              id="barter-brand"
              value={brand}
              onChange={(e) => setBrand(e.target.value)}
              autoComplete="organization"
              required
              className="mt-2 h-12 w-full rounded-xl border border-rule-sand bg-sand px-4 text-body text-on-sand outline-none transition-colors focus:border-violet-deep"
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
              className="mt-2 h-12 w-full rounded-xl border border-rule-sand bg-sand px-4 text-body text-on-sand outline-none transition-colors focus:border-violet-deep"
              onFocus={() => onFieldFocus("person")}
            />
          </div>
        </div>
      </fieldset>

      <div className="mt-9 border-t border-rule-sand pt-6">
        {ready ? (
          <>
            <a
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              data-cta="1"
              data-cta-location="start"
              data-cta-variant="default"
              data-cta-label="Send this on WhatsApp"
              data-whatsapp="1"
              onClick={() => {
                openIfNeeded();
                track("brief_submit", {
                  page: pagePath(),
                  seconds_to_complete: Math.round(
                    (Date.now() - openedAt.current) / 1000,
                  ),
                });
                /* Fire and forget, for the same reason as the brief
                   dialog: awaiting the Sheet write would delay the
                   navigation past the user gesture. */
                void submitBrief({
                  brand: brand.trim(),
                  person: person.trim(),
                  holding: category ?? "",
                  value: scale ?? "",
                  markets: markets.join(", "),
                  context: "Barter advertising",
                  source: "barter",
                });
              }}
              className="group inline-flex min-h-14 items-center justify-center gap-2.5 rounded-full bg-violet-deep px-7 py-3 font-medium text-white transition-colors duration-200 hover:bg-violet"
            >
              Send this on WhatsApp
              <span className="row-arrow">→</span>
            </a>
            <p className="mt-4 max-w-[52ch] text-body-s text-on-sand-dim">
              Opens WhatsApp with your answers written in. Nothing is sent
              until you press send, and nothing is stored here.
            </p>
          </>
        ) : (
          <p className="text-body-s text-on-sand-dim">
            {!chosen
              ? "Pick a category and a rough value, then tell us who is asking."
              : "Add your brand and your name and this turns into a message you can send."}
          </p>
        )}

        <p className="mt-5 max-w-[56ch] text-body-s text-on-sand-dim">
          You will get a straight answer on whether barter suits what you are
          holding — including when it does not, and when a cash buy would serve
          you better.
        </p>
      </div>
    </div>
  );
}
