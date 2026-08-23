import Link from "next/link";
import { footerNav, site } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-ink">
      {/* The grainy gradient field from the Laqshya footer. Pure CSS —
          no image, no payload, and it stops the largest flat block on
          the page reading as a template. */}
      <div
        aria-hidden="true"
        className="grain pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "radial-gradient(110% 80% at 88% 118%, #F5B841 0%, #E0651A 30%, #7A1E5C 55%, #0B0B0D 76%)",
        }}
      />
      {/* The gradient is decoration; the type still has to be readable
          over it. This scrim keeps every footer link above 4.5:1. */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-ink/55"
      />

      <div className="shell relative z-10 pt-(--spacing-band) pb-10">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_1fr]">
          <div>
            <p className="font-display text-display-l text-balance">
              Outdoor advertising,
              <br />
              planned properly.
            </p>
            <p className="mt-6 max-w-[42ch] text-body-l text-on-ink-dim">
              Tell us the market and the objective. We will tell you plainly
              whether we are the right people for it.
            </p>
            <a
              href={site.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="group mt-8 inline-flex min-h-12 items-center gap-2.5 rounded-full bg-amber px-6 font-medium text-on-amber transition-colors duration-200 hover:bg-amber-lift"
            >
              Talk on WhatsApp
              <span className="row-arrow">→</span>
            </a>
          </div>

          <div className="grid grid-cols-2 gap-x-6 gap-y-8 sm:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4">
            {footerNav.map((col) => (
              <div key={col.heading}>
                <h2 className="eyebrow text-on-ink-dim">{col.heading}</h2>
                <ul className="mt-4 space-y-1">
                  {col.links.map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        className="link-underline -my-1.5 inline-flex min-h-9 items-center py-1.5 text-[0.9375rem] text-on-ink-dim hover:text-on-ink"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-rule-dark pt-6 sm:flex-row sm:items-baseline sm:justify-between">
          <span className="font-display text-[1.0625rem] font-semibold tracking-[-0.03em]">
            {site.wordmark}
            <span className="deva ml-3 text-[0.875rem] font-medium text-on-ink-dim">
              बिज़ेक्स4यू
            </span>
          </span>
          <span className="eyebrow text-on-ink-dim">
            © {new Date().getFullYear()} {site.wordmark} · {site.address.line1},{" "}
            {site.address.line2}
          </span>
          <span className="sr-only">Independent Indian media network.</span>
        </div>
      </div>
    </footer>
  );
}
