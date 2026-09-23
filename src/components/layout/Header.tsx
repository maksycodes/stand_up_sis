"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { Logo } from "@/components/brand/Logo";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { primaryNav, moreNav } from "@/lib/site-config";

export function Header() {
  const [open, setOpen] = useState(false);
  const [moreOpen, setMoreOpen] = useState(false);
  const pathname = usePathname();
  const close = () => setOpen(false);
  const moreRef = useRef<HTMLDivElement>(null);

  // Reset the "More" dropdown when the route changes, adjusted during
  // render (not an effect) so it doesn't trigger a second render pass.
  const [prevPathname, setPrevPathname] = useState(pathname);
  if (pathname !== prevPathname) {
    setPrevPathname(pathname);
    if (moreOpen) setMoreOpen(false);
  }

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    function handleClick(event: MouseEvent) {
      if (moreRef.current && !moreRef.current.contains(event.target as Node)) {
        setMoreOpen(false);
      }
    }
    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, []);

  const isActive = (href: string) => pathname === href || pathname.startsWith(`${href}/`);
  const moreActive = moreNav.some((link) => isActive(link.href));

  return (
    <>
      <header className="sticky top-0 z-50 border-b border-ink/10 bg-paper/90 backdrop-blur">
        <Container className="flex h-18 items-center justify-between gap-4 py-3">
          <Logo variant="horizontal" />

          <div className="hidden min-w-0 items-center gap-6 xl:flex">
            <nav className="flex items-center gap-5" aria-label="Primary">
              {primaryNav.map((link) => {
                const active = isActive(link.href);
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    aria-current={active ? "page" : undefined}
                    className={`whitespace-nowrap text-sm font-medium transition-colors hover:text-deep ${
                      active ? "text-deep" : "text-ink"
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}

              <div ref={moreRef} className="relative">
                <button
                  type="button"
                  onClick={() => setMoreOpen((v) => !v)}
                  aria-expanded={moreOpen}
                  aria-haspopup="true"
                  className={`flex items-center gap-1 whitespace-nowrap text-sm font-medium transition-colors hover:text-deep ${
                    moreActive ? "text-deep" : "text-ink"
                  }`}
                >
                  More
                  <svg
                    viewBox="0 0 24 24"
                    className={`h-3.5 w-3.5 transition-transform duration-150 ${moreOpen ? "rotate-180" : ""}`}
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    aria-hidden="true"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 9l6 6 6-6" />
                  </svg>
                </button>
                <div
                  className={`absolute left-0 top-full z-10 mt-2 w-48 origin-top rounded-xl border border-ink/10 bg-paper p-2 shadow-lg transition-[opacity,transform] duration-[180ms] ease-out ${
                    moreOpen ? "opacity-100 scale-100" : "pointer-events-none -translate-y-1 scale-95 opacity-0"
                  }`}
                >
                  {moreNav.map((link) => {
                    const active = isActive(link.href);
                    return (
                      <Link
                        key={link.href}
                        href={link.href}
                        aria-current={active ? "page" : undefined}
                        onClick={() => setMoreOpen(false)}
                        className={`block rounded-lg px-3 py-2 text-sm font-medium transition-colors hover:bg-ink/5 ${
                          active ? "text-deep" : "text-ink"
                        }`}
                      >
                        {link.label}
                      </Link>
                    );
                  })}
                </div>
              </div>
            </nav>

            <div className="flex items-center gap-3">
              <Button href="/partnerships" variant="secondary" size="md" className="px-4">
                Partner With Us
              </Button>
              <Button href="/community" variant="primary" size="md" className="px-4">
                Join the Community
              </Button>
            </div>
          </div>

          <button
            type="button"
            className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full text-ink xl:hidden"
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
          >
            <svg
              viewBox="0 0 24 24"
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 7h16M4 12h16M4 17h16"
                className={`origin-center transition-[opacity,transform] duration-150 ease-out ${
                  open ? "scale-90 opacity-0" : "scale-100 opacity-100"
                }`}
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 6l12 12M18 6L6 18"
                className={`origin-center transition-[opacity,transform] duration-150 ease-out ${
                  open ? "scale-100 opacity-100" : "scale-90 opacity-0"
                }`}
              />
            </svg>
          </button>
        </Container>
      </header>

      {/* Rendered outside <header> deliberately: header's backdrop-blur creates a
          CSS containing block, which would trap this fixed-position panel inside
          the header's own (short) height instead of the viewport. */}
      <div
        id="mobile-nav"
        className={`fixed inset-x-0 top-18 bottom-0 z-40 origin-top overflow-y-auto bg-paper transition-[transform,opacity] duration-200 xl:hidden ${
          open ? "translate-y-0 opacity-100" : "pointer-events-none -translate-y-2 opacity-0"
        }`}
      >
        <Container className="flex flex-col gap-1 py-6">
          {primaryNav.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={close}
              className="rounded-lg px-3 py-3 text-lg font-medium text-ink hover:bg-ink/5"
            >
              {link.label}
            </Link>
          ))}
          <p className="mt-3 px-3 text-xs font-semibold uppercase tracking-[0.2em] text-ink-soft">More</p>
          {moreNav.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={close}
              className="rounded-lg px-3 py-3 text-lg font-medium text-ink hover:bg-ink/5"
            >
              {link.label}
            </Link>
          ))}
          <div className="mt-4 flex flex-col gap-3">
            <Button href="/partnerships" variant="secondary" size="lg" className="w-full" onClick={close}>
              Partner With Us
            </Button>
            <Button href="/community" variant="primary" size="lg" className="w-full" onClick={close}>
              Join the Community
            </Button>
          </div>
        </Container>
      </div>
    </>
  );
}
