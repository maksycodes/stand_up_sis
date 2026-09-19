import { NextResponse } from "next/server";
import { isHoneypotTripped } from "@/lib/forms/spam";
import { saveSubmission } from "@/lib/forms/store";
import { sendNotification } from "@/lib/forms/notify";
import { ValidationError, requireEmail, requireString, optionalString } from "@/lib/forms/validate";

export async function POST(request: Request) {
  const data = await request.json().catch(() => ({}));

  if (isHoneypotTripped(data.company)) {
    return NextResponse.json({ ok: true });
  }

  try {
    const name = requireString(data, "name", "Name");
    const email = requireEmail(data);
    const role = requireString(data, "role", "Current job or business");
    const expertise = requireString(data, "expertise", "Area of expertise");
    const support = requireString(data, "support", "Type of support");
    const availability = requireString(data, "availability", "Availability");
    const why = requireString(data, "why", "Why you want to mentor");
    const linkedin = optionalString(data, "linkedin");

    const record = { name, email, role, expertise, linkedin, support, availability, why };
    await saveSubmission("mentor", record);
    await sendNotification({
      subject: `New mentor application: ${name}`,
      text: Object.entries(record)
        .map(([key, value]) => `${key}: ${value ?? "—"}`)
        .join("\n"),
    });

    return NextResponse.json({ ok: true });
  } catch (error) {
    if (error instanceof ValidationError) {
      return NextResponse.json({ ok: false, error: error.message }, { status: 400 });
    }
    console.error("[api/forms/mentor]", error);
    return NextResponse.json({ ok: false, error: "Something went wrong." }, { status: 500 });
  }
}
