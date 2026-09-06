import type { Metadata, ResolvingMetadata } from "next";
import Link from "next/link";
import { Band, Btn, Eyebrow, Rise } from "@/components/UI";
import { Faq } from "@/components/Ledger";
import BriefButton from "@/components/BriefButton";
import PageSchema from "@/components/PageSchema";
import AskAssistants from "@/components/AskAssistants";
import { routeMetadata } from "@/lib/metadata";
import { organisationId, speakable } from "@/lib/schema";
import { site } from "@/lib/site";

/**
 * Airport advertising, as its own page.
 *
 * WHY IT EXISTS. The pre-migration site held /airport-advertising and a
 * cost guide at /blog/airport-advertising-cost-india-2026 — the guide
 * sat on page one of Google when the cutover pointed both at
 * /what-we-do/outdoor-transit, which answers a different question. This
 * page is the real equivalent; the old URLs redirect here.
 *
 * CONTENT RULES are the city-page rules (see lib/cities/types.ts): no
 * rates, no inventory claims, no licensed research numbers. The cost
 * question is captured and answered with the variables, never a figure.
 */

const PATH = "/what-we-do/airport-advertising";

export async function generateMetadata(
  _props: unknown,
  parent: ResolvingMetadata,
): Promise<Metadata> {
  return routeMetadata(parent, {
    path: PATH,
    title: "Airport Advertising in India — Formats, Cost Drivers, Planning",
    description:
      "Terminal media, approach-corridor unipoles and airport DOOH, planned across India's metro and tier-2 airports by an independent buyer. What the cost actually depends on — and when the approach road beats the terminal.",
  });
}

const lede =
  "Terminal media, approach corridors and airport DOOH, planned as one buy. We do not hold airport inventory — we compare what the concessionaires and corridor owners each ask, and argue for the side that fits the audience.";

const formats = [
  {
    title: "Terminal media",
    kicker: "Inside the building",
    body: "Check-in, security return, boarding corridors, baggage claim and arrivals. Terminal inventory is licensed to media concessionaires under each airport operator — Ahmedabad's SVPI, for instance, sits under the Adani airports concession — so buying it means an RFP to the concession holder, not a call to the airport. Dwell is longest at baggage claim and check-in, and that is where a message gets read rather than passed.",
  },
  {
    title: "Approach-corridor large format",
    kicker: "The road in",
    body: "Unipoles and gantries on the airport road reach the same traveller minutes earlier, plus every commuter the corridor carries all day. Bengaluru's Bellary Road axis towards Kempegowda is the clearest case in the country: a business-travel audience no other single format in that city isolates. The approach is bought from ordinary media owners under municipal licensing, not from the airport concession — a different negotiation with different economics.",
  },
  {
    title: "Airport DOOH",
    kicker: "Screens, by daypart",
    body: "Digital screens inside terminals and on city-side approaches, bought by loop and daypart the way we buy any DOOH. Morning departure banks skew business; evening arrivals skew returning residents. A screen bought without reference to the flight bank is a screen bought for half its value.",
  },
  {
    title: "Transit connections",
    kicker: "Rail to the kerb",
    body: "Where a metro line serves the airport — Delhi's Airport Express is the established case — train and station media extend the same journey inland. That inventory belongs to the transit concession, not the airport one, and we plan it under transit rules.",
  },
];

const costDrivers = [
  {
    factor: "Terminal versus approach",
    note: "Terminal media carries concession economics; the approach road carries municipal-licence economics. The same budget goes materially further on one than the other, and which one is right is an audience question, not a price question.",
  },
  {
    factor: "Zone inside the terminal",
    note: "Arrivals, baggage claim, security return and check-in are different audiences at different dwell times. Departures reach travellers with time; arrivals reach them with intent and a phone already out.",
  },
  {
    factor: "Domestic versus international mix",
    note: "An international pier reaches a narrower, higher-spend audience. Whether that premium is worth paying depends entirely on who the brand needs.",
  },
  {
    factor: "Flight-bank timing",
    note: "For DOOH loops, the morning business bank and the late-evening arrivals bank are not the same buy. Daypart is negotiable; most buyers never ask.",
  },
  {
    factor: "Tenure and rotation",
    note: "Airport media is typically sold on longer tenures than street media. Shorter flighting can be negotiated against rotation — if someone is at the table arguing for it.",
  },
  {
    factor: "The city on the other end",
    note: "A Coimbatore or Kochi airport buy prices nothing like Delhi or Mumbai, and reaches an audience — including returning NRI traffic — that a metro plan never touches.",
  },
];

const markets = [
  { city: "Delhi NCR", slug: "delhi-ncr", note: "Indira Gandhi International, plus the Airport Express line inland." },
  { city: "Mumbai", slug: "mumbai", note: "The busiest single-city travel audience in the country." },
  { city: "Bangalore", slug: "bangalore", note: "Kempegowda International and the Bellary Road approach axis." },
  { city: "Hyderabad", slug: "hyderabad", note: "Rajiv Gandhi International and its expressway approach." },
  { city: "Chennai", slug: "chennai", note: "Terminal and approach planned with the southern corridor." },
  { city: "Ahmedabad", slug: "ahmedabad", note: "SVPI under the Adani concession — terminal plus approach as one sequence." },
  { city: "Chandigarh", slug: "chandigarh", note: "Terminal in Mohali, city across the boundary — two licensing authorities, one plan." },
  { city: "Coimbatore", slug: "coimbatore", note: "Peelamedu, on the Avinashi Road corridor — with real returning-NRI weight." },
];

const faq = [
  {
    q: "How much does airport advertising cost in India?",
    a: "It depends on variables we would rather show you than hide: terminal versus approach road, the zone inside the terminal, domestic versus international piers, DOOH daypart, tenure and the city itself. We do not publish rates — anyone who does is selling their own stock. Send the brief and we will price the options against each other in writing.",
  },
  {
    q: "Which airports can Bizex4U plan?",
    a: "We plan across the metro and tier-2 airports in the markets we cover — Delhi, Mumbai, Bengaluru, Hyderabad, Chennai, Kolkata, Ahmedabad, Pune, Kochi, Coimbatore, Chandigarh and the rest of our 39 markets where scheduled service operates. The buying route differs by airport because each operator licenses media to its own concessionaire.",
  },
  {
    q: "Do you own airport media?",
    a: "No. Terminal inventory is held by media concessionaires under each airport operator, and approach corridors are held by ordinary outdoor owners. We hold neither, which is why we can compare them honestly — including telling you when the approach road does the terminal's job at better economics.",
  },
  {
    q: "Terminal media or the approach road — which is better?",
    a: "Terminal media reaches a captive traveller with long dwell, at concession economics. The approach corridor reaches the same traveller plus the city's daily commuter flow, at street economics. A premium B2B brand often needs the terminal; a brand that wants the travel audience without the concession premium often does not. That is the argument we have on your side of the table.",
  },
  {
    q: "Is airport advertising worth it for a mass-market brand?",
    a: "Usually not as the lead line. Air travellers are a narrow, affluent slice, and a mass brand buys that audience more cheaply on the street. Airport weight earns its keep for business travel, premium goods, financial services, real estate aimed at NRIs, and launches that need the signal of being seen there.",
  },
  {
    q: "How long should an airport campaign run?",
    a: "Airport media is sold on longer tenures than street media, and the audience refreshes daily — so the case for very long holds is weaker than sellers suggest. We typically argue for the shortest tenure the concession will price sensibly, then extend on evidence.",
  },
  {
    q: "Are there digital screens at Indian airports?",
    a: "Yes — most metro terminals now carry DOOH networks, bought by loop and daypart. The morning business bank and the evening arrivals bank are different audiences, and the loop should be planned against the flight schedule, not the calendar.",
  },
  {
    q: "How do I know the campaign actually ran?",
    a: "The same way as every buy we make: monitoring photographs against each position, and for DOOH, play-out logs reconciled against the booking. Airport media is harder for a brand to walk past and check, which makes independent proof more important there, not less.",
  },
  {
    q: "Arrivals or departures?",
    a: "Departures buy dwell — travellers with time at check-in and the gate. Arrivals buy intent — a phone already out, a taxi to book, a city to spend in. Hospitality, transport and telecom lean arrivals; corporate and premium brand-building leans departures. The honest answer is a sequencing question, and it depends on the brief.",
  },
  {
    q: "Do smaller-city airports make sense?",
    a: "Selectively, yes. A Coimbatore or Kochi terminal reaches returning NRI and business traffic at a fraction of metro pricing, and for the right brand — jewellery, real estate, remittances, education — it is some of the most under-priced attention in the plan. For most national briefs it is a complement, not the spine.",
  },
];

export default function AirportAdvertisingPage() {
  return (
    <>
      <section className="relative bg-sand pt-14 text-on-sand md:pt-16">
        <div className="shell">
          <nav aria-label="Breadcrumb" className="py-5">
            <ol className="flex flex-wrap gap-2 eyebrow text-on-sand-dim">
              <li>
                <Link
                  href="/"
                  className="link-underline -my-2 inline-flex min-h-8 items-center py-2"
                >
                  Home
                </Link>
              </li>
              <li aria-hidden>/</li>
              <li>
                <Link
                  href="/what-we-do"
                  className="link-underline -my-2 inline-flex min-h-8 items-center py-2"
                >
                  How we work
                </Link>
              </li>
              <li aria-hidden>/</li>
              <li className="text-violet-deep">Airport advertising</li>
            </ol>
          </nav>

          <div className="grid-12 gap-y-8 pb-12 md:pb-16">
            <div className="col-span-12 lg:col-span-7">
              <Rise>
                <Eyebrow>Airport advertising</Eyebrow>
              </Rise>
              <Rise delay={40}>
                <h1 className="mt-5 max-w-[18ch] font-display text-display-xl text-balance">
                  Airport advertising{" "}
                  <span className="em-serif text-violet-deep">in India.</span>
                </h1>
              </Rise>
              <Rise delay={80}>
                <p className="speakable-answer mt-6 max-w-[52ch] text-body-l text-on-sand-dim">
                  {lede}
                </p>
                <div className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-3">
                  <BriefButton size="lg" context="Airport advertising">
                    Request a plan
                  </BriefButton>
                  <Btn href="/what-we-do" variant="outline-plum" size="lg">
                    How we work
                  </Btn>
                </div>
              </Rise>
            </div>
            <Rise
              delay={140}
              className="col-span-12 border-t border-rule-sand pt-6 lg:col-span-4 lg:col-start-9 lg:border-t-0 lg:border-l lg:pt-0 lg:pl-8"
            >
              <p className="mono-kicker text-violet-deep">The decision</p>
              <p className="mt-2 max-w-[36ch] font-display text-h3 text-balance">
                The terminal and the road to it are two different buys. Most
                plans price only one.
              </p>
            </Rise>
          </div>
        </div>
      </section>

      <Band tone="sand2" grain>
        <Rise>
          <Eyebrow>Where the money goes</Eyebrow>
          <h2 className="mt-5 max-w-[24ch] font-display text-display-l text-balance">
            Four ways to buy the{" "}
            <span className="em-serif text-violet-deep">travel audience</span>.
          </h2>
        </Rise>
        <ul className="mt-10 border-t border-rule-sand">
          {formats.map((f, i) => (
            <Rise key={f.title} as="li" delay={Math.min(i, 4) * 40}>
              <div className="grid-12 gap-y-3 border-b border-rule-sand py-7 md:py-9">
                <div className="col-span-12 md:col-span-4">
                  <p className="mono-kicker text-violet-deep">{f.kicker}</p>
                  <h3 className="mt-2 font-display text-h2 text-balance">
                    {f.title}
                  </h3>
                </div>
                <p className="col-span-12 max-w-[62ch] text-on-sand-dim md:col-span-7 md:col-start-6">
                  {f.body}
                </p>
              </div>
            </Rise>
          ))}
        </ul>
      </Band>

      <Band tone="plum" grain>
        <div className="grid-12 items-end gap-y-8">
          <Rise className="col-span-12 lg:col-span-7">
            <Eyebrow tone="plum">What drives the cost</Eyebrow>
            <h2 className="mt-4 max-w-[24ch] font-display text-h1 text-balance">
              What airport advertising costs actually depends on.
            </h2>
          </Rise>
          <Rise delay={80} className="col-span-12 lg:col-span-4 lg:col-start-9">
            <p className="max-w-[42ch] text-body-s text-on-plum-dim">
              No rate card here, deliberately. A rate published without the
              variables is a rate for somebody else&apos;s stock. These are
              the variables.
            </p>
          </Rise>
        </div>
        <ol className="mt-10 grid border-t border-rule-plum md:grid-cols-2">
          {costDrivers.map((d, i) => (
            <Rise key={d.factor} as="li" delay={Math.min(i, 6) * 30}>
              <div
                className={`grid grid-cols-12 gap-x-4 gap-y-1 border-b border-rule-plum py-4 md:py-5 ${
                  i % 2 === 0 ? "md:pr-8" : "md:border-l md:pl-8"
                }`}
              >
                <span className="col-span-2 mono-kicker text-violet-lift">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div className="col-span-10">
                  <h3 className="font-sans text-h3">{d.factor}</h3>
                  <p className="mt-1.5 text-body-s text-on-plum-dim">
                    {d.note}
                  </p>
                </div>
              </div>
            </Rise>
          ))}
        </ol>
      </Band>

      <Band tone="sand" grain>
        <Rise>
          <Eyebrow>The markets</Eyebrow>
          <h2 className="mt-5 max-w-[22ch] font-display text-display-l text-balance">
            Planned city by city, like{" "}
            <span className="em-serif text-violet-deep">everything else</span>.
          </h2>
          <p className="mt-6 max-w-[54ch] text-on-sand-dim">
            An airport buy is part of a city plan, not a category of its own.
            Each market page covers the corridor, the licensing authority and
            the transit picture the airport sits inside.
          </p>
        </Rise>
        <ul className="mt-10 grid gap-px bg-rule-sand sm:grid-cols-2">
          {markets.map((m) => (
            <li key={m.slug}>
              <Link
                href={`/cities/${m.slug}`}
                className="group flex h-full flex-col bg-sand p-6 transition-colors duration-200 hover:bg-sand-2 md:p-7"
              >
                <h3 className="text-h3">{m.city}</h3>
                <p className="mt-2 max-w-[46ch] text-body-s text-on-sand-dim">
                  {m.note}
                </p>
                <span className="mt-5 text-body-s font-medium">
                  Outdoor advertising in {m.city} →
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </Band>

      <Band tone="sand2" grain id="faq">
        <div className="grid-12 gap-y-8">
          <Rise className="col-span-12 lg:col-span-4">
            <Eyebrow>Questions</Eyebrow>
            <h2 className="mt-5 max-w-[14ch] font-display text-display-l text-balance">
              Asked before{" "}
              <span className="em-serif text-violet-deep">every buy</span>.
            </h2>
            <div className="mt-8">
              <AskAssistants />
            </div>
          </Rise>
          <div className="col-span-12 lg:col-span-7 lg:col-start-6">
            <Faq items={faq} />
          </div>
        </div>
      </Band>

      <Band tone="violet" grain>
        <div className="grid-12 items-end gap-y-8">
          <Rise className="col-span-12 lg:col-span-7">
            <Eyebrow tone="violet">Next</Eyebrow>
            <h2 className="mt-5 max-w-[20ch] font-display text-display-l text-balance">
              Name the airport and the{" "}
              <span className="em-serif">audience</span>.
            </h2>
            <p className="mt-6 max-w-[46ch] text-body-l">
              We will price the terminal against the approach and put both in
              writing. {site.sla.acknowledge} {site.sla.plan}
            </p>
          </Rise>
          <Rise delay={80} className="col-span-12 lg:col-span-4 lg:col-start-9">
            <div className="flex flex-wrap gap-3">
              <BriefButton variant="sand" size="lg" context="Airport advertising">
                Request a plan
              </BriefButton>
              <Btn href="/contact" variant="outline-sand" size="lg">
                Contact
              </Btn>
            </div>
          </Rise>
        </div>
      </Band>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            {
              "@context": "https://schema.org",
              "@type": "Service",
              "@id": `${site.url}${PATH}#service`,
              name: "Airport advertising",
              description: lede,
              serviceType: "Airport advertising",
              provider: { "@id": organisationId },
              areaServed: { "@type": "Country", name: "India" },
              url: `${site.url}${PATH}`,
            },
            {
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              itemListElement: [
                { "@type": "ListItem", position: 1, name: "Home", item: site.url },
                {
                  "@type": "ListItem",
                  position: 2,
                  name: "How we work",
                  item: `${site.url}/what-we-do`,
                },
                {
                  "@type": "ListItem",
                  position: 3,
                  name: "Airport advertising",
                  item: `${site.url}${PATH}`,
                },
              ],
            },
            {
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "@id": `${site.url}${PATH}#faq`,
              dateModified: site.contentReviewed,
              inLanguage: "en-IN",
              speakable,
              mainEntity: faq.map((f) => ({
                "@type": "Question",
                name: f.q,
                acceptedAnswer: { "@type": "Answer", text: f.a },
              })),
            },
          ]),
        }}
      />
      <PageSchema path={PATH} name="Airport advertising" description={lede} />
    </>
  );
}
