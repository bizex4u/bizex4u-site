/* Per-term cards.

   The glossary pages are the ones most likely to be shared without
   being read — somebody pastes "what is a BQS" into a group chat to
   settle an argument. The shared root card would put the company
   name in front of that, which answers nothing. The term does. */
import { notFound } from "next/navigation";
import { terms, termBySlug } from "@/lib/glossary";
import { ogCard, size, contentType } from "@/lib/ogCard";

export const alt = "A term from the Indian outdoor advertising glossary";
export { size, contentType };
export const revalidate = 604800;

export function generateStaticParams() {
  return terms.map((t) => ({ slug: t.slug }));
}

export default async function Image({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const t = termBySlug(slug);
  if (!t) notFound();

  return ogCard({
    eyebrow: `Glossary — ${t.category}`,
    title: t.term,
    accent: "",
    footnote: t.alsoCalled?.length
      ? `Also called ${t.alsoCalled.slice(0, 2).join(" · ")}`
      : "Indian outdoor advertising, defined",
  });
}
