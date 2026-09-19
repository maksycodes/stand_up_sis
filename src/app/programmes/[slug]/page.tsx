import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PageHero } from "@/components/ui/PageHero";
import { Section } from "@/components/ui/Section";
import { Card, Badge } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { pageMetadata } from "@/lib/page-metadata";
import { programmes } from "@/content/programmes";

export function generateStaticParams() {
  return programmes.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: PageProps<"/programmes/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const programme = programmes.find((p) => p.slug === slug);
  if (!programme) return pageMetadata({ title: "Programme", description: "Stand Up Sis programme.", path: `/programmes/${slug}` });
  return pageMetadata({ title: programme.title, description: programme.summary, path: `/programmes/${programme.slug}` });
}

export default async function ProgrammeDetailPage({ params }: PageProps<"/programmes/[slug]">) {
  const { slug } = await params;
  const programme = programmes.find((p) => p.slug === slug);
  if (!programme) notFound();

  const facts = [
    { label: "Category", value: programme.category },
    { label: "Location", value: programme.location },
    { label: "Dates", value: programme.dates },
    { label: "Eligibility", value: programme.eligibility },
    { label: "Availability", value: programme.availability },
  ].filter((f) => f.value);

  return (
    <>
      <PageHero eyebrow={programme.category} title={programme.title} description={programme.summary} />
      <Section>
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="prose-lg space-y-4 text-lg leading-relaxed text-ink-soft">
            <p>{programme.description}</p>
          </div>
          <Card className="h-fit space-y-5">
            <Badge>{programme.availability ?? "Details to follow"}</Badge>
            <dl className="space-y-3">
              {facts.map((fact) => (
                <div key={fact.label}>
                  <dt className="text-xs font-semibold uppercase tracking-wide text-ink-soft">{fact.label}</dt>
                  <dd className="text-sm font-medium text-ink">{fact.value}</dd>
                </div>
              ))}
            </dl>
            <Button href={programme.ctaHref} className="w-full">
              {programme.ctaLabel}
            </Button>
          </Card>
        </div>
      </Section>
    </>
  );
}
