import Link from 'next/link';

export default function Footer() {
    return (
        <footer style={{ backgroundColor: '#2D3748', color: 'white', padding: '3rem 0', marginTop: '4rem' }}>
            <div className="container" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '2rem' }}>
                <div>
                    <h3 style={{ color: 'var(--primary-color)' }}>Sacred Sanskriti</h3>
                    <p>Bridging the gap between spiritual tradition and empirical science.</p>
                </div>
                <div>
                    <h4>Silos</h4>
                    <ul style={{ listStyle: 'none' }}>
                        <li><Link href="/mantras-chants" style={{ color: '#ccc' }}>Mantras</Link></li>
                        <li><Link href="/rituals" style={{ color: '#ccc' }}>Rituals</Link></li>
                        <li><Link href="/practices" style={{ color: '#ccc' }}>Practices</Link></li>
                        <li><Link href="/symbols" style={{ color: '#ccc' }}>Symbols</Link></li>
                    </ul>
                </div>
                <div>
                    <h4>Legal</h4>
                    <ul style={{ listStyle: 'none' }}>
                        <li><Link href="/about" style={{ color: '#ccc' }}>About Us</Link></li>
                        <li><Link href="/contact" style={{ color: '#ccc' }}>Contact</Link></li>
                        <li><Link href="/faq" style={{ color: '#ccc' }}>FAQ</Link></li>
                        <li><Link href="/privacy" style={{ color: '#ccc' }}>Privacy Policy</Link></li>
                        <li><Link href="/terms" style={{ color: '#ccc' }}>Terms of Service</Link></li>
                    </ul>
                </div>
            </div>
            <div className="text-center" style={{ marginTop: '2rem', borderTop: '1px solid #4A5568', paddingTop: '1rem' }}>
                &copy; {new Date().getFullYear()} Sacred Sanskriti. All rights reserved.
            </div>
        </footer>
    );
}
