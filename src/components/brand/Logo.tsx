import Link from "next/link";
import { Mark } from "./Mark";

type LogoProps = {
  variant?: "horizontal" | "stacked" | "mark";
  tone?: "brand" | "reversed";
  className?: string;
  href?: string | null;
};

const dropShadow = "drop-shadow(0 2px 1.5px rgba(90, 18, 58, 0.3))";

function Wordmark({ tone, size }: { tone: "brand" | "reversed"; size: "md" | "lg" }) {
  const inkColor = tone === "reversed" ? "text-paper" : "text-ink";
  const suffixColor = tone === "reversed" ? "text-paper/70" : "text-ink-soft";
  const textSize = size === "lg" ? "text-2xl sm:text-3xl" : "text-lg sm:text-xl";
  return (
    <span className={`font-display font-extrabold ${textSize} leading-[1.05] tracking-tight`}>
      <span className={`block ${inkColor}`} style={{ filter: dropShadow }}>
        Stand Up
      </span>
      <span className="flex items-center gap-1.5">
        <span
          className="bg-clip-text text-transparent"
          style={{
            backgroundImage: "linear-gradient(135deg, var(--color-berry), var(--color-deep))",
            filter: dropShadow,
          }}
        >
          Sis
        </span>
        <span className={`text-[0.55em] font-semibold uppercase tracking-[0.15em] ${suffixColor}`}>C.I.C</span>
      </span>
    </span>
  );
}

/**
 * Primary brand lockup. Use `variant="mark"` for compact spaces (nav on
 * mobile, favicons); `horizontal` for the header/footer; `stacked` for
 * centred contexts like a hero sign-off or print.
 */
export function Logo({ variant = "horizontal", tone = "brand", className = "", href = "/" }: LogoProps) {
  const content =
    variant === "mark" ? (
      <Mark className={`h-9 w-9 ${className}`} />
    ) : variant === "stacked" ? (
      <span className={`flex flex-col items-center gap-3 ${className}`}>
        <Mark className="h-16 w-16" />
        <span className="text-center">
          <Wordmark tone={tone} size="lg" />
        </span>
      </span>
    ) : (
      <span className={`inline-flex items-center gap-3 ${className}`}>
        <Mark className="h-11 w-11 shrink-0" />
        <Wordmark tone={tone} size="md" />
      </span>
    );

  if (href === null) return content;

  return (
    <Link href={href} className="inline-flex items-center rounded-sm" aria-label="Stand Up Sis — home">
      {content}
    </Link>
  );
}
