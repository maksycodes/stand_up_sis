import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/ui/PageHero";
import { Section } from "@/components/ui/Section";
import { Card, Badge } from "@/components/ui/Card";
import { EmptyState } from "@/components/ui/EmptyState";
import { Button } from "@/components/ui/Button";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { pageMetadata } from "@/lib/page-metadata";
import { programmeCategories, programmes } from "@/content/programmes";

export const metadata: Metadata = pageMetadata({
  title: "Programmes",
  description:
    "Business workshops, mentorship, funding support, career development and community programmes for women — growing as Stand Up Sis grows.",
  path: "/programmes",
});

const categoryDescriptions: Record<string, string> = {
  "Business & Entrepreneurship": "Practical workshops and training to build a business that holds up.",
  "Funding & Pitching": "Understanding funding routes, and preparing a pitch that lands.",
  "Mentorship": "One-to-one guidance from women who've built what you're building.",
  "Career & Leadership": "Confidence, leadership and career development programmes.",
  "Community & Networking": "Rooms full of ambitious women, and the events that bring them together.",
  "Workshops & Events": "Skills sessions, panels and gatherings — in person and online.",
  "Wellness": "Because building something ambitious shouldn't cost you everything else.",
};

export default function ProgrammesPage() {
  return (
    <>
      <PageHero
        eyebrow="Programmes"
        title="A programme that's designed to grow."
        description="We're building Stand Up Sis around what the community actually needs. Here's the shape of what's coming, category by category."
        variant="constellation"
      />

      <Section>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {programmeCategories.map((category, i) => {
            const items = programmes.filter((p) => p.category === category);
            return (
              <RevealOnScroll key={category} delay={i * 50}>
                <Card className="flex h-full flex-col gap-3">
                  <Badge>{category}</Badge>
                  <p className="text-sm leading-relaxed text-ink-soft">{categoryDescriptions[category]}</p>
                  {items.length > 0 ? (
                    <ul className="mt-2 space-y-2">
                      {items.map((p) => (
                        <li key={p.slug}>
                          <Link href={`/programmes/${p.slug}`} className="text-sm font-semibold text-deep hover:text-ink">
                            {p.title} →
                          </Link>
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <p className="mt-2 text-xs font-medium uppercase tracking-wide text-ink-soft">Coming soon</p>
                  )}
                </Card>
              </RevealOnScroll>
            );
          })}
        </div>
      </Section>

      <Section tone="ink">
        <div className="mx-auto max-w-2xl text-center">
          <p className="font-display text-2xl font-semibold italic leading-snug text-pink sm:text-3xl">
            &ldquo;Built with the community, not for it.&rdquo;
          </p>
          <p className="mt-4 text-sm text-paper/70">
            Every category above starts from the same question: what do our members actually need next.
          </p>
        </div>
      </Section>

      {programmes.length === 0 && (
        <Section tone="deep">
          <EmptyState
            title="Our first programmes are in development"
            description="We're building our first workshops and mentorship cohorts now. Join the community to be the first to hear when applications open — and tell us what support you're looking for."
          >
            <Button href="/community" variant="primary">
              Join the Community
            </Button>
          </EmptyState>
        </Section>
      )}
    </>
  );
}
