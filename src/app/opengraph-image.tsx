/* The site-wide card. Every route without its own opengraph-image
   inherits this one, which is most of them. */
import { ogCard, size, contentType } from "@/lib/ogCard";

export const alt =
  "Bizex4U — barter advertising in India for outdoor, newspaper, radio, cinema and OTT";
export { size, contentType };
export const revalidate = 604800;

export default async function Image() {
  return ogCard({
    eyebrow: "Barter advertising in India",
    title: "Trade goods for",
    accent: "media.",
    footnote: "Outdoor, newspaper, FM radio, cinema and OTT",
  });
}
