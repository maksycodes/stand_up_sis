import { type ReactNode } from "react";

export function Card({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <div
      className={`rounded-2xl border border-ink/8 bg-paper p-6 shadow-[0_1px_2px_rgba(59,18,48,0.04)] transition-shadow hover:shadow-[0_8px_24px_rgba(59,18,48,0.08)] sm:p-8 ${className}`}
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
