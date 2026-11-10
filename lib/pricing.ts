// Single source of truth for which currency a buyer is priced in, used by BOTH the landing
// page (display) and create-payment-intent (the actual charge) so they can never drift.
//
// €49.99 and $49.99 are both amount 4999, so only the currency/symbol flips; the amount is unchanged.
// USD for the Americas + Australia + New Zealand + the dollar countries, and when the buyer's
// location is unknown (IP lookup failed); EUR for everyone else (all of Europe, Africa, the
// Middle East, Asia).
// The course price in minor units, the same number in USD and EUR. It lives here rather than on the
// Stripe product so the page, the checkout total and the actual charge can never disagree.
export const COURSE_PRICE_CENTS = 4999;

// Checkout upsell (owner 2026-11-10): a second course for 29.99, same number in USD and EUR.
// This site has no pack, so the upsell course is the only checkout extra.
export const UPSELL_COURSE_CENTS = 2999;

/** Cents added on top of the course when the upsell course box is ticked. */
export function extrasCents(course: boolean): number {
  return course ? UPSELL_COURSE_CENTS : 0;
}

// The course offered as the checkout upsell: its course-platform slug (for the access grant) and
// the name the buyer sees in the checkout and the confirmation email.
export const UPSELL_COURSE_SLUG = 'suminagashi-masterclass';
export const UPSELL_COURSE_NAME = 'Suminagashi Masterclass';

export const USD_COUNTRIES = new Set([
  // North America + US territories
  'US', 'CA', 'MX', 'PR', 'VI', 'GU', 'AS', 'MP',
  // Central America
  'GT', 'BZ', 'HN', 'SV', 'NI', 'CR', 'PA',
  // South America
  'CO', 'VE', 'EC', 'PE', 'BO', 'PY', 'UY', 'CL', 'AR', 'BR', 'GY', 'SR',
  // Caribbean
  'CU', 'DO', 'HT', 'JM', 'TT', 'BS', 'BB', 'AG', 'DM', 'GD', 'KN', 'LC', 'VC',
  // Officially use the US dollar elsewhere
  'ZW', 'TL', 'PW', 'MH', 'FM',
  // Australia + New Zealand
  'AU', 'NZ',
]);

export function currencyForCountry(country: string | null | undefined): 'usd' | 'eur' {
  // No country resolved (IP lookup failed) defaults to USD.
  if (!country) return 'usd';
  return USD_COUNTRIES.has(country.toUpperCase()) ? 'usd' : 'eur';
}

export function currencySymbol(currency: string): string {
  return currency === 'eur' ? '€' : '$';
}
