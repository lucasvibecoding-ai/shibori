import { NextResponse } from 'next/server';
import Stripe from 'stripe';
import { COURSE_PRICE_CENTS, UPSELL_COURSE_SLUG, extrasCents } from '../../../lib/pricing';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2026-02-25.clover',
});

// Two jobs, picked by the body:
//
// 1. { paymentIntentId, includeCourse }: the upsell course box was ticked/unticked (or a pay
//    button is about to confirm). Sets the amount + metadata so Express Checkout and the final
//    charge always match the live total. The PI's client_secret stays valid across updates.
//
// 2. { paymentIntentId, email }: stash the address the buyer TYPED at checkout onto the
//    PaymentIntent's metadata. PayPal overwrites billing_details.email with the PayPal account
//    address, so without this the typed address is lost the moment the tab closes and the
//    webhook cannot tell the two apart. Metadata only: the amount is never touched here.
export async function POST(request: Request) {
  try {
    const body = (await request.json().catch(() => ({}))) as {
      paymentIntentId?: string;
      includeCourse?: boolean;
      email?: string;
    };
    const piId = body.paymentIntentId;

    if (typeof body.includeCourse === 'boolean') {
      if (!piId) {
        return NextResponse.json({ error: 'Missing paymentIntentId' }, { status: 400 });
      }
      const includeCourse = body.includeCourse;
      const amount = COURSE_PRICE_CENTS + extrasCents(includeCourse);
      // Stripe MERGES metadata on update: omitting a key does NOT remove it. A key is only
      // unset by posting an empty string, so untick must send includes_course: ''.
      const updated = await stripe.paymentIntents.update(piId, {
        amount,
        metadata: { includes_course: includeCourse ? UPSELL_COURSE_SLUG : '' },
      });
      return NextResponse.json({ amount: updated.amount });
    }

    const email = typeof body.email === 'string' ? body.email.trim().toLowerCase() : '';
    if (!piId || !email.includes('@')) {
      return NextResponse.json({ error: 'Missing paymentIntentId or email' }, { status: 400 });
    }
    const updated = await stripe.paymentIntents.update(piId, { metadata: { buyer_email: email } });
    return NextResponse.json({ ok: true, amount: updated.amount });
  } catch (error) {
    console.error('Update payment intent error:', error);
    return NextResponse.json({ error: 'Failed to update payment intent' }, { status: 500 });
  }
}
