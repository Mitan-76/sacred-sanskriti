import { Metadata } from 'next';
import Breadcrumb from '@/components/Breadcrumb';
import FaqContent from './FaqContent';

export const metadata: Metadata = {
    title: 'Frequently Asked Questions | Sacred Sanskriti',
    description: 'Find answers about Sacred Sanskriti\'s approach to exploring Hindu traditions through science, logic, and evidence-based research.',
    alternates: {
        canonical: '/faq',
    },
};

export default function FAQPage() {
    return (
        <div className="container" style={{ marginTop: '2rem' }}>
            <div style={{ gridColumn: 'span 12' }}>
                <Breadcrumb items={[{ label: 'Home', href: '/' }, { label: 'FAQ', href: '/faq' }]} />
            </div>

            <div style={{ gridColumn: 'span 12', maxWidth: '900px', margin: '0 auto' }}>
                <h1 style={{ color: 'var(--primary-color)', marginBottom: '1.5rem' }}>
                    Frequently Asked Questions
                </h1>

                <FaqContent />
            </div>
        </div>
    );
}
