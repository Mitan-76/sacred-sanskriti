import Link from 'next/link';
import JsonLd from '@/components/JsonLd';
import Breadcrumb from '@/components/Breadcrumb';

export const metadata = {
    title: "Spiritual Practices | Neuroscience and Psychology",
    description: "Explore the scientific basis of spiritual practices like meditation, prayer, and yoga.",
};

export default function PracticesPillar() {
    const articles = [
        {
            title: "The Cognitive Benefits of Centering Prayer: A Psychobiological Review",
            slug: "the-cognitive-benefits-of-centering-prayer",
            excerpt: "Analyzing the default mode network (DMN) deactivation during centering prayer."
        }
    ];

    const breadcrumbSchema = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [{
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://thescienceoffaith.com"
        }, {
            "@type": "ListItem",
            "position": 2,
            "name": "Practices",
            "item": "https://thescienceoffaith.com/practices"
        }]
    };

    return (
        <div className="container" style={{ marginTop: '2rem' }}>
            <div style={{ gridColumn: 'span 12' }}>
                <Breadcrumb items={[{ label: 'Home', href: '/' }, { label: 'Practices', href: '/practices' }]} />
            </div>
            <JsonLd data={breadcrumbSchema} />

            <main className="main-content">
                <h1>Spiritual Practices: The Science</h1>
                <p className="mb-4">
                    We investigate the neuroscience (fMRI studies), endocrinology (hormonal changes), and psychology behind common spiritual practices.
                </p>

                <div className="article-list">
                    {articles.map(article => (
                        <div key={article.slug} className="card mb-4">
                            <h2>
                                <Link href={`/practices/${article.slug}`}>{article.title}</Link>
                            </h2>
                            <p>{article.excerpt}</p>
                        </div>
                    ))}
                </div>
            </main>

            <aside className="sidebar">
                <div className="ads-sidebar">
                    <div className="text-center p-4">Ad Space</div>
                </div>
            </aside>
        </div>
    );
}
