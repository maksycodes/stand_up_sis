"use client";

import { useState, type FormEvent } from "react";

type Status = "idle" | "loading" | "success" | "error";

/** Shared submit handling for the site's lead-capture forms: serialises
 * FormData to JSON, skips real submission if the honeypot was tripped,
 * and posts to the given API route. */
export function useFormSubmit(endpoint: string) {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(event: FormEvent<HTMLFormElement>, transform?: (data: FormData) => Record<string, unknown>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);

    if (data.get("company")) return;

    setStatus("loading");
    try {
      const payload = transform ? transform(data) : Object.fromEntries(data.entries());
      const res = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) throw new Error("Request failed");
      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  return { status, handleSubmit };
}
