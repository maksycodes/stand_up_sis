import { type ReactNode } from "react";
import { Container } from "./Container";

type SectionProps = {
  children: ReactNode;
  className?: string;
  tone?: "paper" | "deep" | "ink";
  id?: string;
  width?: "narrow" | "wide" | "full";
};

const TONES = {
  paper: "bg-paper text-ink",
  deep: "bg-paper-deep text-ink",
  ink: "bg-ink text-paper",
};

export function Section({ children, className = "", tone = "paper", id, width = "wide" }: SectionProps) {
  return (
    <section id={id} className={`${TONES[tone]} py-16 sm:py-24 ${className}`}>
      <Container width={width}>{children}</Container>
    </section>
  );
}
