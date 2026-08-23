import type { Metadata } from "next";
import Link from "next/link";
import { PageHero, Rise, Section } from "@/components/Ledger";
import { additionalMarkets, cities } from "@/lib/cities";

export const metadata: Metadata = {
  title: "Cities — Where We Plan Media in India",
  description:
    "Bizex4U plans outdoor, retail, transit and broadcast media across Indian cities. Every market is planned from catchment data, not a rate card.",
  alternates: { canonical: "/cities" },
};

const regions = ["North", "West", "South", "East"] as const;

/* Markets without a written page yet, grouped so the index still reads
   as a complete picture of where the network operates. */
const plannedByRegion: Record<string, string[]> = {
  North: ["Delhi NCR", "Lucknow", "Jaipur", "Chandigarh", "Agra", "Meerut"],
  West: ["Mumbai", "Pune", "Ahmedabad", "Indore"],
  South: ["Bangalore", "Hyderabad", "Chennai", "Kochi"],
  East: ["Patna"],
};

export default function CitiesPage() {
  return (
    <>
      <PageHero
        eyebrow="Cities"
        title="Where we operate."
        lede="India is not one market and it does not behave like one. Every city on this list is planned from its own catchment data, its own movement patterns and its own media economics."
      />

      <Section index="01" label="The index">
        <div className="grid grid-cols-1 gap-x-6 gap-y-12 md:grid-cols-4">
          {regions.map((region, ri) => {
            const written = cities.filter((c) => c.region === region);
            const planned = plannedByRegion[region] ?? [];
            return (
              <Rise key={region} delay={ri * 60}>
                <h2 className="eyebrow border-t border-ink pt-4">{region}</h2>
                <ul className="mt-5">
                  {written.map((c) => (
                    <li key={c.slug} className="border-b border-rule">
                      <Link
                        href={`/cities/${c.slug}`}
                        className="block py-3.5 group"
                      >
                        <span className="link-underline text-h3">{c.name}</span>
                        <span className="mt-0.5 block font-mono text-meta uppercase tracking-[0.09em] text-ink-50">
                          {c.state}
                        </span>
                      </Link>
                    </li>
                  ))}
                  {planned.map((name) => (
                    <li key={name} className="border-b border-rule">
                      <span className="block py-3.5 text-h3 text-ink-50">
                        {name}
                      </span>
                    </li>
                  ))}
                </ul>
              </Rise>
            );
          })}
        </div>

        <Rise delay={260} className="mt-14 border-t border-rule pt-4">
          <p className="max-w-[62ch] text-ink-70">
            Cities set in full are written up in detail. The rest are markets
            we plan and buy in regularly — {additionalMarkets.length} of them —
            with pages being written now. Ask us about any of them directly.
          </p>
        </Rise>
      </Section>
    </>
  );
}
