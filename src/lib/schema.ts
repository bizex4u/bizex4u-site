import { additionalMarkets, cities } from "./cities";
import { capabilities, site } from "./site";

/**
 * The entity, declared once.
 *
 * WHY THIS EXISTS. The homepage carried no structured data at all — the
 * Organization node lived on /contact, which is the page least likely to
 * be the one an answer engine lands on. A crawler resolving "who is
 * Bizex4U" from the root URL found prose and nothing machine-readable.
 * For classic SEO that is a missed rich result. For GEO it is worse: an
 * answer engine that cannot resolve the entity will describe the company
 * from whatever it can infer, or decline to name it at all.
 *
 * TYPE. LocalBusiness (with ProfessionalService) rather than a bare
 * Organization: there is a Kanpur desk, a service area, and a phone.
 * Schema.org has no MarketingAgency type. ProfessionalService is the
 * LocalBusiness subtype for an agency. @id stays /#organization so
 * every page that already points here does not have to move.
 *
 * NO foundingDate. A schema field is still a published claim, and this
 * site does not publish a tenure year. NO Person/founder node until
 * name, title, bio and photo are real.
 *
 * `sameAs` is the company LinkedIn only, until other corroborating
 * URLs exist. A wrong one merges this entity with somebody else's.
 */

export const organisationId = `${site.url}/#organization`;
const websiteId = `${site.url}/#website`;

/* Every market, named. areaServed is how an answer engine connects
   "outdoor advertising in Indore" to this entity rather than inferring
   it from prose — and unlike a page of city links, it survives being
   chunked, because each name sits in a field rather than in a sentence. */
const areaServed = [
  ...cities.map((c) => c.name),
  ...additionalMarkets,
].map((name) => ({ "@type": "City", name, addressCountry: "IN" }));

export const organisation = {
  "@type": ["LocalBusiness", "ProfessionalService"],
  "@id": organisationId,
  name: site.name,
  legalName: site.legalName,
  url: site.url,
  description: site.description,
  email: site.email,
  telephone: site.phone.e164,
  logo: {
    "@type": "ImageObject",
    url: `${site.url}/logo.png`,
    contentUrl: `${site.url}/logo.png`,
    width: 512,
    height: 512,
  },
  address: {
    "@type": "PostalAddress",
    streetAddress: site.address.line1,
    addressLocality: "Kanpur",
    addressRegion: "Uttar Pradesh",
    addressCountry: "IN",
  },
  contactPoint: {
    "@type": "ContactPoint",
    telephone: site.phone.e164,
    email: site.email,
    contactType: "sales",
    availableLanguage: ["English", "Hindi"],
  },
  areaServed,
  /* What this entity is authoritative on. Uses the market's own
     vocabulary — hoarding, unipole, bus queue shelter — because that is
     what an Indian buyer types and what an answer engine matches. */
  knowsAbout: [
    "Outdoor advertising in India",
    "Hoarding advertising",
    "Unipole and gantry media",
    "Transit and bus queue shelter advertising",
    "Digital out-of-home (DOOH)",
    "Retail and mall media",
    "Cinema, radio and print advertising",
    "Media barter and reciprocal trade agreements",
    "Media planning and buying",
  ],
  makesOffer: capabilities.map((c) => ({
    "@type": "Offer",
    itemOffered: { "@type": "Service", name: c.title, description: c.short },
    url: `${site.url}${c.href}`,
  })),
  sameAs: [...site.profiles],
};

export const website = {
  "@type": "WebSite",
  "@id": websiteId,
  url: site.url,
  name: site.name,
  description: site.description,
  publisher: { "@id": organisationId },
  inLanguage: "en-IN",
  dateModified: site.contentReviewed,
};

/**
 * `speakable` — which sentences a voice assistant should read aloud.
 *
 * Google's own documentation still calls this limited-availability, so
 * it is not a ranking lever and should not be sold as one. It is here
 * for a narrower reason: it declares WHICH part of the page is the
 * answer. Without it, an extractor picks by position and the thing it
 * reads out is whatever happens to sit at the top of the DOM.
 *
 * Both selectors are class-based rather than heading-based so they
 * survive a layout change. `.speakable-answer` is applied to the hero
 * lede — the one paragraph on every page written to stand alone.
 */
export const speakable = {
  "@type": "SpeakableSpecification",
  cssSelector: ["h1", ".speakable-answer"],
};

/**
 * One graph rather than a pile of separate script tags.
 *
 * `@graph` lets the nodes reference each other by `@id`, so a city page's
 * Service node can say "provider: the organization declared at the root"
 * instead of restating the whole company on every one of thirty-four
 * pages. Repeating it is how the name, phone and address drift apart.
 */
export const rootGraph = {
  "@context": "https://schema.org",
  "@graph": [organisation, website],
};
