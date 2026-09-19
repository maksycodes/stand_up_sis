/** True if the honeypot field was filled in — real visitors never see or fill it. */
export function isHoneypotTripped(value: unknown): boolean {
  return typeof value === "string" && value.trim().length > 0;
}

/**
 * Verifies a Cloudflare Turnstile token when TURNSTILE_SECRET_KEY is
 * configured. Until then, this passes through so forms keep working in
 * development and at early launch — wire up Turnstile on the frontend
 * (data-sitekey) and set the secret key here when spam becomes an issue.
 */
export async function verifyTurnstile(token: unknown): Promise<boolean> {
  const secret = process.env.TURNSTILE_SECRET_KEY;
  if (!secret) return true;
  if (typeof token !== "string" || !token) return false;

  const res = await fetch("https://challenges.cloudflare.com/turnstile/v0/siteverify", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({ secret, response: token }),
  });
  const data = (await res.json()) as { success: boolean };
  return data.success;
}
