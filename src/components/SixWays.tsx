import Link from "next/link";
import { Band, Eyebrow } from "@/components/UI";
import { capabilities } from "@/lib/site";

/**
 * Six capabilities as a contents list — one line each.
 * Specs, drawings and essays live on /what-we-do.
 */
export default function SixWays() {
  return (
    <Band tone="plum" grain flush className="py-12 md:py-16">
      <Eyebrow tone="plum">What we plan</Eyebrow>
      <h2 className="mt-3 max-w-[16ch] font-display text-h1 text-balance">
        Six ways to be{" "}
        <span className="em-serif text-violet-lift">present</span>.
      </h2>

      <ul className="mt-8 border-t border-white/12">
        {capabilities.map((c) => (
          <li key={c.href}>
            <Link
              href={c.href}
              className={`group flex min-h-12 items-baseline gap-4 py-3.5 -outline-offset-2 ${
                c.accent
                  ? "mt-2 rounded-(--radius-card) bg-violet-deep px-4 text-white hover:bg-plum md:px-5"
                  : "border-b border-white/12 hover:bg-white/[0.04]"
              }`}
            >
              <span
                className={`eyebrow w-8 shrink-0 ${
                  c.accent ? "text-on-violet-dim" : "text-violet-lift"
                }`}
              >
                {c.index}
              </span>
              <span className="min-w-0 flex-1 font-display text-h3 text-balance">
                {c.verb}
              </span>
              <span
                className={`hidden text-body-s sm:block ${
                  c.accent ? "text-on-violet-dim" : "text-on-plum-dim"
                }`}
              >
                {c.title}
              </span>
              <span
                className={`row-arrow shrink-0 ${
                  c.accent ? "text-white" : "text-violet-lift"
                }`}
              >
                →
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </Band>
  );
}
