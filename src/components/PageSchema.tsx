import { organisationId, speakable } from "@/lib/schema";
import { site } from "@/lib/site";

/**
 * The per-page node, in one place.
 *
 * WHY A COMPONENT AND NOT A COPY ON EACH PAGE. The root graph in the
 * layout declares the LocalBusiness and the WebSite, and it renders on
 * every route — which is correct for those two, and wrong for anything
 * page-specific. A WebPage node whose `url` is the barter page cannot
 * live in a graph that also renders on /contact.
 *
 * So each page needs its own node, and each page needing its own node
 * is exactly the condition under which six near-identical script tags
 * appear and then drift. This is the one copy.
 *
 * WHAT IT ADDS OVER THE TITLE TAG:
 *
 *  - `isPartOf` and `about` tie the page to the WebSite and the
 *    Organization / LocalBusiness by @id, so an answer engine resolves "who publishes
 *    this" without re-reading the company off the page.
 *  - `dateModified` gives the freshness signal these pages otherwise
 *    have nowhere to state. See site.contentReviewed.
 *  - `speakable` names WHICH sentences are the answer — the h1 and the
 *    single `.speakable-answer` paragraph in the hero — rather than
 *    letting an extractor take whatever sits highest in the DOM.
 *
 * `primaryTopic` is optional and takes a schema.org node; pass one
 * where the page is genuinely about a thing (a Service, an Offer) and
 * leave it off where the page is about the company.
 */
export default function PageSchema({
  path,
  name,
  description,
  type = "WebPage",
}: {
  /* Leading slash, no trailing slash. Resolved against site.url so the
     absolute URL cannot drift from the canonical. */
  path: string;
  name: string;
  description: string;
  type?: "WebPage" | "AboutPage" | "CollectionPage";
}) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": type,
          "@id": `${site.url}${path}#webpage`,
          url: `${site.url}${path}`,
          name,
          description,
          isPartOf: { "@id": `${site.url}/#website` },
          about: { "@id": organisationId },
          inLanguage: "en-IN",
          dateModified: site.contentReviewed,
          speakable,
        }),
      }}
    />
  );
}
