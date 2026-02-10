import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';

export default function MythPillar() {
    return (
        <div className="container" style={{ marginTop: '2rem' }}>
            <div style={{ gridColumn: 'span 12' }}>
                <Breadcrumb items={[{ label: 'Home', href: '/' }, { label: 'Myth vs Text', href: '/myth-vs-text' }]} />
            </div>
            <main className="main-content">
                <h1>Myth vs Text: History & Linguistics</h1>
                <p className="mb-4">
                    Comparative linguistics and historical accuracy. Separating fact from folklore.
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
