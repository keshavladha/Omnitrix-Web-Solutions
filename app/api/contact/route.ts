import { getMongoClient } from "@/lib/mongodb";
import { NextResponse } from "next/server";

type ContactPayload = {
  name: string;
  email: string;
  projectType?: string;
  message: string;
};

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function POST(request: Request) {
  const formData = await request.formData();
  const payload: ContactPayload = {
    name: String(formData.get("name") ?? "").trim(),
    email: String(formData.get("email") ?? "").trim(),
    projectType: String(formData.get("projectType") ?? "").trim(),
    message: String(formData.get("message") ?? "").trim(),
  };

  if (!payload.name || !payload.email || !payload.message || !isValidEmail(payload.email)) {
    return NextResponse.json({ ok: false, error: "Invalid contact payload." }, { status: 400 });
  }

  if (!process.env.MONGODB_URI) {
    return NextResponse.redirect(new URL("/?contact=queued#contact", request.url), { status: 303 });
  }

  try {
    const client = await getMongoClient();
    const db = client.db(process.env.MONGODB_DB ?? "omnitrix");

    await db.collection("contact_submissions").insertOne({
      ...payload,
      source: "website",
      createdAt: new Date(),
    });
  } catch {
    return NextResponse.json({ ok: false, error: "Unable to save submission." }, { status: 503 });
  }

  return NextResponse.redirect(new URL("/?contact=sent#contact", request.url), { status: 303 });
}
