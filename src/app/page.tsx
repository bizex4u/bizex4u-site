import Link from "next/link";
import Image from "next/image";
import HeroReel from "@/components/HeroReel";
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
          Split rather than overlaid. v3 put the headline on top of
          bright daylight footage and it was hard to read; type and
          video now occupy separate columns and neither compromises. */}
      <section className="grain relative overflow-hidden bg-sand pt-28 pb-14 md:pt-36 md:pb-20">
        <div className="shell relative z-10">
          <div className="grid-12 items-center gap-y-12">
            <div className="col-span-12 lg:col-span-6">
              <Rise>
                <Eyebrow deva="भारत भर में">
                  Outdoor advertising across India
                </Eyebrow>
              </Rise>

              <Rise delay={60}>
                <h1 className="mt-6 font-display text-display-xl text-balance">
                  We put brands where India{" "}
                  <span className="em-serif text-violet-deep">actually</span>{" "}
                  is.
                </h1>
              </Rise>

              <Rise delay={120}>
                <p className="mt-7 max-w-[46ch] text-body-l text-on-sand-dim">
                  Hoardings, LED, transit and retail media across 40+ Indian
                  cities. Every placement geo-tagged and dated, so you can see
                  it ran — and if the budget isn&rsquo;t there, you can pay in
                  stock instead of cash.
                </p>

                <div className="mt-9 flex flex-wrap items-center gap-3">
                  <Btn href={site.whatsapp} external size="lg">
                    Get a plan for your market
                  </Btn>
                  <Btn href="/barter" variant="outline-plum" size="lg">
                    How barter works
                  </Btn>
                </div>

                <p className="mt-5 text-[0.875rem] text-on-sand-dim">
                  Straight to WhatsApp. Usually answered the same working day.
                </p>
              </Rise>
            </div>

            <Rise delay={180} className="col-span-12 lg:col-span-5 lg:col-start-8">
              <HeroReel />
            </Rise>
          </div>
        </div>
      </section>

      {/* 02 — CLIENT NAMES -------------------------------------- */}
      <Band tone="sand2" className="py-10 md:py-12" grain>
        <Rise>
          <p className="eyebrow text-on-sand-dim">
            Campaigns planned and run for
          </p>
          <ul className="mt-5 flex flex-wrap gap-x-7 gap-y-3">
            {clients.map((c) => (
              <li key={c} className="text-h3 text-on-sand-dim">
                {c}
              </li>
            ))}
          </ul>
        </Rise>
      </Band>

      {/* 03 — WHAT WE BUY --------------------------------------- */}
      <Band tone="plum" grain>
        <div className="grid-12 items-end">
          <Rise className="col-span-12 lg:col-span-7">
            <Eyebrow tone="plum" deva="हम क्या ख़रीदते हैं">
              What we buy
            </Eyebrow>
            <h2 className="mt-5 font-display text-display-l text-balance">
              Six formats. <span className="em-serif">One plan.</span>
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
                className={`group flex h-full flex-col rounded-(--radius-card) p-6 transition-colors duration-200 md:p-7 ${
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
                <h3 className="mt-3 font-display text-h2">{c.title}</h3>
                <p
                  className={`mt-3 max-w-[34ch] ${
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

      {/* 04 — OBJECTIVES ---------------------------------------- */}
      <Band tone="sand" grain>
        <Rise>
          <Eyebrow deva="आप क्या करना चाहते हैं">Start with the objective</Eyebrow>
          <h2 className="mt-5 max-w-[20ch] font-display text-display-l text-balance">
            Tell us what you&rsquo;re{" "}
            <span className="em-serif text-violet-deep">trying to do</span>.
          </h2>
        </Rise>

        {/* Subgrid so the eyebrow, heading, body and rule land on the same
            four lines in every card. Without it each card sets its own
            rhythm and the dividers stagger. */}
        <ul className="mt-12 grid gap-4 lg:grid-cols-3 lg:grid-rows-[auto_auto_1fr_auto]">
          {objectives.map((o, i) => (
            <Rise
              key={o.index}
              as="li"
              delay={i * 70}
              className="lg:row-span-4 lg:grid lg:grid-rows-subgrid"
            >
              <Card className="flex h-full flex-col lg:row-span-4 lg:grid lg:grid-rows-subgrid lg:gap-0">
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

      {/* 05 — PROOF OF DELIVERY --------------------------------- */}
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
            Every placement photographed on site, geo-tagged and dated. You get
            the file, not a summary. Where a screen is digital we verify the run
            date against that morning&rsquo;s newspaper in frame.
          </p>
        </div>

        <ul className="mt-10 grid grid-cols-2 gap-4 lg:grid-cols-4">
          {proofFrames.map((f, i) => (
            <Rise key={f.src} as="li" delay={i * 60}>
              <div className="overflow-hidden rounded-(--radius-card) bg-plum">
                <div className="relative aspect-3/2">
                  <Image
                    src={f.src}
                    alt={f.alt}
                    fill
                    sizes="(min-width: 1024px) 22vw, 45vw"
                    className="object-cover"
                  />
                </div>
                <div className="p-4">
                  <p className="text-[0.9375rem] leading-snug font-medium">
                    {f.place}
                  </p>
                  <p className="mt-1 font-mono text-[0.6875rem] leading-snug tracking-[0.05em] text-on-plum-dim">
                    {f.stamp}
                  </p>
                </div>
              </div>
            </Rise>
          ))}
        </ul>
      </Band>

      {/* 06 — BARTER -------------------------------------------- */}
      <Band tone="violet" grain>
        <div className="grid gap-12 lg:grid-cols-[1.1fr_1fr] lg:gap-16">
          <Rise>
            <Eyebrow tone="violet" deva="बार्टर विज्ञापन">
              Barter advertising
            </Eyebrow>
            <h2 className="mt-5 font-display text-display-l text-balance">
              Stock loses value every month.{" "}
              <span className="em-serif">Media doesn&rsquo;t.</span>
            </h2>
            <p className="mt-7 max-w-[46ch] text-body-l text-on-violet-dim">
              If you are holding goods, capacity or vouchers, you are already
              paying for them — in warehousing, in working capital, in
              depreciation. Barter moves that cost off the shelf and onto a
              hoarding, at a value agreed in writing before anything moves.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Btn href="/barter" variant="sand" size="lg">
                See how barter works
              </Btn>
            </div>
          </Rise>

          <Rise delay={100}>
            <div className="rounded-(--radius-card) bg-white/8 p-6 md:p-7">
              <p className="eyebrow text-on-violet-dim">What you can trade</p>
              <ul className="mt-5 divide-y divide-white/15">
                {tradeable.map((t) => (
                  <li key={t} className="flex items-center gap-3 py-3.5">
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

      {/* 07 — CITIES -------------------------------------------- */}
      <Band tone="sand" grain>
        <div className="grid-12 items-end">
          <Rise className="col-span-12 lg:col-span-8">
            <Eyebrow deva="शहर">Where we operate</Eyebrow>
            <h2 className="mt-5 font-display text-display-l text-balance">
              Planned from catchment data,{" "}
              <span className="em-serif text-violet-deep">
                not a rate card
              </span>
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
                  className="group flex flex-col gap-0.5 rounded-xl bg-sand-2 px-4 py-4 transition-colors duration-200 hover:bg-sand-3 sm:flex-row sm:items-baseline sm:justify-between sm:gap-3"
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

      {/* 08 — NUMBERS ------------------------------------------- */}
      <Band tone="sand2" grain>
        <Rise>
          <Eyebrow>The short version</Eyebrow>
        </Rise>
        <dl className="mt-10 grid grid-cols-2 gap-x-6 gap-y-10 lg:grid-cols-4">
          {proofStats.map((s, i) => (
            <Rise key={s.label} delay={i * 60}>
              <dt className="eyebrow text-on-sand-dim">{s.label}</dt>
              <dd className="mt-3 font-display text-[clamp(2.25rem,4.5vw,3.5rem)] leading-none">
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
