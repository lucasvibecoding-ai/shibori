'use client';

import { useEffect, useRef } from 'react';
import { useSearchParams } from 'next/navigation';

declare global {
  interface Window {
    fbq?: (action: string, event: string, params?: Record<string, unknown>, options?: { eventID: string }) => void;
  }
}

export default function PurchaseTracker() {
  const searchParams = useSearchParams();
  const sessionId = searchParams.get('session_id');
  const productName = searchParams.get('product') || 'Waterfall Terrarium Masterclass';
  const hasFiredRef = useRef(false);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    if (!sessionId) return;

    const storageKey = `purchase_tracked_${sessionId}`;
    if (sessionStorage.getItem(storageKey) || hasFiredRef.current) return;

    hasFiredRef.current = true;

    if (window.fbq) {
      window.fbq('track', 'Purchase', {
        value: 47.00,
        currency: 'USD',
        content_name: productName,
        content_type: 'product',
      }, { eventID: sessionId });
    }

    sessionStorage.setItem(storageKey, 'true');
  }, [sessionId]);

  return null;
}
