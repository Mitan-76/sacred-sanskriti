import Script from "next/script";
import { GA4_ID } from "@/lib/gtag";

/**
 * Loads GA4 only if NEXT_PUBLIC_GA4_ID is set — no script, no cookies, no
 * network request at all otherwise. Sets Google Consent Mode v2 defaults to
 * "denied" for every signal BEFORE gtag.js loads, per Google's own
 * requirement. Nothing here grants consent — that's the job of a real CMP
 * (e.g. AdSense's own certified "Privacy & messaging" tool, once ads are
 * live), which calls `gtag('consent', 'update', ...)` to raise these from
 * "denied". Until a CMP does that, GA4 operates in its restricted/
 * cookieless mode for every visitor, not just EEA/UK ones — the simplest
 * way to guarantee "no analytics cookies before consent" everywhere.
 */
export default function GoogleAnalytics() {
  if (!GA4_ID) return null;

  return (
    <>
      <Script id="ga-consent-default" strategy="beforeInteractive">
        {`
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
window.gtag = gtag;
gtag('consent', 'default', {
  ad_storage: 'denied',
  ad_user_data: 'denied',
  ad_personalization: 'denied',
  analytics_storage: 'denied'
});
        `}
      </Script>
      <Script strategy="afterInteractive" src={`https://www.googletagmanager.com/gtag/js?id=${GA4_ID}`} />
      <Script id="ga-init" strategy="afterInteractive">
        {`
gtag('js', new Date());
gtag('config', '${GA4_ID}');
        `}
      </Script>
    </>
  );
}
