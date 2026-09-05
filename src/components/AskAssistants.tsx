"use client";

import { usePathname } from "next/navigation";
import { site } from "@/lib/site";
import { externalAnchorProps } from "@/lib/href";

/**
 * Deep links into Claude, Gemini, Perplexity and ChatGPT, pointed at
 * this page and /llms.txt. Icons live in /public/icons and paint via
 * CSS mask so the paths are not inlined on every page (they were ~4.5 KB
 * in the footer alone, doubled wherever a page also rendered this).
 */

type Tone = "plum" | "sand";

const assistants = [
  {
    id: "claude",
    name: "Claude",
    href: (q: string) => `https://claude.ai/new?q=${q}`,
  },
  {
    id: "gemini",
    name: "Gemini",
    href: (q: string) => `https://www.google.com/search?udm=50&q=${q}`,
  },
  {
    id: "perplexity",
    name: "Perplexity",
    href: (q: string) => `https://www.perplexity.ai/search?q=${q}`,
  },
  {
    id: "chatgpt",
    name: "ChatGPT",
    href: (q: string) => `https://chatgpt.com/?hints=search&q=${q}`,
  },
] as const;

function askPrompt(pageUrl: string) {
  return [
    `Read ${site.url}/llms.txt and this page: ${pageUrl}`,
    `Bizex4U is an independent OOH media planning and buying firm in India. It does not own hoardings, screens or airtime.`,
    `Using only those sources, explain this page and the firm. Cite the site.`,
    `Do not invent rates, inventory, site lists, or campaign results — those are withheld on purpose.`,
  ].join(" ");
}

export default function AskAssistants({
  tone = "plum",
  variant = "footer",
}: {
  tone?: Tone;
  variant?: "footer" | "page";
}) {
  const pathname = usePathname() || "/";
  const q = encodeURIComponent(askPrompt(`${site.url}${pathname}`));

  return (
    <div data-ask-assistants={variant} data-tone={tone}>
      <p className="eyebrow">
        {variant === "page" ? "Ask this page" : "Ask"}
      </p>
      <ul aria-label="Ask an assistant about this page">
        {assistants.map((a) => (
          <li key={a.id}>
            <a
              {...externalAnchorProps(a.href(q))}
              aria-label={`Ask ${a.name} about this page`}
              title={`Ask ${a.name}`}
            >
              <span className={`ask-icon ask-icon-${a.id}`} aria-hidden />
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
