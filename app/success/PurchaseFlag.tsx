'use client';

import { useEffect } from 'react';

export default function PurchaseFlag() {
  useEffect(() => {
    localStorage.setItem('bonsai_purchased', 'true');
  }, []);

  return null;
}
