/* The site-wide card. Every route without its own opengraph-image
   inherits this one, which is most of them. */
import { ogCard, size, contentType } from "@/lib/ogCard";

export const alt =
  "Bizex4U — independent OOH planning and buying across 39 Indian markets";
export { size, contentType };
export const revalidate = 604800;

export default async function Image() {
  return ogCard({
    eyebrow: "Independent OOH planning and buying",
    title: "We help brands make better",
    accent: "OOH decisions.",
    footnote: "We do not own inventory · We plan across owners",
  });
}
