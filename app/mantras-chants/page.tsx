import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';

export default function MantrasPillar() {
    return (
        <div className="container" style={{ marginTop: '2rem' }}>
            <div style={{ gridColumn: 'span 12' }}>
                <Breadcrumb items={[{ label: 'Home', href: '/' }, { label: 'Mantras & Chants', href: '/mantras-chants' }]} />
            </div>
            <main className="main-content">
                <h1>Mantras & Chants: The Science of Sound</h1>
                <p className="mb-4">
                    Explaining the vibrational physics and psychological impact of repetitive prayer and chanting.
                </p>
                <div className="article-list">
                    <p>Coming Soon...</p>
                </div>
            </main>
            <aside className="sidebar">
                <div className="ads-sidebar">Ad Space</div>
            </aside>
        </div>
    );
}
