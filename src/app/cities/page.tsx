import type { Metadata } from "next";
import Link from "next/link";
import { PageHero, Rise, Section } from "@/components/Ledger";
import { additionalMarkets, cities } from "@/lib/cities";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Outdoor Advertising in India — Cities We Plan",
  description:
    "Outdoor, hoarding, transit, retail and broadcast media planned across 40+ Indian cities. Every market planned from its own catchment, not from a national rate card.",
  alternates: { canonical: "/cities" },
  openGraph: {
    title: "Outdoor Advertising in India — Cities We Plan",
    description:
      "Outdoor, hoarding, transit, retail and broadcast media planned across 40+ Indian cities.",
    url: `${site.url}/cities`,
  },
};

const regions = ["North", "West", "South", "East", "Central"] as const;

/* Which region an unwritten market belongs to, so the index still reads
   as a complete picture of the network rather than as a list of the
   pages that happen to exist. Anything not named here falls through to
   the tail list rather than silently disappearing. */
const regionOf: Record<string, (typeof regions)[number]> = {
  Meerut: "North",
  Prayagraj: "North",
  Gorakhpur: "North",
  Amritsar: "North",
  Jalandhar: "North",
  Jodhpur: "North",
  Udaipur: "North",
  Vadodara: "West",
  Rajkot: "West",
  Nashik: "West",
  Raipur: "Central",
  Kochi: "South",
  Coimbatore: "South",
  Madurai: "South",
  Mysuru: "South",
  Visakhapatnam: "South",
  Vijayawada: "South",
  Patna: "East",
  Guwahati: "East",
  Bhubaneswar: "East",
};

export default function CitiesPage() {
  const plannedByRegion = regions.reduce<Record<string, string[]>>((acc, r) => {
    acc[r] = additionalMarkets.filter((m) => regionOf[m] === r);
    return acc;
  }, {});

  const unplaced = additionalMarkets.filter((m) => !regionOf[m]);
  const total = cities.length + additionalMarkets.length;

  return (
    <>
      <PageHero
        eyebrow="Cities"
        title="Outdoor advertising, city by city."
        lede="India is not one market and it does not behave like one. A hoarding on the EM Bypass and a hoarding on Shaheed Path are not the same product, and the plan that treats them as interchangeable is the plan that underdelivers. Every city here is planned from its own catchment, its own movement and its own media economics."
      />

      <Section index="01" label="The index">
        <div className="grid grid-cols-1 gap-x-6 gap-y-12 md:grid-cols-3 lg:grid-cols-5">
          {regions.map((region, ri) => {
            const written = cities.filter((c) => c.region === region);
            const planned = plannedByRegion[region] ?? [];
            if (!written.length && !planned.length) return null;
            return (
              <Rise key={region} delay={ri * 60}>
                <h2 className="eyebrow border-t border-on-sand pt-4">{region}</h2>
                <ul className="mt-5">
                  {written.map((c) => (
                    <li key={c.slug} className="border-b border-rule-sand">
                      <Link
                        href={`/cities/${c.slug}`}
                        className="link-row group block py-3.5"
                      >
                        <span className="link-underline text-h3">
                          {c.name}
                        </span>
                        <span aria-hidden="true" className="link-row__go text-h3">
                          &rarr;
                        </span>
                        <span className="mt-0.5 block font-mono text-meta tracking-[0.09em] text-on-sand-dim uppercase">
                          {c.state}
                        </span>
                      </Link>
                    </li>
                  ))}
                  {planned.map((name) => (
                    <li key={name} className="border-b border-rule-sand">
                      <span className="block py-3.5 text-h3 text-on-sand-dim">
                        {name}
                      </span>
                    </li>
                  ))}
                </ul>
              </Rise>
            );
          })}
        </div>

        <Rise delay={300} className="mt-14 border-t border-rule-sand pt-4">
          <p className="max-w-[64ch] text-on-sand-dim">
            The linked cities have pages written in full — the market, where
            the crowds actually are, which formats work there, the local press
            and radio by name, the transit network, what moves the price and
            who licenses it. The rest are markets we plan and buy in regularly,
            with pages being written now. We would rather list a market
            honestly as a name than publish a thin page with the city swapped
            into someone else&rsquo;s paragraph.
            {unplaced.length > 0 && (
              <> Also planned: {unplaced.join(", ")}.</>
            )}
          </p>
        </Rise>
      </Section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            "@id": `${site.url}/cities#collection`,
            name: "Outdoor advertising in India — cities we plan",
            description: `Markets planned and bought by ${site.name} across India — ${total} listed.`,
            url: `${site.url}/cities`,
            mainEntity: {
              "@type": "ItemList",
              numberOfItems: cities.length,
              itemListElement: cities.map((c, i) => ({
                "@type": "ListItem",
                position: i + 1,
                name: `Outdoor advertising in ${c.name}`,
                url: `${site.url}/cities/${c.slug}`,
              })),
            },
          }),
        }}
      />
    </>
  );
}
