import Link from 'next/link';

import Breadcrumb from '@/components/Breadcrumb';

export default function RitualsPillar() {
    return (
        <div className="container" style={{ marginTop: '2rem' }}>
            <div style={{ gridColumn: 'span 12' }}>
                <Breadcrumb items={[{ label: 'Home', href: '/' }, { label: 'Rituals', href: '/rituals' }]} />
            </div>
            <main className="main-content">
                <h1>Rituals: The Biology of Belief</h1>
                <p className="mb-4">
                    Evolutionary biology and sociology of rituals. Why do we perform them?
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
