import { ImageResponse } from "next/og";
import { siteConfig } from "@/lib/site-config";

export const alt = siteConfig.name;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const dotColors = ["#F9A8C9", "#F76CA3", "#E8447F", "#C8366B", "#B22A63", "#8E2D8C", "#FF8A6B", "#F6C25A"];

export default function OgImage() {
  const box = 220;
  const cx = box / 2;
  const cy = box / 2;
  const r = 86;
  const dotSize = 18;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "80px",
          background: "#3B1230",
          backgroundImage: "radial-gradient(circle at 85% 20%, rgba(232,68,127,0.35), transparent 55%)",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", maxWidth: 720 }}>
          <div
            style={{
              display: "flex",
              color: "#F76CA3",
              fontSize: 22,
              fontWeight: 700,
              letterSpacing: 6,
              textTransform: "uppercase",
              marginBottom: 28,
            }}
          >
            Stand Up Sis CIC
          </div>
          <div style={{ display: "flex", color: "#FFF6F8", fontSize: 60, fontWeight: 700, lineHeight: 1.1 }}>
            {siteConfig.headline}
          </div>
        </div>
        <div style={{ display: "flex", position: "relative", width: box, height: box }}>
          {dotColors.map((color, i) => {
            const angle = ((-90 + i * 45) * Math.PI) / 180;
            const x = cx + r * Math.cos(angle) - dotSize / 2;
            const y = cy + r * Math.sin(angle) - dotSize / 2;
            return (
              <div
                key={i}
                style={{
                  display: "flex",
                  position: "absolute",
                  top: y,
                  left: x,
                  width: dotSize,
                  height: dotSize,
                  borderRadius: dotSize,
                  background: color,
                }}
              />
            );
          })}
          <div
            style={{
              display: "flex",
              position: "absolute",
              top: 0,
              left: 0,
              width: box,
              height: box,
              alignItems: "center",
              justifyContent: "center",
              fontSize: 44,
              fontWeight: 700,
              color: "#F76CA3",
            }}
          >
            SUS
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
