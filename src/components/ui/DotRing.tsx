const DOT_COLORS = [
  "var(--color-dot-1)",
  "var(--color-dot-2)",
  "var(--color-dot-3)",
  "var(--color-dot-4)",
  "var(--color-dot-5)",
  "var(--color-dot-6)",
  "var(--color-dot-7)",
  "var(--color-dot-8)",
];

type DotRingProps = {
  /** number of dots to render as "reached" (filled) vs. still outline, 0-8 */
  filled?: number;
  className?: string;
  size?: number;
};

/**
 * The Circle of Sisters motif, reused as a progress/milestone device —
 * e.g. on the Impact page's "journey is beginning" state.
 */
export function DotRing({ filled = 0, className = "", size = 220 }: DotRingProps) {
  const cx = 60;
  const cy = 60;
  const r = 46;

  return (
    <svg viewBox="0 0 120 120" width={size} height={size} className={className} aria-hidden="true">
      <circle cx={cx} cy={cy} r={r} fill="none" stroke="var(--color-ink)" strokeOpacity={0.08} strokeWidth={1} />
      {Array.from({ length: 8 }).map((_, i) => {
        const angle = ((-90 + i * 45) * Math.PI) / 180;
        const x = cx + r * Math.cos(angle);
        const y = cy + r * Math.sin(angle);
        const isFilled = i < filled;
        return (
          <circle
            key={i}
            cx={x}
            cy={y}
            r={isFilled ? 6 : 5}
            fill={isFilled ? DOT_COLORS[i] : "transparent"}
            stroke={isFilled ? "none" : "var(--color-ink)"}
            strokeOpacity={isFilled ? 1 : 0.25}
            strokeWidth={1.5}
            strokeDasharray={isFilled ? undefined : "2 2"}
          />
        );
      })}
    </svg>
  );
}

/** A slim horizontal rule variant of the motif, for use between sections. */
export function DotDivider({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center justify-center gap-3 ${className}`} aria-hidden="true">
      {DOT_COLORS.map((color, i) => (
        <span key={i} className="h-1.5 w-1.5 rounded-full" style={{ backgroundColor: color }} />
      ))}
    </div>
  );
}
