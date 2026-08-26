/* The site-wide card. Every route without its own opengraph-image
   inherits this one, which is most of them. */
import { ogCard, size, contentType } from "@/lib/ogCard";

export const alt =
  "Bizex4U — brand activation and outdoor advertising across 40+ Indian cities";
export { size, contentType };

export default async function Image() {
  return ogCard({
    eyebrow: "Brand activation across India",
    title: "The brands India trusts are the ones it",
    accent: "keeps seeing.",
    footnote: "Outdoor · Transit · Retail · Barter",
  });
}
