"use client";

import { useId, useState, type FormEvent } from "react";

type Status = "idle" | "loading" | "success" | "error";

type Tone = "dark" | "light";

export function NewsletterForm({ tone = "dark" }: { tone?: Tone }) {
  const [status, setStatus] = useState<Status>("idle");
  const emailId = useId();
  const consentId = useId();
  const isLight = tone === "light";

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);

    // Honeypot: bots fill every field, real visitors never see this one.
    if (data.get("company")) return;

    setStatus("loading");
    try {
      const res = await fetch("/api/forms/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: data.get("email"),
          consent: data.get("consent") === "on",
        }),
      });
      if (!res.ok) throw new Error("Request failed");
      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <p className={`mt-4 text-sm font-medium ${isLight ? "text-deep" : "text-pink"}`}>
        You&apos;re on the list — welcome, sis.
      </p>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="mt-4 space-y-3" noValidate>
      <div className="hidden" aria-hidden="true">
        <label htmlFor="company">Company</label>
        <input id="company" name="company" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      <div className="flex flex-col gap-2 sm:flex-row">
        <label htmlFor={emailId} className="sr-only">
          Email address
        </label>
        <input
          id={emailId}
          name="email"
          type="email"
          required
          placeholder="you@example.com"
          className={`min-w-0 flex-1 rounded-full border px-4 py-2.5 text-sm focus-visible:outline-2 ${
            isLight
              ? "border-ink/15 bg-paper text-ink placeholder:text-ink-soft/60 focus-visible:outline-deep"
              : "border-paper/30 bg-paper/10 text-paper placeholder:text-paper/55 focus-visible:outline-pink"
          }`}
        />
        <button
          type="submit"
          disabled={status === "loading"}
          className="rounded-full bg-deep px-5 py-2.5 text-sm font-semibold text-paper transition-colors hover:bg-ink disabled:opacity-60"
        >
          {status === "loading" ? "Joining…" : "Sign up"}
        </button>
      </div>

      <div className="flex items-start gap-2">
        <input
          id={consentId}
          name="consent"
          type="checkbox"
          required
          className={`mt-0.5 h-4 w-4 shrink-0 rounded bg-transparent ${isLight ? "border-ink/30" : "border-paper/30"}`}
        />
        <label htmlFor={consentId} className={`text-xs ${isLight ? "text-ink-soft" : "text-paper/60"}`}>
          I&apos;d like to receive emails from Stand Up Sis. You can unsubscribe at any time.
        </label>
      </div>

      {status === "error" && (
        <p className={`text-xs ${isLight ? "text-deep" : "text-pink"}`} role="alert">
          Something went wrong — please try again in a moment.
        </p>
      )}
    </form>
  );
}
