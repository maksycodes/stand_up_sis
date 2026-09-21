import { useId } from "react";

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
  /** "brand" = gradient monogram on paper/dark, "mono" = single colour (for favicons, watermarks) */
  tone?: "brand" | "mono" | "reversed";
  title?: string;
};

/**
 * The "Circle of Sisters" monogram: bold rounded "SUS", berry-to-deep
 * gradient fill with a soft drop shadow, ringed by eight equal dots.
 */
export function Mark({ className, tone = "brand", title = "Stand Up Sis" }: MarkProps) {
  const gradientId = useId();
  const cx = 60;
  const cy = 60;
  const r = 46;
  const monogramFill = tone === "mono" ? "currentColor" : `url(#${gradientId})`;
  const dotFill = (i: number) => (tone === "mono" ? "currentColor" : DOT_COLORS[i]);

  return (
    <svg
      viewBox="0 0 120 120"
      className={className}
      role="img"
      aria-label={title}
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="var(--color-berry)" />
          <stop offset="100%" stopColor="var(--color-deep)" />
        </linearGradient>
      </defs>
      {Array.from({ length: 8 }).map((_, i) => {
        const { x, y } = dotPosition(i, cx, cy, r);
        return <circle key={i} cx={x} cy={y} r={5} fill={dotFill(i)} opacity={tone === "mono" ? 0.85 : 1} />;
      })}
      <text
        x={cx}
        y={70}
        textAnchor="middle"
        fontFamily="var(--font-display), sans-serif"
        fontWeight={800}
        fontSize={32}
        letterSpacing={0.5}
        fill={monogramFill}
        style={{ filter: "drop-shadow(0 2px 1.5px rgba(90, 18, 58, 0.35))" }}
      >
        SUS
      </text>
    </svg>
  );
}
