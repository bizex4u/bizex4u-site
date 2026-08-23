import { ArrowLink, PageHero, Rise, Section } from "@/components/Ledger";
import { capabilities } from "@/lib/site";

export default function NotFound() {
  return (
    <>
      <PageHero
        eyebrow="404"
        title="This page does not exist."
        lede="The link may be out of date, or the page may not have been written yet. Everything below still works."
      />
      <Section index="01" label="Try these">
        <ul className="border-b border-rule">
          {capabilities.map((c) => (
            <Rise key={c.href} as="li" className="border-t border-rule">
              <a
                href={c.href}
                className="block py-5 text-h3 transition-colors hover:bg-paper-hover"
              >
                {c.title}
              </a>
            </Rise>
          ))}
        </ul>
        <Rise className="mt-10 flex gap-8">
          <ArrowLink href="/">Home</ArrowLink>
          <ArrowLink href="/contact">Contact</ArrowLink>
        </Rise>
      </Section>
    </>
  );
}
