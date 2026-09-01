"use client";

import { motion, useReducedMotion } from "motion/react";

/**
 * Client logos in original colour, always. Cohesion comes from
 * optical sizing and even cells — not from greying them to match.
 *
 * variant="marquee" — lots of names, they drift past.
 * variant="grid"    — look at each one; names carry weight.
 */

export type BrandStripVariant = "marquee" | "grid";

type Brand = {
  name: string;
  src: string;
  /** 0–1 against 40px mobile / 56px desktop. Tuned by ink area, not bbox. */
  scale: number;
};

const brands: Brand[] = [
  { name: "Sharp", src: "/logos/sharp.png", scale: 1.02 },
  { name: "Hicks", src: "/logos/hicks.png", scale: 0.92 },
  { name: "Mishrambu", src: "/logos/mishrambu.png", scale: 0.86 },
  { name: "Zebronics", src: "/logos/zebronics.png", scale: 0.98 },
  { name: "Portronics", src: "/logos/portronics.png", scale: 0.94 },
  { name: "Wingreens Farms", src: "/logos/wingreens-farms.png", scale: 0.78 },
  { name: "Raw Pressery", src: "/logos/raw-pressery.png", scale: 0.72 },
  { name: "Safilo", src: "/logos/safilo.svg", scale: 0.96 },
  { name: "Carrera", src: "/logos/carrera.svg", scale: 1 },
];

const gridEnter = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

const gridItem = {
  hidden: { opacity: 0, y: 16 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: [0.16, 1, 0.3, 1] as const },
  },
};

function LogoMark({ brand }: { brand: Brand }) {
  return (
    <div className="flex h-14 w-[8.5rem] shrink-0 items-center justify-center md:h-[4.5rem] md:w-[11.5rem]">
      {/* Mixed PNG/SVG lockups — native img keeps SVG fills intact. */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={brand.src}
        alt={`${brand.name} logo`}
        width={184}
        height={56}
        className="h-[calc(40px*var(--s))] w-auto max-w-[10.5rem] object-contain object-center md:h-[calc(56px*var(--s))]"
        style={{ ["--s" as string]: String(brand.scale) }}
      />
    </div>
  );
}

function LogoRow({ hidden }: { hidden: boolean }) {
  return (
    <ul
      aria-hidden={hidden || undefined}
      className="flex shrink-0 items-center gap-x-7 pr-7 md:gap-x-12 md:pr-12"
    >
      {brands.map((brand) => (
        <li key={`${hidden ? "dup-" : ""}${brand.name}`}>
          <LogoMark brand={brand} />
        </li>
      ))}
    </ul>
  );
}

function MarqueeStrip({ reduce }: { reduce: boolean | null }) {
  if (reduce) {
    return (
      <ul className="flex flex-wrap items-center justify-center gap-x-6 gap-y-5 md:gap-x-10">
        {brands.map((brand) => (
          <li key={brand.name}>
            <LogoMark brand={brand} />
          </li>
        ))}
      </ul>
    );
  }

  return (
    <div className="marquee-mask overflow-hidden">
      <div className="brand-strip-track flex w-max">
        <LogoRow hidden={false} />
        <LogoRow hidden />
      </div>
    </div>
  );
}

function GridStrip({ reduce }: { reduce: boolean | null }) {
  if (reduce) {
    return (
      <ul className="grid grid-cols-2 gap-x-4 gap-y-6 sm:grid-cols-3 lg:grid-cols-5">
        {brands.map((brand) => (
          <li key={brand.name} className="flex justify-center">
            <LogoMark brand={brand} />
          </li>
        ))}
      </ul>
    );
  }

  return (
    <motion.ul
      variants={gridEnter}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.35 }}
      className="grid grid-cols-2 gap-x-4 gap-y-6 sm:grid-cols-3 lg:grid-cols-5"
    >
      {brands.map((brand) => (
        <motion.li
          key={brand.name}
          variants={gridItem}
          className="flex justify-center"
        >
          <LogoMark brand={brand} />
        </motion.li>
      ))}
    </motion.ul>
  );
}

export default function BrandStrip({
  variant = "marquee",
  framed = true,
  eyebrow = "Brands that trust us",
}: {
  variant?: BrandStripVariant;
  /** When false, just the track — the page owns the heading and ground. */
  framed?: boolean;
  eyebrow?: string | false;
}) {
  const reduce = useReducedMotion();
  const track =
    variant === "grid" ? (
      <GridStrip reduce={reduce} />
    ) : (
      <MarqueeStrip reduce={reduce} />
    );

  const inner = (
    <>
      {eyebrow ? (
        <p className="eyebrow text-on-sand-dim">{eyebrow}</p>
      ) : null}
      <div className={eyebrow ? "mt-7 md:mt-8" : undefined}>{track}</div>
    </>
  );

  if (!framed) {
    return <div className="brand-strip">{inner}</div>;
  }

  return (
    <section
      aria-label={eyebrow || "Brands that trust us"}
      className="brand-strip isolate border-b border-rule-sand bg-brand-strip py-9 text-on-sand md:py-11"
    >
      <div className="shell">{inner}</div>
    </section>
  );
}
