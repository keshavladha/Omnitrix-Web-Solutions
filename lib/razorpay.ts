import Razorpay from 'razorpay';
import crypto from 'crypto';

/**
 * Returns a Razorpay instance initialized lazily at call-time,
 * so the SDK never tries to read env vars at module-load / build time.
 */
function getRazorpay() {
  const key_id = process.env.RAZORPAY_KEY_ID;
  const key_secret = process.env.RAZORPAY_KEY_SECRET;

  if (!key_id || !key_secret) {
    throw new Error('RAZORPAY_KEY_ID and RAZORPAY_KEY_SECRET must be set in environment variables.');
  }

  return new Razorpay({ key_id, key_secret });
}

export const createOrder = async (
  amount: number,
  currency: string = 'INR',
  receipt: string
) => {
  return getRazorpay().orders.create({
    amount,
    currency,
    receipt,
    payment_capture: true,
  });
};

/**
 * Verifies the Razorpay payment signature using HMAC-SHA256 with timing-safe comparison.
 * Algorithm: HMAC-SHA256(order_id + "|" + payment_id, KEY_SECRET)
 */
export const verifySignature = (
  razorpay_order_id: string,
  razorpay_payment_id: string,
  razorpay_signature: string
): boolean => {
  const secret = process.env.RAZORPAY_KEY_SECRET;
  if (!secret) throw new Error('RAZORPAY_KEY_SECRET is not set.');

  const body = `${razorpay_order_id}|${razorpay_payment_id}`;
  const expectedSignature = crypto
    .createHmac('sha256', secret)
    .update(body)
    .digest('hex');

  // Timing-safe comparison to prevent timing attacks
  return crypto.timingSafeEqual(
    Buffer.from(expectedSignature, 'hex'),
    Buffer.from(razorpay_signature, 'hex')
  );
};
