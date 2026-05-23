import { NextResponse } from "next/server";

export const runtime = "nodejs";

const { RAZORPAY_KEY_ID, RAZORPAY_KEY_SECRET } = process.env;

function getAuthorizationHeader() {
  if (!RAZORPAY_KEY_ID || !RAZORPAY_KEY_SECRET) {
    throw new Error("Missing Razorpay API keys. Set RAZORPAY_KEY_ID and RAZORPAY_KEY_SECRET in environment variables.");
  }

  return `Basic ${Buffer.from(`${RAZORPAY_KEY_ID}:${RAZORPAY_KEY_SECRET}`).toString("base64")}`;
}

export async function POST(request: Request) {
  const body = await request.json().catch(() => ({}));
  const amount = Number(body.amount ?? 10000);
  const currency = String(body.currency ?? "INR");
  const receipt = String(body.receipt ?? `receipt_${Date.now()}`);
  const notes = typeof body.notes === "object" && body.notes !== null ? body.notes : {};

  if (!amount || amount < 1) {
    return NextResponse.json({ ok: false, error: "Invalid amount." }, { status: 400 });
  }

  try {
    const response = await fetch("https://api.razorpay.com/v1/orders", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: getAuthorizationHeader(),
      },
      body: JSON.stringify({
        amount,
        currency,
        receipt,
        payment_capture: 1,
        notes,
      }),
    });

    const data = await response.json();

    if (!response.ok) {
      console.error("Razorpay order creation failed", data);
      return NextResponse.json({ ok: false, error: data.error?.description ?? "Unable to create Razorpay order." }, { status: 502 });
    }

    return NextResponse.json({ ok: true, order: data }, { status: 201 });
  } catch (error) {
    console.error("Razorpay order route error", error);
    return NextResponse.json({ ok: false, error: "Unexpected Razorpay order error." }, { status: 500 });
  }
}
