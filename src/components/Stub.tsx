import { ArrowLink, PageHero, Rise, Section } from "@/components/Ledger";

/**
 * Temporary page shell for routes in the architecture that have not been
 * written yet. Keeps the nav honest during review — nothing 404s, and
 * nothing pretends to have content it does not have.
 *
 * Delete this component as each real page lands.
 */
export default function Stub({
  eyebrow,
  title,
  lede,
  outline,
}: {
  eyebrow: string;
  title: string;
  lede: string;
  outline: string[];
}) {
  return (
    <>
      <PageHero eyebrow={eyebrow} title={title} lede={lede} />
      <Section index="01" label="In progress">
        <div className="grid-12">
          <Rise className="col-span-12 lg:col-span-6">
            <p className="text-body-l">
              This page is being written. It will cover:
            </p>
            <ul className="mt-8 border-t border-rule">
              {outline.map((item, i) => (
                <li
                  key={item}
                  className="flex gap-5 border-b border-rule py-4"
                >
                  <span className="font-mono text-meta text-ink-50">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="text-ink-70">{item}</span>
                </li>
              ))}
            </ul>
            <div className="mt-10 flex gap-8">
              <ArrowLink href="/barter">Barter</ArrowLink>
              <ArrowLink href="/contact">Contact</ArrowLink>
            </div>
          </Rise>
        </div>
      </Section>
    </>
  );
}
