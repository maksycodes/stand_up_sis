import { type ReactNode } from "react";
import { Container } from "./Container";
import { Constellation } from "./Constellation";
import { GradientMesh } from "./GradientMesh";

type PageHeroProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  children?: ReactNode;
  /** Background treatment - varies the hero across pages instead of repeating one blob everywhere. */
  variant?: "blob" | "mesh" | "constellation";
};

export function PageHero({ eyebrow, title, description, children, variant = "blob" }: PageHeroProps) {
  return (
    <section className="relative overflow-hidden bg-ink text-paper">
      {variant === "blob" && (
        <div
          className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full opacity-25 blur-3xl"
          style={{ background: "var(--gradient-berry)" }}
          aria-hidden="true"
        />
      )}
      {variant === "mesh" && <GradientMesh />}
      {variant === "constellation" && (
        <Constellation className="pointer-events-none absolute inset-y-0 right-0 h-full w-[65%] opacity-80 sm:w-[55%]" />
      )}
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
