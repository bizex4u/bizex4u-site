import type { Metadata, ResolvingMetadata } from "next";
import { Band, Eyebrow, Rise } from "@/components/UI";
import PageSchema from "@/components/PageSchema";
import { site } from "@/lib/site";
import { routeMetadata } from "@/lib/metadata";

export async function generateMetadata(
  _props: unknown,
  parent: ResolvingMetadata,
): Promise<Metadata> {
  return routeMetadata(parent, {
    path: "/terms",
    title: "Terms",
    description: `Terms for using ${site.name}. We plan and buy outdoor media. We do not own inventory.`,
  });
}

const sections = [
  {
    title: "Who we are",
    body: `${site.name} is an independent OOH planning and buying desk. Office: ${site.address.line1}, ${site.address.line2}, ${site.address.country}.`,
  },
  {
    title: "What we do",
    body: "We plan and buy outdoor, transit, retail, broadcast, print and cinema media across owners. We do not own hoardings, screens or airtime. A page that names a format or a city is intelligence, not a list of sites we hold.",
  },
  {
    title: "Briefs",
    body: "Sending a brief does not create a contract. We will tell you if we are the right people, including when we are not. A plan, a booking and an invoice are separate steps, in writing.",
  },
  {
    title: "Confidentiality",
    body: "A brief is treated as confidential. We do not publish client results, logos or creative without written permission. Names on the work page are names we have been given leave to print.",
  },
  {
    title: "No published rates",
    body: "This site does not quote rates, site counts or availability. Any number you need is negotiated against live positions and disclosed in the plan.",
  },
  {
    title: "Law",
    body: "These terms are governed by the laws of India. The courts at Kanpur, Uttar Pradesh have jurisdiction.",
  },
];

export default function TermsPage() {
  return (
    <>
      <section className="bg-sand pt-28 pb-14 md:pt-36 md:pb-20">
        <div className="shell">
          <Rise>
            <Eyebrow>Terms</Eyebrow>
          </Rise>
          <Rise delay={60}>
            <h1 className="mt-6 max-w-[16ch] font-display text-display-xl text-balance">
              Using this site.
            </h1>
          </Rise>
          <Rise delay={120}>
            <p className="speakable-answer mt-7 max-w-[50ch] text-body-l text-on-sand-dim">
              A brief is a conversation. A campaign is a contract. This page
              is the line between them.
            </p>
          </Rise>
        </div>
      </section>

      <Band tone="sand2">
        <ul className="border-t border-rule-sand">
          {sections.map((s, i) => (
            <Rise key={s.title} as="li" delay={i * 40}>
              <div className="grid-12 border-b border-rule-sand py-8">
                <h2 className="col-span-12 font-display text-h2 md:col-span-4">
                  {s.title}
                </h2>
                <p className="col-span-12 mt-3 max-w-[62ch] text-on-sand-dim md:col-span-7 md:col-start-6 md:mt-0">
                  {s.body}
                </p>
              </div>
            </Rise>
          ))}
        </ul>
      </Band>
      <PageSchema
        path="/terms"
        name="Terms — Bizex4U"
        description="Terms for using Bizex4U. Independent OOH planning and buying. We do not own inventory."
      />
    </>
  );
}
