"use client";

import { useEffect, useRef, useState } from "react";

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
 * into bold "US", ringed by eight equal dots. Pure SVG text (no
 * foreignObject — HTML-in-SVG scales unreliably across browsers at icon
 * sizes) so it stays crisp from a 16px favicon to a full-bleed mark. The
 * underline is measured off the actual rendered "s" glyph via getBBox,
 * so it sits exactly under the letter regardless of font metrics.
 */
export function Mark({ className, tone = "brand", title = "Stand Up Sis" }: MarkProps) {
  const cx = 60;
  const cy = 60;
  const r = 46;
  const sRef = useRef<SVGTSpanElement>(null);
  const [underline, setUnderline] = useState<{ x1: number; x2: number; y: number } | null>(null);

  useEffect(() => {
    if (!sRef.current) return;
    const box = sRef.current.getBBox();
    setUnderline({ x1: box.x, x2: box.x + box.width, y: box.y + box.height + 1 });
  }, []);

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
      <text x={cx} y={70} textAnchor="middle" fontFamily="var(--font-display), serif" fill={monogramColor}>
        <tspan ref={sRef} fontStyle="italic" fontWeight={500} fontSize={24}>
          s
        </tspan>
        <tspan fontWeight={800} fontSize={32} dx={2}>
          US
        </tspan>
      </text>
      {underline && (
        <line
          x1={underline.x1}
          x2={underline.x2}
          y1={underline.y}
          y2={underline.y}
          stroke={monogramColor}
          strokeWidth={2}
          strokeLinecap="round"
        />
      )}
    </svg>
  );
}
