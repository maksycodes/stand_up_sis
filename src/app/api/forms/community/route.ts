import { NextResponse } from "next/server";
import { isHoneypotTripped } from "@/lib/forms/spam";
import { saveSubmission } from "@/lib/forms/store";
import { sendNotification } from "@/lib/forms/notify";
import { ValidationError, requireConsent, requireEmail, requireString, optionalString } from "@/lib/forms/validate";

export async function POST(request: Request) {
  const data = await request.json().catch(() => ({}));

  if (isHoneypotTripped(data.company)) {
    return NextResponse.json({ ok: true });
  }

  try {
    const firstName = requireString(data, "firstName", "First name");
    const lastName = requireString(data, "lastName", "Last name");
    const email = requireEmail(data);
    const location = requireString(data, "location", "Town / city");
    const stage = requireString(data, "stage", "Business / career stage");
    const support = optionalString(data, "support");
    const interests = Array.isArray(data.interests) ? data.interests : [];
    requireConsent(data);

    const record = { firstName, lastName, email, location, stage, support, interests };
    await saveSubmission("community", record);
    await sendNotification({
      subject: `New community sign-up: ${firstName} ${lastName}`,
      text: [
        `Name: ${firstName} ${lastName}`,
        `Email: ${email}`,
        `Location: ${location}`,
        `Stage: ${stage}`,
        `Interests: ${interests.join(", ") || "—"}`,
        `Support requested: ${support ?? "—"}`,
      ].join("\n"),
    });

    return NextResponse.json({ ok: true });
  } catch (error) {
    if (error instanceof ValidationError) {
      return NextResponse.json({ ok: false, error: error.message }, { status: 400 });
    }
    console.error("[api/forms/community]", error);
    return NextResponse.json({ ok: false, error: "Something went wrong." }, { status: 500 });
  }
}
