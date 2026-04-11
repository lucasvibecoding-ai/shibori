import { NextResponse } from 'next/server';
import { Resend } from 'resend';
import { render } from '@react-email/render';
import OrderConfirmation from '../../../../emails/OrderConfirmation';

const resend = new Resend(process.env.RESEND_API_KEY!);

const PAYPAL_API = process.env.PAYPAL_MODE === 'live'
  ? 'https://api-m.paypal.com'
  : 'https://api-m.sandbox.paypal.com';

async function getAccessToken() {
  const res = await fetch(`${PAYPAL_API}/v1/oauth2/token`, {
    method: 'POST',
    headers: {
      'Authorization': `Basic ${Buffer.from(`${process.env.PAYPAL_CLIENT_ID}:${process.env.PAYPAL_CLIENT_SECRET}`).toString('base64')}`,
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: 'grant_type=client_credentials',
  });
  const data = await res.json();
  return data.access_token;
}

export async function POST(request: Request) {
  try {
    const { orderID } = await request.json();
    const accessToken = await getAccessToken();

    const res = await fetch(`${PAYPAL_API}/v2/checkout/orders/${orderID}/capture`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${accessToken}`,
        'Content-Type': 'application/json',
      },
    });

    const data = await res.json();

    if (data.status === 'COMPLETED') {
      const customerEmail = data.payer?.email_address || 'hello@shiboriclass.com';
      const html = await render(OrderConfirmation({ customerEmail }));

      await resend.emails.send({
        from: 'Aiko Mori <hello@shiboriclass.com>',
        to: customerEmail,
        replyTo: 'hello@shiboriclass.com',
        subject: 'About your course purchase. Important update',
        html,
      });

      // Server-side CAPI Purchase event
      const capiToken = process.env.META_CAPI_ACCESS_TOKEN;
      if (capiToken) {
        const pixelId = '2779828799045473';
        const eventId = orderID;
        await fetch(
          `https://graph.facebook.com/v21.0/${pixelId}/events?access_token=${capiToken}`,
          {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              data: [
                {
                  event_name: 'Purchase',
                  event_time: Math.floor(Date.now() / 1000),
                  event_id: eventId,
                  action_source: 'website',
                  user_data: {
                    em: [customerEmail],
                  },
                  custom_data: {
                    value: 47.0,
                    currency: 'USD',
                    content_name: 'Shibori Masterclass',
                    content_type: 'product',
                  },
                },
              ],
            }),
          }
        ).catch((err) => console.error('CAPI Purchase error:', err));
      }

      return NextResponse.json({ success: true, data });
    }

    return NextResponse.json(
      { error: 'Payment not completed' },
      { status: 400 }
    );
  } catch (error) {
    console.error('PayPal capture error:', error);
    return NextResponse.json(
      { error: 'Failed to capture PayPal payment' },
      { status: 500 }
    );
  }
}
