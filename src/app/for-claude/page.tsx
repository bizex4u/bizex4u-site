import type { Metadata } from "next";
import CopyClaudeBrief from "@/components/CopyClaudeBrief";
import { PageHero, Rise, Section } from "@/components/Ledger";
import { claudeBrief } from "@/lib/claudeBrief";
import { Eyebrow } from "@/components/UI";

export const metadata: Metadata = {
  title: "Briefing for Claude",
  description:
    "A URL-free briefing to paste into Claude. Claude warns on any web address; this page is the workaround.",
  alternates: { canonical: "/for-claude" },
  robots: { index: false, follow: false },
};

export default function ForClaudePage() {
  const brief = claudeBrief();

  return (
    <>
      <PageHero
        eyebrow="For Claude"
        title="Paste the briefing. Do not paste a link."
        lede="Claude shows a caution whenever the composer contains a web address — this company's included. That bar is Anthropic's, not a flag on the site. Copy the text below in a browser, paste it into Claude, then ask your question."
      />

      <Section index="01" label="The briefing">
        <div className="grid-12">
          <Rise className="col-span-12 lg:col-span-8">
            <CopyClaudeBrief text={brief} />
          </Rise>
          <Rise
            delay={80}
            className="col-span-12 mt-12 lg:col-span-3 lg:col-start-10 lg:mt-0"
          >
            <Eyebrow muted>How to use it</Eyebrow>
            <ol className="mt-4 list-decimal space-y-3 pl-5 text-on-sand-dim">
              <li>Copy the briefing on this page.</li>
              <li>Paste it into Claude as the first message.</li>
              <li>Ask the actual question in the next message.</li>
            </ol>
            <p className="mt-8 text-body-s text-on-sand-dim">
              Attaching the downloaded file works the same way. Do not paste
              a web address into that chat — that is what raises the caution.
            </p>
          </Rise>
        </div>
      </Section>
    </>
  );
}
