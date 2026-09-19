import Link from "next/link";
import { Mark } from "./Mark";

type LogoProps = {
  variant?: "horizontal" | "stacked" | "mark";
  tone?: "brand" | "reversed";
  showTagline?: boolean;
  className?: string;
  href?: string | null;
};

function Wordmark({ tone, size }: { tone: "brand" | "reversed"; size: "md" | "lg" }) {
  const inkColor = tone === "reversed" ? "text-paper" : "text-ink";
  const accentColor = tone === "reversed" ? "text-pink" : "text-berry";
  const textSize = size === "lg" ? "text-3xl sm:text-4xl" : "text-xl sm:text-2xl";
  return (
    <span className={`font-display font-bold ${textSize} leading-none tracking-tight`}>
      <span className={inkColor}>Stand Up</span>
      <span className={`${accentColor} italic`}>Sis</span>
    </span>
  );
}

/**
 * Primary brand lockup. Use `variant="mark"` for compact spaces (nav on
 * mobile, favicons); `horizontal` for the header/footer; `stacked` for
 * centred contexts like a hero sign-off or print.
 */
export function Logo({
  variant = "horizontal",
  tone = "brand",
  showTagline = false,
  className = "",
  href = "/",
}: LogoProps) {
  const taglineColor = tone === "reversed" ? "text-pink/90" : "text-ink-soft";

  const content =
    variant === "mark" ? (
      <Mark className={`h-9 w-9 ${className}`} />
    ) : variant === "stacked" ? (
      <span className={`flex flex-col items-center gap-2 ${className}`}>
        <Mark className="h-16 w-16" />
        <Wordmark tone={tone} size="lg" />
        {showTagline && (
          <span className={`text-xs font-semibold uppercase tracking-[0.3em] ${taglineColor}`}>
            Rise &amp; Flourish
          </span>
        )}
      </span>
    ) : (
      <span className={`inline-flex items-center gap-3 ${className}`}>
        <Mark className="h-10 w-10 shrink-0" />
        <span className="flex flex-col leading-tight">
          <Wordmark tone={tone} size="md" />
          {showTagline && (
            <span className={`text-[0.65rem] font-semibold uppercase tracking-[0.3em] ${taglineColor}`}>
              Rise &amp; Flourish
            </span>
          )}
        </span>
      </span>
    );

  if (href === null) return content;

  return (
    <Link href={href} className="inline-flex items-center rounded-sm" aria-label="Stand Up Sis — home">
      {content}
    </Link>
  );
}
