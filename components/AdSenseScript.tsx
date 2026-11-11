import Script from "next/script";

// AdSense publisher ID (ca-pub-XXXXXXXXXXXXXXXX), set in Netlify env vars.
// Loading this script is also what delivers Google's "Privacy & messaging"
// consent banner, which raises the Consent Mode defaults set in
// GoogleAnalytics.tsx from "denied" when a visitor accepts. Unset = nothing loads.
const ADSENSE_CLIENT = process.env.NEXT_PUBLIC_ADSENSE_CLIENT;

export default function AdSenseScript() {
  if (!ADSENSE_CLIENT) return null;

  return (
    <Script
      id="adsense"
      strategy="afterInteractive"
      crossOrigin="anonymous"
      src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${ADSENSE_CLIENT}`}
    />
  );
}
