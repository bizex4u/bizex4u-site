import type { Metadata } from "next";
import { Band, Eyebrow, Rise } from "@/components/UI";
import PageSchema from "@/components/PageSchema";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy",
  description: `How ${site.name} handles briefs, contact details and analytics. We do not sell enquiry data.`,
  alternates: { canonical: "/privacy" },
};

const sections = [
  {
    title: "What we collect",
    body: "When you request a plan we keep the company name, your name, email and phone, plus any note you write. Barter enquiries also record what you are holding and a rough value band. Hidden honeypot fields are discarded.",
  },
  {
    title: "Why we keep it",
    body: "So a person can reply. The brief is the job: we cannot plan a market from an anonymous ping. We do not use enquiry data to advertise to you, and we do not sell it.",
  },
  {
    title: "Where it goes",
    body: `Submissions are posted to our server, written to a private spreadsheet, and emailed to ${site.email}. They are not published on this site.`,
  },
  {
    title: "Analytics",
    body: "We record page views and whether a brief was opened, completed or abandoned. We do not send names, emails or message text to analytics. If your browser sends Do Not Track or Global Privacy Control, we do not load PostHog.",
  },
  {
    title: "How long",
    body: "We keep a brief for as long as we need it to run the conversation and the campaign that follows. Ask us to delete it and we will, unless a live contract still needs the record.",
  },
  {
    title: "Your rights",
    body: `Write to ${site.email} to see, correct or delete what we hold about an enquiry you sent. This desk is in India; Indian law applies.`,
  },
];

export default function PrivacyPage() {
  return (
    <>
      <section className="bg-sand pt-28 pb-14 md:pt-36 md:pb-20">
        <div className="shell">
          <Rise>
            <Eyebrow>Privacy</Eyebrow>
          </Rise>
          <Rise delay={60}>
            <h1 className="mt-6 max-w-[18ch] font-display text-display-xl text-balance">
              How we handle a brief.
            </h1>
          </Rise>
          <Rise delay={120}>
            <p className="speakable-answer mt-7 max-w-[50ch] text-body-l text-on-sand-dim">
              We collect enough to reply. We do not sell it. Analytics never
              see your name or your email.
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
        path="/privacy"
        name="Privacy — Bizex4U"
        description="How Bizex4U handles briefs, contact details and analytics."
      />
    </>
  );
}
