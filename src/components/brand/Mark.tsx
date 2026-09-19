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

function dotPosition(index: number, cx: number, cy: number, r: number) {
  const angle = ((-90 + index * 45) * Math.PI) / 180;
  return {
    x: cx + r * Math.cos(angle),
    y: cy + r * Math.sin(angle),
  };
}

type MarkProps = {
  className?: string;
  /** "brand" = coloured dots on paper/dark, "mono" = single colour (for favicons, watermarks) */
  tone?: "brand" | "mono" | "reversed";
  title?: string;
};

/**
 * The "Circle of Sisters" monogram: SUS ringed by eight equal dots.
 * Pure SVG so it stays crisp from a 16px favicon to a full-bleed hero mark.
 */
export function Mark({ className, tone = "brand", title = "Stand Up Sis" }: MarkProps) {
  const cx = 60;
  const cy = 60;
  const r = 46;
  const monogramFill =
    tone === "reversed" ? "var(--color-pink)" : tone === "mono" ? "currentColor" : "var(--color-berry)";
  const dotFill = (i: number) => (tone === "mono" ? "currentColor" : DOT_COLORS[i]);

  return (
    <svg
      viewBox="0 0 120 120"
      className={className}
      role="img"
      aria-label={title}
      xmlns="http://www.w3.org/2000/svg"
    >
      {Array.from({ length: 8 }).map((_, i) => {
        const { x, y } = dotPosition(i, cx, cy, r);
        return <circle key={i} cx={x} cy={y} r={5} fill={dotFill(i)} opacity={tone === "mono" ? 0.85 : 1} />;
      })}
      <text
        x={cx}
        y={cy}
        textAnchor="middle"
        dominantBaseline="central"
        fontFamily="var(--font-display), serif"
        fontWeight={700}
        fontSize={30}
        letterSpacing={1}
        fill={monogramFill}
      >
        SUS
      </text>
    </svg>
  );
}
