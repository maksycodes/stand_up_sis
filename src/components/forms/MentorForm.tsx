"use client";

import { useId, type FormEvent } from "react";
import { Field, TextInput, TextArea, Honeypot, FormNotice } from "./fields";
import { useFormSubmit } from "./useFormSubmit";
import { Button } from "@/components/ui/Button";

export function MentorForm() {
  const { status, handleSubmit } = useFormSubmit("/api/forms/mentor");
  const ids = {
    name: useId(),
    email: useId(),
    role: useId(),
    expertise: useId(),
    linkedin: useId(),
    support: useId(),
    availability: useId(),
    why: useId(),
  };

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    handleSubmit(event);
  }

  if (status === "success") return <FormNotice status="success" />;

  return (
    <form onSubmit={onSubmit} noValidate className="space-y-6">
      <Honeypot />

      <div className="grid gap-6 sm:grid-cols-2">
        <Field label="Name" htmlFor={ids.name} required>
          <TextInput id={ids.name} name="name" required autoComplete="name" />
        </Field>
        <Field label="Email" htmlFor={ids.email} required>
          <TextInput id={ids.email} name="email" type="email" required autoComplete="email" />
        </Field>
      </div>

      <Field label="Current job or business" htmlFor={ids.role} required>
        <TextInput id={ids.role} name="role" required />
      </Field>

      <Field label="Area of expertise" htmlFor={ids.expertise} required>
        <TextInput id={ids.expertise} name="expertise" required placeholder="e.g. Marketing, Finance, Funding, Operations" />
      </Field>

      <Field label="LinkedIn URL" htmlFor={ids.linkedin} hint="Optional, but helps us understand your background.">
        <TextInput id={ids.linkedin} name="linkedin" type="url" placeholder="https://linkedin.com/in/…" />
      </Field>

      <Field label="What type of support could you offer?" htmlFor={ids.support} required>
        <TextArea
          id={ids.support}
          name="support"
          required
          rows={3}
          placeholder="e.g. one-to-one mentoring, pitch feedback, industry introductions"
        />
      </Field>

      <Field label="Approximate availability" htmlFor={ids.availability} required>
        <TextInput id={ids.availability} name="availability" required placeholder="e.g. a couple of hours a month" />
      </Field>

      <Field label="Why do you want to mentor with Stand Up Sis?" htmlFor={ids.why} required>
        <TextArea id={ids.why} name="why" required rows={4} />
      </Field>

      <FormNotice status={status === "error" ? "error" : null} />

      <Button type="submit" disabled={status === "loading"} className="w-full sm:w-auto">
        {status === "loading" ? "Submitting…" : "Submit mentor interest"}
      </Button>
    </form>
  );
}
