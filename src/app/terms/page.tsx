import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { Section } from "@/components/ui/Section";
import { LegalNotice } from "@/components/legal/LegalNotice";
import { pageMetadata } from "@/lib/page-metadata";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = pageMetadata({
  title: "Terms of Use",
  description: "Terms of use for the Stand Up Sis CIC website.",
  path: "/terms",
});

export default function TermsPage() {
  return (
    <>
      <PageHero eyebrow="Legal" title="Terms of Use" />
      <Section width="narrow">
        <div className="space-y-8">
          <LegalNotice />

          <div className="prose space-y-4 text-ink-soft">
            <h2 className="font-display text-xl font-semibold text-ink">Acceptance of these terms</h2>
            <p>
              By using this website, you agree to these terms. If you don&apos;t agree, please don&apos;t use the site.
            </p>

            <h2 className="font-display text-xl font-semibold text-ink">Use of this website</h2>
            <p>
              This site is provided for information about Stand Up Sis CIC, and to let you register interest in our
              community, programmes, events and partnerships. Please use it lawfully and don&apos;t attempt to disrupt
              or misuse it.
            </p>

            <h2 className="font-display text-xl font-semibold text-ink">Intellectual property</h2>
            <p>
              The Stand Up Sis name, logo and site content are the property of Stand Up Sis CIC unless otherwise
              stated, and may not be reproduced without permission.
            </p>

            <h2 className="font-display text-xl font-semibold text-ink">Submissions</h2>
            <p>
              Information you submit through our forms is handled in line with our{" "}
              <a href="/privacy" className="font-semibold text-deep underline">
                Privacy Policy
              </a>
              . Submitting a form does not guarantee acceptance onto any programme, event or partnership.
            </p>

            <h2 className="font-display text-xl font-semibold text-ink">Liability</h2>
            <p>
              We try to keep this site accurate and available, but we make no guarantees and accept no liability
              for its use, to the fullest extent permitted by law.
            </p>

            <h2 className="font-display text-xl font-semibold text-ink">Governing law</h2>
            <p>These terms are governed by the law of England and Wales.</p>

            <h2 className="font-display text-xl font-semibold text-ink">Contact</h2>
            <p>
              Questions about these terms:{" "}
              <a href={`mailto:${siteConfig.contactEmail}`} className="font-semibold text-deep underline">
                {siteConfig.contactEmail}
              </a>
              .
            </p>
          </div>
        </div>
      </Section>
    </>
  );
}
