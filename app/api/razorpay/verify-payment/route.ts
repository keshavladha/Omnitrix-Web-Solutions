import { NextResponse } from "next/server";
import crypto from "crypto";

export const runtime = "nodejs";

/**
 * POST /api/razorpay/verify-payment
 *
 * Verifies the Razorpay payment signature using HMAC-SHA256.
 * The signature is computed as:
 *   HMAC-SHA256(order_id + "|" + payment_id, RAZORPAY_KEY_SECRET)
 *
 * Returns 200 { ok: true } on success, 400 on mismatch / missing fields.
 * The KEY_SECRET never leaves the server.
 */
export async function POST(request: Request) {
  try {
    const body = await request.json().catch(() => ({}));

    const {
      razorpay_order_id,
      razorpay_payment_id,
      razorpay_signature,
    } = body as Record<string, string>;

    // --- 1. Validate required fields ---
    if (!razorpay_order_id || !razorpay_payment_id || !razorpay_signature) {
      return NextResponse.json(
        { ok: false, error: "Missing required fields: razorpay_order_id, razorpay_payment_id, razorpay_signature." },
        { status: 400 }
      );
    }

    // --- 2. Compute expected signature ---
    const secret = process.env.RAZORPAY_KEY_SECRET;
    if (!secret) {
      console.error("RAZORPAY_KEY_SECRET is not configured.");
      return NextResponse.json(
        { ok: false, error: "Payment verification service misconfigured." },
        { status: 500 }
      );
    }

    const payload = `${razorpay_order_id}|${razorpay_payment_id}`;
    const expectedSignature = crypto
      .createHmac("sha256", secret)
      .update(payload)
      .digest("hex");

    // --- 3. Compare signatures (timing-safe) ---
    const signaturesMatch = crypto.timingSafeEqual(
      Buffer.from(expectedSignature, "hex"),
      Buffer.from(razorpay_signature, "hex")
    );

    if (!signaturesMatch) {
      console.warn("Razorpay signature mismatch", { razorpay_order_id, razorpay_payment_id });
      return NextResponse.json(
        { ok: false, error: "Payment verification failed. Signature mismatch." },
        { status: 400 }
      );
    }

    // --- 4. Signatures match — payment is genuine ---
    console.log("Razorpay payment verified", { razorpay_order_id, razorpay_payment_id });
    return NextResponse.json(
      { ok: true, message: "Payment verified successfully." },
      { status: 200 }
    );
  } catch (error) {
    console.error("Verify payment route error", error);
    return NextResponse.json(
      { ok: false, error: "Unexpected error during payment verification." },
      { status: 500 }
    );
  }
}
