import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { CommunityForm } from "@/components/forms/CommunityForm";
import { pageMetadata } from "@/lib/page-metadata";

export const metadata: Metadata = pageMetadata({
  title: "Join the Community",
  description:
    "Register your interest in the Stand Up Sis community — mentorship, events, programmes and a network of ambitious women, from the ground up.",
  path: "/community",
});

const whatYouGet = [
  {
    title: "First access",
    description: "Be first to hear when programmes, workshops and events open for applications.",
  },
  {
    title: "A genuine network",
    description: "Connect with other women building businesses and careers, not just a mailing list.",
  },
  {
    title: "A voice in what we build",
    description: "Tell us what support you're looking for — it shapes what we build next.",
  },
];

export default function CommunityPage() {
  return (
    <>
      <PageHero
        eyebrow="Community"
        title="Start here. We're building this together."
        description="Stand Up Sis is a community before it's anything else. Join now and you shape what comes next — mentorship, workshops, funding guidance and the network around it."
      />

      <Section>
        <div className="grid gap-5 sm:grid-cols-3">
          {whatYouGet.map((item) => (
            <Card key={item.title}>
              <h3 className="font-display text-lg font-semibold text-ink">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-soft">{item.description}</p>
            </Card>
          ))}
        </div>
      </Section>

      <Section tone="deep">
        <div className="mx-auto max-w-2xl">
          <h2 className="font-display text-2xl font-semibold sm:text-3xl">Join the community</h2>
          <p className="mt-3 text-ink-soft">
            Tell us a bit about you, and we&apos;ll be in touch as relevant opportunities open up.
          </p>
          <div className="mt-8 rounded-3xl bg-paper p-6 sm:p-10">
            <CommunityForm />
          </div>
          <p className="mt-6 text-xs text-ink-soft">
            Looking ahead, we expect to introduce a membership option for women who want deeper involvement in the
            community, events and programmes without renting physical workspace. Nothing about membership is live
            yet — joining now costs nothing and simply registers your interest.
          </p>
        </div>
      </Section>
    </>
  );
}
