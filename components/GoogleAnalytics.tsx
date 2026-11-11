import Script from "next/script";
import { GA4_ID, GTM_ID } from "@/lib/gtag";

/**
 * Loads Google Tag Manager (NEXT_PUBLIC_GTM_ID) and/or GA4 (NEXT_PUBLIC_GA4_ID)
 * only if set — no script, no cookies, no network request otherwise. Sets
 * Google Consent Mode v2 defaults to "denied" for every signal BEFORE any
 * Google script loads, per Google's own requirement. Nothing here grants
 * consent — that's the job of a real CMP, which calls
 * `gtag('consent', 'update', ...)`. Until then, Google tags run in their
 * restricted/cookieless mode for every visitor.
 */
export default function GoogleAnalytics() {
  if (!GA4_ID && !GTM_ID) return null;

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

      {GTM_ID && (
        <Script id="gtm-init" strategy="afterInteractive">
          {`
(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});
var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';
j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','${GTM_ID}');
          `}
        </Script>
      )}

      {GA4_ID && (
        <>
          <Script strategy="afterInteractive" src={`https://www.googletagmanager.com/gtag/js?id=${GA4_ID}`} />
          <Script id="ga-init" strategy="afterInteractive">
            {`
gtag('js', new Date());
gtag('config', '${GA4_ID}');
            `}
          </Script>
        </>
      )}
    </>
  );
}

/** GTM's no-JavaScript fallback; must sit right after the opening <body>. */
export function GoogleTagManagerNoScript() {
  if (!GTM_ID) return null;

  return (
    <noscript>
      <iframe
        src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
        height="0"
        width="0"
        style={{ display: "none", visibility: "hidden" }}
      />
    </noscript>
  );
}
