import { type ElementType, type ReactNode } from "react";

type ContainerProps = {
  children: ReactNode;
  className?: string;
  as?: ElementType;
  /** narrow = long-form copy, wide = default site width */
  width?: "narrow" | "wide" | "full";
};

const WIDTHS = {
  narrow: "max-w-3xl",
  wide: "max-w-7xl",
  full: "max-w-none",
};

export function Container({ children, className = "", as: Tag = "div", width = "wide" }: ContainerProps) {
  return <Tag className={`mx-auto w-full ${WIDTHS[width]} px-5 sm:px-8 lg:px-10 ${className}`}>{children}</Tag>;
}
