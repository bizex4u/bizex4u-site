import Link from "next/link";
import Image from "next/image";
import HeroReel from "@/components/HeroReel";
import FormatPlate, { formatSets } from "@/components/FormatPlate";
import { Band, Btn, Card, Eyebrow, Rise, Stat } from "@/components/UI";
import {
  atlasModules,
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
};

/* Devanagari companions for the city grid. */
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

export default function Home() {
  const cityLinks: { name: string; href?: string }[] = [
    ...cities.map((c) => ({ name: c.name, href: `/cities/${c.slug}` })),
    ...additionalMarkets.map((name) => ({ name })),
  ];

  return (
    <>
      {/* 01 — HERO ------------------------------------------------ */}
      <section
        data-hero
        className="relative flex min-h-[88svh] flex-col justify-end overflow-hidden bg-ink"
      >
        <HeroReel />

        <div data-hero-copy className="shell relative z-10 pt-32 pb-12 md:pb-16">
          <Rise>
            <Eyebrow deva="भारत भर में">Outdoor advertising across India</Eyebrow>
          </Rise>

          <div className="grid-12 mt-6">
            <Rise delay={60} className="col-span-12 lg:col-span-9">
              {/* The Laqshya move: accent a phrase inside the headline
                  rather than adding decoration around it. */}
              <h1 className="font-display text-display-xl text-balance">
                We put brands where <span className="hl">India actually is</span>.
              </h1>
            </Rise>
          </div>

          <div className="grid-12 mt-8">
            <Rise delay={120} className="col-span-12 lg:col-span-6">
              <p className="text-body-l text-on-ink-dim">
                Hoardings, LED, transit and retail media — planned from
                catchment data, bought properly, and photographed on site so
                you can see it ran.
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-3">
                <Btn href={site.whatsapp} external>
                  Talk on WhatsApp
                </Btn>
                <Btn href="/what-we-do" variant="outline-light">
                  See what we buy
                </Btn>
              </div>
            </Rise>
          </div>
        </div>
      </section>

      <div className="relative z-10">
        {/* 02 — CLIENT NAMES ------------------------------------- */}
        <Band tone="ink2" className="py-10 md:py-12">
          <Rise>
            <p className="eyebrow text-on-ink-dim">
              Campaigns planned and run for
            </p>
            <ul className="mt-5 flex flex-wrap gap-x-7 gap-y-3">
              {clients.map((c) => (
                <li key={c} className="text-h3 text-on-ink-dim">
                  {c}
                </li>
              ))}
            </ul>
          </Rise>
        </Band>

        {/* 03 — WHAT WE BUY (cream) ------------------------------ */}
        <Band tone="cream">
          <Rise className="grid-12 items-end">
            <div className="col-span-12 lg:col-span-7">
              <Eyebrow tone="cream" deva="हम क्या ख़रीदते हैं">
                What we buy
              </Eyebrow>
              <h2 className="mt-5 font-display text-display-l text-balance">
                Six formats. One plan.
              </h2>
            </div>
            <p className="col-span-12 mt-5 max-w-[44ch] text-body-l text-on-cream-dim lg:col-span-5 lg:mt-0">
              Every format drawn at its true proportion, because a hoarding and
              a lift panel are not the same product.
            </p>
          </Rise>

          <ul className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {capabilities.map((c, i) => (
              <Rise key={c.href} as="li" delay={i * 60}>
                <Link
                  href={c.href}
                  className={`group flex h-full flex-col rounded-(--radius-card) p-6 transition-colors duration-200 md:p-7 ${
                    c.accent
                      ? "bg-amber text-on-amber hover:bg-amber-lift"
                      : "bg-cream-2 hover:bg-rule-light"
                  }`}
                >
                  <span
                    className={`eyebrow ${
                      c.accent ? "text-on-amber-dim" : "text-amber-deep"
                    }`}
                  >
                    {c.index}
                  </span>
                  <h3 className="mt-3 text-h2">{c.title}</h3>
                  <p
                    className={`mt-3 max-w-[34ch] ${
                      c.accent ? "text-on-amber-dim" : "text-on-cream-dim"
                    }`}
                  >
                    {c.short}
                  </p>

                  {platesFor[c.index] && (
                    <div className="mt-7">
                      <FormatPlate formats={formatSets[platesFor[c.index]]} />
                    </div>
                  )}

                  <span className="mt-auto inline-flex items-center gap-1.5 pt-7 text-[0.9375rem] font-medium">
                    {c.linkLabel ?? "Explore"}{" "}
                    <span className="row-arrow">→</span>
                  </span>
                </Link>
              </Rise>
            ))}
          </ul>
        </Band>

        {/* 04 — OBJECTIVES (the Runway split) -------------------- */}
        <Band tone="ink">
          <Rise>
            <Eyebrow deva="आप क्या करना चाहते हैं">Start with the objective</Eyebrow>
            <h2 className="mt-5 max-w-[18ch] font-display text-display-l text-balance">
              Tell us what you&rsquo;re <span className="hl">trying to do</span>.
            </h2>
          </Rise>

          <ul className="mt-12 grid gap-4 lg:grid-cols-3">
            {objectives.map((o, i) => (
              <Rise key={o.index} as="li" delay={i * 70}>
                <Card className="flex h-full flex-col">
                  <span className="eyebrow text-amber">{o.index}</span>
                  <h3 className="mt-3 text-h2 text-balance">{o.title}</h3>
                  <p className="mt-4 text-on-ink-dim">{o.body}</p>
                  <ul className="mt-6 space-y-2.5 border-t border-rule-dark pt-5">
                    {o.points.map((p) => (
                      <li key={p} className="flex gap-3 text-[0.9375rem]">
                        <span aria-hidden className="text-amber">
                          —
                        </span>
                        <span className="text-on-ink-dim">{p}</span>
                      </li>
                    ))}
                  </ul>
                </Card>
              </Rise>
            ))}
          </ul>
        </Band>

        {/* 05 — PROOF OF DELIVERY -------------------------------- */}
        <Band tone="ink2">
          <div className="grid-12 items-end">
            <Rise className="col-span-12 lg:col-span-7">
              <Eyebrow deva="डिलीवरी का सबूत">Proof of delivery</Eyebrow>
              <h2 className="mt-5 font-display text-display-l text-balance">
                Every placement <span className="hl">photographed</span>,
                geo-tagged and dated.
              </h2>
            </Rise>
            <p className="col-span-12 mt-5 max-w-[42ch] text-body-l text-on-ink-dim lg:col-span-5 lg:mt-0">
              You get the file, not a summary. Where a screen is digital we
              verify the run date against that morning&rsquo;s newspaper in
              frame.
            </p>
          </div>

          <ul className="mt-10 grid grid-cols-2 gap-4 lg:grid-cols-4">
            {proofFrames.map((f, i) => (
              <Rise key={f.src} as="li" delay={i * 60}>
                <div className="overflow-hidden rounded-(--radius-card) bg-ink-3">
                  <div className="relative aspect-4/3">
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
                    <p className="mt-1 font-mono text-[0.6875rem] leading-snug tracking-[0.05em] text-on-ink-dim">
                      {f.stamp}
                    </p>
                  </div>
                </div>
              </Rise>
            ))}
          </ul>
        </Band>

        {/* 06 — ATLAS (cream) ------------------------------------ */}
        <Band tone="cream">
          <div className="grid-12 gap-y-10">
            <Rise className="col-span-12 lg:col-span-5">
              <Eyebrow tone="cream" deva="हमारा प्लानिंग सिस्टम">
                How we plan
              </Eyebrow>
              <h2 className="mt-5 font-display text-display-l">Atlas</h2>
              <p className="mt-6 max-w-[42ch] text-body-l text-on-cream-dim">
                Our in-house planning layer. It maps brands, catchments,
                markets and media into one view — and it is the reason our
                recommendations are shorter than the proposals they compete
                against.
              </p>
              <div className="mt-8">
                <Btn href="/atlas" variant="outline-dark">
                  Explore Atlas
                </Btn>
              </div>
            </Rise>

            {/* The artefact. Every section on the reference board shows
                the product rather than describing it. */}
            <Rise delay={120} className="col-span-12 lg:col-span-6 lg:col-start-7">
              <div className="rounded-(--radius-card) bg-ink p-3">
                <div className="flex items-center gap-2 px-3 py-2.5">
                  <span className="size-2 rounded-full bg-amber" />
                  <span className="eyebrow text-on-ink-dim">
                    Atlas — Kanpur, catchment view
                  </span>
                </div>
                <ul className="grid gap-px overflow-hidden rounded-xl bg-rule-dark">
                  {atlasModules.map((m) => (
                    <li key={m.index} className="bg-ink-2 p-4">
                      <div className="flex items-baseline gap-4">
                        <span className="eyebrow text-amber">{m.index}</span>
                        <div>
                          <p className="text-h3 text-on-ink">{m.title}</p>
                          <p className="mt-1 max-w-[46ch] text-[0.875rem] text-on-ink-dim">
                            {m.body}
                          </p>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </Rise>
          </div>
        </Band>

        {/* 07 — CITIES ------------------------------------------- */}
        <Band tone="ink">
          <div className="grid-12 items-end">
            <Rise className="col-span-12 lg:col-span-7">
              <Eyebrow deva="शहर">Where we operate</Eyebrow>
              <h2 className="mt-5 font-display text-display-l text-balance">
                Planned from catchment data, <span className="hl">not a rate card</span>.
              </h2>
            </Rise>
            <div className="col-span-12 mt-6 lg:col-span-4 lg:col-start-9 lg:mt-0">
              <Btn href="/cities" variant="outline-light">
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
                    className="group flex items-baseline justify-between gap-3 rounded-xl bg-ink-2 px-4 py-4 transition-colors duration-200 hover:bg-ink-3"
                  >
                    <span className="text-h3">{c.name}</span>
                    <span className="deva text-[0.875rem] text-amber">
                      {deva[c.name]}
                    </span>
                  </Link>
                ) : (
                  <div className="flex items-baseline justify-between gap-3 rounded-xl px-4 py-4 ring-1 ring-rule-dark ring-inset">
                    <span className="text-h3 text-on-ink-dim">{c.name}</span>
                    <span className="deva text-[0.875rem] text-on-ink-dim/60">
                      {deva[c.name]}
                    </span>
                  </div>
                )}
              </Rise>
            ))}
          </ul>
        </Band>

        {/* 08 — NUMBERS + BARTER (amber) ------------------------- */}
        <Band tone="amber">
          <div className="grid gap-10 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
            <Rise>
              <Eyebrow tone="amber">The commercial model</Eyebrow>
              <h2 className="mt-5 font-display text-display-l text-balance">
                You can pay for all of this without cash.
              </h2>
              <p className="mt-6 max-w-[44ch] text-body-l text-on-amber-dim">
                We take finished goods, unsold stock, capacity or vouchers
                against media value — contracted, GST-compliant, and valued in
                writing before anything moves.
              </p>
              <div className="mt-8">
                <Btn href="/barter" variant="light">
                  How barter works
                </Btn>
              </div>
            </Rise>

            <Rise delay={100}>
              <dl className="grid grid-cols-2 gap-x-6 gap-y-9 border-t border-on-amber/20 pt-9">
                {proofStats.map((s) => (
                  <div key={s.label}>
                    <dt className="eyebrow text-on-amber-dim">{s.label}</dt>
                    <dd className="mt-2.5 font-display text-[clamp(2rem,4vw,3rem)] leading-none font-semibold tracking-[-0.035em]">
                      {s.value}
                    </dd>
                    <p className="mt-2 max-w-[24ch] text-[0.875rem] text-on-amber-dim">
                      {s.note}
                    </p>
                  </div>
                ))}
              </dl>
            </Rise>
          </div>
        </Band>
      </div>
    </>
  );
}
