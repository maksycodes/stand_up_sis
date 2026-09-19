import { type ReactNode } from "react";
import { DotRing } from "./DotRing";

type EmptyStateProps = {
  title: string;
  description: string;
  children?: ReactNode;
  filled?: number;
};

/** A tasteful "nothing here yet" state that reads as intentional, not broken. */
export function EmptyState({ title, description, children, filled = 1 }: EmptyStateProps) {
  return (
    <div className="flex flex-col items-center gap-6 rounded-3xl border border-dashed border-ink/15 bg-paper-deep/60 px-6 py-16 text-center">
      <DotRing size={120} filled={filled} />
      <div className="max-w-md">
        <h3 className="font-display text-xl font-semibold text-ink">{title}</h3>
        <p className="mt-3 text-sm leading-relaxed text-ink-soft">{description}</p>
      </div>
      {children}
    </div>
  );
}
