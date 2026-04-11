import Stripe from 'stripe';
import { Resend } from 'resend';
import { render } from '@react-email/render';
import OrderConfirmation from '../../../emails/OrderConfirmation';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2026-02-25.clover',
});

const resend = new Resend(process.env.RESEND_API_KEY!);

export async function POST(request: Request) {
  const rawBody = await request.text();
  const signature = request.headers.get('stripe-signature');

  if (!signature) {
    return new Response('Missing stripe-signature header', { status: 400 });
  }

  let event: Stripe.Event;

  try {
    event = stripe.webhooks.constructEvent(
      rawBody,
      signature,
      process.env.STRIPE_WEBHOOK_SECRET!
    );
  } catch (err) {
    console.error('Webhook signature verification failed:', err);
    return new Response('Invalid signature', { status: 400 });
  }

  if (event.type === 'payment_intent.succeeded') {
    const paymentIntent = event.data.object as Stripe.PaymentIntent;

    if (paymentIntent.metadata?.product_id !== process.env.STRIPE_PRODUCT_ID) {
      return new Response('ok', { status: 200 });
    }

    let customerEmail = paymentIntent.receipt_email;

    if (!customerEmail && paymentIntent.latest_charge) {
      const charge = await stripe.charges.retrieve(paymentIntent.latest_charge as string);
      customerEmail = charge.billing_details?.email || null;
    }

    const toEmail = customerEmail || 'hello@shiboricraft.com';
    console.log(`Sending confirmation email to: ${toEmail} (receipt_email was: ${paymentIntent.receipt_email})`);
    const html = await render(OrderConfirmation({ customerEmail: toEmail }));

    await resend.emails.send({
      from: 'Aiko Mori <hello@shiboricraft.com>',
      to: toEmail,
      replyTo: 'hello@shiboricraft.com',
      subject: 'About your course purchase. Important update',
      html,
    });
  }

  return new Response('ok', { status: 200 });
}
