import Link from 'next/link';

import Breadcrumb from '@/components/Breadcrumb';

export default function SymbolsPillar() {
    return (
        <div className="container" style={{ marginTop: '2rem' }}>
            <div style={{ gridColumn: 'span 12' }}>
                <Breadcrumb items={[{ label: 'Home', href: '/' }, { label: 'Symbols', href: '/symbols' }]} />
            </div>
            <main className="main-content">
                <h1>Symbols: Sacred Geometry & Psychology</h1>
                <p className="mb-4">
                    Semiologists and psychological impact of sacred geometry and religious icons.
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
