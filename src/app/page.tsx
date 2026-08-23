import Link from "next/link";
import Image from "next/image";
import HeroReel from "@/components/HeroReel";
import DayClock from "@/components/DayClock";
import Marquee from "@/components/Marquee";
import FormatPlate, {
  ExchangePlate,
  formatSets,
} from "@/components/FormatPlate";
import { Band, Btn, Card, Eyebrow, Rise } from "@/components/UI";
import {
  capabilities,
  clients,
  objectives,
  proofFrames,
  proofStats,
  site,
} from "@/lib/site";
import { additionalMarkets, cities } from "@/lib/cities";

/* ------------------------------------------------------------------
   The homepage, positioned as a brand activation company.

   The earlier version led with "outdoor advertising", which is a
   commodity with semi-public rates. Activation is a service with
   judgment in it, and it is the frame that makes the other six things
   — including barter — parts of one system rather than a menu.

   Section mechanisms deliberately differ: split hero, marquee, an
   argument in two columns, a verb ledger, a pinned horizontal day,
   subgrid cards, scroll-scaled proof frames, a violet band, a city
   grid, counting numbers. The old page used the same band-and-cards
   device eight times, which is what made it read as static.
------------------------------------------------------------------- */

const platesFor: Record<string, keyof typeof formatSets> = {
  "01": "outdoor",
  "02": "dooh",
  "03": "retail",
  "04": "broadcast",
  "05": "activation",
};

const deva: Record<string, string> = {
  Kolkata: "कोलकाता",
  "Delhi NCR": "दिल्ली",
  Mumbai: "मुंबई",
  Bangalore: "बेंगलुरु",
  Hyderabad: "हैदराबाद",
  Chennai: "चेन्नई",
  Pune: "पुणे",
  Ahmedabad: "अहमदाबाद",
  Lucknow: "लखनऊ",
  Jaipur: "जयपुर",
  Chandigarh: "चंडीगढ़",
  Agra: "आगरा",
  Meerut: "मेरठ",
  Patna: "पटना",
  Indore: "इंदौर",
  Kochi: "कोच्चि",
};

/* What a brand can trade. Categories only — never a stock list. */
const tradeable = [
  "Finished goods",
  "Unsold or seasonal stock",
  "Manufacturing capacity",
  "Vouchers and gift cards",
  "Services and subscriptions",
];

export default function Home() {
  const cityLinks: { name: string; href?: string }[] = [
    ...cities.map((c) => ({ name: c.name, href: `/cities/${c.slug}` })),
    ...additionalMarkets.map((name) => ({ name })),
  ];

  return (
    <>
      {/* 01 — HERO ------------------------------------------------
          Split, not overlaid. Type and footage hold separate columns,
          so neither has to compromise for the other. The headline
          reveals line by line — each line is its own element because
          splitting text at runtime breaks screen readers. */}
      <section className="grain relative overflow-hidden bg-sand pt-28 pb-14 md:pt-36 md:pb-20">
        <div className="shell relative z-10">
          <div className="grid-12 items-center gap-y-12">
            <div className="col-span-12 lg:col-span-6">
              <Rise>
                <Eyebrow deva="भारत भर में">
                  Brand activation across India
                </Eyebrow>
              </Rise>

              <h1
                data-split
                className="mt-6 font-display text-display-xl text-balance"
              >
                <span className="line-clip">
                  <span className="block">The brands India</span>
                </span>
                <span className="line-clip">
                  <span className="block">trusts are the ones</span>
                </span>
                <span className="line-clip">
                  <span className="block">
                    it <span className="em-serif text-violet-deep">keeps</span>{" "}
                    seeing.
                  </span>
                </span>
              </h1>

              <Rise delay={120}>
                <p className="mt-7 max-w-[46ch] text-body-l text-on-sand-dim">
                  We put brands into the streets, malls, lifts, papers and
                  screens of more than forty Indian cities — and prove every
                  placement went up. If the cash budget is not there, you can
                  pay in stock instead.
                </p>

                <div className="mt-9 flex flex-wrap items-center gap-3">
                  <Btn href={site.whatsapp} external size="lg">
                    Get a plan for your market
                  </Btn>
                  <Btn href="/barter" variant="outline-plum" size="lg">
                    Pay in stock instead
                  </Btn>
                </div>

                <p className="mt-5 text-[0.875rem] text-on-sand-dim">
                  Straight to WhatsApp. Usually answered the same working day.
                </p>
              </Rise>
            </div>

            <Rise
              delay={180}
              className="col-span-12 lg:col-span-5 lg:col-start-8"
            >
              <HeroReel />
            </Rise>
          </div>
        </div>
      </section>

      {/* 02 — CLIENT MARQUEE --------------------------------------
          Drifts rather than sitting in a wrapped block, and slows on
          hover so a name can actually be read. */}
      <section className="grain relative overflow-hidden bg-sand-2 py-10 text-on-sand md:py-12">
        <div className="shell relative z-10">
          <Rise>
            <p className="eyebrow text-on-sand-dim">
              Campaigns planned and run for
            </p>
          </Rise>
        </div>
        <Rise delay={80} className="relative z-10 mt-6">
          <Marquee
            items={clients}
            speed={46}
            renderItem={(name) => (
              <span className="font-display text-[clamp(1.5rem,3vw,2.5rem)] text-on-sand-dim">
                {name}
              </span>
            )}
          />
        </Rise>
      </section>

      {/* 03 — THE ARGUMENT ----------------------------------------
          Why physical presence, now. The old homepage never made this
          case at all; it went straight to what we sell. */}
      <Band tone="sand" grain>
        <div className="grid-12 gap-y-10">
          <Rise className="col-span-12 lg:col-span-6">
            <Eyebrow>Why physical, why now</Eyebrow>
            <h2 className="mt-5 max-w-[16ch] font-display text-display-l text-balance">
              Digital attention got cheap.{" "}
              <span className="em-serif text-violet-deep">
                Physical attention didn&rsquo;t.
              </span>
            </h2>
          </Rise>

          <div className="col-span-12 lg:col-span-5 lg:col-start-8">
            <Rise>
              <p className="text-body-l">
                An online impression can be blocked, skipped, muted or
                scrolled past in under a second, and most of them are. A
                hoarding on somebody&rsquo;s commute cannot be closed. They
                pass it going to work and again coming home, five days a
                week, whether or not they were in the mood.
              </p>
            </Rise>
            <Rise delay={80}>
              <p className="mt-6 text-on-sand-dim">
                That is the whole case for physical presence, and it is a
                case about frequency rather than reach. It is also why we
                would rather own one corridor for a month than dust an
                entire city for a fortnight — and why we will say so even
                when the wider plan is the easier sell.
              </p>
            </Rise>
          </div>
        </div>
      </Band>

      {/* 04 — THE SIX, AS VERBS -----------------------------------
          Six product names read as a menu to choose from. Six verbs
          read as one system with an order to it. */}
      <Band tone="plum" grain>
        <div className="grid-12 items-end">
          <Rise className="col-span-12 lg:col-span-7">
            <Eyebrow tone="plum" deva="हम क्या करते हैं">
              What activation means here
            </Eyebrow>
            <h2 className="mt-5 font-display text-display-l text-balance">
              Six ways to be{" "}
              <span className="em-serif">present</span>.
            </h2>
          </Rise>
          <p className="col-span-12 mt-5 max-w-[42ch] text-body-l text-on-plum-dim lg:col-span-5 lg:mt-0">
            Drawn at true proportion, because a hoarding and a lift panel are
            not the same product and should not be sold as though they were.
          </p>
        </div>

        <ul className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {capabilities.map((c, i) => (
            <Rise key={c.href} as="li" delay={i * 55}>
              <Link
                href={c.href}
                className={`lift group flex h-full flex-col rounded-(--radius-card) p-6 md:p-7 ${
                  c.accent
                    ? "bg-violet-deep text-white hover:bg-violet"
                    : "bg-plum-2 hover:bg-plum-3"
                }`}
              >
                <span
                  className={`eyebrow ${
                    c.accent ? "text-on-violet-dim" : "text-violet-lift"
                  }`}
                >
                  {c.index}
                </span>

                {/* The verb leads. The product name is the subtitle. */}
                <h3 className="mt-3 font-display text-h2 text-balance">
                  {c.verb}
                </h3>
                <p
                  className={`mt-1.5 font-mono text-[0.75rem] tracking-[0.08em] uppercase ${
                    c.accent ? "text-on-violet-dim" : "text-violet-lift"
                  }`}
                >
                  {c.title}
                </p>

                <p
                  className={`mt-4 max-w-[34ch] ${
                    c.accent ? "text-on-violet-dim" : "text-on-plum-dim"
                  }`}
                >
                  {c.short}
                </p>

                <div className="mt-7">
                  {c.accent ? (
                    <ExchangePlate />
                  ) : (
                    platesFor[c.index] && (
                      <FormatPlate
                        formats={formatSets[platesFor[c.index]]}
                        tone="dark"
                      />
                    )
                  )}
                </div>

                <span className="mt-auto inline-flex items-center gap-1.5 pt-7 text-[0.9375rem] font-medium">
                  {c.linkLabel ?? "Explore"} <span className="row-arrow">→</span>
                </span>
              </Link>
            </Rise>
          ))}
        </ul>
      </Band>

      {/* 05 — THE DAY ---------------------------------------------
          The signature. Pins and scrolls sideways through one day in
          an Indian city. */}
      <DayClock />

      {/* 06 — OBJECTIVES ------------------------------------------
          Subgrid so the eyebrow, heading, body and rule land on the
          same four lines in every card. Without it each card sets its
          own rhythm and the dividers stagger. */}
      <Band tone="sand" id="objectives" grain>
        <Rise>
          <Eyebrow deva="आप क्या करना चाहते हैं">Start with the objective</Eyebrow>
          <h2 className="mt-5 max-w-[20ch] font-display text-display-l text-balance">
            Tell us what you&rsquo;re{" "}
            <span className="em-serif text-violet-deep">trying to do</span>.
          </h2>
        </Rise>

        <ul className="mt-12 grid gap-4 lg:grid-cols-3 lg:grid-rows-[auto_auto_1fr_auto]">
          {objectives.map((o, i) => (
            <Rise
              key={o.index}
              as="li"
              delay={i * 70}
              className="lg:row-span-4 lg:grid lg:grid-rows-subgrid"
            >
              <Card className="lift flex h-full flex-col lg:row-span-4 lg:grid lg:grid-rows-subgrid lg:gap-0">
                <span className="eyebrow text-violet-deep">{o.index}</span>
                <h3 className="mt-3 font-display text-h2 text-balance">
                  {o.title}
                </h3>
                <p className="mt-4 text-on-sand-dim">{o.body}</p>
                <ul className="mt-6 space-y-2.5 border-t border-rule-sand pt-5">
                  {o.points.map((p) => (
                    <li key={p} className="flex gap-3 text-[0.9375rem]">
                      <span aria-hidden className="text-violet-deep">
                        —
                      </span>
                      <span className="text-on-sand-dim">{p}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            </Rise>
          ))}
        </ul>
      </Band>

      {/* 07 — PROOF ------------------------------------------------
          The frames now scale into place on scroll and run two-up at
          a much larger size. Small thumbnails undersold the one thing
          on the site nobody else offers. */}
      <Band tone="plum2" grain>
        <div className="grid-12 items-end">
          <Rise className="col-span-12 lg:col-span-7">
            <Eyebrow tone="plum2" deva="डिलीवरी का सबूत">
              Proof of delivery
            </Eyebrow>
            <h2 className="mt-5 font-display text-display-l text-balance">
              You will know it{" "}
              <span className="em-serif">actually went up</span>.
            </h2>
          </Rise>
          <p className="col-span-12 mt-5 max-w-[42ch] text-body-l text-on-plum-dim lg:col-span-5 lg:mt-0">
            Every placement photographed on site, geo-tagged and dated. You
            get the file, not a summary. Where a screen is digital we verify
            the run date against that morning&rsquo;s newspaper in frame.
          </p>
        </div>

        <ul className="mt-12 grid gap-5 sm:grid-cols-2">
          {proofFrames.map((f, i) => (
            <Rise key={f.src} as="li" delay={i * 60}>
              <figure className="overflow-hidden rounded-(--radius-card) bg-plum">
                <div className="frame relative aspect-3/2">
                  <Image
                    data-scale-in
                    src={f.src}
                    alt={f.alt}
                    fill
                    sizes="(min-width: 640px) 46vw, 92vw"
                    className="object-cover"
                  />
                </div>
                <figcaption className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1 p-5">
                  <p className="text-h3">{f.place}</p>
                  <p className="font-mono text-[0.6875rem] tracking-[0.05em] text-on-plum-dim">
                    {f.stamp}
                  </p>
                </figcaption>
              </figure>
            </Rise>
          ))}
        </ul>
      </Band>

      {/* 08 — BARTER ---------------------------------------------- */}
      <Band tone="violet" grain>
        <div className="grid-12 items-start gap-y-10">
          <Rise className="col-span-12 lg:col-span-6">
            <Eyebrow tone="violet" deva="बार्टर विज्ञापन">
              Barter advertising
            </Eyebrow>
            <h2 className="mt-5 max-w-[16ch] font-display text-display-l text-balance">
              Stock loses value every month.{" "}
              <span className="em-serif">Media doesn&rsquo;t.</span>
            </h2>
            <p className="mt-6 max-w-[48ch] text-body-l">
              If you are holding goods, capacity or vouchers, you are already
              paying for them — in warehousing, in working capital, in
              depreciation. Barter moves that cost off the shelf and onto a
              hoarding, at a value agreed in writing before anything moves.
            </p>
            <div className="mt-9">
              <Btn href="/barter" variant="sand" size="lg">
                See how barter works
              </Btn>
            </div>
          </Rise>

          <Rise delay={100} className="col-span-12 lg:col-span-5 lg:col-start-8">
            <div className="rounded-(--radius-card) bg-white/10 p-6 md:p-7">
              <p className="eyebrow text-on-violet-dim">What you can trade</p>
              <ul className="mt-5 divide-y divide-white/15">
                {tradeable.map((t) => (
                  <li key={t} className="flex items-start gap-3 py-3.5">
                    <span aria-hidden className="text-on-violet-dim">
                      →
                    </span>
                    <span className="text-h3">{t}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-6 text-[0.875rem] text-on-violet-dim">
                Valued at fair market value, invoiced on both legs, GST
                compliant. Goods move through controlled corporate channels —
                never the open market.
              </p>
            </div>
          </Rise>
        </div>
      </Band>

      {/* 09 — CITIES ---------------------------------------------- */}
      <Band tone="sand" grain>
        <div className="grid-12 items-end">
          <Rise className="col-span-12 lg:col-span-8">
            <Eyebrow deva="शहर">Where we operate</Eyebrow>
            <h2 className="mt-5 font-display text-display-l text-balance">
              Planned from catchment data,{" "}
              <span className="em-serif text-violet-deep">not a rate card</span>
              .
            </h2>
          </Rise>
          <div className="col-span-12 mt-6 lg:col-span-3 lg:col-start-10 lg:mt-0 lg:text-right">
            <Btn href="/cities" variant="outline-plum">
              All cities
            </Btn>
          </div>
        </div>

        <ul className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
          {cityLinks.map((c, i) => (
            <Rise key={c.name} as="li" delay={Math.min(i, 8) * 35}>
              {c.href ? (
                <Link
                  href={c.href}
                  className="lift group flex flex-col gap-0.5 rounded-xl bg-sand-2 px-4 py-4 hover:bg-sand-3 sm:flex-row sm:items-baseline sm:justify-between sm:gap-3"
                >
                  <span className="text-h3">{c.name}</span>
                  <span className="deva text-[0.8125rem] text-violet-deep">
                    {deva[c.name]}
                  </span>
                </Link>
              ) : (
                <div className="flex flex-col gap-0.5 rounded-xl px-4 py-4 ring-1 ring-rule-sand ring-inset sm:flex-row sm:items-baseline sm:justify-between sm:gap-3">
                  <span className="text-h3 text-on-sand-dim">{c.name}</span>
                  <span className="deva text-[0.8125rem] text-on-sand-dim/60">
                    {deva[c.name]}
                  </span>
                </div>
              )}
            </Rise>
          ))}
        </ul>
      </Band>

      {/* 10 — NUMBERS ---------------------------------------------
          The values count up once on entry. data-count carries the
          final string so reduced motion and no-JS both land on it. */}
      <Band tone="sand2" grain>
        <Rise>
          <Eyebrow>The short version</Eyebrow>
        </Rise>
        <dl className="mt-10 grid grid-cols-2 gap-x-6 gap-y-10 lg:grid-cols-4">
          {proofStats.map((s, i) => (
            <Rise key={s.label} delay={i * 60}>
              <dt className="eyebrow text-on-sand-dim">{s.label}</dt>
              <dd
                data-count={/\d/.test(s.value) ? s.value : undefined}
                className="mt-3 font-display text-[clamp(2.25rem,4.5vw,3.5rem)] leading-none"
              >
                {s.value}
              </dd>
              <p className="mt-2.5 max-w-[24ch] text-[0.875rem] text-on-sand-dim">
                {s.note}
              </p>
            </Rise>
          ))}
        </dl>
      </Band>
    </>
  );
}
