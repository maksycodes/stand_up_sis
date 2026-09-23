import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { MentorForm } from "@/components/forms/MentorForm";
import { pageMetadata } from "@/lib/page-metadata";

export const metadata: Metadata = pageMetadata({
  title: "Mentorship",
  description:
    "Business mentorship for women — find support from someone who's done it, or become a mentor and share what you know.",
  path: "/mentorship",
});

export default function MentorshipPage() {
  return (
    <>
      <PageHero
        eyebrow="Mentorship"
        title="Guidance from someone who's already done it."
        description="Mentorship sits at the centre of Stand Up Sis. We're building an ecosystem that connects women looking for guidance with women who have real experience to share."
        variant="constellation"
      />

      <Section>
        <div className="grid gap-6 lg:grid-cols-2">
          <RevealOnScroll>
            <Card className="flex h-full flex-col justify-between gap-6">
              <div>
                <h2 className="font-display text-2xl font-semibold text-ink">Find support</h2>
                <p className="mt-3 text-ink-soft">
                  Tell us what kind of guidance you&apos;re looking for. We&apos;re matching mentors to mentees as our mentor
                  network grows.
                </p>
              </div>
              <Button href="/community" size="lg">
                Join the Community
              </Button>
            </Card>
          </RevealOnScroll>
          <RevealOnScroll delay={80}>
            <Card className="flex h-full flex-col justify-between gap-6">
              <div>
                <h2 className="font-display text-2xl font-semibold text-ink">Become a mentor</h2>
                <p className="mt-3 text-ink-soft">
                  Share what you know with a woman building what you once built. Tell us about your experience and
                  availability below.
                </p>
              </div>
              <Button href="#become-a-mentor" size="lg" variant="secondary">
                Apply to mentor
              </Button>
            </Card>
          </RevealOnScroll>
        </div>
      </Section>

      <Section tone="deep" id="become-a-mentor">
        <div className="mx-auto max-w-2xl">
          <h2 className="font-display text-2xl font-semibold sm:text-3xl">Become a mentor</h2>
          <p className="mt-3 text-ink-soft">
            We&apos;re looking for women across every stage and industry — from first-time founders to seasoned
            operators. Tell us about yourself, and we&apos;ll be in touch as we build our mentorship programme.
          </p>
          <div className="mt-8 rounded-3xl bg-paper p-6 sm:p-10">
            <MentorForm />
          </div>
        </div>
      </Section>
    </>
  );
}
