import { Metadata } from "next";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "Privacy Policy | Sacred Sanskriti",
  description:
    "Read how Sacred Sanskriti collects, uses, and protects visitor data, in compliance with India's DPDP Act, GDPR, and CCPA.",
  alternates: {
    canonical: "/privacy",
  },
};

export default function PrivacyPage() {
  const currentDate = new Date().toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div className="mx-auto max-w-3xl px-4 py-8 sm:px-6">
      <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Privacy Policy", href: "/privacy" }]} />

      <h1 className="font-heading text-3xl font-bold text-ink-700">Privacy Policy</h1>
      <p className="mt-2 text-sm text-ink-500">
        <strong>Last Updated:</strong> {currentDate}
      </p>

      <div className="mt-6 rounded-md border-l-4 border-teal-500 bg-sage-50 p-5">
        <p className="m-0 text-sm leading-relaxed">
          <strong>Legal Compliance:</strong> This policy complies with India&apos;s Digital Personal Data
          Protection Act (DPDP) 2023, the IT (Intermediary Guidelines and Digital Media Ethics Code) Rules 2021,
          GDPR (General Data Protection Regulation), and CCPA (California Consumer Privacy Act). It also meets
          Google AdSense&apos;s publisher policy requirements for disclosing the use of cookies for advertising.
        </p>
      </div>

      <div className="prose-article mt-8">
        <h2>1. Introduction</h2>
        <p>
          At <strong>Sacred Sanskriti</strong>, accessible from this website, we prioritize the privacy of our
          visitors. This Privacy Policy document outlines the types of information we collect and how we use it,
          in compliance with India&apos;s Digital Personal Data Protection Act (DPDP) 2023 and international
          standards.
        </p>

        <h2>2. Data We Collect</h2>
        <ul>
          <li>
            <strong>Log Files:</strong> We follow a standard procedure of using log files (IP addresses, browser
            type, ISP, date/time stamp).
          </li>
          <li>
            <strong>Cookies:</strong> We use cookies to enhance user experience and analyze website traffic.
          </li>
          <li>
            <strong>Personal Information:</strong> If you subscribe to our newsletter or comment on posts, we may
            collect your name and email address.
          </li>
        </ul>

        <h2>3. Third-Party Integrations (YouTube & Social Media)</h2>
        <p>
          Our website features embedded videos from our official YouTube channel. Please note that YouTube
          (Google) has its own privacy policies. By interacting with these videos, you may be sharing data with
          third-party platforms.
        </p>

        <h2>4. Analytics (Google Analytics 4)</h2>
        <p>
          We use Google Analytics 4 to understand how visitors use this website — which pages are read, how
          long for, and which links are followed. This data is aggregated and does not identify you personally.
        </p>
        <ul>
          <li>
            We use <strong>Google Consent Mode</strong>, which keeps analytics storage off by default for every
            visitor until a consent mechanism explicitly grants it. Until that happens, Google Analytics operates
            in a restricted mode and does not set tracking cookies.
          </li>
          <li>
            You can opt out of Google Analytics across all websites using the{" "}
            <a
              href="https://tools.google.com/dlpage/gaoptout"
              target="_blank"
              rel="noopener noreferrer"
            >
              Google Analytics Opt-out Browser Add-on
            </a>
            .
          </li>
        </ul>

        <h2>5. Advertising &amp; Google AdSense</h2>
        <p>
          This website may display advertisements served by Google AdSense and other third-party ad networks.
          Google and its partners use cookies — including the DoubleClick cookie — to serve ads based on a
          visitor&apos;s prior visits to this and other websites.
        </p>
        <ul>
          <li>
            Google&apos;s use of advertising cookies enables it and its partners to serve ads based on your visit
            to this site and/or other sites on the Internet.
          </li>
          <li>
            You may opt out of personalized advertising by visiting{" "}
            <a href="https://adssettings.google.com" target="_blank" rel="noopener noreferrer">
              Google Ads Settings
            </a>
            . Alternatively, visit{" "}
            <a href="https://www.aboutads.info/choices" target="_blank" rel="noopener noreferrer">
              www.aboutads.info/choices
            </a>{" "}
            to opt out of third-party vendor personalized advertising more broadly.
          </li>
          <li>
            Third-party vendors, including Google, may combine data collected from this site with data from other
            sites visited to serve relevant ads and measure ad performance. See{" "}
            <a href="https://policies.google.com/technologies/ads" target="_blank" rel="noopener noreferrer">
              Google&apos;s Advertising Technologies policy
            </a>{" "}
            for details.
          </li>
        </ul>

        <h2>6. How We Use Your Information</h2>
        <ul>
          <li>To provide, operate, and maintain our website.</li>
          <li>To improve, personalize, and expand our content.</li>
          <li>To communicate with you (newsletters or updates).</li>
          <li>To prevent fraudulent activities.</li>
        </ul>

        <h2>7. Data Protection Rights</h2>
        <p>
          Under the DPDP Act and GDPR, you have the right to access, rectify, or request the erasure of your
          personal data. If you wish to exercise these rights, please contact us at{" "}
          <a href="mailto:contactus@sacredsanskriti.com">contactus@sacredsanskriti.com</a>.
        </p>

        <h2>8. Your Rights Include</h2>
        <ul>
          <li>
            <strong>Right to Access:</strong> Request copies of your personal data.
          </li>
          <li>
            <strong>Right to Rectification:</strong> Request correction of inaccurate data.
          </li>
          <li>
            <strong>Right to Erasure:</strong> Request deletion of your personal data.
          </li>
          <li>
            <strong>Right to Restrict Processing:</strong> Request limitation on how we use your data.
          </li>
          <li>
            <strong>Right to Data Portability:</strong> Request transfer of your data to another organization.
          </li>
          <li>
            <strong>Right to Object:</strong> Object to our processing of your personal data.
          </li>
        </ul>

        <h2>9. Cookies Policy</h2>
        <p>
          We use cookies to analyze website traffic (see Section 4) and — where advertising is enabled — serve
          relevant ads (see Section 5). You can choose to disable cookies through your browser settings, though
          this may affect website functionality and ad relevance.
        </p>

        <h2>10. Data Retention</h2>
        <p>
          We retain personal data (such as newsletter or comment details) only for as long as necessary to
          fulfill the purpose it was collected for, or as required by applicable law. Log file data is retained
          for a limited period for security and diagnostic purposes and is then deleted or anonymized. You may
          request earlier deletion of your personal data at any time (see Section 8).
        </p>

        <h2>11. Children&apos;s Privacy</h2>
        <p>
          In line with India&apos;s DPDP Act 2023, our website does not knowingly collect personal information
          from children under 18 without verifiable parental or guardian consent. If you believe we have
          inadvertently collected such information, please contact us immediately so we can delete it.
        </p>

        <h2>12. Grievance Redressal</h2>
        <p>
          In accordance with the Digital Personal Data Protection Act, 2023 and the Information Technology
          (Intermediary Guidelines and Digital Media Ethics Code) Rules, 2021, the following Grievance Officer /
          Data Protection Contact has been designated to address any questions, complaints, or grievances
          regarding your personal data:
        </p>
        <p>
          <strong>Grievance Officer:</strong> The Website Administrator, Sacred Sanskriti
          <br />
          <strong>Email:</strong> <a href="mailto:contactus@sacredsanskriti.com">contactus@sacredsanskriti.com</a>
          <br />
          <strong>Address:</strong> Hyderabad, Telangana, India
        </p>
        <p>
          We aim to acknowledge grievances within 7 working days and resolve them within 30 days. If you remain
          unsatisfied with our response, you may approach the Data Protection Board of India, constituted under
          the DPDP Act, 2023, via the{" "}
          <a href="https://www.meity.gov.in/" target="_blank" rel="noopener noreferrer">
            Ministry of Electronics and Information Technology
          </a>
          .
        </p>

        <h2>13. Changes to This Policy</h2>
        <p>
          We may update this Privacy Policy from time to time. We will notify you of any changes by posting the
          new Privacy Policy on this page and updating the &quot;Last Updated&quot; date.
        </p>
      </div>

      <div className="mt-10 rounded-lg border-l-4 border-gold-400 bg-sage-50 p-6">
        <h3 className="font-heading text-lg font-semibold text-ink-700">Contact Us</h3>
        <p className="mt-2">If you have any questions about this Privacy Policy, please contact us:</p>
        <p className="mt-2">
          <strong>Email:</strong> <a href="mailto:contactus@sacredsanskriti.com" className="text-teal-600">contactus@sacredsanskriti.com</a>
          <br />
          <strong>Address:</strong> Hyderabad, India
        </p>
      </div>
    </div>
  );
}
