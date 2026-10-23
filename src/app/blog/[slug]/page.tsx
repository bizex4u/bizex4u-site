import type { Metadata, ResolvingMetadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Band, Btn, Eyebrow, Rise } from "@/components/UI";
import BriefButton from "@/components/BriefButton";
import PageSchema from "@/components/PageSchema";
import { postBySlug, posts } from "@/lib/blog/posts";
import { routeMetadata } from "@/lib/metadata";

type Params = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata(
  { params }: Params,
  parent: ResolvingMetadata,
): Promise<Metadata> {
  const { slug } = await params;
  const post = postBySlug(slug);
  if (!post) return {};
  return routeMetadata(parent, {
    path: `/blog/${post.slug}`,
    title: post.title,
    description: post.description,
    ogType: "article",
  });
}

export default async function BlogPostPage({ params }: Params) {
  const { slug } = await params;
  const post = postBySlug(slug);
  if (!post) notFound();

  return (
    <>
      <section className="grain relative bg-sand pt-32 pb-14 md:pt-40 md:pb-20">
        <div className="shell relative z-10">
          <Rise>
            <p className="eyebrow text-on-sand-dim">
              <Link
                href={post.parent.href}
                className="link-underline -my-1.5 inline-flex min-h-6 items-center py-1.5"
              >
                {post.parent.label}
              </Link>
            </p>
          </Rise>
          <div className="grid-12 mt-6">
            <Rise delay={60} className="col-span-12 lg:col-span-8">
              <h1 className="font-display text-display-xl text-balance">
                {post.h1}
              </h1>
            </Rise>
          </div>
          <div className="grid-12 mt-8">
            <Rise delay={120} className="col-span-12 lg:col-span-8">
              <p className="speakable-answer max-w-[58ch] border-l-2 border-violet-deep pl-5 text-body-l text-on-sand md:pl-6">
                {post.lede}
              </p>
            </Rise>
          </div>
        </div>
      </section>

      {post.sections.map((section) => (
        <Band key={section.heading} tone="sand" grain>
          <div className="grid-12 gap-y-8">
            <Rise className="col-span-12 lg:col-span-4">
              <h2 className="max-w-[16ch] font-display text-h1 text-balance">
                {section.heading}
              </h2>
            </Rise>
            <div className="col-span-12 lg:col-span-7 lg:col-start-6">
              {section.paragraphs.map((para) => (
                <p key={para} className="mt-6 max-w-[62ch] text-on-sand-dim first:mt-0">
                  {para}
                </p>
              ))}
              {section.bullets?.length ? (
                <ul className="mt-6 border-t border-rule-sand">
                  {section.bullets.map((item) => (
                    <li
                      key={item}
                      className="flex gap-4 border-b border-rule-sand py-4"
                    >
                      <span aria-hidden className="text-violet-deep">
                        —
                      </span>
                      <span className="text-on-sand-dim">{item}</span>
                    </li>
                  ))}
                </ul>
              ) : null}
            </div>
          </div>
        </Band>
      ))}

      <Band tone="sand2" grain>
        <Rise>
          <Eyebrow tone="sand2">Related</Eyebrow>
          <ul className="mt-6 flex flex-col gap-3">
            {post.related.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="link-underline text-body">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </Rise>
      </Band>

      <Band tone="violet" grain>
        <div className="grid-12 items-end gap-y-8">
          <Rise className="col-span-12 lg:col-span-7">
            <Eyebrow tone="violet">Next</Eyebrow>
            <h2 className="mt-5 max-w-[18ch] font-display text-display-l text-balance">
              Tell us the market and the job.
            </h2>
          </Rise>
          <Rise delay={80} className="col-span-12 lg:col-span-4 lg:col-start-9">
            <div className="flex flex-wrap gap-3">
              <BriefButton variant="sand" size="lg" context={post.title}>
                Request a plan
              </BriefButton>
              <Btn href="/contact" variant="outline-sand" size="lg">
                Contact
              </Btn>
            </div>
          </Rise>
        </div>
      </Band>

      <PageSchema
        path={`/blog/${post.slug}`}
        name={post.title}
        description={post.description}
      />
    </>
  );
}
