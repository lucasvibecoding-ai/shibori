'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

declare global {
  interface Window {
    fbq?: (action: string, event: string, params?: Record<string, unknown>, options?: { eventID: string }) => void;
  }
}

export default function CheckoutButton({ productName = 'Waterfall Terrarium Masterclass' }: { productName?: string }) {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const handleClick = () => {
    setIsLoading(true);

    const eventId = crypto.randomUUID();

    if (window.fbq) {
      window.fbq('track', 'InitiateCheckout', {
        value: 47.00,
        currency: 'USD',
        content_name: productName,
        content_category: 'Online Course',
      }, { eventID: eventId });
    }

    navigator.sendBeacon('/api/track-checkout', JSON.stringify({ eventId, productName }));

    router.push(`/checkout?product=${encodeURIComponent(productName)}`);
  };

  return (
    <>
      {isLoading && (
        <div className="fixed inset-0 z-50 flex items-center justify-center" style={{ background: 'rgba(26,46,26,0.8)', backdropFilter: 'blur(4px)' }}>
          <div style={{ background: '#f5f8f5', padding: '32px 40px', borderRadius: 16, boxShadow: '0 8px 32px rgba(0,0,0,0.2)', textAlign: 'center', maxWidth: 320, margin: '0 16px' }}>
            <div style={{ width: 48, height: 48, border: '4px solid #e5e7eb', borderTopColor: '#2d7a4f', borderRadius: '50%', animation: 'spin 0.8s linear infinite', margin: '0 auto 20px' }} />
            <p style={{ color: '#1a2e1a', fontSize: 20, fontWeight: 500 }}>Loading Secure Checkout...</p>
            <style dangerouslySetInnerHTML={{ __html: '@keyframes spin { to { transform: rotate(360deg); } }' }} />
          </div>
        </div>
      )}

      <button
        onClick={handleClick}
        disabled={isLoading}
        type="button"
        className="cta-btn text-white w-full md:w-auto px-12 sm:px-14 md:px-16 py-5 sm:py-7 md:py-9 rounded-lg text-xl sm:text-2xl md:text-3xl font-medium transition-all hover:shadow-lg cursor-pointer disabled:opacity-70 animate-pulse-glow leading-snug"
      >
        {isLoading ? 'Redirecting...' : <>Unlock Permanent<br />Access Now</>}
      </button>
    </>
  );
}
