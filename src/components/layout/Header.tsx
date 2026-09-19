"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { Logo } from "@/components/brand/Logo";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { primaryNav } from "@/lib/site-config";

export function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const close = () => setOpen(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header className="sticky top-0 z-50 border-b border-ink/10 bg-paper/90 backdrop-blur">
        <Container className="flex h-18 items-center justify-between gap-4 py-3">
          <Logo variant="horizontal" />

          <div className="hidden min-w-0 items-center gap-6 xl:flex">
            <nav className="flex items-center gap-5" aria-label="Primary">
              {primaryNav.map((link) => {
                const active = pathname === link.href || pathname.startsWith(`${link.href}/`);
                return (
                  <a
                    key={link.href}
                    href={link.href}
                    aria-current={active ? "page" : undefined}
                    className={`whitespace-nowrap text-sm font-medium transition-colors hover:text-deep ${
                      active ? "text-deep" : "text-ink"
                    }`}
                  >
                    {link.label}
                  </a>
                );
              })}
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
            className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-ink xl:hidden"
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
              {open ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 6l12 12M18 6L6 18" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 7h16M4 12h16M4 17h16" />
              )}
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
            <a
              key={link.href}
              href={link.href}
              onClick={close}
              className="rounded-lg px-3 py-3 text-lg font-medium text-ink hover:bg-ink/5"
            >
              {link.label}
            </a>
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
