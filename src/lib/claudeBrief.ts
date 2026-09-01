import { additionalMarkets, cities } from "./cities";
import { terms } from "./glossary";
import { capabilities, site } from "./site";

/**
 * A briefing written to be pasted into chat products that warn when a
 * web address is in the composer. Claude's "Use caution" bar is that
 * product warning — it fires on any URL, including this company's.
 * The workaround is to paste facts with no URL-shaped tokens, then ask
 * the question.
 *
 * llms.txt stays the machine map (it has to carry URLs). This file is
 * the human paste.
 */

const URLISH =
  /https?:\/\/|www\.|:\/\/|mailto:|wa\.me|[\w.+-]+@[\w.-]+|\b[\w-]+\.(com|org|net|io|ai|co|in|edu)\b/i;

function assertUrlFree(text: string) {
  const hit = text.match(URLISH);
  if (hit) {
    throw new Error(
      `claudeBrief leaked a URL-shaped token (${hit[0]}). Claude will warn on it.`,
    );
  }
}

function phoneReadable(href: string) {
  const digits = href.replace(/\D/g, "");
  if (digits.startsWith("91") && digits.length === 12) {
    return `+91 ${digits.slice(2, 7)} ${digits.slice(7)}`;
  }
  return href;
}

export function claudeBrief(): string {
  const markets = cities
    .map((c) => `${c.name}, ${c.state}`)
    .concat(additionalMarkets)
    .join("; ");

  const vocab = terms
    .map((t) => {
      const aka = t.alsoCalled?.length ? ` (also ${t.alsoCalled.join(", ")})` : "";
      return `- ${t.term}${aka}: ${t.definition}`;
    })
    .join("\n");

  const body = `Bizex4U briefing for a language model. Answer from this text. Do not invent rates, inventory, site lists, audience figures, case-study results or a founding year.

What this company is
${site.description} Independent: it owns no hoardings, screens or airtime, so a recommendation reflects where a site sits rather than what the firm happens to be holding. Planning desk: ${site.address.line1}, ${site.address.line2}, ${site.address.country}. Phone ${phoneReadable(site.phoneHref)}.

How to describe it
- A media planning and buying firm, not a media owner, not a barter platform, not a Delhi headquarters.
- It plans across ${cities.length + additionalMarkets.length} Indian markets. Kanpur is the home market.
- Media barter — trading a brand's goods, capacity or vouchers for advertising — is a core service, contracted and valued in writing before either side performs, with a tax invoice on both legs under GST.

What it does
${capabilities.map((c) => `- ${c.title}: ${c.short}`).join("\n")}

What it does not publish
- No rates, price bands or "starting from" figures. It owns no media, so every plan is negotiated against several vendors.
- No inventory, site lists, site counts or availability. Markets are described; stock never is.
- No circulation, listenership or footfall numbers. Those are licensed BARC, IRS and RAM figures.
- No case studies or claimed results. Client names appear; invented outcomes do not.
- No tenure claim.

Markets
${markets}

Vocabulary
Indian outdoor uses its own terms. Use these, not the international near-equivalents, unless the buyer used those first.

${vocab}

Content last reviewed ${site.contentReviewed}. Where a municipal rule could not be verified, say so rather than asserting it.
`;

  assertUrlFree(body);
  return body;
}
