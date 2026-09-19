import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { Section } from "@/components/ui/Section";
import { LegalNotice } from "@/components/legal/LegalNotice";
import { pageMetadata } from "@/lib/page-metadata";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = pageMetadata({
  title: "Accessibility Statement",
  description: "Stand Up Sis CIC's commitment to an accessible website, and how to report issues.",
  path: "/accessibility",
});

export default function AccessibilityPage() {
  return (
    <>
      <PageHero eyebrow="Legal" title="Accessibility Statement" />
      <Section width="narrow">
        <div className="space-y-8">
          <LegalNotice />

          <div className="prose space-y-4 text-ink-soft">
            <h2 className="font-display text-xl font-semibold text-ink">Our commitment</h2>
            <p>
              We want this website to be usable by everyone, including people using assistive technology. We&apos;re
              designing and building it with the Web Content Accessibility Guidelines (WCAG) 2.1 AA as our target
              standard.
            </p>

            <h2 className="font-display text-xl font-semibold text-ink">What we&apos;ve built in</h2>
            <ul>
              <li>Semantic HTML and landmark regions throughout</li>
              <li>A visible &quot;skip to main content&quot; link</li>
              <li>Clear, high-contrast focus states on every interactive element</li>
              <li>Keyboard-accessible navigation, including the mobile menu</li>
              <li>Support for reduced-motion preferences</li>
              <li>Colour combinations checked against WCAG contrast requirements</li>
            </ul>

            <h2 className="font-display text-xl font-semibold text-ink">Known limitations</h2>
            <p>
              This site is in active development. As new pages and features are added, we&apos;ll test them and note any
              limitations here.
            </p>

            <h2 className="font-display text-xl font-semibold text-ink">Feedback</h2>
            <p>
              If you experience any difficulty using this site, please let us know at{" "}
              <a href={`mailto:${siteConfig.contactEmail}`} className="font-semibold text-deep underline">
                {siteConfig.contactEmail}
              </a>{" "}
              — we&apos;ll do our best to address it.
            </p>
          </div>
        </div>
      </Section>
    </>
  );
}
