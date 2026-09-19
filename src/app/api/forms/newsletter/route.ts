import { NextResponse } from "next/server";
import { isHoneypotTripped } from "@/lib/forms/spam";
import { saveSubmission } from "@/lib/forms/store";
import { sendNotification } from "@/lib/forms/notify";
import { ValidationError, requireConsent, requireEmail } from "@/lib/forms/validate";

export async function POST(request: Request) {
  const data = await request.json().catch(() => ({}));

  if (isHoneypotTripped(data.company)) {
    return NextResponse.json({ ok: true });
  }

  try {
    const email = requireEmail(data);
    requireConsent(data);

    await saveSubmission("newsletter", { email, consent: true });
    await sendNotification({
      subject: "New Stand Up Sis newsletter signup",
      text: `Email: ${email}`,
    });

    return NextResponse.json({ ok: true });
  } catch (error) {
    if (error instanceof ValidationError) {
      return NextResponse.json({ ok: false, error: error.message }, { status: 400 });
    }
    console.error("[api/forms/newsletter]", error);
    return NextResponse.json({ ok: false, error: "Something went wrong." }, { status: 500 });
  }
}
