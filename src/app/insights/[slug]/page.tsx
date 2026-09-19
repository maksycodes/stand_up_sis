import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PageHero } from "@/components/ui/PageHero";
import { Section } from "@/components/ui/Section";
import { pageMetadata } from "@/lib/page-metadata";
import { insights } from "@/content/insights";

export function generateStaticParams() {
  return insights.map((i) => ({ slug: i.slug }));
}

export async function generateMetadata({ params }: PageProps<"/insights/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const article = insights.find((i) => i.slug === slug);
  if (!article) return pageMetadata({ title: "Insight", description: "Stand Up Sis insight.", path: `/insights/${slug}` });
  return pageMetadata({ title: article.title, description: article.summary, path: `/insights/${article.slug}` });
}

export default async function InsightDetailPage({ params }: PageProps<"/insights/[slug]">) {
  const { slug } = await params;
  const article = insights.find((i) => i.slug === slug);
  if (!article) notFound();

  return (
    <>
      <PageHero
        eyebrow={article.category}
        title={article.title}
        description={`${new Date(article.publishedAt).toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" })} · ${article.readingMinutes} min read`}
      />
      <Section width="narrow">
        <article className="prose space-y-5 text-lg leading-relaxed text-ink-soft">
          {article.body.map((paragraph, i) => (
            <p key={i}>{paragraph}</p>
          ))}
        </article>
      </Section>
    </>
  );
}
