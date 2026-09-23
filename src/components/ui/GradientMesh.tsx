/**
 * A soft multi-stop gradient field built entirely from the brand's own
 * palette - richer than the single blob accent, without depicting anything
 * (no photography, no fake imagery).
 */
export function GradientMesh({ className = "" }: { className?: string }) {
  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none absolute inset-0 opacity-50 ${className}`}
      style={{
        background:
          "radial-gradient(ellipse 60% 50% at 15% 20%, var(--color-berry), transparent 60%), " +
          "radial-gradient(ellipse 50% 60% at 88% 25%, var(--color-gold), transparent 55%), " +
          "radial-gradient(ellipse 55% 55% at 60% 95%, var(--color-deep), transparent 60%)",
        filter: "blur(60px)",
      }}
    />
  );
}
