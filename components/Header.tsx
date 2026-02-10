'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header style={{
            backgroundColor: 'white',
            borderBottom: '1px solid var(--secondary-color)',
            padding: '1rem 0',
            position: 'sticky',
            top: 0,
            zIndex: 1000,
            boxShadow: '0 2px 4px rgba(0,0,0,0.05)'
        }}>
            <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', position: 'relative' }}>
                <div className="logo" style={{ zIndex: 1002 }}>
                    <Link href="/" onClick={() => setIsMenuOpen(false)} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '1.5rem', fontWeight: 'bold', color: 'var(--primary-color)', fontFamily: 'var(--font-heading)', textDecoration: 'none' }}>
                        <Image src="/logo.jpg" alt="Sacred Sanskriti - Exploring Hindu Traditions Through Science" width={40} height={40} style={{ borderRadius: '50%' }} priority />
                        <span className="site-title">Sacred Sanskriti</span>
                    </Link>
                </div>

                {/* Desktop Navigation */}
                <nav className="desktop-nav">
                    <ul style={{ display: 'flex', gap: '1.5rem', listStyle: 'none', margin: 0, padding: 0 }}>
                        <li><Link href="/" className="nav-link">Home</Link></li>
                        <li><Link href="/mantras-chants" className="nav-link">Mantras</Link></li>
                        <li><Link href="/rituals" className="nav-link">Rituals</Link></li>
                        <li><Link href="/symbols" className="nav-link">Symbols</Link></li>
                        <li><Link href="/myth-vs-text" className="nav-link">Myth vs Text</Link></li>
                        <li><Link href="/practices" className="nav-link">Practices</Link></li>
                    </ul>
                </nav>

                {/* Mobile Menu Button */}
                <button
                    className="mobile-menu-btn"
                    onClick={toggleMenu}
                    aria-label="Toggle menu"
                    aria-expanded={isMenuOpen}
                >
                    <div style={{
                        width: '25px',
                        height: '3px',
                        backgroundColor: 'var(--text-color)',
                        marginBottom: '5px',
                        transition: '0.3s',
                        transform: isMenuOpen ? 'rotate(-45deg) translate(-5px, 6px)' : 'none'
                    }}></div>
                    <div style={{
                        width: '25px',
                        height: '3px',
                        backgroundColor: 'var(--text-color)',
                        marginBottom: '5px',
                        opacity: isMenuOpen ? 0 : 1,
                        transition: '0.3s'
                    }}></div>
                    <div style={{
                        width: '25px',
                        height: '3px',
                        backgroundColor: 'var(--text-color)',
                        transition: '0.3s',
                        transform: isMenuOpen ? 'rotate(45deg) translate(-5px, -6px)' : 'none'
                    }}></div>
                </button>

                {/* Mobile Navigation Sidebar */}
                <div className={`mobile-nav ${isMenuOpen ? 'open' : ''}`}>
                    <Link href="/" onClick={toggleMenu} className="nav-link" style={{ fontSize: '1.2rem', padding: '0.5rem 0', borderBottom: '1px solid #f0f0f0' }}>Home</Link>
                    <Link href="/mantras-chants" onClick={toggleMenu} className="nav-link" style={{ fontSize: '1.2rem', padding: '0.5rem 0', borderBottom: '1px solid #f0f0f0' }}>Mantras</Link>
                    <Link href="/rituals" onClick={toggleMenu} className="nav-link" style={{ fontSize: '1.2rem', padding: '0.5rem 0', borderBottom: '1px solid #f0f0f0' }}>Rituals</Link>
                    <Link href="/symbols" onClick={toggleMenu} className="nav-link" style={{ fontSize: '1.2rem', padding: '0.5rem 0', borderBottom: '1px solid #f0f0f0' }}>Symbols</Link>
                    <Link href="/myth-vs-text" onClick={toggleMenu} className="nav-link" style={{ fontSize: '1.2rem', padding: '0.5rem 0', borderBottom: '1px solid #f0f0f0' }}>Myth vs Text</Link>
                    <Link href="/practices" onClick={toggleMenu} className="nav-link" style={{ fontSize: '1.2rem', padding: '0.5rem 0', borderBottom: '1px solid #f0f0f0' }}>Practices</Link>
                    <Link href="/faq" onClick={toggleMenu} className="nav-link" style={{ fontSize: '1.2rem', padding: '0.5rem 0', borderBottom: '1px solid #f0f0f0' }}>FAQ</Link>

                    <div style={{ marginTop: 'auto', borderTop: '1px solid #eee', paddingTop: '1rem' }}>
                        <Link href="/contact" onClick={toggleMenu} style={{ display: 'block', padding: '0.5rem 0', color: '#4a5568', fontWeight: '500' }}>Contact Us</Link>
                        <Link href="/about" onClick={toggleMenu} style={{ display: 'block', padding: '0.5rem 0', color: '#4a5568', fontWeight: '500' }}>About Us</Link>
                    </div>

                    <div style={{ marginTop: '1rem', paddingTop: '1rem', borderTop: '1px solid #f0f0f0', fontSize: '0.85rem' }}>
                        <Link href="/privacy" onClick={toggleMenu} style={{ display: 'block', padding: '0.3rem 0', color: '#718096' }}>Privacy Policy</Link>
                        <Link href="/terms" onClick={toggleMenu} style={{ display: 'block', padding: '0.3rem 0', color: '#718096' }}>Terms of Service</Link>
                    </div>
                </div>

                {/* Backdrop */}
                <div className={`mobile-backdrop ${isMenuOpen ? 'open' : ''}`} onClick={toggleMenu}></div>
            </div>
        </header>
    );
}
