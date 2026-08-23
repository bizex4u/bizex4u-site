import Link from "next/link";
import { footerNav, site } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="border-t border-rule">
      <div className="shell py-16">
        <div className="grid grid-cols-2 gap-x-6 gap-y-12 md:grid-cols-4">
          {footerNav.map((col) => (
            <div key={col.heading}>
              <h2 className="eyebrow">{col.heading}</h2>
              <ul className="mt-5 space-y-2.5">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="link-underline text-[0.9375rem] text-ink-60 hover:text-ink"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 flex flex-col gap-4 border-t border-rule pt-6 sm:flex-row sm:items-baseline sm:justify-between">
          <span className="font-display text-[1.125rem] font-semibold tracking-[-0.04em]">
            {site.wordmark}
          </span>
          <span className="font-mono text-meta uppercase tracking-[0.08em] text-ink-30">
            © {new Date().getFullYear()} {site.wordmark} — Independent since{" "}
            {site.founded}
          </span>
        </div>
      </div>
    </footer>
  );
}
