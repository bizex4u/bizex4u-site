import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";
import { PageHero, Rise, Section } from "@/components/Ledger";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description: `Talk to Bizex4U about outdoor, retail and broadcast media planning in India. Write to ${site.email} or call ${site.phone}.`,
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Start a conversation."
        lede="Tell us the market, the objective and the constraint. We will tell you plainly whether we are the right people for it."
      />

      <Section index="01" label="Enquiries">
        <div className="grid-12">
          <Rise className="col-span-12 lg:col-span-6">
            <ContactForm />
          </Rise>

          <Rise delay={100} className="col-span-12 mt-16 lg:col-span-4 lg:col-start-9 lg:mt-0">
            <div className="border-t border-ink pt-4">
              <p className="eyebrow">Direct</p>
              <div className="mt-4">
                <a
                  href={`mailto:${site.email}`}
                  className="link-underline -my-2 inline-flex min-h-11 items-center py-2 text-h3"
                >
                  {site.email}
                </a>
              </div>
              <div className="mt-2">
                <a
                  href={`tel:${site.phoneHref}`}
                  className="link-underline -my-2 inline-flex min-h-11 items-center py-2 text-h3"
                >
                  {site.phone}
                </a>
              </div>
            </div>

            <div className="mt-12 border-t border-rule pt-4">
              <p className="eyebrow">Office</p>
              <address className="mt-4 text-ink-70 not-italic">
                {site.address.line1}
                <br />
                {site.address.line2}
                <br />
                {site.address.country}
              </address>
            </div>

            <div className="mt-12 border-t border-rule pt-4">
              <p className="eyebrow">For barter enquiries</p>
              <p className="mt-4 max-w-[34ch] text-ink-70">
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
            "@type": "Organization",
            name: site.name,
            url: site.url,
            email: site.email,
            telephone: site.phone,
            foundingDate: String(site.founded),
            description: site.description,
          }),
        }}
      />
    </>
  );
}
