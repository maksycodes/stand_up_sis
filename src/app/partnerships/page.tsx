import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { Section } from "@/components/ui/Section";
import { Card, Badge } from "@/components/ui/Card";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { PartnershipForm } from "@/components/forms/PartnershipForm";
import { pageMetadata } from "@/lib/page-metadata";

export const metadata: Metadata = pageMetadata({
  title: "Partnerships",
  description:
    "Partner with Stand Up Sis — programme sponsorship, workshop delivery, mentorship, funding and community partnerships for councils, funders and businesses supporting women's economic development.",
  path: "/partnerships",
});

const collaborationAreas = [
  {
    title: "Programme sponsorship",
    description: "Back a workshop series, mentorship cohort or event programme.",
  },
  {
    title: "Workshop delivery",
    description: "Bring your expertise to deliver training directly to our community.",
  },
  {
    title: "Mentorship",
    description: "Offer your team's experience as mentors to women building businesses and careers.",
  },
  {
    title: "Funding",
    description: "Grant funding, sponsorship or investment that helps us grow our reach.",
  },
  {
    title: "Community partnerships",
    description: "Joint events, referral partnerships and shared initiatives with aligned organisations.",
  },
  {
    title: "Venue & workspace support",
    description: "Help us offer discounted or accessible workspace to eligible entrepreneurs, in time.",
  },
  {
    title: "Skills & professional expertise",
    description: "Pro bono or discounted professional services — legal, financial, marketing and beyond.",
  },
];

export default function PartnershipsPage() {
  return (
    <>
      <PageHero
        eyebrow="Partnerships"
        title="A serious organisation to build with."
        description="Stand Up Sis is built to work alongside councils, funders, corporates and community organisations who are serious about women's economic development. Here's where we can collaborate."
        variant="blob"
      />

      <Section>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {collaborationAreas.map((area, i) => (
            <RevealOnScroll key={area.title} delay={i * 45}>
              <Card className="h-full">
                <Badge tone="gold">{area.title}</Badge>
                <p className="mt-3 text-sm leading-relaxed text-ink-soft">{area.description}</p>
              </Card>
            </RevealOnScroll>
          ))}
        </div>
      </Section>

      <Section tone="ink">
        <div className="mx-auto max-w-2xl text-center">
          <p className="font-display text-2xl font-semibold italic leading-snug text-pink sm:text-3xl">
            &ldquo;Councils and funders don&apos;t need another pitch. They need a partner who delivers.&rdquo;
          </p>
          <p className="mt-4 text-sm text-paper/70">
            That&apos;s the standard we&apos;re building Stand Up Sis to meet, from our first partnership onward.
          </p>
        </div>
      </Section>

      <Section tone="deep">
        <div className="mx-auto max-w-2xl">
          <h2 className="font-display text-2xl font-semibold sm:text-3xl">Partner with us</h2>
          <p className="mt-3 text-ink-soft">
            Tell us about your organisation and what you&apos;re interested in — we&apos;ll follow up to explore how we can
            work together.
          </p>
          <div className="mt-8 rounded-3xl bg-paper p-6 sm:p-10">
            <PartnershipForm />
          </div>
        </div>
      </Section>
    </>
  );
}
