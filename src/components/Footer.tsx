import Link from "next/link";
import { footerNav, site } from "@/lib/site";
import BriefButton from "@/components/BriefButton";
import { Eyebrow } from "@/components/UI";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-plum text-on-plum">
      {/* The grainy gradient field from the Laqshya footer. Pure CSS —
          no image, no payload, and it stops the largest flat block on
          the page reading as a template. */}
      <div
        aria-hidden="true"
        className="grain grain-light pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "radial-gradient(115% 85% at 85% 118%, #C9A9FF 0%, #7B5CFF 26%, #5327C9 48%, #1B1030 74%)",
        }}
      />
      {/* The gradient is decoration; the type still has to be readable
          over it. This scrim keeps every footer link above 4.5:1. */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-plum/50"
      />

      <div className="shell relative z-10 pt-(--spacing-band) pb-10">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_1fr]">
          <div>
            <p className="font-display text-display-l text-balance">
              Outdoor advertising,
              <br />
              planned properly.
            </p>
            <p className="mt-6 max-w-[42ch] text-body-l text-on-plum-dim">
              Tell us the market and the objective. We will tell you plainly
              whether we are the right people for it.
            </p>
            {/* The footer CTA is the brief form too. WhatsApp still
                appears in the Connect column as a direct contact
                method — it is no longer the way a lead starts. */}
            <div className="mt-8">
              <BriefButton context="Footer" location="footer" size="lg">
                Send a brief
              </BriefButton>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-x-6 gap-y-8 sm:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4">
            {footerNav.map((col) => (
              <div key={col.heading}>
                <Eyebrow as="h2" tone="plum" muted>{col.heading}</Eyebrow>
                <ul className="mt-4 space-y-1">
                  {col.links.map((link) => {
                    const cls =
                      "link-underline -my-1.5 inline-flex min-h-10 items-center py-1.5 text-body-s text-balance text-on-plum-dim hover:text-on-plum";
                    /* mailto:, tel: and wa.me are not app routes, so
                       they must not go through next/link. */
                    const isExternal =
                      "external" in link && link.external === true;
                    const isWhatsapp = link.label === "WhatsApp";
                    const isBrief = link.label === "Send a brief";
                    const ctaAttrs =
                      isWhatsapp || isBrief
                        ? {
                            "data-cta": "1",
                            "data-cta-location": "footer",
                            "data-cta-label": link.label,
                            "data-cta-variant": "default",
                            ...(isWhatsapp ? { "data-whatsapp": "1" } : {}),
                          }
                        : {};
                    return (
                      <li key={link.label}>
                        {isExternal ? (
                          <a
                            href={link.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={cls}
                            {...ctaAttrs}
                          >
                            {link.label}
                          </a>
                        ) : (
                          <Link href={link.href} className={cls} {...ctaAttrs}>
                            {link.label}
                          </Link>
                        )}
                      </li>
                    );
                  })}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-rule-plum pt-6 sm:flex-row sm:items-baseline sm:justify-between">
          <span className="font-display text-body-l font-semibold tracking-[-0.03em]">
            {site.wordmark}{" "}
            <span
              lang="hi"
              className="deva ml-3 text-body-s font-medium text-on-plum-dim"
            >
              बिज़ेक्स4यू
            </span>
          </span>
          <Eyebrow as="span" tone="plum" muted>© {new Date().getFullYear()} {site.wordmark} · {site.address.line1},{" "}
            {site.address.line2} ·{" "}
            <Link href="/llms.txt" className="link-underline hover:text-on-plum">
              llms.txt
            </Link>
          </Eyebrow>
          <span className="sr-only">Independent Indian media network.</span>
        </div>
      </div>
    </footer>
  );
}
