/**
 * The corridor field.
 *
 * A drawn, animated picture of how Bizex4U actually plans: traffic
 * moving along a handful of arterial routes, with junctions where they
 * cross. Pulses travel the lines at different speeds, the way real
 * corridors carry different volumes.
 *
 * This exists because the alternative was generated video, and three
 * separate services turned out to need a subscription. It is also the
 * better answer: it costs nothing, weighs a couple of KB, runs on the
 * compositor, and — unlike AI footage of a street — it cannot be
 * mistaken for a photograph of a site the company does not own. It is
 * a diagram, and it is honest about being one.
 *
 * Pure CSS animation: stroke-dashoffset on a duplicate of each path.
 * No JS, no library, and prefers-reduced-motion stops it in globals.css
 * rather than needing a hook.
 */

/* Hand-placed rather than generated, so the crossings land where they
   look deliberate. Viewbox is 1200x520; paths run off both edges so the
   field reads as a fragment of something larger. */
const CORRIDORS = [
  { d: "M-40 430 C 220 400, 380 250, 640 210 S 1000 120, 1240 96", w: 1.6, dur: 13, delay: 0 },
  { d: "M-40 300 C 260 320, 420 360, 700 330 S 1020 250, 1240 268", w: 1.2, dur: 17, delay: 2.5 },
  { d: "M-40 150 C 200 170, 340 300, 600 340 S 980 430, 1240 420", w: 1.2, dur: 15, delay: 5 },
  { d: "M120 560 C 180 400, 300 260, 420 -40", w: 1, dur: 19, delay: 1.2 },
  { d: "M780 560 C 820 380, 900 240, 940 -40", w: 1, dur: 16, delay: 3.8 },
  { d: "M-40 60 C 300 90, 700 60, 1240 190", w: 0.8, dur: 21, delay: 6.4 },
];

/* Where the eye should read a junction. Approximate crossings. */
const NODES = [
  { cx: 420, cy: 268, r: 3.5, dur: 4.2, delay: 0 },
  { cx: 640, cy: 210, r: 4.5, dur: 5.1, delay: 1.4 },
  { cx: 700, cy: 330, r: 3, dur: 4.6, delay: 2.8 },
  { cx: 940, cy: 150, r: 3, dur: 5.6, delay: 0.8 },
  { cx: 210, cy: 330, r: 2.5, dur: 4.9, delay: 3.6 },
];

export default function CorridorField({
  className = "",
}: {
  className?: string;
}) {
  return (
    <svg
      viewBox="0 0 1200 520"
      preserveAspectRatio="xMidYMid slice"
      aria-hidden="true"
      focusable="false"
      className={`corridor-field pointer-events-none ${className}`}
    >
      <defs>
        {/* The pulse fades at both ends so it reads as movement along
            the line rather than a dash sliding over it. */}
        <linearGradient id="cf-pulse" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="var(--color-violet)" stopOpacity="0" />
          <stop offset="50%" stopColor="var(--color-violet)" stopOpacity="1" />
          <stop offset="100%" stopColor="var(--color-violet)" stopOpacity="0" />
        </linearGradient>
      </defs>

      {CORRIDORS.map((c, i) => (
        <g key={i}>
          {/* The route itself — always visible, barely. */}
          <path
            d={c.d}
            fill="none"
            stroke="currentColor"
            strokeWidth={c.w}
            strokeOpacity={0.16}
            strokeLinecap="round"
          />
          {/* The traffic on it. */}
          <path
            className="corridor-pulse"
            d={c.d}
            fill="none"
            stroke="url(#cf-pulse)"
            strokeWidth={c.w * 2.2}
            strokeLinecap="round"
            style={{
              ["--cf-dur" as string]: `${c.dur}s`,
              ["--cf-delay" as string]: `${c.delay}s`,
            }}
          />
        </g>
      ))}

      {NODES.map((n, i) => (
        <circle
          key={i}
          className="corridor-node"
          cx={n.cx}
          cy={n.cy}
          r={n.r}
          fill="currentColor"
          style={{
            ["--cf-dur" as string]: `${n.dur}s`,
            ["--cf-delay" as string]: `${n.delay}s`,
          }}
        />
      ))}
    </svg>
  );
}
