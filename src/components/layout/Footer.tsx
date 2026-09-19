import { Logo } from "@/components/brand/Logo";
import { Container } from "@/components/ui/Container";
import { DotDivider } from "@/components/ui/DotRing";
import { NewsletterForm } from "@/components/forms/NewsletterForm";
import { footerNav, legalNav, siteConfig } from "@/lib/site-config";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-paper/10 bg-ink text-paper">
      <Container className="py-16">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_1fr_1fr]">
          <div className="max-w-sm">
            <Logo variant="horizontal" tone="reversed" showTagline href={null} />
            <p className="mt-5 text-sm leading-relaxed text-paper/70">{siteConfig.description}</p>
            <p className="mt-5 text-xs uppercase tracking-[0.2em] text-paper/65">
              {siteConfig.legalName} · Community Interest Company
            </p>
          </div>

          <nav aria-label="Footer">
            <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-pink">Explore</h2>
            <ul className="mt-4 space-y-2.5">
              {footerNav.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="text-sm text-paper/75 hover:text-paper">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-pink">Stay in the loop</h2>
            <p className="mt-4 text-sm text-paper/75">
              Opportunities, events and community news — no more than a couple of emails a month.
            </p>
            <NewsletterForm />
          </div>
        </div>

        <DotDivider className="my-12" />

        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-paper/60">
            © {year} {siteConfig.legalName}. All rights reserved.
          </p>
          <nav aria-label="Legal" className="flex flex-wrap gap-x-6 gap-y-2">
            {legalNav.map((link) => (
              <a key={link.href} href={link.href} className="text-xs text-paper/60 hover:text-paper">
                {link.label}
              </a>
            ))}
          </nav>
        </div>
      </Container>
    </footer>
  );
}
