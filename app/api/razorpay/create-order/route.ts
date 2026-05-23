import { NextResponse } from 'next/server';
import { createOrder } from '@/lib/razorpay';

export async function POST(request: Request) {
  try {
    const { amount, currency, receipt } = await request.json();
    if (!amount || !receipt) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }
    const order = await createOrder(amount, currency || 'INR', receipt);
    return NextResponse.json(order);
  } catch (error: any) {
    console.error('Razorpay create order error:', error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
