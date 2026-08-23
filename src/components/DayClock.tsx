import FormatPlate, { formatSets } from "@/components/FormatPlate";
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

const tint = [
  "bg-plum-2",
  "bg-plum-2",
  "bg-plum-3",
  "bg-plum-3",
  "bg-violet-deep",
  "bg-plum-2",
];

export default function DayClock() {
  return (
    <section
      data-pin-track
      aria-labelledby="dayclock-heading"
      className="grain grain-light relative bg-plum text-on-plum lg:h-screen"
    >
      <div className="flex h-full flex-col py-(--spacing-band) lg:pt-26 lg:pb-8">
        {/* Heading — rides at the head of the track so it is on screen
            for the whole pinned sequence. */}
        <div className="shell shrink-0">
          <p className="eyebrow text-violet-lift">
            The day a brand has to survive
            <span className="deva ml-2.5 text-on-plum-dim normal-case">
              दिन भर
            </span>
          </p>
          <h2
            id="dayclock-heading"
            className="mt-4 max-w-[20ch] font-display text-display-l text-balance lg:mt-3"
          >
            India&rsquo;s attention,{" "}
            <span className="em-serif">by the hour</span>.
          </h2>
          <p className="mt-3 max-w-[74ch] text-[0.9375rem] text-on-plum-dim">
            The same person is reachable six different ways before midnight,
            and each one needs a different format.
            <span className="ml-2 hidden text-on-plum-dim/70 lg:inline">
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
            className="flex h-full w-max items-stretch gap-4 px-6 md:px-10"
          >
            {dayClock.map((h, i) => (
              <article
                key={h.time}
                className={`flex w-[80vw] max-w-[25rem] flex-col overflow-y-auto rounded-(--radius-card) p-6 sm:w-[56vw] md:w-[25rem] ${tint[i]}`}
              >
                <div className="flex shrink-0 items-baseline justify-between gap-4">
                  <p className="font-display text-[clamp(2.25rem,4vw,3rem)] leading-none">
                    {h.time}
                  </p>
                  <p className="deva text-[0.9375rem] text-on-plum-dim">
                    {h.deva}
                  </p>
                </div>

                <h3 className="mt-3 shrink-0 font-display text-h2 text-balance">
                  {h.title}
                </h3>
                <p className="mt-3 shrink-0 text-[0.9375rem] text-on-plum-dim">
                  {h.body}
                </p>

                {h.plate && (
                  <div className="mt-4 shrink-0">
                    <FormatPlate formats={formatSets[h.plate]} tone="dark" base={46} />
                  </div>
                )}

                <ul className="mt-auto flex shrink-0 flex-wrap gap-2 pt-3.5">
                  {h.formats.map((f) => (
                    <li
                      key={f}
                      className="rounded-full border border-white/25 px-3 py-1.5 text-[0.8125rem]"
                    >
                      {f}
                    </li>
                  ))}
                </ul>

                <p className="mt-3 shrink-0 border-t border-white/15 pt-2.5 font-mono text-[0.6875rem] leading-relaxed tracking-[0.04em] text-on-plum-dim uppercase">
                  {h.examples}
                </p>
              </article>
            ))}

            {/* Closing panel — the argument the track was making. */}
            <article className="flex w-[80vw] max-w-[25rem] flex-col justify-center overflow-y-auto rounded-(--radius-card) border border-white/20 p-6 sm:w-[56vw] md:w-[25rem]">
              <p className="eyebrow text-violet-lift">And that is the point</p>
              <p className="mt-5 font-display text-h2 text-balance">
                Nobody needs all six. Everybody gets sold all six.
              </p>
              <p className="mt-4 text-[0.9375rem] text-on-plum-dim">
                Which two or three actually matter depends on who you need to
                move and when they are reachable. That is the conversation
                worth having, and it costs nothing.
              </p>
              <a
                href="#objectives"
                className="group mt-8 inline-flex items-center gap-2 text-[0.9375rem] font-medium text-violet-lift"
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
