import Razorpay from 'razorpay';
import { NextResponse } from 'next/server';

/* ─── Razorpay order creation ──────────────────────────────────────────────
   Requires the following env vars in .env.local:
     RAZORPAY_KEY_ID
     RAZORPAY_KEY_SECRET
   See .env.local.example for the full list. ─────────────────────────────── */

export async function POST(request) {
  const keyId = process.env.RAZORPAY_KEY_ID;
  const keySecret = process.env.RAZORPAY_KEY_SECRET;

  if (
    !keyId ||
    !keySecret ||
    keyId.includes('YOUR_') ||
    keySecret.includes('YOUR_')
  ) {
    return NextResponse.json(
      {
        error:
          'Razorpay keys are not configured. Set RAZORPAY_KEY_ID and RAZORPAY_KEY_SECRET in .env.local.',
      },
      { status: 500 },
    );
  }

  let body;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: 'Invalid JSON body' }, { status: 400 });
  }

  const { amount, currency = 'INR', receipt, notes = {} } = body ?? {};

  if (!Number.isInteger(amount) || amount <= 0) {
    return NextResponse.json(
      { error: 'Amount (in paise) must be a positive integer.' },
      { status: 400 },
    );
  }

  const instance = new Razorpay({ key_id: keyId, key_secret: keySecret });

  try {
    const order = await instance.orders.create({
      amount,
      currency,
      receipt: receipt ?? `rcpt_${Date.now()}`,
      notes,
    });

    return NextResponse.json(order);
  } catch (err) {
    console.error('Razorpay order error:', err);
    return NextResponse.json(
      { error: err?.error?.description ?? 'Order creation failed' },
      { status: 502 },
    );
  }
}
