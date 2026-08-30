"use client";

import { useCallback, useEffect, useState, useSyncExternalStore } from "react";
import Image from "next/image";
import { motion } from "motion/react";
import { Eyebrow } from "@/components/UI";
import { dayClock } from "@/lib/dayclock";

/**
 * One Indian day, as a chip wheel and a stacked card.
 *
 * The motion is the feature-carousel pattern: a vertical list of hours
 * that springs past the active one, and a card stack that scales the
 * neighbours. Each card is a designed face — own street frames where
 * we have the hour, interiors for mall, office and cinema. Places in
 * the copy stay examples, never inventory. Reduced motion swaps
 * instantly and does not autoplay.
 */

const AUTO_PLAY_INTERVAL = 4500;
const ITEM_HEIGHT = 58;
const hours = dayClock.length;

const tint = [
  {
    bg: "bg-plum-2",
    dim: "text-on-plum-dim",
    rule: "border-white/15",
    plate: "dark" as const,
    sky: "from-[#e8a04a]/50 via-[#e8a04a]/12 to-transparent",
    hour: "text-[#f0c48a]",
  },
  {
    bg: "bg-plum-2",
    dim: "text-on-plum-dim",
    rule: "border-white/15",
    plate: "dark" as const,
    sky: "from-[#f0d080]/36 via-transparent to-transparent",
    hour: "text-[#f5e6c8]",
  },
  {
    bg: "bg-plum-3",
    dim: "text-on-plum-dim",
    rule: "border-white/15",
    plate: "dark" as const,
    sky: "from-[#f7ecd0]/18 via-transparent to-transparent",
    hour: "text-white",
  },
  {
    bg: "bg-plum-3",
    dim: "text-on-plum-dim",
    rule: "border-white/15",
    plate: "dark" as const,
    sky: "from-[#e07040]/38 via-[#e07040]/10 to-transparent",
    hour: "text-[#f0c4a0]",
  },
  {
    bg: "bg-violet-deep",
    dim: "text-on-violet-dim",
    rule: "border-white/25",
    plate: "violet" as const,
    sky: "from-[#120530]/45 via-transparent to-transparent",
    hour: "text-white",
  },
  {
    bg: "bg-plum-2",
    dim: "text-on-plum-dim",
    rule: "border-white/15",
    plate: "dark" as const,
    sky: "from-[#06040c]/70 via-[#1b1030]/20 to-transparent",
    hour: "text-[#c4b8e0]",
  },
];

const wrap = (min: number, max: number, v: number) => {
  const range = max - min;
  return ((((v - min) % range) + range) % range) + min;
};

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
            <Eyebrow tone="plum" deva="दिन भर">
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
          {/* Hour chips — a swipe row on a phone, the spring wheel on a
              wide screen. Same buttons, two layouts, so a tap still
              lands on the hour it names. */}
          <div className="relative flex shrink-0 flex-col justify-center overflow-hidden bg-plum-2 px-4 py-4 lg:w-[38%] lg:px-8 lg:py-8">
            <div
              aria-hidden
              className="pointer-events-none absolute inset-x-0 top-0 z-10 h-10 bg-linear-to-b from-plum-2 to-transparent lg:h-16"
            />
            <div
              aria-hidden
              className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-10 bg-linear-to-t from-plum-2 to-transparent lg:h-16"
            />

            <div
              role="tablist"
              aria-label="Hour of the day"
              className="flex gap-2 overflow-x-auto pb-1 lg:hidden"
            >
              {dayClock.map((h, i) => (
                <Chip
                  key={h.time}
                  hour={h}
                  active={i === current}
                  onSelect={() => goTo(i)}
                />
              ))}
            </div>

            <div
              role="tablist"
              aria-label="Hour of the day"
              className="relative hidden h-[20.5rem] items-center justify-start lg:flex"
            >
              {dayClock.map((h, i) => {
                const distance = wrap(-(hours / 2), hours / 2, i - current);
                return (
                  <div
                    key={h.time}
                    className={`absolute left-0 flex items-center ${
                      reduceMotion
                        ? ""
                        : "transition-[transform,opacity] duration-500 ease-out"
                    }`}
                    style={{
                      height: ITEM_HEIGHT,
                      top: "50%",
                      transform: `translateY(${distance * ITEM_HEIGHT - ITEM_HEIGHT / 2}px)`,
                      opacity: 1 - Math.abs(distance) * 0.28,
                    }}
                  >
                    <Chip
                      hour={h}
                      active={i === current}
                      onSelect={() => goTo(i)}
                    />
                  </div>
                );
              })}
            </div>
          </div>

          <div className="relative min-h-[26rem] flex-1 overflow-hidden border-t border-white/12 bg-plum lg:min-h-[28rem] lg:border-t-0 lg:border-l">
            <div className="relative mx-auto flex h-full min-h-[26rem] w-full max-w-[30rem] items-center justify-center p-4 md:p-7 lg:min-h-[28rem]">
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
                      opacity: active ? 1 : prev || nextCard ? 0.4 : 0,
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
                      className={`object-cover transition-[filter] duration-700 ${
                        active
                          ? "grayscale-0 blur-0"
                          : "grayscale blur-[2px] brightness-75"
                      }`}
                    />
                    <div
                      aria-hidden
                      className={`pointer-events-none absolute inset-x-0 top-0 h-24 bg-linear-to-b ${t.sky}`}
                    />
                    <div
                      aria-hidden
                      className="absolute inset-0 bg-linear-to-t from-plum via-plum/55 to-transparent"
                    />
                    <div className="relative flex h-full flex-col justify-end p-5">
                      <div className="flex items-baseline justify-between gap-3">
                        <p
                          className={`font-display text-[1.75rem] leading-none ${t.hour}`}
                        >
                          {h.time}
                        </p>
                        <p className={`deva text-caption text-white/80`}>
                          {h.deva}
                        </p>
                      </div>
                      <h3
                        className="mt-2 font-display text-h3 text-balance text-white"
                        aria-live={active ? "polite" : undefined}
                      >
                        {h.title}
                      </h3>
                      <p className="mt-2 text-caption text-white/80">
                        {h.body}
                      </p>
                      <ul className="mt-3 flex flex-wrap gap-1.5">
                        {h.formats.map((f) => (
                          <li
                            key={f}
                            className="rounded-full border border-white/25 bg-plum/40 px-2.5 py-1 font-mono text-nano tracking-[0.06em] text-white/85 uppercase"
                          >
                            {f}
                          </li>
                        ))}
                      </ul>
                      <p
                        className={`mt-3 border-t pt-2 font-mono text-nano leading-relaxed tracking-[0.04em] uppercase ${t.rule} text-white/65`}
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
  onSelect,
}: {
  hour: (typeof dayClock)[number];
  active: boolean;
  onSelect: () => void;
}) {
  return (
    <button
      type="button"
      role="tab"
      aria-selected={active}
      onClick={onSelect}
      className={`flex shrink-0 items-baseline gap-3 rounded-full border px-4 py-2.5 text-left transition-colors duration-300 ${
        active
          ? "z-10 border-sand bg-sand text-plum"
          : "border-white/20 bg-transparent text-on-plum-dim hover:border-white/40 hover:text-on-plum"
      }`}
    >
      <span className="font-display text-h3 leading-none">{hour.time}</span>
      <span lang="hi" className="deva text-caption">
        {hour.deva}
      </span>
    </button>
  );
}
