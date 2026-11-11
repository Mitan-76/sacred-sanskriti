// Set via the NEXT_PUBLIC_GA4_ID environment variable in Netlify (not
// hard-coded — see CLAUDE.md §0). Analytics stays off entirely, with zero
// code changes needed, until this is set and the site is redeployed.
export const GA4_ID = process.env.NEXT_PUBLIC_GA4_ID;

// Google Tag Manager container ID (GTM-XXXXXXX), also from Netlify env vars.
// Use this OR GA4_ID, not both — if GTM already fires a GA4 tag, setting
// GA4_ID too would double-count every pageview.
export const GTM_ID = process.env.NEXT_PUBLIC_GTM_ID;

/** Fires a custom GA4 event. Safe no-op if GA4 isn't configured or consent
 * hasn't been granted (gtag itself handles the consent check). */
export function trackEvent(name: string, params?: Record<string, unknown>) {
  if (typeof window === "undefined") return;
  const w = window as typeof window & { gtag?: (...args: unknown[]) => void };
  if (typeof w.gtag === "function") {
    w.gtag("event", name, params);
  }
}
