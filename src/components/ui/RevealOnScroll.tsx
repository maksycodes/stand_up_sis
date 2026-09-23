"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

type RevealOnScrollProps = {
  children: ReactNode;
  className?: string;
  /** Stagger delay in ms, for sequencing siblings revealed together. */
  delay?: number;
};

/**
 * Fades content up into place the first time it scrolls into view.
 * Renders visible immediately if IntersectionObserver is unavailable.
 * prefers-reduced-motion is handled globally in globals.css.
 */
export function RevealOnScroll({ children, className = "", delay = 0 }: RevealOnScrollProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node || typeof IntersectionObserver === "undefined") {
      setVisible(true);
      return;
    }
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -40px 0px" }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`transition-[opacity,transform] duration-700 ease-out ${
        visible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
      } ${className}`}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </div>
  );
}
