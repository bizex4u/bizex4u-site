/* ------------------------------------------------------------------
   The shared Open Graph card.

   Why this exists: every page on the site shipped `og:image: null`.
   In India that is not a cosmetic gap. B2B links travel on WhatsApp,
   and a link with no preview renders as a bare blue string — which
   looks like something forwarded rather than something published. A
   card is the difference between a link that gets opened and one that
   gets scrolled past.

   Rendered by Satori through next/og, which is NOT a browser. Three
   constraints follow and all three have bitten people:

   1. Every element that contains more than one child needs an explicit
      `display: flex`. Satori has no block layout; a missing display is
      a build error, not a visual bug.
   2. Fonts must be TTF or OTF. The site ships woff2, so
      assets/*.ttf are converted copies checked in for build time.
      Static weights only — Satori's variable-font support is partial,
      and Instrument Sans is a wght 100–900 variable face.
   3. No CSS custom properties. The palette is repeated as literals
      below rather than read from globals.css, because Satori never
      sees that stylesheet. If the brand colours change, they change
      in two places. That is a real cost and it is written down here
      so the next person finds out from a comment rather than from a
      card that is the wrong colour.
------------------------------------------------------------------- */

import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

/* Literals, mirroring globals.css. See constraint 3 above. */
const PLUM = "#1a1424";
const PLUM_2 = "#241c33";
const SAND = "#f4f1f8";
const VIOLET_LIFT = "#ddd0f6";
const ON_PLUM_DIM = "#c9c0d8";

const loadFonts = async () => [
  {
    name: "InstrumentSerif",
    data: await readFile(join(process.cwd(), "assets/InstrumentSerif-Regular.ttf")),
    style: "normal" as const,
    weight: 400 as const,
  },
  {
    /* Satori matches fontStyle against loaded faces and silently falls
       back to upright if no italic is present — which is what happened
       first time round, quietly dropping the site's signature device
       from every card. Synthetic obliquing is not applied. */
    name: "InstrumentSerif",
    data: await readFile(join(process.cwd(), "assets/InstrumentSerif-Italic.ttf")),
    style: "italic" as const,
    weight: 400 as const,
  },
  {
    name: "PlexMono",
    data: await readFile(join(process.cwd(), "assets/IBMPlexMono-Medium.ttf")),
    style: "normal" as const,
    weight: 500 as const,
  },
];

export async function ogCard({
  eyebrow,
  title,
  accent,
  footnote,
}: {
  /* Mono, uppercase, violet. The category line. */
  eyebrow: string;
  /* The display line, set in the site's serif. */
  title: string;
  /* Optional italic tail, matching the em-serif device used on the
     site itself so a shared card is recognisably the same object. */
  accent?: string;
  /* Bottom-right mono line — usually the market or the URL. */
  footnote: string;
}) {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: PLUM,
          padding: "72px 80px",
          position: "relative",
        }}
      >
        {/* A single soft violet bloom, bottom-left. Satori supports
            radial-gradient; it does not support filter: blur, so the
            softness has to come from the gradient stops themselves. */}
        <div
          style={{
            position: "absolute",
            left: -260,
            bottom: -320,
            width: 900,
            height: 900,
            display: "flex",
            borderRadius: 9999,
            background:
              "radial-gradient(circle, rgba(123,92,255,0.34) 0%, rgba(123,92,255,0.10) 45%, rgba(27,16,48,0) 70%)",
          }}
        />

        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <div
            style={{
              display: "flex",
              fontFamily: "PlexMono",
              fontSize: 26,
              letterSpacing: "0.14em",
              color: SAND,
            }}
          >
            BIZEX4U
          </div>
          <div
            style={{
              display: "flex",
              fontFamily: "PlexMono",
              fontSize: 19,
              letterSpacing: "0.1em",
              color: ON_PLUM_DIM,
              textTransform: "uppercase",
            }}
          >
            {eyebrow}
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              fontFamily: "InstrumentSerif",
              /* 70px holds the longest real title — "Outdoor advertising
                 in Chandigarh" — on two lines at 1200px wide. */
              fontSize: 70,
              lineHeight: 1.06,
              color: SAND,
              letterSpacing: "-0.02em",
            }}
          >
            {title}
            {accent ? (
              <span style={{ color: VIOLET_LIFT, fontStyle: "italic", marginLeft: 16 }}>
                {accent}
              </span>
            ) : null}
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            borderTop: `1px solid ${PLUM_2}`,
            paddingTop: 28,
          }}
        >
          <div
            style={{
              display: "flex",
              fontFamily: "PlexMono",
              fontSize: 19,
              letterSpacing: "0.06em",
              color: ON_PLUM_DIM,
            }}
          >
            {footnote}
          </div>
          <div
            style={{
              display: "flex",
              fontFamily: "PlexMono",
              fontSize: 19,
              letterSpacing: "0.06em",
              color: VIOLET_LIFT,
            }}
          >
            bizex4u.com
          </div>
        </div>
      </div>
    ),
    { ...size, fonts: await loadFonts() },
  );
}
