/**
 * Email notifications for form submissions, via the Resend REST API.
 * No dependency on the resend SDK — just fetch, so this works the moment
 * RESEND_API_KEY + FORM_NOTIFY_EMAIL are set in the environment, and is a
 * no-op (logged, not failed) until then.
 */
export async function sendNotification(params: { subject: string; text: string }) {
  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.FORM_NOTIFY_EMAIL;
  const from = process.env.FORM_FROM_EMAIL ?? "Stand Up Sis Website <onboarding@resend.dev>";

  if (!apiKey || !to) {
    console.warn(
      `[forms] Email notification skipped (RESEND_API_KEY / FORM_NOTIFY_EMAIL not set). Subject: ${params.subject}`
    );
    return { sent: false as const };
  }

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from,
      to,
      subject: params.subject,
      text: params.text,
    }),
  });

  if (!res.ok) {
    console.error("[forms] Resend notification failed", await res.text());
    return { sent: false as const };
  }

  return { sent: true as const };
}
