/**
 * Client logos in original colour, always. Cohesion comes from
 * optical sizing and even cells — not from greying them to match.
 *
 * Server component: the track is a CSS marquee (see .brand-strip-track).
 * Native lazy images so React 19 does not preload nine logos into the
 * document head against the hero — that used to add a preload link per
 * mark on every page that rendered this strip.
 */

type Brand = {
  name: string;
  src: string;
  /** 0–1 against 40px mobile / 56px desktop. Tuned by ink area, not bbox. */
  scale: number;
};

const brands: Brand[] = [
  { name: "Sharp", src: "/logos/sharp.webp", scale: 1.02 },
  { name: "Hicks", src: "/logos/hicks.webp", scale: 0.92 },
  { name: "Mishrambu", src: "/logos/mishrambu.webp", scale: 0.86 },
  { name: "Zebronics", src: "/logos/zebronics.webp", scale: 0.98 },
  { name: "Portronics", src: "/logos/portronics.webp", scale: 0.94 },
  { name: "Wingreens Farms", src: "/logos/wingreens-farms.webp", scale: 0.78 },
  { name: "Raw Pressery", src: "/logos/raw-pressery.webp", scale: 0.72 },
  { name: "Safilo", src: "/logos/safilo.svg", scale: 0.96 },
  { name: "Carrera", src: "/logos/carrera.svg", scale: 1 },
];

function LogoMark({ brand }: { brand: Brand }) {
  return (
    <div className="brand-logo">
      {/* Native img: next/image was preloading every mark into <head>. */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={brand.src}
        alt={`${brand.name} logo`}
        width={184}
        height={56}
        loading="lazy"
        decoding="async"
        style={{ ["--s" as string]: String(brand.scale) }}
      />
    </div>
  );
}

function LogoRow({ hidden }: { hidden: boolean }) {
  return (
    <ul aria-hidden={hidden || undefined} className="brand-logo-row">
      {brands.map((brand) => (
        <li key={`${hidden ? "dup-" : ""}${brand.name}`}>
          <LogoMark brand={brand} />
        </li>
      ))}
    </ul>
  );
}

export default function BrandStrip({
  framed = true,
  eyebrow = "Brands that trust us",
}: {
  /** When false, just the track — the page owns the heading and ground. */
  framed?: boolean;
  eyebrow?: string | false;
}) {
  const track = (
    <div className="marquee-mask overflow-hidden">
      <div className="brand-strip-track">
        <LogoRow hidden={false} />
        <LogoRow hidden />
      </div>
    </div>
  );

  const inner = (
    <>
      {eyebrow ? <p className="eyebrow text-on-sand-dim">{eyebrow}</p> : null}
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
