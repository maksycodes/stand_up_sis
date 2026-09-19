import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { Section } from "@/components/ui/Section";
import { LegalNotice } from "@/components/legal/LegalNotice";
import { pageMetadata } from "@/lib/page-metadata";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = pageMetadata({
  title: "Privacy Policy",
  description: "How Stand Up Sis CIC collects, uses and protects your data.",
  path: "/privacy",
});

export default function PrivacyPage() {
  return (
    <>
      <PageHero eyebrow="Legal" title="Privacy Policy" />
      <Section width="narrow">
        <div className="space-y-8">
          <LegalNotice />

          <div className="prose space-y-4 text-ink-soft">
            <h2 className="font-display text-xl font-semibold text-ink">Who we are</h2>
            <p>
              Stand Up Sis CIC (&quot;we&quot;, &quot;us&quot;) is a UK Community Interest Company. You can contact us about privacy
              matters at{" "}
              <a href={`mailto:${siteConfig.contactEmail}`} className="font-semibold text-deep underline">
                {siteConfig.contactEmail}
              </a>
              .
            </p>

            <h2 className="font-display text-xl font-semibold text-ink">What we collect</h2>
            <p>
              When you use a form on this site — to join the community, register mentor interest, enquire about a
              partnership, register for an event, or contact us — we collect the information you provide, such as
              your name, email address, location, and any details you choose to share about your interests or
              organisation.
            </p>

            <h2 className="font-display text-xl font-semibold text-ink">Why we collect it</h2>
            <p>
              We use this information to respond to your enquiry, deliver the community, programmes and events
              you&apos;ve registered for, and — only where you&apos;ve given consent — to send you email updates about Stand
              Up Sis. We do not sell your data.
            </p>

            <h2 className="font-display text-xl font-semibold text-ink">Legal basis</h2>
            <p>
              We rely on your consent for marketing emails, and on our legitimate interest in responding to
              enquiries and operating the community for operational contact directly related to a form you&apos;ve
              submitted.
            </p>

            <h2 className="font-display text-xl font-semibold text-ink">How we store your data</h2>
            <p>
              Submissions are processed using third-party services we use to operate this website (for example,
              email delivery and, where applicable, secure database hosting). We take reasonable steps to keep your
              data secure.
            </p>

            <h2 className="font-display text-xl font-semibold text-ink">Cookies &amp; analytics</h2>
            <p>
              We use privacy-focused, cookieless analytics (Plausible) to understand how the site is used. This
              does not use cookies or collect personal data, so no cookie consent banner is required for it. If we
              ever introduce tools that do require cookies, we&apos;ll ask for your consent first.
            </p>

            <h2 className="font-display text-xl font-semibold text-ink">Your rights</h2>
            <p>
              Under UK GDPR, you have the right to access, correct, or request deletion of your personal data, and
              to object to or restrict how we use it. To exercise these rights, contact us at the email address
              above. You also have the right to complain to the Information Commissioner&apos;s Office (ICO).
            </p>

            <p className="text-sm text-ink-soft">Last updated: placeholder — to be dated on legal review.</p>
          </div>
        </div>
      </Section>
    </>
  );
}
