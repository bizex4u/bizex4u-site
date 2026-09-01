import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";
import { PageHero, Rise, Section } from "@/components/Ledger";
import { organisationId, speakable } from "@/lib/schema";
import { site } from "@/lib/site";
import { Eyebrow } from "@/components/UI";

export const metadata: Metadata = {
  title: "Contact Bizex4U — OOH planning, Kanpur",
  description: `Talk to Bizex4U about outdoor, retail and broadcast media planning in India. Write to ${site.email}.`,
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Start a conversation."
        lede={`${site.sla.acknowledge} ${site.sla.plan} Tell us the market, the objective and the constraint.`}
      />

      <Section index="01" label="Enquiries">
        <div className="grid-12">
          <Rise className="col-span-12 lg:col-span-6">
            <ContactForm />
          </Rise>

          <Rise delay={100} className="col-span-12 mt-16 lg:col-span-4 lg:col-start-9 lg:mt-0">
            <div className="border-t border-on-sand pt-4">
              <Eyebrow muted>Direct</Eyebrow>
              <div className="mt-4">
                <a
                  href={`mailto:${site.email}`}
                  className="link-underline -my-2 inline-flex min-h-11 items-center py-2 text-h3"
                >
                  {site.email}
                </a>
              </div>
            </div>

            <div className="mt-12 border-t border-rule-sand pt-4">
              <Eyebrow muted>Office</Eyebrow>
              <address className="mt-4 text-on-sand-dim not-italic">
                {site.address.line1}
                <br />
                {site.address.line2}
                <br />
                {site.address.country}
              </address>
            </div>

            <div className="mt-12 border-t border-rule-sand pt-4">
              <Eyebrow muted>For barter enquiries</Eyebrow>
              <p className="mt-4 max-w-[34ch] text-on-sand-dim">
                Include the category and approximate value of the stock you
                are holding. It saves a round of questions.
              </p>
            </div>
          </Rise>
        </div>
      </Section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            /* A ContactPage that REFERENCES the organisation declared at
               the root, rather than a second Organization node restating
               it. Two Organization nodes for one company is how the name,
               phone and address drift apart across a site — and this copy
               carried `foundingDate: "2008"`, a tenure claim that is not
               made anywhere on this site and should not have been in the
               structured data either. */
            "@type": "ContactPage",
            "@id": `${site.url}/contact#webpage`,
            url: `${site.url}/contact`,
            name: `Contact ${site.name}`,
            description: `Talk to Bizex4U about outdoor, retail and broadcast media planning in India. Write to ${site.email}.`,
            isPartOf: { "@id": `${site.url}/#website` },
            about: { "@id": organisationId },
            mainEntity: { "@id": organisationId },
            inLanguage: "en-IN",
            dateModified: site.contentReviewed,
            speakable,
          }),
        }}
      />
    </>
  );
}
