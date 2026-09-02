import Link from "next/link";
import { footerNav, site, telHref } from "@/lib/site";
import { externalAnchorProps, isExternalHref } from "@/lib/href";
import AskAssistants from "@/components/AskAssistants";
import BriefButton from "@/components/BriefButton";
import { Eyebrow } from "@/components/UI";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-plum text-on-plum">
      <div className="shell relative z-10 pt-(--spacing-band) pb-10">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_1fr]">
          <div>
            <p className="font-display text-h1 text-balance">
              {site.tagline}
            </p>
            <p className="mt-5 max-w-[42ch] text-body text-on-plum-dim">
              Tell us the market and the objective. We will tell you whether
              we are the right people for the buy — including when we are not.
            </p>
            <div className="mt-8">
              <BriefButton context="Footer" location="footer" size="lg">
                Request a plan
              </BriefButton>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-x-6 gap-y-8 sm:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4">
            {footerNav.map((col) => (
              <div key={col.heading}>
                <Eyebrow as="h2" tone="plum" muted>
                  {col.heading}
                </Eyebrow>
                <ul className="mt-4 space-y-1">
                  {col.links.map((link) => {
                    const cls =
                      "link-underline -my-1.5 inline-flex min-h-10 items-center py-1.5 text-body-s text-balance text-on-plum-dim hover:text-on-plum";
                    const isExternal =
                      isExternalHref(link.href) ||
                      ("external" in link && link.external === true);
                    const isBrief = link.label === "Request a plan";
                    const ctaAttrs = isBrief
                      ? {
                          "data-cta": "1",
                          "data-cta-location": "footer",
                          "data-cta-label": link.label,
                          "data-cta-variant": "default",
                        }
                      : {};
                    return (
                      <li key={link.label}>
                        {isExternal ? (
                          <a
                            {...externalAnchorProps(link.href)}
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

        <div className="mt-14 flex flex-col gap-4 border-t border-rule-plum pt-6 sm:flex-row sm:items-center sm:justify-between">
          <span className="text-body-s font-semibold tracking-[0.08em] uppercase">
            {site.wordmark}
          </span>
          <Eyebrow as="span" tone="plum" muted>
            © {new Date().getFullYear()} {site.wordmark} · {site.address.line1},{" "}
            {site.address.line2}
            {" · "}
            <a
              href={telHref(site.phone.e164)}
              className="text-on-plum-dim hover:text-on-plum"
            >
              {site.phone.display}
            </a>
          </Eyebrow>
          <AskAssistants tone="plum" variant="footer" />
          <span className="sr-only">
            Independent OOH planning and buying. We do not own inventory.
          </span>
        </div>
      </div>
    </footer>
  );
}
