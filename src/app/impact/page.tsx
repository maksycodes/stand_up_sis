import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { DotRing } from "@/components/ui/DotRing";
import { Button } from "@/components/ui/Button";
import { pageMetadata } from "@/lib/page-metadata";

export const metadata: Metadata = pageMetadata({
  title: "Impact",
  description:
    "Stand Up Sis is building the systems to measure real impact — women supported, businesses grown, funding accessed and more. Our impact journey is beginning.",
  path: "/impact",
});

const metrics = [
  "Women supported",
  "Businesses started or grown",
  "Funding accessed by our community",
  "Mentors actively involved",
  "Workshops and programmes delivered",
  "Jobs created",
  "Participant-reported outcomes",
];

export default function ImpactPage() {
  return (
    <>
      <PageHero
        eyebrow="Impact"
        title="Our impact journey is beginning."
        description="We haven't run our first programme yet, so we won't pretend to have results. Here's what we're building to measure, and why it matters to funders, partners and the women we serve."
      />

      <Section>
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
          <div className="mx-auto">
            <DotRing size={260} filled={1} />
          </div>
          <div>
            <h2 className="font-display text-2xl font-semibold sm:text-3xl">Why we&apos;re building this now</h2>
            <div className="mt-5 space-y-4 text-lg leading-relaxed text-ink-soft">
              <p>
                Credible impact measurement matters to us as much as it matters to the councils, funders and
                partners we want to work with. Rather than publish figures before we have them, we&apos;re building the
                systems to track outcomes honestly from our very first programme onward.
              </p>
              <p>
                As Stand Up Sis runs its first workshops, mentorship relationships and events, this page will begin
                to reflect real, verified numbers — not projections.
              </p>
            </div>
          </div>
        </div>
      </Section>

      <Section tone="deep">
        <div className="max-w-2xl">
          <h2 className="font-display text-2xl font-semibold sm:text-3xl">What we intend to measure</h2>
          <p className="mt-4 text-lg text-ink-soft">
            The metrics we&apos;re building our data collection around from day one.
          </p>
        </div>
        <ul className="mt-10 divide-y divide-ink/10 rounded-2xl border border-ink/8 bg-paper">
          {metrics.map((metric) => (
            <li key={metric} className="flex items-center gap-3 px-6 py-4">
              <span className="h-2 w-2 shrink-0 rounded-full bg-berry" aria-hidden="true" />
              <span className="text-sm font-semibold text-ink">{metric}</span>
            </li>
          ))}
        </ul>
      </Section>

      <Section>
        <Card className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-xl font-semibold text-ink">Want to help shape how we measure impact?</h2>
          <p className="mt-3 text-sm leading-relaxed text-ink-soft">
            If you&apos;re a funder, council or partner with a view on outcome measurement, we&apos;d welcome the conversation.
          </p>
          <div className="mt-5 flex justify-center">
            <Button href="/partnerships">Talk to us</Button>
          </div>
        </Card>
      </Section>
    </>
  );
}
