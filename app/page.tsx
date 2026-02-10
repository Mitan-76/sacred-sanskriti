import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
    const silos = [
        { title: "Mantras & Chants", slug: "mantras-chants", desc: "Meaning, Structure, Rhythm, and Sound Science" },
        { title: "Rituals", slug: "rituals", desc: "Evolutionary biology and sociology of rituals" },
        { title: "Symbols", slug: "symbols", desc: "Semiologists and psychological impact of sacred geometry" },
        { title: "Myth vs Text", slug: "myth-vs-text", desc: "Comparative linguistics and historical accuracy" },
        { title: "Practices", slug: "practices", desc: "Neuroscience and Psychology behind spiritual acts" },
    ];

    return (
        <div className="container">
            <section className="hero" style={{ gridColumn: 'span 12', position: 'relative', height: '500px', display: 'flex', alignItems: 'center', borderRadius: '12px', overflow: 'hidden', marginBottom: '3rem' }}>
                <Image
                    src="/home-banner.png"
                    alt="Sacred lotus flower symbolizing spiritual enlightenment and Hindu philosophy"
                    fill
                    style={{ objectFit: 'cover', zIndex: -1 }}
                    priority
                    sizes="100vw"
                />
                <div style={{ position: 'relative', zIndex: 1, padding: '3rem', maxWidth: '600px', background: 'rgba(255, 255, 255, 0.1)', backdropFilter: 'blur(10px)', borderRadius: '12px', margin: '2rem' }}>
                    <h1 style={{ fontSize: '3rem', color: '#1a365d', marginBottom: '1rem', textShadow: '0 2px 4px rgba(255,255,255,0.5)' }}>Where Science Meets the Sacred</h1>
                    <p style={{ fontSize: '1.2rem', color: '#2d3748', textShadow: '0 1px 2px rgba(255,255,255,0.5)', fontWeight: '500' }}>
                        An evidence-based exploration of religious phenomena, dissecting the psychological, biological, and acoustic mechanisms behind spiritual experiences.
                    </p>
                </div>
            </section>

            <section className="silo-grid" style={{ gridColumn: 'span 12', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
                {silos.map((silo) => (
                    <div key={silo.slug} className="card">
                        <h3>
                            <Link href={`/${silo.slug}`}>{silo.title}</Link>
                        </h3>
                        <p>{silo.desc}</p>
                    </div>
                ))}
            </section>

            <section className="ads-above-fold" style={{ gridColumn: 'span 12' }}>
                <span style={{ color: '#888' }}>Advertisement Space (CLS Protected)</span>
            </section>
        </div>
    );
}
