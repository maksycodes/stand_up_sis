"use client";

import { useId, type FormEvent } from "react";
import { Field, TextInput, Honeypot, FormNotice } from "./fields";
import { useFormSubmit } from "./useFormSubmit";
import { Button } from "@/components/ui/Button";

export function EventRegistrationForm({ eventSlug, eventTitle, waitlist }: { eventSlug: string; eventTitle: string; waitlist?: boolean }) {
  const { status, handleSubmit } = useFormSubmit("/api/forms/event-registration");
  const ids = { name: useId(), email: useId() };

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    handleSubmit(event, (data) => ({
      name: data.get("name"),
      email: data.get("email"),
      eventSlug,
      eventTitle,
      waitlist: Boolean(waitlist),
    }));
  }

  if (status === "success") return <FormNotice status="success" />;

  return (
    <form onSubmit={onSubmit} noValidate className="space-y-4">
      <Honeypot />
      <Field label="Full name" htmlFor={ids.name} required>
        <TextInput id={ids.name} name="name" required autoComplete="name" />
      </Field>
      <Field label="Email" htmlFor={ids.email} required>
        <TextInput id={ids.email} name="email" type="email" required autoComplete="email" />
      </Field>
      <FormNotice status={status === "error" ? "error" : null} />
      <Button type="submit" disabled={status === "loading"} className="w-full">
        {status === "loading" ? "Submitting…" : waitlist ? "Join the waitlist" : "Register"}
      </Button>
    </form>
  );
}
