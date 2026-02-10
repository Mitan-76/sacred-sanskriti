'use client';

import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Breadcrumb from './Breadcrumb';

interface ArticleLayoutProps {
    title: string;
    description: string;
    publishDate: string;
    modifiedDate?: string;
    author: string;
    image: string;
    category: string;
    children: React.ReactNode;
}

export default function ArticleLayout({
    title,
    description,
    publishDate,
    modifiedDate,
    author,
    image,
    category,
    children
}: ArticleLayoutProps) {
    const pathname = usePathname();
    const siteUrl = 'https://sacredsanskriti.com';
    const currentUrl = `${siteUrl}${pathname}`;
    const imageUrl = image.startsWith('http') ? image : `${siteUrl}${image}`;

    // Article Schema (JSON-LD) for SEO & AEO
    const articleSchema = {
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": title,
        "description": description,
        "image": [imageUrl],
        "datePublished": publishDate,
        "dateModified": modifiedDate || publishDate,
        "author": [{
            "@type": "Person",
            "name": author,
            "url": `${siteUrl}/about` // Link to author bio/about page
        }],
        "publisher": {
            "@type": "Organization",
            "name": "Sacred Sanskriti",
            "logo": {
                "@type": "ImageObject",
                "url": `${siteUrl}/logo.jpg`
            }
        },
        "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": currentUrl
        }
    };

    return (
        <article className="article-container" style={{ maxWidth: '800px', margin: '0 auto', padding: '0 1rem' }}>
            {/* Inject Schema */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
            />

            {/* Breadcrumbs */}
            <div style={{ marginBottom: '1.5rem', marginTop: '1rem' }}>
                <Breadcrumb items={[
                    { label: 'Home', href: '/' },
                    { label: category, href: `/${category.toLowerCase().replace(/\s+/g, '-')}` },
                    { label: title, href: pathname || '#' }
                ]} />
            </div>

            {/* Article Header */}
            <header style={{ marginBottom: '2rem', textAlign: 'center' }}>
                <span className="category-badge" style={{
                    display: 'inline-block',
                    padding: '0.25rem 0.75rem',
                    backgroundColor: 'var(--secondary-color)',
                    color: '#2d3748',
                    borderRadius: '50px',
                    fontSize: '0.85rem',
                    fontWeight: '600',
                    marginBottom: '1rem',
                    textTransform: 'uppercase',
                    letterSpacing: '0.5px'
                }}>
                    {category}
                </span>

                <h1 style={{
                    fontSize: '2.5rem',
                    lineHeight: '1.2',
                    marginBottom: '1rem',
                    color: '#1a202c'
                }}>
                    {title}
                </h1>

                <div className="article-meta" style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    gap: '1.5rem',
                    color: '#718096',
                    fontSize: '0.95rem',
                    marginBottom: '2rem'
                }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                        <span>By <strong>{author}</strong></span>
                    </div>
                    <span>•</span>
                    <time dateTime={publishDate}>
                        {new Date(publishDate).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
                    </time>
                </div>

                {/* Featured Image */}
                <div style={{ position: 'relative', width: '100%', height: '400px', borderRadius: '12px', overflow: 'hidden', boxShadow: '0 4px 6px rgba(0,0,0,0.1)' }}>
                    <Image
                        src={image}
                        alt={title}
                        fill
                        style={{ objectFit: 'cover' }}
                        priority
                    />
                </div>
            </header>

            {/* Article Content */}
            <div className="article-content" style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#2d3748' }}>
                {children}
            </div>

            {/* Article Footer / Share */}
            <footer style={{ marginTop: '4rem', paddingTop: '2rem', borderTop: '1px solid #e2e8f0' }}>
                <div style={{ padding: '1.5rem', backgroundColor: '#f7fafc', borderRadius: '8px' }}>
                    <h3 style={{ fontSize: '1.2rem', marginBottom: '1rem' }}>Share this Wisdom</h3>
                    <div style={{ display: 'flex', gap: '1rem' }}>
                        <button style={shareBtnStyle} onClick={() => window.open(`https://twitter.com/intent/tweet?text=${title}&url=${currentUrl}`, '_blank')}>
                            Twitter
                        </button>
                        <button style={shareBtnStyle} onClick={() => window.open(`https://www.facebook.com/sharer/sharer.php?u=${currentUrl}`, '_blank')}>
                            Facebook
                        </button>
                        <button style={shareBtnStyle} onClick={() => window.open(`https://www.linkedin.com/shareArticle?mini=true&url=${currentUrl}&title=${title}`, '_blank')}>
                            LinkedIn
                        </button>
                        <button style={shareBtnStyle} onClick={() => navigator.clipboard.writeText(currentUrl).then(() => alert('Link copied!'))}>
                            Copy Link
                        </button>
                    </div>
                </div>

                {/* Author Bio (Simplified) */}
                <div style={{ marginTop: '2rem', display: 'flex', alignItems: 'center', gap: '1rem' }}>
                    <div style={{ width: '60px', height: '60px', borderRadius: '50%', backgroundColor: 'var(--primary-color)', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.5rem', fontWeight: 'bold' }}>
                        {author.charAt(0)}
                    </div>
                    <div>
                        <h4 style={{ margin: 0, fontSize: '1.1rem' }}>About {author}</h4>
                        <p style={{ margin: 0, color: '#718096', fontSize: '0.95rem' }}>Researcher and writer for Sacred Sanskriti, exploring the intersection of ancient wisdom and modern science.</p>
                    </div>
                </div>
            </footer>
        </article>
    );
}

const shareBtnStyle = {
    padding: '0.5rem 1rem',
    borderRadius: '4px',
    border: '1px solid #cbd5e0',
    backgroundColor: 'white',
    cursor: 'pointer',
    fontSize: '0.9rem',
    fontWeight: '500' as const,
    color: '#4a5568',
    transition: 'all 0.2s',
};
