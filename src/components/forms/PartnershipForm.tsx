"use client";

import { useId, type FormEvent } from "react";
import { Field, TextInput, Select, TextArea, Honeypot, FormNotice } from "./fields";
import { useFormSubmit } from "./useFormSubmit";
import { Button } from "@/components/ui/Button";

const orgTypes = [
  "Council / local authority",
  "Grant funder",
  "Corporate sponsor",
  "Philanthropic organisation",
  "Impact investor",
  "Training organisation",
  "Community organisation",
  "Other",
];

const partnershipTypes = [
  "Programme sponsorship",
  "Workshop delivery",
  "Mentorship",
  "Funding",
  "Community partnership",
  "Venue / workspace support",
  "Skills & professional expertise",
  "Other",
];

export function PartnershipForm() {
  const { status, handleSubmit } = useFormSubmit("/api/forms/partnership");
  const ids = {
    name: useId(),
    organisation: useId(),
    role: useId(),
    email: useId(),
    orgType: useId(),
    partnershipType: useId(),
    message: useId(),
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
        <Field label="Organisation" htmlFor={ids.organisation} required>
          <TextInput id={ids.organisation} name="organisation" required autoComplete="organization" />
        </Field>
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        <Field label="Role" htmlFor={ids.role} required>
          <TextInput id={ids.role} name="role" required autoComplete="organization-title" />
        </Field>
        <Field label="Email" htmlFor={ids.email} required>
          <TextInput id={ids.email} name="email" type="email" required autoComplete="email" />
        </Field>
      </div>

      <Field label="Type of organisation" htmlFor={ids.orgType} required>
        <Select id={ids.orgType} name="orgType" required defaultValue="">
          <option value="" disabled>
            Select one
          </option>
          {orgTypes.map((type) => (
            <option key={type} value={type}>
              {type}
            </option>
          ))}
        </Select>
      </Field>

      <Field label="Type of partnership you're interested in" htmlFor={ids.partnershipType} required>
        <Select id={ids.partnershipType} name="partnershipType" required defaultValue="">
          <option value="" disabled>
            Select one
          </option>
          {partnershipTypes.map((type) => (
            <option key={type} value={type}>
              {type}
            </option>
          ))}
        </Select>
      </Field>

      <Field label="Message" htmlFor={ids.message} required>
        <TextArea id={ids.message} name="message" required rows={5} />
      </Field>

      <FormNotice status={status === "error" ? "error" : null} />

      <Button type="submit" disabled={status === "loading"} className="w-full sm:w-auto">
        {status === "loading" ? "Submitting…" : "Send enquiry"}
      </Button>
    </form>
  );
}
