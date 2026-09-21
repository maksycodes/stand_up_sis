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
 * The "Circle of Sisters" monogram: a lowercase, underlined "s" running
 * into bold "US", ringed by eight equal dots. Single SVG (text rendered
 * via foreignObject so the underline is a real CSS border, not guessed
 * glyph metrics) so it stays crisp from a 16px favicon to a full-bleed mark.
 */
export function Mark({ className, tone = "brand", title = "Stand Up Sis" }: MarkProps) {
  const cx = 60;
  const cy = 60;
  const r = 46;
  const monogramColor =
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
      <foreignObject x="14" y="40" width="92" height="40">
        <div
          style={{
            display: "flex",
            alignItems: "baseline",
            justifyContent: "center",
            height: "100%",
            fontFamily: "var(--font-display), serif",
            color: monogramColor,
          }}
        >
          <span
            style={{
              fontStyle: "italic",
              fontWeight: 500,
              fontSize: "22px",
              lineHeight: 1,
              borderBottom: "2px solid currentColor",
              paddingBottom: "1px",
            }}
          >
            s
          </span>
          <span style={{ fontWeight: 800, fontSize: "30px", lineHeight: 1 }}>US</span>
        </div>
      </foreignObject>
    </svg>
  );
}
