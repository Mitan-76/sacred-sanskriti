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
      <p className="mt-2 text-sm text-ink-300">
        <strong>Last Updated:</strong> {currentDate}
      </p>

      <div className="mt-6 rounded-md border-l-4 border-teal-500 bg-sage-50 p-5">
        <p className="m-0 text-sm leading-relaxed">
          <strong>Legal Compliance:</strong> This policy complies with India&apos;s Digital Personal Data
          Protection Act (DPDP) 2023, GDPR (General Data Protection Regulation), and CCPA (California Consumer
          Privacy Act).
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

        <h2>4. How We Use Your Information</h2>
        <ul>
          <li>To provide, operate, and maintain our website.</li>
          <li>To improve, personalize, and expand our content.</li>
          <li>To communicate with you (newsletters or updates).</li>
          <li>To prevent fraudulent activities.</li>
        </ul>

        <h2>5. Data Protection Rights</h2>
        <p>
          Under the DPDP Act and GDPR, you have the right to access, rectify, or request the erasure of your
          personal data. If you wish to exercise these rights, please contact us at{" "}
          <a href="mailto:contactus@sacredsanskriti.com">contactus@sacredsanskriti.com</a>.
        </p>

        <h2>6. Your Rights Include</h2>
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

        <h2>7. Cookies Policy</h2>
        <p>
          We use cookies to improve your browsing experience. You can choose to disable cookies through your
          browser settings, though this may affect website functionality.
        </p>

        <h2>8. Children&apos;s Privacy</h2>
        <p>
          Our website does not knowingly collect personal information from children under 18. If you believe we
          have inadvertently collected such information, please contact us immediately.
        </p>

        <h2>9. Changes to This Policy</h2>
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
