import FormatPlate, { formatSets } from "@/components/FormatPlate";
import { Eyebrow } from "@/components/UI";
import { dayClock } from "@/lib/dayclock";

/**
 * The homepage centrepiece: a pinned section scrolled sideways.
 *
 * Motion.tsx drives it off [data-pin-track] / [data-track]. On desktop
 * the section pins and the track translates with the wheel. Below
 * 1024px, under prefers-reduced-motion, and before JS runs at all, the
 * viewport is a native swipeable overflow strip instead — the content
 * is never trapped behind an effect that did not run.
 *
 * Layout note: the section is exactly one viewport tall on desktop
 * because ScrollTrigger pins from "top top", and pinning anything
 * taller than the viewport hides its own bottom edge. Hence
 * flex-1 + min-h-0 on the viewport rather than letting content set
 * the height.
 *
 * The panels warm through the day — the evening one carries a violet
 * cast. Small thing, and the reason it reads as a day rather than as
 * a carousel.
 */

/* Each panel carries its own dim-text and rule colours, not just a
   background. on-plum-dim reaches only 4.0:1 against violet-deep, so a
   shared text colour across both grounds fails AA on the violet panel.
   Measured: on-plum-dim on plum-2/plum-3 = 7.4:1 and 6.2:1;
   on-violet-dim on violet-deep = 5.88:1. */
const tint = [
  { bg: "bg-plum-2", dim: "text-on-plum-dim", rule: "border-white/15", plate: "dark" as const },
  { bg: "bg-plum-2", dim: "text-on-plum-dim", rule: "border-white/15", plate: "dark" as const },
  { bg: "bg-plum-3", dim: "text-on-plum-dim", rule: "border-white/15", plate: "dark" as const },
  { bg: "bg-plum-3", dim: "text-on-plum-dim", rule: "border-white/15", plate: "dark" as const },
  { bg: "bg-violet-deep", dim: "text-on-violet-dim", rule: "border-white/25", plate: "violet" as const },
  { bg: "bg-plum-2", dim: "text-on-plum-dim", rule: "border-white/15", plate: "dark" as const },
];

export default function DayClock() {
  return (
    <section
      /* data-sc-act is applied by ScrollCraft.tsx, desktop only. */
      data-sc-span="3"
      data-pin-track
      aria-labelledby="dayclock-heading"
      className="grain grain-light relative bg-plum text-on-plum"
    >
      <div
        data-sc-stage
        className="flex h-screen flex-col py-(--spacing-band) lg:pt-26 lg:pb-8"
      >
        {/* Heading — rides at the head of the track so it is on screen
            for the whole pinned sequence. */}
        <div className="shell shrink-0">
          {/* Was a hand-rolled eyebrow with the Devanagari jammed
              against the English — JSX strips whitespace that contains
              a newline, so the DOM held "…has to surviveदिन भर" as one
              run. Uses the shared component now, which owns the
              separator, the real space and the lang attribute. */}
          <Eyebrow tone="plum" deva="दिन भर">
            The day a brand has to survive
          </Eyebrow>
          <h2
            id="dayclock-heading"
            className="mt-4 max-w-[20ch] font-display text-display-l text-balance lg:mt-3"
          >
            India&rsquo;s attention,{" "}
            <span className="em-serif">by the hour</span>.
          </h2>
          <p className="mt-3 max-w-[74ch] text-body-s text-on-plum-dim">
            The same person is reachable six different ways before midnight,
            and each one needs a different format.
            <span className="ml-2 hidden text-on-plum-dim lg:inline">
              Keep scrolling to move through the day.
            </span>
          </p>
        </div>

        {/* Viewport. Overflow is auto by default so the strip is
            swipeable with no JS; the desktop pinned path clips it. */}
        <div
          data-track-viewport
          className="mt-10 min-h-0 flex-1 lg:mt-6"
        >
          <div
            data-track
            data-sc-pan="0.35"
            className="flex h-full w-max items-stretch gap-4 px-6 md:px-10"
          >
            {dayClock.map((h, i) => (
              <article
                key={h.time}
                className={`flex w-[80vw] max-w-[25rem] flex-col overflow-y-auto rounded-(--radius-card) p-6 sm:w-[56vw] md:w-[25rem] ${tint[i].bg}`}
              >
                <div className="flex shrink-0 items-baseline justify-between gap-4">
                  <p className="font-display text-[clamp(2.25rem,4vw,3rem)] leading-none">
                    {h.time}
                  </p>
                  <p className={`deva text-body-s ${tint[i].dim}`}>
                    {h.deva}
                  </p>
                </div>

                <h3 className="mt-3 shrink-0 font-display text-h2 text-balance">
                  {h.title}
                </h3>
                <p className={`mt-3 shrink-0 text-body-s ${tint[i].dim}`}>
                  {h.body}
                </p>

                {h.plate && (
                  <div className="mt-4 shrink-0">
                    <FormatPlate
                      formats={formatSets[h.plate]}
                      tone={tint[i].plate}
                      base={46}
                    />
                  </div>
                )}

                <ul className="mt-auto flex shrink-0 flex-wrap gap-2 pt-3.5">
                  {h.formats.map((f) => (
                    <li
                      key={f}
                      className="rounded-full border border-white/25 px-3 py-1.5 text-caption"
                    >
                      {f}
                    </li>
                  ))}
                </ul>

                <p
                  className={`mt-3 shrink-0 border-t pt-2.5 font-mono text-micro leading-relaxed tracking-[0.04em] uppercase ${tint[i].rule} ${tint[i].dim}`}
                >
                  {h.examples}
                </p>
              </article>
            ))}

            {/* Closing panel — the argument the track was making. */}
            <article className="flex w-[80vw] max-w-[25rem] flex-col justify-center overflow-y-auto rounded-(--radius-card) border border-white/20 p-6 sm:w-[56vw] md:w-[25rem]">
              <Eyebrow tone="plum">And that is the point</Eyebrow>
              <p className="mt-5 font-display text-h2 text-balance">
                Nobody needs all six. Everybody gets sold all six.
              </p>
              <p className="mt-4 text-body-s text-on-plum-dim">
                Which two or three actually matter depends on who you need to
                move and when they are reachable. That is the conversation
                worth having, and it costs nothing.
              </p>
              <a
                href="#objectives"
                className="group mt-8 -mb-2 inline-flex min-h-11 items-center gap-2 py-2 text-body-s font-medium text-violet-lift"
              >
                Start with the objective <span className="row-arrow">→</span>
              </a>
            </article>
          </div>
        </div>

        {/* Progress rail. Decorative: the panels are reachable by swipe
            and by keyboard whether or not this moves. */}
        <div aria-hidden="true" className="shell mt-6 hidden shrink-0 lg:block">
          <div className="h-px w-full bg-white/15">
            <div data-track-bar className="h-px w-full bg-violet-lift" />
          </div>
        </div>
      </div>
    </section>
  );
}
