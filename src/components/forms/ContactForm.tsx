"use client";

import { useId, type FormEvent } from "react";
import { Field, TextInput, TextArea, Honeypot, FormNotice } from "./fields";
import { useFormSubmit } from "./useFormSubmit";
import { Button } from "@/components/ui/Button";

export function ContactForm() {
  const { status, handleSubmit } = useFormSubmit("/api/forms/contact");
  const ids = { name: useId(), email: useId(), subject: useId(), message: useId() };

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
      <Field label="Subject" htmlFor={ids.subject} required>
        <TextInput id={ids.subject} name="subject" required />
      </Field>
      <Field label="Message" htmlFor={ids.message} required>
        <TextArea id={ids.message} name="message" required rows={5} />
      </Field>
      <FormNotice status={status === "error" ? "error" : null} />
      <Button type="submit" disabled={status === "loading"} className="w-full sm:w-auto">
        {status === "loading" ? "Sending…" : "Send message"}
      </Button>
    </form>
  );
}
