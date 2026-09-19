export class ValidationError extends Error {}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function requireString(data: Record<string, unknown>, field: string, label = field): string {
  const value = data[field];
  if (typeof value !== "string" || !value.trim()) {
    throw new ValidationError(`${label} is required.`);
  }
  return value.trim();
}

export function optionalString(data: Record<string, unknown>, field: string): string | undefined {
  const value = data[field];
  return typeof value === "string" && value.trim() ? value.trim() : undefined;
}

export function requireEmail(data: Record<string, unknown>, field = "email"): string {
  const value = requireString(data, field, "Email");
  if (!EMAIL_RE.test(value)) {
    throw new ValidationError("Please provide a valid email address.");
  }
  return value;
}

export function requireConsent(data: Record<string, unknown>, field = "consent") {
  if (data[field] !== true) {
    throw new ValidationError("Please confirm you're happy to be contacted.");
  }
}
