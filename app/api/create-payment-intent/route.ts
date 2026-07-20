import { NextResponse } from 'next/server';
import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2026-02-25.clover',
});

export async function POST(request: Request) {
  try {
    await request.json().catch(() => ({}));
    const productId = process.env.STRIPE_PRODUCT_ID!;

    const product = await stripe.products.retrieve(
      productId,
      { expand: ['default_price'] }
    );
    const price = product.default_price as Stripe.Price;

    // Buyer location for the VAT counter (additive metadata; absent in local dev).
    const metadata: Record<string, string> = {
      product_id: product.id,
      product_name: product.name,
    };
    const ipCountry = request.headers.get('x-vercel-ip-country');
    const ipRegion = request.headers.get('x-vercel-ip-country-region');
    const ipCityRaw = request.headers.get('x-vercel-ip-city');
    const ipAddress =
      request.headers.get('x-real-ip') ||
      request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ||
      '';
    if (ipCountry) metadata.ip_country = ipCountry;
    if (ipRegion) metadata.ip_region = ipRegion;
    if (ipCityRaw) metadata.ip_city = decodeURIComponent(ipCityRaw);
    if (ipAddress) metadata.ip_address = ipAddress;

    const paymentIntent = await stripe.paymentIntents.create({
      amount: price.unit_amount!,
      currency: price.currency,
      automatic_payment_methods: {
        enabled: true,
        allow_redirects: 'always',
      },
      metadata,
    });

    return NextResponse.json({ clientSecret: paymentIntent.client_secret });
  } catch (error) {
    console.error('Payment intent error:', error);
    return NextResponse.json(
      { error: 'Failed to create payment intent' },
      { status: 500 }
    );
  }
}
