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
    const name = requireString(data, "name", "Full name");
    const email = requireEmail(data);
    const eventSlug = requireString(data, "eventSlug", "Event");
    const eventTitle = requireString(data, "eventTitle", "Event");
    const waitlist = data.waitlist === true;

    await saveSubmission("event-registration", { name, email, eventSlug, eventTitle, waitlist });
    await sendNotification({
      subject: `${waitlist ? "Waitlist" : "Registration"}: ${eventTitle}`,
      text: `Name: ${name}\nEmail: ${email}\nEvent: ${eventTitle} (${eventSlug})\nWaitlist: ${waitlist ? "yes" : "no"}`,
    });

    return NextResponse.json({ ok: true });
  } catch (error) {
    if (error instanceof ValidationError) {
      return NextResponse.json({ ok: false, error: error.message }, { status: 400 });
    }
    console.error("[api/forms/event-registration]", error);
    return NextResponse.json({ ok: false, error: "Something went wrong." }, { status: 500 });
  }
}
