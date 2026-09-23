import { type ReactNode } from "react";

type CardProps = {
  children: ReactNode;
  className?: string;
  /**
   * Set only when the whole card is wrapped in a link/button. Gates the
   * hover-lift affordance so a purely informational card never implies
   * clickability it doesn't have.
   */
  interactive?: boolean;
};

export function Card({ children, className = "", interactive = false }: CardProps) {
  return (
    <div
      className={`rounded-2xl border border-ink/8 bg-paper p-6 shadow-[0_1px_2px_rgba(59,18,48,0.04)] transition-shadow sm:p-8 ${
        interactive ? "hover:shadow-[0_8px_24px_rgba(59,18,48,0.08)]" : ""
      } ${className}`}
    >
      {children}
    </div>
  );
}

export function Badge({ children, tone = "berry" }: { children: ReactNode; tone?: "berry" | "gold" | "ink" }) {
  const tones = {
    berry: "bg-berry/10 text-deep",
    gold: "bg-gold/20 text-gold-deep",
    ink: "bg-ink/8 text-ink",
  };
  return (
    <span className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold ${tones[tone]}`}>
      {children}
    </span>
  );
}
