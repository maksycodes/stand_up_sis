import { NextResponse } from "next/server";
import { isHoneypotTripped } from "@/lib/forms/spam";
import { saveSubmission } from "@/lib/forms/store";
import { sendNotification } from "@/lib/forms/notify";
import { ValidationError, requireEmail, requireString } from "@/lib/forms/validate";

export async function POST(request: Request) {
  const data = await request.json().catch(() => ({}));

  if (isHoneypotTripped(data.company)) {
    return NextResponse.json({ ok: true });
  }

  try {
    const name = requireString(data, "name", "Name");
    const organisation = requireString(data, "organisation", "Organisation");
    const role = requireString(data, "role", "Role");
    const email = requireEmail(data);
    const orgType = requireString(data, "orgType", "Type of organisation");
    const partnershipType = requireString(data, "partnershipType", "Type of partnership");
    const message = requireString(data, "message", "Message");

    const record = { name, organisation, role, email, orgType, partnershipType, message };
    await saveSubmission("partnership", record);
    await sendNotification({
      subject: `New partnership enquiry: ${organisation}`,
      text: Object.entries(record)
        .map(([key, value]) => `${key}: ${value}`)
        .join("\n"),
    });

    return NextResponse.json({ ok: true });
  } catch (error) {
    if (error instanceof ValidationError) {
      return NextResponse.json({ ok: false, error: error.message }, { status: 400 });
    }
    console.error("[api/forms/partnership]", error);
    return NextResponse.json({ ok: false, error: "Something went wrong." }, { status: 500 });
  }
}
