import Link from "next/link";
import { Band, Btn, Card, Eyebrow, Rise } from "@/components/UI";
import FormatPlate, { formatSets, type Format } from "@/components/FormatPlate";
import { capabilityDetail } from "@/lib/capabilityDetail";
import { capabilities, site } from "@/lib/site";

/**
 * One template, five pages. The capability pages differ in content and
 * not in argument structure, and inventing a different rhythm for each
 * would make the site feel assembled rather than designed.
 *
 * The order is deliberate and follows how the buyer reads:
 *   why this medium is worth planning  →  how we plan it  →  what
 *   lands on your desk  →  when to spend elsewhere  →  what next.
 *
 * The "when to spend elsewhere" band is the one most agencies omit.
 * It is the cheapest credibility on the site: a page that names the
 * cases where its own product is the wrong answer is read as the work
 * of people who have opinions rather than a rate card.
 */
export default function CapabilityPage({
  slug,
  plate,
}: {
  slug: string;
  plate?: keyof typeof formatSets;
}) {
  const cap = capabilities.find((c) => c.href === `/what-we-do/${slug}`)!;
  const d = capabilityDetail[slug];
  const others = capabilities.filter((c) => c.href !== cap.href);
  const formats: Format[] | undefined = plate ? formatSets[plate] : undefined;

  return (
    <>
      {/* HERO ---------------------------------------------------- */}
      <section className="grain relative overflow-hidden bg-sand pt-28 pb-14 md:pt-36 md:pb-20">
        <div className="shell relative z-10">
          <nav aria-label="Breadcrumb" className="mb-10">
            <ol className="flex flex-wrap gap-2 font-mono text-[0.75rem] tracking-[0.08em] text-on-sand-dim uppercase">
              <li>
                <Link href="/" className="link-underline -my-2 inline-flex min-h-8 items-center py-2">
                  Home
                </Link>
              </li>
              <li aria-hidden>/</li>
              <li>
                <Link
                  href="/what-we-do"
                  className="link-underline -my-2 inline-flex min-h-8 items-center py-2"
                >
                  What we do
                </Link>
              </li>
              <li aria-hidden>/</li>
              <li className="text-violet-deep">{cap.title}</li>
            </ol>
          </nav>

          <div className="grid-12 items-end gap-y-10">
            <div className="col-span-12 lg:col-span-7">
              <Rise>
                <Eyebrow>{cap.index} — What we do</Eyebrow>
              </Rise>
              <Rise delay={60}>
                <h1 className="mt-6 font-display text-display-xl text-balance">
                  {cap.title}.
                </h1>
              </Rise>
              <Rise delay={120}>
                <p className="mt-7 max-w-[50ch] text-body-l text-on-sand-dim">
                  {d.lede}
                </p>
                <div className="mt-9">
                  <Btn href={site.whatsapp} external size="lg">
                    Get a plan for your market
                  </Btn>
                </div>
              </Rise>
            </div>

            {formats && (
              <Rise
                delay={180}
                className="col-span-12 lg:col-span-4 lg:col-start-9"
              >
                <Card>
                  <p className="eyebrow text-on-sand-dim">
                    Formats, at true proportion
                  </p>
                  <div className="mt-6">
                    <FormatPlate formats={formats} />
                  </div>
                </Card>
              </Rise>
            )}
          </div>
        </div>
      </section>

      {/* 01 — THE ARGUMENT --------------------------------------- */}
      <Band tone="sand2" grain>
        <div className="grid-12 gap-y-8">
          <Rise className="col-span-12 lg:col-span-4">
            <Eyebrow>Why it is worth planning</Eyebrow>
          </Rise>
          <div className="col-span-12 lg:col-span-7 lg:col-start-6">
            {d.argument.map((para, i) => (
              <Rise key={i} delay={i * 80}>
                <p
                  className={`max-w-[62ch] ${
                    i === 0 ? "text-body-l" : "mt-6 text-on-sand-dim"
                  }`}
                >
                  {para}
                </p>
              </Rise>
            ))}
          </div>
        </div>
      </Band>

      {/* 02 — METHOD --------------------------------------------- */}
      <Band tone="plum" grain>
        <Rise>
          <Eyebrow tone="plum">How the buy is made</Eyebrow>
          <h2 className="mt-5 max-w-[22ch] font-display text-display-l text-balance">
            The part that decides{" "}
            <span className="em-serif">whether it works</span>.
          </h2>
        </Rise>

        <ol className="mt-12 border-t border-rule-plum">
          {d.method.map((m, i) => (
            <Rise key={m.title} as="li" delay={i * 55}>
              <div className="grid grid-cols-12 gap-x-6 gap-y-3 border-b border-rule-plum py-7 md:py-9">
                <span className="col-span-12 font-mono text-[0.8125rem] tracking-[0.08em] text-violet-lift md:col-span-1">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="col-span-12 font-display text-h2 text-balance md:col-span-5">
                  {m.title}
                </h3>
                <p className="col-span-12 max-w-[62ch] text-on-plum-dim md:col-span-6">
                  {m.body}
                </p>
              </div>
            </Rise>
          ))}
        </ol>
      </Band>

      {/* 03 — DELIVERABLES --------------------------------------- */}
      <Band tone="sand" grain>
        <div className="grid-12 gap-y-10">
          <Rise className="col-span-12 lg:col-span-5">
            <Eyebrow deva="आपको क्या मिलता है">What lands on your desk</Eyebrow>
            <h2 className="mt-5 max-w-[16ch] font-display text-display-l text-balance">
              Documented,{" "}
              <span className="em-serif text-violet-deep">not described</span>.
            </h2>
            <p className="mt-6 max-w-[40ch] text-on-sand-dim">
              Every campaign ends with a file you can hand to someone who
              was not in the room.
            </p>
          </Rise>

          <div className="col-span-12 lg:col-span-6 lg:col-start-7">
            <ul className="border-t border-rule-sand">
              {d.deliverables.map((item, i) => (
                <Rise key={item} as="li" delay={i * 45}>
                  <div className="flex gap-4 border-b border-rule-sand py-4">
                    <span aria-hidden className="text-violet-deep">
                      —
                    </span>
                    <span className="text-on-sand-dim">{item}</span>
                  </div>
                </Rise>
              ))}
            </ul>
          </div>
        </div>
      </Band>

      {/* 04 — WHEN NOT TO -----------------------------------------
          Kept as its own band rather than a footnote. It is the
          section that makes the rest of the page believable. */}
      <Band tone="violet" grain>
        <div className="grid-12 gap-y-8">
          <Rise className="col-span-12 lg:col-span-5">
            <Eyebrow tone="violet">When to spend it elsewhere</Eyebrow>
            <h2 className="mt-5 max-w-[18ch] font-display text-display-l text-balance">
              We would rather{" "}
              <span className="em-serif">say so early</span>.
            </h2>
          </Rise>
          <Rise delay={80} className="col-span-12 lg:col-span-6 lg:col-start-7">
            <p className="max-w-[58ch] text-body-l">{d.notFor}</p>
            <div className="mt-9">
              <Btn href={site.whatsapp} external variant="sand" size="lg">
                Tell us the objective
              </Btn>
            </div>
          </Rise>
        </div>
      </Band>

      {/* 05 — THE REST OF THE NETWORK ---------------------------- */}
      <Band tone="sand2" grain>
        <Rise>
          <Eyebrow>The rest of the network</Eyebrow>
          <h2 className="mt-5 max-w-[24ch] font-display text-display-l text-balance">
            Most plans use{" "}
            <span className="em-serif text-violet-deep">more than one</span>.
          </h2>
        </Rise>

        <ul className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {others.map((c, i) => (
            <Rise key={c.href} as="li" delay={i * 50}>
              <Link
                href={c.href}
                className={`group flex h-full flex-col rounded-(--radius-card) p-6 transition-colors duration-200 md:p-7 ${
                  c.accent
                    ? "bg-violet-deep text-white hover:bg-violet"
                    : "bg-sand hover:bg-sand-3"
                }`}
              >
                <span
                  className={`eyebrow ${
                    c.accent ? "text-on-violet-dim" : "text-violet-deep"
                  }`}
                >
                  {c.index}
                </span>
                <h3 className="mt-3 font-display text-h2 text-balance">
                  {c.title}
                </h3>
                <p
                  className={`mt-3 ${
                    c.accent ? "text-on-violet-dim" : "text-on-sand-dim"
                  }`}
                >
                  {c.short}
                </p>
                <span className="mt-auto inline-flex items-center gap-1.5 pt-7 text-[0.9375rem] font-medium">
                  {c.linkLabel ?? "Explore"} <span className="row-arrow">→</span>
                </span>
              </Link>
            </Rise>
          ))}
        </ul>
      </Band>
    </>
  );
}
