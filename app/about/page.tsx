import { Metadata } from 'next';
import Breadcrumb from '@/components/Breadcrumb';

export const metadata: Metadata = {
    title: 'About Us | Sacred Sanskriti - Where Vedic Wisdom Meets Science',
    description: 'Learn about Sacred Sanskriti\'s mission to explore Hindu traditions through scientific reasoning, historical accuracy, and evidence-based research. Discover our E-E-A-T approach and core pillars.',
    openGraph: {
        title: 'About Sacred Sanskriti - Bridging Faith and Science',
        description: 'A premier platform exploring Hindu philosophy through peer-reviewed research and logical analysis.',
        url: 'https://sacredsanskriti.com/about',
    },
};

export default function AboutPage() {
    return (
        <div className="container" style={{ marginTop: '2rem' }}>
            <div style={{ gridColumn: 'span 12' }}>
                <Breadcrumb items={[{ label: 'Home', href: '/' }, { label: 'About Us', href: '/about' }]} />
            </div>
            <div style={{ gridColumn: 'span 12', maxWidth: '900px', margin: '0 auto' }}>
                <h1 style={{ color: 'var(--primary-color)', marginBottom: '1.5rem' }}>
                    Decoding the Eternal: Where Vedic Wisdom Meets Modern Science
                </h1>

                <p className="mb-4" style={{ fontSize: '1.1rem', lineHeight: '1.8' }}>
                    Welcome to <strong>Sacred Sanskriti</strong>, a premier digital platform dedicated to exploring the profound intersection of Hindu traditions, scientific logic, and historical accuracy.
                </p>

                <p className="mb-4" style={{ lineHeight: '1.8' }}>
                    In an era of information overload, the true essence of Sanatana Dharma is often lost between blind faith and modern skepticism. Our mission is to bridge this gap by providing research-backed insights into the Hindu way of life. We don't just tell you what a tradition is; we explore the <em>why</em>, the <em>how</em>, and the scientific evidence behind it.
                </p>

                <h2 style={{ color: '#2d3748', marginTop: '2.5rem', marginBottom: '1.25rem' }}>
                    Our Core Pillars
                </h2>

                <p className="mb-4" style={{ lineHeight: '1.8' }}>
                    Our content is meticulously categorized into five major dimensions:
                </p>

                <ol style={{ marginLeft: '1.5rem', marginBottom: '1.5rem', lineHeight: '1.8' }}>
                    <li style={{ marginBottom: '0.75rem' }}>
                        <strong>Mantras & Chants:</strong> An analysis of linguistic phonetics, rhythmic patterns, and the vibrational impact of Vedic sounds.
                    </li>
                    <li style={{ marginBottom: '0.75rem' }}>
                        <strong>Rituals:</strong> A historical deep dive into the evolution of Hindu orthopraxy and the logical frameworks behind them.
                    </li>
                    <li style={{ marginBottom: '0.75rem' }}>
                        <strong>Symbols:</strong> Decoding the complex semiotics of Hinduism—from the Sacred Aum to the geometry of Yantras.
                    </li>
                    <li style={{ marginBottom: '0.75rem' }}>
                        <strong>Myths vs. Original Texts:</strong> Fact-checking popular folklore against the authentic Shruti and Smriti scriptures (Vedas, Upanishads, Puranas).
                    </li>
                    <li style={{ marginBottom: '0.75rem' }}>
                        <strong>Science & Psychology:</strong> Understanding the neurological, psychological, and environmental impact of religious practices through the lens of modern research.
                    </li>
                </ol>

                <h2 style={{ color: '#2d3748', marginTop: '2.5rem', marginBottom: '1.25rem' }}>
                    Our Research Methodology
                </h2>

                <p className="mb-4" style={{ lineHeight: '1.8' }}>
                    We pride ourselves on authenticity. Every article and video on this platform is rooted in:
                </p>

                <ul style={{ marginLeft: '1.5rem', marginBottom: '1.5rem', lineHeight: '1.8' }}>
                    <li style={{ marginBottom: '0.5rem' }}>Peer-reviewed scholarly papers.</li>
                    <li style={{ marginBottom: '0.5rem' }}>Reliable government archives and archaeological reports.</li>
                    <li style={{ marginBottom: '0.5rem' }}>Verified translations of ancient texts by recognized scholars.</li>
                </ul>

                <h2 style={{ color: '#2d3748', marginTop: '2.5rem', marginBottom: '1.25rem' }}>
                    Multi-Platform Learning
                </h2>

                <p className="mb-4" style={{ lineHeight: '1.8' }}>
                    To provide a holistic experience, we integrate our deep-dive blog posts with visual storytelling. We believe in transparency; hence, all our work includes comprehensive citations and credits to original researchers.
                </p>

                <div style={{
                    marginTop: '2.5rem',
                    padding: '2rem',
                    backgroundColor: '#f7fafc',
                    borderRadius: '8px',
                    borderLeft: '4px solid var(--primary-color)'
                }}>
                    <p style={{ fontSize: '1.1rem', lineHeight: '1.8', margin: 0, fontStyle: 'italic', color: '#2d3748' }}>
                        Whether you are a seeker, a student of history, or a curious mind from any corner of the globe, we invite you to rediscover Hinduism—not just as a religion, but as a sophisticated science of living.
                    </p>
                </div>

                <h2 style={{ color: '#2d3748', marginTop: '2.5rem', marginBottom: '1.25rem' }}>
                    Our Commitment to E-E-A-T
                </h2>

                <p className="mb-4" style={{ lineHeight: '1.8' }}>
                    Sacred Sanskriti is built on the principles of <strong>Experience, Expertise, Authoritativeness, and Trustworthiness</strong>:
                </p>

                <ul style={{ marginLeft: '1.5rem', marginBottom: '1.5rem', lineHeight: '1.8' }}>
                    <li style={{ marginBottom: '0.5rem' }}><strong>Experience:</strong> Deep engagement with both traditional practices and modern scientific research.</li>
                    <li style={{ marginBottom: '0.5rem' }}><strong>Expertise:</strong> Content created and reviewed by scholars, researchers, and practitioners.</li>
                    <li style={{ marginBottom: '0.5rem' }}><strong>Authoritativeness:</strong> All claims backed by credible sources and academic references.</li>
                    <li style={{ marginBottom: '0.5rem' }}><strong>Trustworthiness:</strong> Transparent methodology, cited sources, and fact-based analysis.</li>
                </ul>
            </div>
        </div>
    );
}
