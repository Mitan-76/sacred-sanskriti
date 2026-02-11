import Breadcrumb from '@/components/Breadcrumb';

export default function TermsPage() {
    const currentDate = new Date().toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });

    return (
        <div className="container" style={{ marginTop: '2rem' }}>
            <div style={{ gridColumn: 'span 12' }}>
                <Breadcrumb items={[{ label: 'Home', href: '/' }, { label: 'Terms of Service', href: '/terms' }]} />
            </div>
            <div style={{ gridColumn: 'span 12', maxWidth: '900px', margin: '0 auto' }}>
                <h1 style={{ color: 'var(--primary-color)', marginBottom: '1rem' }}>
                    Terms of Service
                </h1>

                <p style={{ fontSize: '0.95rem', color: '#718096', marginBottom: '2rem' }}>
                    <strong>Last Updated:</strong> {currentDate}
                </p>

                <div style={{
                    padding: '1rem 1.5rem',
                    backgroundColor: '#fff5f5',
                    borderLeft: '4px solid #e53e3e',
                    marginBottom: '2rem',
                    borderRadius: '4px'
                }}>
                    <p style={{ margin: 0, fontSize: '0.95rem', lineHeight: '1.7' }}>
                        <strong>Important:</strong> By accessing Sacred Sanskriti, you agree to be bound by these Terms and Conditions and all applicable laws and regulations in India.
                    </p>
                </div>

                <h2 style={{ color: '#2d3748', marginTop: '2.5rem', marginBottom: '1rem' }}>
                    1. Acceptance of Terms
                </h2>

                <p className="mb-4" style={{ lineHeight: '1.8' }}>
                    By accessing <strong>Sacred Sanskriti</strong>, you agree to be bound by these Terms and Conditions and all applicable laws and regulations in India. If you do not agree with any part of these terms, you should not use our website.
                </p>

                <h2 style={{ color: '#2d3748', marginTop: '2.5rem', marginBottom: '1rem' }}>
                    2. Intellectual Property Rights
                </h2>

                <p className="mb-4" style={{ lineHeight: '1.8' }}>
                    All content, including text, research synthesis, and layout, is the intellectual property of <strong>Sacred Sanskriti</strong>. While we cite external research and government sources, the unique expression and synthesis of this data are protected by Copyright laws.
                </p>

                <ul style={{ marginLeft: '1.5rem', marginBottom: '1.5rem', lineHeight: '1.8' }}>
                    <li style={{ marginBottom: '0.75rem' }}>
                        You may <strong>not</strong> reproduce or republish our material without written consent.
                    </li>
                    <li style={{ marginBottom: '0.75rem' }}>
                        Linking to our content or videos is permitted and encouraged, provided proper credit is given.
                    </li>
                </ul>

                <h2 style={{ color: '#2d3748', marginTop: '2.5rem', marginBottom: '1rem' }}>
                    3. Content Disclaimer (The "Scientific Logic" Clause)
                </h2>

                <p className="mb-4" style={{ lineHeight: '1.8' }}>
                    The content provided is for <strong>educational and informational purposes only</strong>. While we base our work on peer-reviewed research and scriptural texts:
                </p>

                <ul style={{ marginLeft: '1.5rem', marginBottom: '1.5rem', lineHeight: '1.8' }}>
                    <li style={{ marginBottom: '0.75rem' }}>
                        The "scientific" interpretations are based on available research and should <strong>not be substituted for professional medical, legal, or psychological advice</strong>.
                    </li>
                    <li style={{ marginBottom: '0.75rem' }}>
                        We aim for historical accuracy, but interpretations of ancient texts can vary among scholars.
                    </li>
                </ul>

                <h2 style={{ color: '#2d3748', marginTop: '2.5rem', marginBottom: '1rem' }}>
                    4. User Conduct
                </h2>

                <p className="mb-4" style={{ lineHeight: '1.8' }}>
                    We foster a community of intellectual discussion. We reserve the right to remove comments that are:
                </p>

                <ul style={{ marginLeft: '1.5rem', marginBottom: '1.5rem', lineHeight: '1.8' }}>
                    <li style={{ marginBottom: '0.5rem' }}>Hate speech or derogatory toward any community.</li>
                    <li style={{ marginBottom: '0.5rem' }}>Spam or promotional links.</li>
                    <li style={{ marginBottom: '0.5rem' }}>Factually incorrect or misleading.</li>
                </ul>

                <h2 style={{ color: '#2d3748', marginTop: '2.5rem', marginBottom: '1rem' }}>
                    5. Limitation of Liability
                </h2>

                <p className="mb-4" style={{ lineHeight: '1.8' }}>
                    <strong>Sacred Sanskriti</strong> and its owner shall not be held liable for any inaccuracies in the research cited or for any actions taken by readers based on the information provided on this website. Users are encouraged to conduct their own research and consult appropriate professionals before making decisions based on our content.
                </p>

                <h2 style={{ color: '#2d3748', marginTop: '2.5rem', marginBottom: '1rem' }}>
                    6. Third-Party Links
                </h2>

                <p className="mb-4" style={{ lineHeight: '1.8' }}>
                    Our website may contain links to third-party websites or services that are not owned or controlled by Sacred Sanskriti. We have no control over, and assume no responsibility for, the content, privacy policies, or practices of any third-party websites or services.
                </p>

                <h2 style={{ color: '#2d3748', marginTop: '2.5rem', marginBottom: '1rem' }}>
                    7. Modifications to Terms
                </h2>

                <p className="mb-4" style={{ lineHeight: '1.8' }}>
                    We reserve the right to modify or replace these Terms at any time. If a revision is material, we will provide at least 30 days' notice prior to any new terms taking effect. What constitutes a material change will be determined at our sole discretion.
                </p>

                <h2 style={{ color: '#2d3748', marginTop: '2.5rem', marginBottom: '1rem' }}>
                    8. Governing Law
                </h2>

                <p className="mb-4" style={{ lineHeight: '1.8' }}>
                    These terms are governed by and construed in accordance with the <strong>laws of India</strong>. Any disputes shall be subject to the exclusive jurisdiction of the courts in <strong>Hyderabad, Telangana</strong>.
                </p>

                <h2 style={{ color: '#2d3748', marginTop: '2.5rem', marginBottom: '1rem' }}>
                    9. Severability
                </h2>

                <p className="mb-4" style={{ lineHeight: '1.8' }}>
                    If any provision of these Terms is held to be unenforceable or invalid, such provision will be changed and interpreted to accomplish the objectives of such provision to the greatest extent possible under applicable law, and the remaining provisions will continue in full force and effect.
                </p>

                <div style={{
                    marginTop: '3rem',
                    padding: '1.5rem',
                    backgroundColor: '#f7fafc',
                    borderRadius: '8px',
                    borderLeft: '4px solid var(--accent-color)'
                }}>
                    <h3 style={{ color: '#2d3748', marginBottom: '0.75rem', fontSize: '1.1rem' }}>
                        Questions About These Terms?
                    </h3>
                    <p style={{ marginBottom: '0.5rem', lineHeight: '1.7' }}>
                        If you have any questions about these Terms of Service, please contact us:
                    </p>
                    <p style={{ margin: 0, lineHeight: '1.7' }}>
                        <strong>Email:</strong> <a href="mailto:contactus@sacredsanskriti.com" style={{ color: 'var(--link-color)' }}>contactus@sacredsanskriti.com</a><br />
                        <strong>Address:</strong> Hyderabad, India
                    </p>
                </div>

                <div style={{
                    marginTop: '2rem',
                    padding: '1rem',
                    backgroundColor: '#fffbeb',
                    borderRadius: '4px',
                    fontSize: '0.9rem',
                    color: '#78350f'
                }}>
                    <p style={{ margin: 0, lineHeight: '1.6' }}>
                        <strong>Note:</strong> By continuing to use Sacred Sanskriti, you acknowledge that you have read, understood, and agree to be bound by these Terms of Service.
                    </p>
                </div>
            </div>
        </div>
    );
}
