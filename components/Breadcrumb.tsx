import Link from 'next/link';

interface BreadcrumbItem {
    label: string;
    href: string;
}

interface BreadcrumbProps {
    items: BreadcrumbItem[];
}

export default function Breadcrumb({ items }: BreadcrumbProps) {
    // Breadcrumb Schema for SEO
    const breadcrumbSchema = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": items.map((item, index) => ({
            "@type": "ListItem",
            "position": index + 1,
            "name": item.label,
            "item": `https://sacredsanskriti.com${item.href}`
        }))
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
            />
            <nav aria-label="Breadcrumb" style={{
                padding: '1rem 0',
                fontSize: '0.9rem',
                color: '#4a5568'
            }}>
                <ol style={{
                    display: 'flex',
                    listStyle: 'none',
                    margin: 0,
                    padding: 0,
                    flexWrap: 'wrap',
                    gap: '0.5rem'
                }}>
                    {items.map((item, index) => (
                        <li key={item.href} style={{ display: 'flex', alignItems: 'center' }}>
                            {index > 0 && (
                                <span style={{ margin: '0 0.5rem', color: '#a0aec0' }}>›</span>
                            )}
                            {index === items.length - 1 ? (
                                <span style={{ color: '#2d3748', fontWeight: '500' }}>
                                    {item.label}
                                </span>
                            ) : (
                                <Link
                                    href={item.href}
                                    style={{
                                        color: 'var(--link-color)',
                                        textDecoration: 'none',
                                        transition: 'color 0.2s'
                                    }}
                                >
                                    {item.label}
                                </Link>
                            )}
                        </li>
                    ))}
                </ol>
            </nav>
        </>
    );
}
