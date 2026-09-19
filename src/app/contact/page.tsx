import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { ContactForm } from "@/components/forms/ContactForm";
import { pageMetadata } from "@/lib/page-metadata";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = pageMetadata({
  title: "Contact",
  description: "Get in touch with Stand Up Sis CIC.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <>
      <PageHero eyebrow="Contact" title="Get in touch." description="Questions, ideas or just want to say hello — we'd love to hear from you." />

      <Section>
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <Card className="h-fit space-y-5">
            <div>
              <h2 className="font-display text-lg font-semibold text-ink">Email</h2>
              <a href={`mailto:${siteConfig.contactEmail}`} className="text-sm font-medium text-deep hover:text-ink">
                {siteConfig.contactEmail}
              </a>
            </div>
            <div>
              <h2 className="font-display text-lg font-semibold text-ink">Follow along</h2>
              <p className="mt-1 text-sm text-ink-soft">Social links coming soon.</p>
            </div>
          </Card>
          <ContactForm />
        </div>
      </Section>
    </>
  );
}
