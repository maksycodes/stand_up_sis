import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { Section } from "@/components/ui/Section";
import { Badge } from "@/components/ui/Card";
import { EmptyState } from "@/components/ui/EmptyState";
import { Button } from "@/components/ui/Button";
import { pageMetadata } from "@/lib/page-metadata";
import { insightCategories, insights } from "@/content/insights";

export const metadata: Metadata = pageMetadata({
  title: "Insights & Resources",
  description:
    "Business guides, funding information, founder stories and career resources for women building businesses and careers in the UK.",
  path: "/insights",
});

export default function InsightsPage() {
  return (
    <>
      <PageHero
        eyebrow="Insights & Resources"
        title="Practical knowledge, as we build it."
        description="Business guides, funding information, founder stories and career resources — a resource hub that grows alongside the community."
        variant="constellation"
      />

      <Section>
        <div className="flex flex-wrap gap-2">
          {insightCategories.map((category) => (
            <Badge key={category} tone="ink">
              {category}
            </Badge>
          ))}
        </div>

        <div className="mt-10">
          {insights.length === 0 && (
            <EmptyState
              title="Our first articles are on the way"
              description="We're writing our first guides on funding, business basics and career development. Join the community and we'll let you know as soon as they're live."
            >
              <Button href="/community" variant="primary">
                Join the Community
              </Button>
            </EmptyState>
          )}
        </div>
      </Section>
    </>
  );
}
