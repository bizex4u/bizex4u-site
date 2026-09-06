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
 * FMCG, as an audience page.
 *
 * WHY IT EXISTS. The pre-migration site ranked on page one with
 * /advertising-for-fmcg-brands; the cutover pointed it at /work, which
 * shows photographs and answers nothing. This is the real equivalent —
 * the FMCG media mix in this company's actual vocabulary: frequency
 * formats on the street, catchment planning around distribution, and
 * barter for a stock-heavy balance sheet.
 *
 * Same content rules as everywhere: no rates, no invented numbers, no
 * client claims beyond what the work page already documents.
 */

const PATH = "/what-we-do/fmcg-advertising";

export async function generateMetadata(
  _props: unknown,
  parent: ResolvingMetadata,
): Promise<Metadata> {
  return routeMetadata(parent, {
    path: PATH,
    title: "FMCG Advertising in India — Outdoor, Retail & Barter Media",
    description:
      "How FMCG brands buy outdoor in India: frequency formats along distribution, retail and kirana-adjacent media, regional press and radio for the trade, and barter that turns stock into media. Planned across 39 markets.",
  });
}

const lede =
  "FMCG buys reach the way it sells: high frequency, close to the shop, matched to distribution. We plan the street formats, the retail catchments and the trade press around where the product is actually stocked — and when the balance sheet is heavier in inventory than cash, we structure the buy as barter.";

const mix = [
  {
    title: "Frequency formats on the street",
    kicker: "Reach, repeated",
    body: "Bus queue shelters, pole kiosks, bus media and the smaller hoarding sizes — the formats a shopper passes daily, priced so a plan can afford repetition. FMCG rarely needs the statement unipole; it needs the same message on the same route the shopper takes to the same shop, week after week.",
    href: "/what-we-do/outdoor-transit",
    link: "How we plan outdoor & transit",
  },
  {
    title: "Retail and kirana-adjacent media",
    kicker: "The last hundred metres",
    body: "Mall, multiplex, society lift and store-catchment media, planned from the trade area of the outlets that matter rather than city-wide. A distribution list is a media plan waiting to be read: we plan weight around the stores where the brand is stocked and the competition is fighting.",
    href: "/what-we-do/retail-hyperlocal",
    link: "How we plan retail & hyperlocal",
  },
  {
    title: "Regional press, radio and cinema",
    kicker: "The trade reads too",
    body: "Regional dailies and drive-time radio carry a launch to distributors and retailers as much as to households — and cinema carries it to towns where a multiplex is the weekend. We buy these the way we buy outdoor: named titles and stations per market, checked against what that market actually reads and hears.",
    href: "/what-we-do/broadcast-print-cinema",
    link: "How we plan broadcast, print & cinema",
  },
  {
    title: "Barter — stock as the budget",
    kicker: "The FMCG advantage",
    body: "FMCG is the category barter was built for: real consumer demand for the goods, steady production, and a balance sheet that often holds more inventory than marketing cash. Product is traded at an agreed valuation against media across the same channels a cash plan would buy — with the valuation methodology and auditor treatment settled in writing first.",
    href: "/barter",
    link: "How barter works",
  },
];

const principles = [
  {
    title: "Distribution first, geography second",
    body: "A city-wide buy in a city where the brand is stocked in one zone is a donation to the other zones. We ask for the distribution picture before the media list, and plan weight where the product can actually be bought.",
  },
  {
    title: "Frequency beats spectacle",
    body: "A shopper decides an FMCG purchase often and quickly. One landmark site seen once loses to a modest format seen thirty times on the route to the shop. The plan should look boring on a map and relentless on a route.",
  },
  {
    title: "The vernacular is the market",
    body: "Hindi and regional-language creative is not a translation exercise bolted on at the end. The press and radio that carry tier-2 India are vernacular, and the creative decision belongs in the plan from the first line.",
  },
  {
    title: "Proof, position by position",
    body: "FMCG plans run wide — many small formats across many markets — which is exactly where execution quietly fails. Every position is photographed while it runs, and the report reconciles what was bought against what went up.",
  },
];

const faq = [
  {
    q: "What media mix works for an FMCG brand in India?",
    a: "Frequency formats along distribution — bus queue shelters, pole kiosks, bus media — plus retail and store-catchment media around the outlets that matter, with regional press and radio when the trade needs to hear the launch too. The mix is decided by where the product is stocked and who buys it, not by a standard package.",
  },
  {
    q: "How does barter work for an FMCG brand?",
    a: "Product is traded at an agreed valuation against media. FMCG suits it better than most categories because the goods have broad consumer demand and production is steady. The two questions that decide whether it works are the valuation methodology and the auditor treatment, and both belong in writing before anything is traded. The barter page covers both.",
  },
  {
    q: "Can outdoor be bought around our distribution rather than city-wide?",
    a: "Yes — that is how it should be bought. Share the stockist or outlet picture and we plan weight around those trade areas. Buying the whole city because the rate card is organised that way is how FMCG budgets evaporate.",
  },
  {
    q: "How much does FMCG outdoor advertising cost?",
    a: "It depends on the formats, the markets, the tenure and how tightly the plan hugs distribution — and we do not publish rates, because a rate without those variables is meaningless. What we will do is put comparative options in writing against your brief, with the negotiated rate disclosed to you.",
  },
  {
    q: "Which markets can you plan for an FMCG launch?",
    a: "The 39 markets we cover, from the metros through tier-2 India — planned city by city, because a Kanpur plan and a Kochi plan share nothing but the logo. A launch can start in one state and extend on evidence.",
  },
  {
    q: "How do we know the campaign actually ran?",
    a: "Monitoring photographs against every position, reconciled against the plan. Wide, many-format FMCG buys are where quiet non-execution hides; independent proof is the discipline that finds it.",
  },
  {
    q: "Do you handle vernacular creative adaptation?",
    a: "We plan the vernacular requirement into the buy — which languages, which markets, which formats need adapted artwork — and coordinate the production. The media decision and the language decision are the same decision, made together.",
  },
  {
    q: "Should a launch go national or state by state?",
    a: "Unless distribution is genuinely national, state by state. Media weight ahead of stock availability builds demand a shopper cannot act on. We would rather plan one state properly, prove it with photographs and sell-through, and extend than spread a national budget thin.",
  },
];

export default function FmcgAdvertisingPage() {
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
              <li className="text-violet-deep">FMCG advertising</li>
            </ol>
          </nav>

          <div className="grid-12 gap-y-8 pb-12 md:pb-16">
            <div className="col-span-12 lg:col-span-7">
              <Rise>
                <Eyebrow>FMCG advertising</Eyebrow>
              </Rise>
              <Rise delay={40}>
                <h1 className="mt-5 max-w-[18ch] font-display text-display-xl text-balance">
                  Advertising for{" "}
                  <span className="em-serif text-violet-deep">FMCG brands.</span>
                </h1>
              </Rise>
              <Rise delay={80}>
                <p className="speakable-answer mt-6 max-w-[52ch] text-body-l text-on-sand-dim">
                  {lede}
                </p>
                <div className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-3">
                  <BriefButton size="lg" context="FMCG advertising">
                    Request a plan
                  </BriefButton>
                  <Btn href="/barter" variant="outline-plum" size="lg">
                    The barter route
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
                Plan the media where the product is stocked, not where the
                map looks impressive.
              </p>
            </Rise>
          </div>
        </div>
      </section>

      <Band tone="sand2" grain>
        <Rise>
          <Eyebrow>The mix</Eyebrow>
          <h2 className="mt-5 max-w-[24ch] font-display text-display-l text-balance">
            Four lines an FMCG plan{" "}
            <span className="em-serif text-violet-deep">draws from</span>.
          </h2>
        </Rise>
        <ul className="mt-10 border-t border-rule-sand">
          {mix.map((f, i) => (
            <Rise key={f.title} as="li" delay={Math.min(i, 4) * 40}>
              <div className="grid-12 gap-y-3 border-b border-rule-sand py-7 md:py-9">
                <div className="col-span-12 md:col-span-4">
                  <p className="mono-kicker text-violet-deep">{f.kicker}</p>
                  <h3 className="mt-2 font-display text-h2 text-balance">
                    {f.title}
                  </h3>
                </div>
                <div className="col-span-12 md:col-span-7 md:col-start-6">
                  <p className="max-w-[62ch] text-on-sand-dim">{f.body}</p>
                  <p className="mt-4">
                    <Link
                      href={f.href}
                      className="link-underline text-body-s font-medium"
                    >
                      {f.link}
                    </Link>
                  </p>
                </div>
              </div>
            </Rise>
          ))}
        </ul>
      </Band>

      <Band tone="plum" grain>
        <div className="grid-12 items-end gap-y-8">
          <Rise className="col-span-12 lg:col-span-7">
            <Eyebrow tone="plum">How we plan it</Eyebrow>
            <h2 className="mt-4 max-w-[24ch] font-display text-h1 text-balance">
              Four rules the category keeps proving.
            </h2>
          </Rise>
          <Rise delay={80} className="col-span-12 lg:col-span-4 lg:col-start-9">
            <p className="max-w-[42ch] text-body-s text-on-plum-dim">
              We do not own inventory, so none of these rules bends to fill
              anybody&apos;s stock — including at the moments a plan gets
              renegotiated mid-flight.
            </p>
          </Rise>
        </div>
        <ol className="mt-10 grid border-t border-rule-plum md:grid-cols-2">
          {principles.map((p, i) => (
            <Rise key={p.title} as="li" delay={Math.min(i, 4) * 30}>
              <div
                className={`grid grid-cols-12 gap-x-4 gap-y-1 border-b border-rule-plum py-4 md:py-5 ${
                  i % 2 === 0 ? "md:pr-8" : "md:border-l md:pl-8"
                }`}
              >
                <span className="col-span-2 mono-kicker text-violet-lift">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div className="col-span-10">
                  <h3 className="font-sans text-h3">{p.title}</h3>
                  <p className="mt-1.5 text-body-s text-on-plum-dim">
                    {p.body}
                  </p>
                </div>
              </div>
            </Rise>
          ))}
        </ol>
      </Band>

      <Band tone="sand2" grain id="faq">
        <div className="grid-12 gap-y-8">
          <Rise className="col-span-12 lg:col-span-4">
            <Eyebrow>Questions</Eyebrow>
            <h2 className="mt-5 max-w-[14ch] font-display text-display-l text-balance">
              Asked by every{" "}
              <span className="em-serif text-violet-deep">brand team</span>.
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
              Send the distribution picture with{" "}
              <span className="em-serif">the brief</span>.
            </h2>
            <p className="mt-6 max-w-[46ch] text-body-l">
              Cash, barter or a blend — we will show the options against each
              other. {site.sla.acknowledge} {site.sla.plan}
            </p>
          </Rise>
          <Rise delay={80} className="col-span-12 lg:col-span-4 lg:col-start-9">
            <div className="flex flex-wrap gap-3">
              <BriefButton variant="sand" size="lg" context="FMCG advertising">
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
              name: "FMCG advertising",
              description: lede,
              serviceType: "FMCG media planning and buying",
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
                  name: "FMCG advertising",
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
      <PageSchema path={PATH} name="FMCG advertising" description={lede} />
    </>
  );
}
