"use client";

import { useCallback, useEffect, useState, useSyncExternalStore } from "react";
import Image from "next/image";
import { motion } from "motion/react";
import { Eyebrow } from "@/components/UI";
import { dayClock } from "@/lib/dayclock";

/**
 * One Indian day, as a dialer and a stacked card.
 *
 * The left rail is the control — six hours always visible, so the
 * section reads as something you turn, not a caption you watch. The
 * right stack springs the neighbours. Photos stay photographs: a
 * gradient only where the type sits. Places in the copy stay examples,
 * never inventory. Reduced motion swaps instantly and does not autoplay.
 */

const AUTO_PLAY_INTERVAL = 4500;
const hours = dayClock.length;

const tint = [
  { rule: "border-white/20", hour: "text-violet-lift" },
  { rule: "border-white/20", hour: "text-violet" },
  { rule: "border-white/20", hour: "text-white" },
  { rule: "border-white/20", hour: "text-violet-lift" },
  { rule: "border-white/25", hour: "text-white" },
  { rule: "border-white/20", hour: "text-on-plum-dim" },
];

function subscribeMotion(cb: () => void) {
  const q = window.matchMedia("(prefers-reduced-motion: reduce)");
  q.addEventListener("change", cb);
  return () => q.removeEventListener("change", cb);
}

function usePrefersReducedMotion() {
  return useSyncExternalStore(
    subscribeMotion,
    () => window.matchMedia("(prefers-reduced-motion: reduce)").matches,
    () => false,
  );
}

function cardStatus(index: number, current: number) {
  const len = hours;
  let diff = index - current;
  if (diff > len / 2) diff -= len;
  if (diff < -len / 2) diff += len;
  if (diff === 0) return "active" as const;
  if (diff === -1) return "prev" as const;
  if (diff === 1) return "next" as const;
  return "hidden" as const;
}

export default function DayClock() {
  const [step, setStep] = useState(0);
  const [paused, setPaused] = useState(false);
  const reduceMotion = usePrefersReducedMotion();
  const current = ((step % hours) + hours) % hours;

  const goTo = useCallback((index: number) => {
    setStep((s) => {
      const now = ((s % hours) + hours) % hours;
      return s + (index - now);
    });
  }, []);

  const next = useCallback(() => {
    setStep((s) => s + 1);
  }, []);

  useEffect(() => {
    if (paused || reduceMotion) return;
    const id = setInterval(next, AUTO_PLAY_INTERVAL);
    return () => clearInterval(id);
  }, [next, paused, reduceMotion]);

  const cardSpring = reduceMotion
    ? { duration: 0 }
    : { type: "spring" as const, stiffness: 260, damping: 25, mass: 0.8 };

  return (
    <section
      aria-labelledby="dayclock-heading"
      className="grain grain-light relative bg-plum py-16 text-on-plum md:py-20"
    >
      <div className="shell">
        <div className="flex flex-wrap items-end justify-between gap-x-12 gap-y-4">
          <div>
            <Eyebrow tone="plum">
              The day a brand has to survive
            </Eyebrow>
            <h2
              id="dayclock-heading"
              className="mt-3 max-w-[18ch] font-display text-h1 text-balance"
            >
              India&rsquo;s attention,{" "}
              <span className="em-serif">by the hour</span>.
            </h2>
          </div>
          <p className="max-w-[40ch] text-body-s text-on-plum-dim">
            The same person is reachable six different ways before midnight,
            and each one needs a different format.
          </p>
        </div>

        <div
          className="mt-8 overflow-hidden rounded-(--radius-card) border border-white/12 lg:flex"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <div className="relative z-20 flex shrink-0 flex-col bg-plum-2 px-4 py-4 lg:w-[40%] lg:px-6 lg:py-6">
            <p className="font-mono text-nano tracking-[0.14em] text-violet-lift uppercase">
              Turn the hour
            </p>
            <p className="mt-1 text-caption text-on-plum-dim">
              Six moments. Tap one — or let it run.
            </p>

            <div
              role="tablist"
              aria-label="Hour of the day"
              className="mt-4 flex flex-col gap-1.5"
            >
              {dayClock.map((h, i) => (
                <Chip
                  key={h.time}
                  hour={h}
                  active={i === current}
                  paused={paused}
                  reduceMotion={reduceMotion}
                  onSelect={() => goTo(i)}
                />
              ))}
            </div>

            <p
              className="mt-4 font-mono text-nano tracking-[0.08em] text-on-plum-dim uppercase"
              aria-live="polite"
            >
              {reduceMotion ? "Manual" : paused ? "Paused" : "Playing"}
              <span aria-hidden> · </span>
              {String(current + 1).padStart(2, "0")} of {String(hours).padStart(2, "0")}
            </p>
          </div>

          <div className="relative min-h-[26rem] flex-1 overflow-hidden border-t border-white/12 bg-plum lg:min-h-[32rem] lg:border-t-0 lg:border-l">
            <div className="relative mx-auto flex h-full min-h-[26rem] w-full max-w-[32rem] items-center justify-center p-4 md:p-7 lg:min-h-[32rem]">
              {dayClock.map((h, i) => {
                const status = cardStatus(i, current);
                const active = status === "active";
                const prev = status === "prev";
                const nextCard = status === "next";
                const t = tint[i];

                return (
                  <motion.article
                    key={h.time}
                    initial={false}
                    animate={{
                      x: active ? 0 : prev ? -72 : nextCard ? 72 : 0,
                      scale: active ? 1 : prev || nextCard ? 0.88 : 0.74,
                      opacity: active ? 1 : prev || nextCard ? 0.45 : 0,
                      rotate: reduceMotion ? 0 : prev ? -2 : nextCard ? 2 : 0,
                      zIndex: active ? 20 : prev || nextCard ? 10 : 0,
                    }}
                    transition={cardSpring}
                    aria-hidden={!active}
                    className={`absolute inset-4 overflow-hidden rounded-(--radius-card) border-4 border-plum md:inset-7 ${
                      active ? "pointer-events-auto" : "pointer-events-none"
                    }`}
                  >
                    <Image
                      src={h.image}
                      alt={h.imageAlt}
                      fill
                      sizes="(min-width: 1024px) 30vw, 90vw"
                      className="object-cover saturate-[1.2] contrast-[1.08]"
                    />
                    <div
                      aria-hidden
                      className="absolute inset-0 bg-linear-to-t from-plum/95 from-[18%] via-plum/45 via-[50%] to-transparent"
                    />
                    <div className="relative flex h-full flex-col justify-end p-5">
                      <div className="flex items-baseline justify-between gap-3">
                        <p
                          className={`font-display text-[1.75rem] leading-none ${t.hour}`}
                        >
                          {h.time}
                        </p>
                        <p className="deva text-caption text-white/85">
                          {h.deva}
                        </p>
                      </div>
                      <h3
                        className="mt-2 font-display text-h3 text-balance text-white"
                        aria-live={active ? "polite" : undefined}
                      >
                        {h.title}
                      </h3>
                      <p className="mt-2 text-caption text-white/88">
                        {h.body}
                      </p>
                      <ul className="mt-3 flex flex-wrap gap-1.5">
                        {h.formats.map((f) => (
                          <li
                            key={f}
                            className="rounded-full border border-white/30 bg-plum/50 px-2.5 py-1 font-mono text-nano tracking-[0.06em] text-white/90 uppercase"
                          >
                            {f}
                          </li>
                        ))}
                      </ul>
                      <p
                        className={`mt-3 border-t pt-2 font-mono text-nano leading-relaxed tracking-[0.04em] uppercase ${t.rule} text-white/70`}
                      >
                        {h.examples}
                      </p>
                    </div>
                  </motion.article>
                );
              })}
            </div>
          </div>
        </div>

        <div className="mt-8 flex flex-wrap items-end justify-between gap-x-8 gap-y-3 border-t border-white/15 pt-6">
          <p className="max-w-[52ch] text-body-s text-on-plum-dim">
            <span className="font-display text-h3 text-on-plum">
              Nobody needs all six.
            </span>{" "}
            Everybody gets sold all six. Which two or three matter depends on
            who you need to move, and when they are reachable.
          </p>
          <a
            href="#objectives"
            className="group inline-flex min-h-11 items-center gap-2 text-body-s font-medium text-violet-lift"
          >
            Start with the objective <span className="row-arrow">→</span>
          </a>
        </div>
      </div>
    </section>
  );
}

function Chip({
  hour,
  active,
  paused,
  reduceMotion,
  onSelect,
}: {
  hour: (typeof dayClock)[number];
  active: boolean;
  paused: boolean;
  reduceMotion: boolean;
  onSelect: () => void;
}) {
  return (
    <button
      type="button"
      role="tab"
      aria-selected={active}
      onClick={onSelect}
      className={`relative flex w-full min-h-11 items-baseline overflow-hidden rounded-lg border px-3 py-2 text-left transition-colors duration-200 lg:px-3.5 lg:py-2.5 ${
        active
          ? "z-10 border-sand bg-sand text-plum shadow-[0_8px_24px_-12px_rgba(18,17,15,0.55)]"
          : "border-white/40 bg-white/18 text-white hover:border-white/70 hover:bg-white/28"
      }`}
    >
      <span className="w-[5.1rem] shrink-0 font-display text-[1.35rem] leading-none tabular-nums">
        {hour.time}
      </span>
      <span className="min-w-0 flex-1">
        <span className="block truncate text-caption font-medium leading-tight">
          {hour.scene}
        </span>
        <span
          lang="hi"
          className={`deva mt-0.5 block text-nano leading-none ${
            active ? "text-plum/70" : "text-on-plum-dim"
          }`}
        >
          {hour.deva}
        </span>
      </span>
      {active && !reduceMotion ? (
        <span
          key={hour.time}
          aria-hidden
          className="dayclock-tick pointer-events-none absolute inset-x-0 bottom-0 h-[3px] origin-left bg-plum"
          style={{
            animation: `dayclock-tick ${AUTO_PLAY_INTERVAL}ms linear`,
            animationPlayState: paused ? "paused" : "running",
          }}
        />
      ) : null}
    </button>
  );
}
