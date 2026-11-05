import { Metadata } from "next";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "Terms of Service | Sacred Sanskriti",
  description:
    "Review the terms and conditions governing use of Sacred Sanskriti, including intellectual property, content disclaimers, and governing law.",
  alternates: {
    canonical: "/terms",
  },
};

export default function TermsPage() {
  const currentDate = new Date().toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div className="mx-auto max-w-3xl px-4 py-8 sm:px-6">
      <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Terms of Service", href: "/terms" }]} />

      <h1 className="font-heading text-3xl font-bold text-ink-700">Terms of Service</h1>
      <p className="mt-2 text-sm text-ink-300">
        <strong>Last Updated:</strong> {currentDate}
      </p>

      <div className="mt-6 rounded-md border-l-4 border-destructive bg-destructive/5 p-5">
        <p className="m-0 text-sm leading-relaxed">
          <strong>Important:</strong> By accessing Sacred Sanskriti, you agree to be bound by these Terms and
          Conditions and all applicable laws and regulations in India.
        </p>
      </div>

      <div className="prose-article mt-8">
        <h2>1. Acceptance of Terms</h2>
        <p>
          By accessing <strong>Sacred Sanskriti</strong>, you agree to be bound by these Terms and Conditions and
          all applicable laws and regulations in India. If you do not agree with any part of these terms, you
          should not use our website.
        </p>

        <h2>2. Intellectual Property Rights</h2>
        <p>
          All content, including text, research synthesis, and layout, is the intellectual property of{" "}
          <strong>Sacred Sanskriti</strong>. While we cite external research and government sources, the unique
          expression and synthesis of this data are protected by Copyright laws.
        </p>
        <ul>
          <li>You may <strong>not</strong> reproduce or republish our material without written consent.</li>
          <li>Linking to our content or videos is permitted and encouraged, provided proper credit is given.</li>
        </ul>

        <h2>3. Content Disclaimer (The &quot;Scientific Logic&quot; Clause)</h2>
        <p>
          The content provided is for <strong>educational and informational purposes only</strong>. While we
          base our work on peer-reviewed research and scriptural texts:
        </p>
        <ul>
          <li>
            The &quot;scientific&quot; interpretations are based on available research and should{" "}
            <strong>not be substituted for professional medical, legal, or psychological advice</strong>.
          </li>
          <li>We aim for historical accuracy, but interpretations of ancient texts can vary among scholars.</li>
        </ul>

        <h2>4. User Conduct</h2>
        <p>We foster a community of intellectual discussion. We reserve the right to remove comments that are:</p>
        <ul>
          <li>Hate speech or derogatory toward any community.</li>
          <li>Spam or promotional links.</li>
          <li>Factually incorrect or misleading.</li>
        </ul>

        <h2>5. Limitation of Liability</h2>
        <p>
          <strong>Sacred Sanskriti</strong> and its owner shall not be held liable for any inaccuracies in the
          research cited or for any actions taken by readers based on the information provided on this website.
          Users are encouraged to conduct their own research and consult appropriate professionals before making
          decisions based on our content.
        </p>

        <h2>6. Third-Party Links</h2>
        <p>
          Our website may contain links to third-party websites or services that are not owned or controlled by
          Sacred Sanskriti. We have no control over, and assume no responsibility for, the content, privacy
          policies, or practices of any third-party websites or services.
        </p>

        <h2>7. Modifications to Terms</h2>
        <p>
          We reserve the right to modify or replace these Terms at any time. If a revision is material, we will
          provide at least 30 days&apos; notice prior to any new terms taking effect. What constitutes a material
          change will be determined at our sole discretion.
        </p>

        <h2>8. Governing Law</h2>
        <p>
          These terms are governed by and construed in accordance with the <strong>laws of India</strong>. Any
          disputes shall be subject to the exclusive jurisdiction of the courts in{" "}
          <strong>Hyderabad, Telangana</strong>.
        </p>

        <h2>9. Severability</h2>
        <p>
          If any provision of these Terms is held to be unenforceable or invalid, such provision will be changed
          and interpreted to accomplish the objectives of such provision to the greatest extent possible under
          applicable law, and the remaining provisions will continue in full force and effect.
        </p>
      </div>

      <div className="mt-10 rounded-lg border-l-4 border-gold-400 bg-sage-50 p-6">
        <h3 className="font-heading text-lg font-semibold text-ink-700">Questions About These Terms?</h3>
        <p className="mt-2">If you have any questions about these Terms of Service, please contact us:</p>
        <p className="mt-2">
          <strong>Email:</strong> <a href="mailto:contactus@sacredsanskriti.com" className="text-teal-600">contactus@sacredsanskriti.com</a>
          <br />
          <strong>Address:</strong> Hyderabad, India
        </p>
      </div>

      <div className="mt-6 rounded-md bg-gold-50 p-4 text-sm text-ink-700">
        <p className="m-0">
          <strong>Note:</strong> By continuing to use Sacred Sanskriti, you acknowledge that you have read,
          understood, and agree to be bound by these Terms of Service.
        </p>
      </div>
    </div>
  );
}
