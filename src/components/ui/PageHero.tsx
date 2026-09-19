import { type ReactNode } from "react";
import { Container } from "./Container";

type PageHeroProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  children?: ReactNode;
};

export function PageHero({ eyebrow, title, description, children }: PageHeroProps) {
  return (
    <section className="relative overflow-hidden bg-ink text-paper">
      <div
        className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full opacity-25 blur-3xl"
        style={{ background: "var(--gradient-berry)" }}
        aria-hidden="true"
      />
      <Container className="relative py-16 sm:py-20">
        {eyebrow && (
          <span className="inline-flex items-center gap-2 rounded-full bg-paper/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-pink">
            {eyebrow}
          </span>
        )}
        <h1 className="mt-5 max-w-3xl font-display text-4xl font-bold leading-[1.08] tracking-tight sm:text-5xl">
          {title}
        </h1>
        {description && <p className="mt-5 max-w-2xl text-lg leading-relaxed text-paper/80">{description}</p>}
        {children && <div className="mt-8">{children}</div>}
      </Container>
    </section>
  );
}
