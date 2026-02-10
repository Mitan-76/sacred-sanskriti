'use client';

import { Metadata } from 'next';
import Breadcrumb from '@/components/Breadcrumb';

export default function FAQPage() {
    const faqs = [
        {
            question: "What is this website about?",
            answer: "This website supports our YouTube channel by providing detailed articles, explanations, and references related to Hindu philosophy, rituals, traditions, and ancient knowledge systems explained through science and logic."
        },
        {
            question: "What is the YouTube channel about?",
            answer: "The YouTube channel explains Hindu rituals, scriptures, symbols, and traditions using scientific reasoning, historical context, psychology, and logical analysis."
        },
        {
            question: "Is this channel about religion or blind faith?",
            answer: "No. The channel does not promote blind faith or religious preaching. It focuses on rational thinking and evidence-based explanations."
        },
        {
            question: "Does the channel promote superstition?",
            answer: "No. The channel challenges superstition and misinformation using logic, research, and historical evidence."
        },
        {
            question: "Are Hindu scriptures treated as scientific facts?",
            answer: "No. Scriptures are treated as philosophical and historical texts, analyzed symbolically and contextually."
        },
        {
            question: "What topics are covered on this channel?",
            answer: "Science behind rituals, mantras, myths vs facts, temple symbolism, psychology of practices, and history of traditions."
        },
        {
            question: "Who should watch this channel?",
            answer: "Anyone curious about Hindu philosophy, Indian culture, science, and logical thinking."
        },
        {
            question: "Is the content beginner-friendly?",
            answer: "Yes. Content is explained step by step in simple language."
        },
        {
            question: "Do you provide sources and references?",
            answer: "Yes. References include ancient texts, academic research, and modern studies."
        },
        {
            question: "Why should I trust this platform?",
            answer: "Because it encourages questioning, avoids sensationalism, and balances tradition with logic."
        }
    ];

    // FAQ Schema for SEO (JSON-LD format)
    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": faqs.map(faq => ({
            "@type": "Question",
            "name": faq.question,
            "acceptedAnswer": {
                "@type": "Answer",
                "text": faq.answer
            }
        }))
    };

    return (
        <div className="container" style={{ marginTop: '2rem' }}>
            {/* FAQ Schema Markup for SEO */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
            />

            <div style={{ gridColumn: 'span 12' }}>
                <Breadcrumb items={[{ label: 'Home', href: '/' }, { label: 'FAQ', href: '/faq' }]} />
            </div>

            <div style={{ gridColumn: 'span 12', maxWidth: '900px', margin: '0 auto' }}>
                <h1 style={{ color: 'var(--primary-color)', marginBottom: '1.5rem' }}>
                    Frequently Asked Questions
                </h1>

                <p className="mb-4" style={{ fontSize: '1.1rem', color: '#4a5568', lineHeight: '1.8' }}>
                    Find answers to common questions about Sacred Sanskriti, our approach to exploring Hindu traditions through science and logic, and what makes our platform unique.
                </p>

                <div style={{
                    padding: '1rem 1.5rem',
                    backgroundColor: '#f0f9ff',
                    borderLeft: '4px solid var(--primary-color)',
                    marginBottom: '2.5rem',
                    borderRadius: '4px'
                }}>
                    <p style={{ margin: 0, fontSize: '0.95rem', lineHeight: '1.7' }}>
                        <strong>Quick Note:</strong> We encourage questioning and critical thinking. If you don't find your answer here, feel free to <a href="/contact" style={{ color: 'var(--link-color)', textDecoration: 'underline' }}>contact us</a>.
                    </p>
                </div>

                <div style={{ marginTop: '2rem' }}>
                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            className="card"
                            style={{
                                marginBottom: '1.5rem',
                                borderLeft: '4px solid var(--primary-color)',
                                transition: 'transform 0.2s ease, box-shadow 0.2s ease',
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.transform = 'translateX(4px)';
                                e.currentTarget.style.boxShadow = '0 6px 12px rgba(0,0,0,0.1)';
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.transform = 'translateX(0)';
                                e.currentTarget.style.boxShadow = '0 4px 6px rgba(0,0,0,0.05)';
                            }}
                        >
                            <h2 style={{
                                fontSize: '1.25rem',
                                color: '#2d3748',
                                marginBottom: '0.75rem',
                                fontWeight: '600',
                                display: 'flex',
                                alignItems: 'flex-start'
                            }}>
                                <span style={{
                                    color: 'var(--primary-color)',
                                    marginRight: '0.5rem',
                                    fontSize: '1.4rem',
                                    fontWeight: 'bold'
                                }}>
                                    Q:
                                </span>
                                <span>{faq.question}</span>
                            </h2>
                            <p style={{
                                fontSize: '1rem',
                                lineHeight: '1.7',
                                color: '#4a5568',
                                margin: 0,
                                paddingLeft: '1.9rem'
                            }}>
                                <span style={{
                                    color: 'var(--accent-color)',
                                    fontWeight: 'bold',
                                    marginRight: '0.5rem'
                                }}>
                                    A:
                                </span>
                                {faq.answer}
                            </p>
                        </div>
                    ))}
                </div>

                <div style={{
                    marginTop: '3rem',
                    padding: '2rem',
                    background: 'linear-gradient(135deg, #f7fafc 0%, #edf2f7 100%)',
                    borderRadius: '12px',
                    border: '1px solid #e2e8f0',
                    textAlign: 'center'
                }}>
                    <h3 style={{
                        color: '#2d3748',
                        marginBottom: '1rem',
                        fontSize: '1.4rem'
                    }}>
                        Still Have Questions?
                    </h3>
                    <p style={{
                        marginBottom: '1.5rem',
                        color: '#4a5568',
                        fontSize: '1.05rem',
                        lineHeight: '1.7'
                    }}>
                        We're here to help! Our team is committed to providing clear, evidence-based answers to your questions about Hindu traditions, philosophy, and practices.
                    </p>
                    <a
                        href="/contact"
                        style={{
                            display: 'inline-block',
                            padding: '0.875rem 2rem',
                            backgroundColor: 'var(--primary-color)',
                            color: 'white',
                            borderRadius: '8px',
                            textDecoration: 'none',
                            fontWeight: '600',
                            fontSize: '1.05rem',
                            transition: 'all 0.3s ease',
                            boxShadow: '0 4px 6px rgba(98, 193, 174, 0.3)'
                        }}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.backgroundColor = '#4A9D8E';
                            e.currentTarget.style.transform = 'translateY(-2px)';
                            e.currentTarget.style.boxShadow = '0 6px 12px rgba(98, 193, 174, 0.4)';
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.backgroundColor = 'var(--primary-color)';
                            e.currentTarget.style.transform = 'translateY(0)';
                            e.currentTarget.style.boxShadow = '0 4px 6px rgba(98, 193, 174, 0.3)';
                        }}
                    >
                        Contact Us
                    </a>
                </div>

                <div style={{
                    marginTop: '2rem',
                    padding: '1.25rem',
                    backgroundColor: '#fffbeb',
                    borderRadius: '8px',
                    borderLeft: '4px solid var(--accent-color)'
                }}>
                    <p style={{ margin: 0, fontSize: '0.95rem', lineHeight: '1.7', color: '#78350f' }}>
                        <strong>💡 Pro Tip:</strong> Bookmark this page for quick reference. We regularly update our FAQs based on the most common questions from our community.
                    </p>
                </div>
            </div>
        </div>
    );
}
