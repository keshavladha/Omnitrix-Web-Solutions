import {
  parseContactForm,
  saveContactSubmission,
  validateContactSubmission,
} from "@/lib/contact-submissions";
import { NextResponse } from "next/server";

export const runtime = "nodejs";

function contactRedirect(request: Request, status: "queued" | "sent") {
  const referer = request.headers.get("referer");
  const redirectUrl = new URL(referer ?? "/", request.url);
  redirectUrl.searchParams.set("contact", status);

  if (redirectUrl.pathname === "/") {
    redirectUrl.hash = "contact";
  }

  return NextResponse.redirect(redirectUrl, { status: 303 });
}

export async function POST(request: Request) {
  const formData = await request.formData() as unknown as FormData;
  const payload = parseContactForm(formData, request);
  const errors = validateContactSubmission(payload);

  if (errors.length > 0) {
    return NextResponse.json({ ok: false, errors }, { status: 400 });
  }

  if (!process.env.MONGODB_URI) {
    return contactRedirect(request, "queued");
  }

  try {
    const { id } = await saveContactSubmission(payload);
    const acceptsJson = request.headers.get("accept")?.includes("application/json");

    if (acceptsJson) {
      return NextResponse.json({ ok: true, id }, { status: 201 });
    }

    return contactRedirect(request, "sent");
  } catch (error) {
    console.error("Contact submission save failed", error);
    return NextResponse.json({ ok: false, error: "Unable to save submission." }, { status: 503 });
  }
}
