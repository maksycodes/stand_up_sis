/**
 * Submission storage, kept deliberately swappable.
 *
 * Today: logs to the server console (visible in Vercel function logs),
 * so nothing is silently lost during early launch.
 *
 * Next step: point this at Supabase (or any Postgres) — create a table
 * per form, add SUPABASE_URL / SUPABASE_SERVICE_ROLE_KEY to the
 * environment, and replace the body of `saveSubmission` with an insert.
 * No API route call sites need to change.
 */
/**
 * Matches this table (run once in the Supabase SQL editor):
 *
 *   create table form_submissions (
 *     id uuid primary key default gen_random_uuid(),
 *     form_name text not null,
 *     submitted_at timestamptz not null default now(),
 *     data jsonb not null
 *   );
 *
 * Each form's fields go into `data` as-is, so the table never needs a
 * migration when a form gains or loses a field.
 */
export async function saveSubmission(formName: string, data: Record<string, unknown>) {
  const submittedAt = new Date().toISOString();

  const supabaseUrl = process.env.SUPABASE_URL;
  const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

  if (supabaseUrl && supabaseKey) {
    const res = await fetch(`${supabaseUrl}/rest/v1/form_submissions`, {
      method: "POST",
      headers: {
        apikey: supabaseKey,
        Authorization: `Bearer ${supabaseKey}`,
        "Content-Type": "application/json",
        Prefer: "return=minimal",
      },
      body: JSON.stringify({ form_name: formName, submitted_at: submittedAt, data }),
    });
    if (!res.ok) {
      console.error("[forms] Supabase insert failed", await res.text());
    }
    return;
  }

  console.log("[forms] submission", JSON.stringify({ formName, submittedAt, ...data }));
}
