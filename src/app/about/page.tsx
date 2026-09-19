import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { EmptyState } from "@/components/ui/EmptyState";
import { Button } from "@/components/ui/Button";
import { pageMetadata } from "@/lib/page-metadata";

export const metadata: Metadata = pageMetadata({
  title: "About Stand Up Sis",
  description:
    "Stand Up Sis is a UK Community Interest Company built for women's economic independence — our mission, vision, approach and values.",
  path: "/about",
});

const values = [
  {
    title: "Ambition, not charity",
    description: "We back capability. Stand Up Sis is infrastructure for women who are already building — not a rescue mission.",
  },
  {
    title: "Access is infrastructure",
    description: "Networks, knowledge and funding routes should be built and shared, not gatekept. That's the gap we exist to close.",
  },
  {
    title: "Community first",
    description: "Growth happens faster surrounded by people who understand exactly what you're building.",
  },
  {
    title: "Credible and warm",
    description: "Taken seriously by funders, councils and corporate partners — genuinely useful to the women we serve. Both, not one or the other.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Stand Up Sis"
        title="Building the access ambition deserves."
        description="Stand Up Sis CIC exists to support women in building stronger businesses, careers, confidence, networks and economic independence."
      />

      <Section>
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <h2 className="font-display text-2xl font-semibold sm:text-3xl">Our mission</h2>
            <p className="mt-4 text-lg leading-relaxed text-ink-soft">
              To close the gap between ambition and access — giving women the practical tools, honest guidance and
              genuine connections to build stronger businesses, careers and networks, on their own terms.
            </p>
          </div>
          <div>
            <h2 className="font-display text-2xl font-semibold sm:text-3xl">Our vision</h2>
            <p className="mt-4 text-lg leading-relaxed text-ink-soft">
              A strong, connected community of ambitious women who can access practical support, opportunities,
              mentorship, education and each other — wherever they&apos;re starting from.
            </p>
          </div>
        </div>
      </Section>

      <Section tone="deep">
        <div className="max-w-3xl">
          <h2 className="font-display text-2xl font-semibold sm:text-3xl">Why Stand Up Sis exists</h2>
          <div className="mt-5 space-y-4 text-lg leading-relaxed text-ink-soft">
            <p>
              Too many capable women hit the same barriers on the way to building a business or a career: to
              funding, to the right introductions, to affordable space, to straight advice from someone who&apos;s
              actually done it. None of that reflects ability. It reflects access.
            </p>
            <p>
              Stand Up Sis was founded to build that access directly — starting with community, before we have a
              permanent physical home, and growing into practical programmes as they&apos;re ready.
            </p>
          </div>
        </div>
      </Section>

      <Section>
        <div className="max-w-3xl">
          <h2 className="font-display text-2xl font-semibold sm:text-3xl">Our approach</h2>
          <div className="mt-5 space-y-4 text-lg leading-relaxed text-ink-soft">
            <p>
              Our model is still developing, deliberately. Rather than launch with a fixed programme, we&apos;re building
              Stand Up Sis around what the community actually needs — starting with mentorship, workshops and
              networking, and expanding into funding support, pitch preparation and eventually workspace access
              through partnerships.
            </p>
            <p>
              We work in partnership with councils, funders, corporates and other organisations supporting women and
              entrepreneurs, rather than trying to do everything alone.
            </p>
          </div>
        </div>
      </Section>

      <Section tone="deep">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <h2 className="font-display text-2xl font-semibold sm:text-3xl">Our legal status</h2>
          <div className="space-y-4 text-lg leading-relaxed text-ink-soft">
            <p>
              Stand Up Sis is structured as a Community Interest Company (CIC) — a legal form for UK social
              enterprises that locks our activities and any surplus to our community purpose, rather than private
              profit.
            </p>
            <p>
              Stand Up Sis operates independently from The Small Studios, a separate commercial venture. The two
              remain distinct organisations, with their own identity, community and data.
            </p>
          </div>
        </div>
      </Section>

      <Section>
        <div className="max-w-2xl">
          <h2 className="font-display text-2xl font-semibold sm:text-3xl">Our values</h2>
        </div>
        <div className="mt-10 grid gap-5 sm:grid-cols-2">
          {values.map((value) => (
            <Card key={value.title}>
              <h3 className="font-display text-lg font-semibold text-ink">{value.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-soft">{value.description}</p>
            </Card>
          ))}
        </div>
      </Section>

      <Section tone="deep">
        <div className="max-w-2xl">
          <h2 className="font-display text-2xl font-semibold sm:text-3xl">Founders &amp; team</h2>
          <p className="mt-4 text-lg text-ink-soft">The people behind Stand Up Sis.</p>
        </div>
        <div className="mt-10">
          <EmptyState
            title="Team profiles are coming soon"
            description="We're introducing the people behind Stand Up Sis here shortly. In the meantime, get in touch if you'd like to know more about who's building this."
            filled={0}
          >
            <Button href="/contact" variant="primary">
              Get in touch
            </Button>
          </EmptyState>
        </div>
      </Section>
    </>
  );
}
