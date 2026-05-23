import Razorpay from 'razorpay';
import crypto from 'crypto';

const razorpayInstance = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID || '',
  key_secret: process.env.RAZORPAY_KEY_SECRET || '',
});

export const createOrder = async (
  amount: number,
  currency: string = 'INR',
  receipt: string
) => {
  return razorpayInstance.orders.create({
    amount,
    currency,
    receipt,
    payment_capture: true,
  });
};

/**
 * Verifies the Razorpay payment signature using HMAC-SHA256.
 * Returns true if the signature matches.
 */
export const verifySignature = (
  razorpay_order_id: string,
  razorpay_payment_id: string,
  razorpay_signature: string
): boolean => {
  const secret = process.env.RAZORPAY_KEY_SECRET || '';
  const body = `${razorpay_order_id}|${razorpay_payment_id}`;
  const expectedSignature = crypto
    .createHmac('sha256', secret)
    .update(body)
    .digest('hex');
  return expectedSignature === razorpay_signature;
};
