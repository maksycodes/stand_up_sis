"use client";

import { useId } from "react";
import { Field, TextInput, Select, TextArea, CheckboxField, Honeypot, FormNotice } from "./fields";
import { useFormSubmit } from "./useFormSubmit";
import { Button } from "@/components/ui/Button";
import { programmeCategories } from "@/content/programmes";

const stages = [
  "Exploring an idea",
  "Early-stage founder",
  "Established business owner",
  "Career professional",
  "Something else",
];

export function CommunityForm() {
  const { status, handleSubmit } = useFormSubmit("/api/forms/community");
  const ids = {
    firstName: useId(),
    lastName: useId(),
    email: useId(),
    location: useId(),
    stage: useId(),
    support: useId(),
    consent: useId(),
  };

  function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    handleSubmit(event, (data) => ({
      firstName: data.get("firstName"),
      lastName: data.get("lastName"),
      email: data.get("email"),
      location: data.get("location"),
      interests: data.getAll("interests"),
      stage: data.get("stage"),
      support: data.get("support"),
      consent: data.get("consent") === "on",
    }));
  }

  if (status === "success") return <FormNotice status="success" />;

  return (
    <form onSubmit={onSubmit} noValidate className="space-y-6">
      <Honeypot />

      <div className="grid gap-6 sm:grid-cols-2">
        <Field label="First name" htmlFor={ids.firstName} required>
          <TextInput id={ids.firstName} name="firstName" required autoComplete="given-name" />
        </Field>
        <Field label="Last name" htmlFor={ids.lastName} required>
          <TextInput id={ids.lastName} name="lastName" required autoComplete="family-name" />
        </Field>
      </div>

      <Field label="Email" htmlFor={ids.email} required>
        <TextInput id={ids.email} name="email" type="email" required autoComplete="email" />
      </Field>

      <Field label="Town / city" htmlFor={ids.location} required hint="No need for a full address.">
        <TextInput id={ids.location} name="location" required autoComplete="address-level2" />
      </Field>

      <fieldset className="space-y-2">
        <legend className="text-sm font-semibold text-ink">What are you interested in?</legend>
        <div className="grid gap-2 sm:grid-cols-2">
          {programmeCategories.map((category) => (
            <label key={category} className="flex items-start gap-2 text-sm text-ink-soft">
              <input
                type="checkbox"
                name="interests"
                value={category}
                className="mt-0.5 h-4 w-4 rounded border-ink/30 text-deep"
              />
              {category}
            </label>
          ))}
        </div>
      </fieldset>

      <Field label="Business stage / career stage" htmlFor={ids.stage} required>
        <Select id={ids.stage} name="stage" required defaultValue="">
          <option value="" disabled>
            Select one
          </option>
          {stages.map((stage) => (
            <option key={stage} value={stage}>
              {stage}
            </option>
          ))}
        </Select>
      </Field>

      <Field label="What support are you looking for?" htmlFor={ids.support}>
        <TextArea id={ids.support} name="support" rows={4} placeholder="Tell us a little about what you need." />
      </Field>

      <CheckboxField id={ids.consent} name="consent" required>
        I&apos;d like to receive emails from Stand Up Sis about community news, events and opportunities. I can
        unsubscribe at any time. See our{" "}
        <a href="/privacy" className="font-semibold text-deep underline">
          Privacy Policy
        </a>
        .
      </CheckboxField>

      <FormNotice status={status === "error" ? "error" : null} />

      <Button type="submit" disabled={status === "loading"} className="w-full sm:w-auto">
        {status === "loading" ? "Submitting…" : "Join the Community"}
      </Button>
    </form>
  );
}
