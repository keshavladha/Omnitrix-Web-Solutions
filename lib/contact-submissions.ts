import { getMongoDb } from "@/lib/mongodb";
import type { Collection, Document } from "mongodb";

export type ContactSubmissionInput = {
  name: string;
  email: string;
  phone?: string;
  company?: string;
  budget?: string;
  projectType?: string;
  message: string;
  page?: string;
  referrer?: string;
  userAgent?: string;
  ip?: string;
};

export type ContactSubmission = ContactSubmissionInput & {
  source: "website";
  status: "new";
  createdAt: Date;
  updatedAt: Date;
};

const collectionName = process.env.MONGODB_CONTACT_COLLECTION ?? "contact_submissions";
let indexesReady: Promise<string[]> | undefined;

function sanitizeText(value: FormDataEntryValue | null, maxLength = 2000) {
  return String(value ?? "")
    .replace(/\u0000/g, "")
    .trim()
    .slice(0, maxLength);
}

export function parseContactForm(formData: FormData, request: Request): ContactSubmissionInput {
  const message = [
    sanitizeText(formData.get("message"), 5000),
    sanitizeText(formData.get("company"))
      ? `Company: ${sanitizeText(formData.get("company"))}`
      : "",
    sanitizeText(formData.get("budget"))
      ? `Budget: ${sanitizeText(formData.get("budget"))}`
      : "",
    sanitizeText(formData.get("phone"))
      ? `Phone: ${sanitizeText(formData.get("phone"))}`
      : "",
  ]
    .filter(Boolean)
    .join("\n\n");

  return {
    name: sanitizeText(formData.get("name"), 120),
    email: sanitizeText(formData.get("email"), 180).toLowerCase(),
    phone: sanitizeText(formData.get("phone"), 40) || undefined,
    company: sanitizeText(formData.get("company"), 180) || undefined,
    budget: sanitizeText(formData.get("budget"), 120) || undefined,
    projectType: sanitizeText(formData.get("projectType"), 160) || undefined,
    message,
    page: sanitizeText(formData.get("page"), 500) || request.headers.get("referer") || undefined,
    referrer: request.headers.get("referer") || undefined,
    userAgent: request.headers.get("user-agent") || undefined,
    ip:
      request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
      request.headers.get("x-real-ip") ||
      undefined,
  };
}

export function validateContactSubmission(payload: ContactSubmissionInput) {
  const errors: string[] = [];

  if (!payload.name || payload.name.length < 2) errors.push("Name is required.");
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(payload.email)) errors.push("Valid email is required.");
  if (!payload.message || payload.message.length < 5) errors.push("Message is required.");

  return errors;
}

async function getContactCollection(): Promise<Collection<ContactSubmission>> {
  const db = await getMongoDb();
  const collection = db.collection<ContactSubmission>(collectionName);

  indexesReady ??= collection.createIndexes([
    { key: { createdAt: -1 }, name: "createdAt_desc" },
    { key: { email: 1, createdAt: -1 }, name: "email_createdAt" },
    { key: { status: 1, createdAt: -1 }, name: "status_createdAt" },
    { key: { projectType: 1, createdAt: -1 }, name: "projectType_createdAt", sparse: true },
  ]);

  await indexesReady;
  return collection;
}

export async function saveContactSubmission(input: ContactSubmissionInput) {
  const now = new Date();
  const collection = await getContactCollection();
  const document: ContactSubmission = {
    ...input,
    source: "website",
    status: "new",
    createdAt: now,
    updatedAt: now,
  };

  const result = await collection.insertOne(document);
  return { id: result.insertedId.toString() };
}
