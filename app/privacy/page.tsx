import Breadcrumb from '@/components/Breadcrumb';

export default function PrivacyPage() {
    const currentDate = new Date().toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });

    return (
        <div className="container" style={{ marginTop: '2rem' }}>
            <div style={{ gridColumn: 'span 12' }}>
                <Breadcrumb items={[{ label: 'Home', href: '/' }, { label: 'Privacy Policy', href: '/privacy' }]} />
            </div>
            <div style={{ gridColumn: 'span 12', maxWidth: '900px', margin: '0 auto' }}>
                <h1 style={{ color: 'var(--primary-color)', marginBottom: '1rem' }}>
                    Privacy Policy
                </h1>

                <p style={{ fontSize: '0.95rem', color: '#718096', marginBottom: '2rem' }}>
                    <strong>Last Updated:</strong> {currentDate}
                </p>

                <div style={{
                    padding: '1rem 1.5rem',
                    backgroundColor: '#f0f9ff',
                    borderLeft: '4px solid var(--primary-color)',
                    marginBottom: '2rem',
                    borderRadius: '4px'
                }}>
                    <p style={{ margin: 0, fontSize: '0.95rem', lineHeight: '1.7' }}>
                        <strong>Legal Compliance:</strong> This policy complies with India's Digital Personal Data Protection Act (DPDP) 2023, GDPR (General Data Protection Regulation), and CCPA (California Consumer Privacy Act).
                    </p>
                </div>

                <h2 style={{ color: '#2d3748', marginTop: '2.5rem', marginBottom: '1rem' }}>
                    1. Introduction
                </h2>

                <p className="mb-4" style={{ lineHeight: '1.8' }}>
                    At <strong>Sacred Sanskriti</strong>, accessible from this website, we prioritize the privacy of our visitors. This Privacy Policy document outlines the types of information we collect and how we use it, in compliance with India's Digital Personal Data Protection Act (DPDP) 2023 and international standards.
                </p>

                <h2 style={{ color: '#2d3748', marginTop: '2.5rem', marginBottom: '1rem' }}>
                    2. Data We Collect
                </h2>

                <ul style={{ marginLeft: '1.5rem', marginBottom: '1.5rem', lineHeight: '1.8' }}>
                    <li style={{ marginBottom: '0.75rem' }}>
                        <strong>Log Files:</strong> We follow a standard procedure of using log files (IP addresses, browser type, ISP, date/time stamp).
                    </li>
                    <li style={{ marginBottom: '0.75rem' }}>
                        <strong>Cookies:</strong> We use cookies to enhance user experience and analyze website traffic.
                    </li>
                    <li style={{ marginBottom: '0.75rem' }}>
                        <strong>Personal Information:</strong> If you subscribe to our newsletter or comment on posts, we may collect your name and email address.
                    </li>
                </ul>

                <h2 style={{ color: '#2d3748', marginTop: '2.5rem', marginBottom: '1rem' }}>
                    3. Third-Party Integrations (YouTube & Social Media)
                </h2>

                <p className="mb-4" style={{ lineHeight: '1.8' }}>
                    Our website features embedded videos from our official YouTube channel. Please note that YouTube (Google) has its own privacy policies. By interacting with these videos, you may be sharing data with third-party platforms.
                </p>

                <h2 style={{ color: '#2d3748', marginTop: '2.5rem', marginBottom: '1rem' }}>
                    4. How We Use Your Information
                </h2>

                <ul style={{ marginLeft: '1.5rem', marginBottom: '1.5rem', lineHeight: '1.8' }}>
                    <li style={{ marginBottom: '0.5rem' }}>To provide, operate, and maintain our website.</li>
                    <li style={{ marginBottom: '0.5rem' }}>To improve, personalize, and expand our content.</li>
                    <li style={{ marginBottom: '0.5rem' }}>To communicate with you (newsletters or updates).</li>
                    <li style={{ marginBottom: '0.5rem' }}>To prevent fraudulent activities.</li>
                </ul>

                <h2 style={{ color: '#2d3748', marginTop: '2.5rem', marginBottom: '1rem' }}>
                    5. Data Protection Rights
                </h2>

                <p className="mb-4" style={{ lineHeight: '1.8' }}>
                    Under the DPDP Act and GDPR, you have the right to access, rectify, or request the erasure of your personal data. If you wish to exercise these rights, please contact us at <a href="mailto:contactus@sacredsanskriti.com" style={{ color: 'var(--link-color)', textDecoration: 'underline' }}>contactus@sacredsanskriti.com</a>.
                </p>

                <h2 style={{ color: '#2d3748', marginTop: '2.5rem', marginBottom: '1rem' }}>
                    6. Your Rights Include
                </h2>

                <ul style={{ marginLeft: '1.5rem', marginBottom: '1.5rem', lineHeight: '1.8' }}>
                    <li style={{ marginBottom: '0.5rem' }}><strong>Right to Access:</strong> Request copies of your personal data.</li>
                    <li style={{ marginBottom: '0.5rem' }}><strong>Right to Rectification:</strong> Request correction of inaccurate data.</li>
                    <li style={{ marginBottom: '0.5rem' }}><strong>Right to Erasure:</strong> Request deletion of your personal data.</li>
                    <li style={{ marginBottom: '0.5rem' }}><strong>Right to Restrict Processing:</strong> Request limitation on how we use your data.</li>
                    <li style={{ marginBottom: '0.5rem' }}><strong>Right to Data Portability:</strong> Request transfer of your data to another organization.</li>
                    <li style={{ marginBottom: '0.5rem' }}><strong>Right to Object:</strong> Object to our processing of your personal data.</li>
                </ul>

                <h2 style={{ color: '#2d3748', marginTop: '2.5rem', marginBottom: '1rem' }}>
                    7. Cookies Policy
                </h2>

                <p className="mb-4" style={{ lineHeight: '1.8' }}>
                    We use cookies to improve your browsing experience. You can choose to disable cookies through your browser settings, though this may affect website functionality.
                </p>

                <h2 style={{ color: '#2d3748', marginTop: '2.5rem', marginBottom: '1rem' }}>
                    8. Children's Privacy
                </h2>

                <p className="mb-4" style={{ lineHeight: '1.8' }}>
                    Our website does not knowingly collect personal information from children under 18. If you believe we have inadvertently collected such information, please contact us immediately.
                </p>

                <h2 style={{ color: '#2d3748', marginTop: '2.5rem', marginBottom: '1rem' }}>
                    9. Changes to This Policy
                </h2>

                <p className="mb-4" style={{ lineHeight: '1.8' }}>
                    We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last Updated" date.
                </p>

                <div style={{
                    marginTop: '3rem',
                    padding: '1.5rem',
                    backgroundColor: '#f7fafc',
                    borderRadius: '8px',
                    borderLeft: '4px solid var(--accent-color)'
                }}>
                    <h3 style={{ color: '#2d3748', marginBottom: '0.75rem', fontSize: '1.1rem' }}>
                        Contact Us
                    </h3>
                    <p style={{ marginBottom: '0.5rem', lineHeight: '1.7' }}>
                        If you have any questions about this Privacy Policy, please contact us:
                    </p>
                    <p style={{ margin: 0, lineHeight: '1.7' }}>
                        <strong>Email:</strong> <a href="mailto:contactus@sacredsanskriti.com" style={{ color: 'var(--link-color)' }}>contactus@sacredsanskriti.com</a><br />
                        <strong>Address:</strong> Hyderabad, India
                    </p>
                </div>
            </div>
        </div>
    );
}
