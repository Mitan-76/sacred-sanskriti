import Breadcrumb from '@/components/Breadcrumb';

export default function ContactPage() {
    return (
        <div className="container" style={{ marginTop: '2rem' }}>
            <div style={{ gridColumn: 'span 12' }}>
                <Breadcrumb items={[{ label: 'Home', href: '/' }, { label: 'Contact Us', href: '/contact' }]} />
            </div>
            <div style={{ gridColumn: 'span 12', maxWidth: '800px', margin: '0 auto' }}>
                <h1 style={{ color: 'var(--primary-color)', marginBottom: '1.5rem' }}>Contact Us</h1>
                <p className="mb-4">
                    We'd love to hear from you. Whether you have questions, feedback, or research to share, please reach out.
                </p>
                <div style={{ padding: '2rem', backgroundColor: '#f8f9fa', borderRadius: '8px', border: '1px solid #e2e8f0' }}>
                    <p><strong>Email:</strong> contact@scienceoffaith.com</p>
                    <p><strong>Address:</strong> Hyderabad, India</p>
                </div>

                <div style={{ marginTop: '2rem', height: '400px', width: '100%', borderRadius: '8px', overflow: 'hidden' }}>
                    <iframe
                        src="https://www.google.com/maps?q=Hyderabad&output=embed"
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade">
                    </iframe>
                </div>
            </div>
        </div>
    );
}
