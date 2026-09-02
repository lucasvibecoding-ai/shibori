import { NextResponse } from 'next/server';
import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2026-02-25.clover',
});

// Stash the address the buyer TYPED at checkout onto the PaymentIntent's metadata.
// PayPal overwrites billing_details.email with the PayPal account address, so without
// this the typed address is lost the moment the tab closes and the webhook cannot tell
// the two apart. Metadata only: the amount is never touched here.
export async function POST(request: Request) {
  try {
    const body = (await request.json().catch(() => ({}))) as {
      paymentIntentId?: string;
      email?: string;
    };
    const piId = body.paymentIntentId;
    const email = typeof body.email === 'string' ? body.email.trim().toLowerCase() : '';
    if (!piId || !email.includes('@')) {
      return NextResponse.json({ error: 'Missing paymentIntentId or email' }, { status: 400 });
    }
    await stripe.paymentIntents.update(piId, { metadata: { buyer_email: email } });
    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error('Update payment intent error:', error);
    return NextResponse.json({ error: 'Failed to update payment intent' }, { status: 500 });
  }
}
