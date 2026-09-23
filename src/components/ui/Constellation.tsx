type Point = { x: number; y: number; r: number; color: string };

const POINTS: Point[] = [
  { x: 40, y: 60, r: 5, color: "var(--color-dot-1)" },
  { x: 140, y: 30, r: 7, color: "var(--color-dot-2)" },
  { x: 230, y: 80, r: 4, color: "var(--color-dot-3)" },
  { x: 90, y: 140, r: 6, color: "var(--color-dot-4)" },
  { x: 200, y: 160, r: 5, color: "var(--color-dot-5)" },
  { x: 310, y: 120, r: 6, color: "var(--color-dot-6)" },
  { x: 260, y: 220, r: 4, color: "var(--color-dot-7)" },
  { x: 150, y: 240, r: 7, color: "var(--color-dot-8)" },
  { x: 40, y: 200, r: 4, color: "var(--color-dot-3)" },
  { x: 350, y: 40, r: 5, color: "var(--color-dot-1)" },
  { x: 320, y: 250, r: 5, color: "var(--color-dot-5)" },
  { x: 10, y: 120, r: 3, color: "var(--color-dot-6)" },
];

const LINES: [number, number][] = [
  [0, 1],
  [1, 2],
  [1, 9],
  [0, 3],
  [3, 4],
  [4, 5],
  [5, 2],
  [4, 7],
  [7, 8],
  [3, 8],
  [5, 6],
  [6, 7],
  [6, 10],
  [9, 5],
  [0, 11],
  [8, 11],
];

type ConstellationProps = {
  className?: string;
  /** "brand" = each dot its own brand color, "mono" = single currentColor */
  tone?: "brand" | "mono";
};

/**
 * A wider, freer arrangement of the "Circle of Sisters" dot motif with
 * thin connecting lines - built for filling real hero background space
 * (unlike the small ring form used for progress/milestones).
 */
export function Constellation({ className = "", tone = "brand" }: ConstellationProps) {
  const lineColor = tone === "mono" ? "currentColor" : "var(--color-paper)";
  return (
    <svg viewBox="0 0 360 280" className={className} aria-hidden="true" fill="none">
      {LINES.map(([a, b], i) => {
        const pa = POINTS[a];
        const pb = POINTS[b];
        return (
          <line
            key={i}
            x1={pa.x}
            y1={pa.y}
            x2={pb.x}
            y2={pb.y}
            stroke={lineColor}
            strokeOpacity={tone === "mono" ? 0.18 : 0.14}
            strokeWidth={1}
          />
        );
      })}
      {POINTS.map((p, i) => (
        <circle
          key={i}
          cx={p.x}
          cy={p.y}
          r={p.r}
          fill={tone === "mono" ? "currentColor" : p.color}
          opacity={tone === "mono" ? 0.5 : 1}
        />
      ))}
    </svg>
  );
}
