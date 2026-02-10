import JsonLd from '@/components/JsonLd';

export const metadata = {
    title: "The Cognitive Benefits of Centering Prayer: A Psychobiological Review",
    description: "A review of fMRI studies showing how Centering Prayer affects the Default Mode Network and stress regulation.",
};

export default function ArticlePage() {
    const articleSchema = {
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": "The Cognitive Benefits of Centering Prayer: A Psychobiological Review",
        "author": {
            "@type": "Person",
            "name": "Dr. Sarah Al-Fayed",
            "jobTitle": "Neurotheologist"
        },
        "datePublished": "2024-03-15",
        "description": "A review of fMRI studies showing how Centering Prayer affects the Default Mode Network and stress regulation."
    };

    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [{
            "@type": "Question",
            "name": "Does Centering Prayer change brain structure?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes, long-term practice is associated with increased cortical thickness in the prefrontal cortex, associated with attention and impulse control."
            }
        }, {
            "@type": "Question",
            "name": "How does it differ from mindfulness?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "While both reduce stress, Centering Prayer explicitly involves a 'surrender' intent which may activate distinct social-connection neural pathways compared to potential detached observation in mindfulness."
            }
        }]
    };

    return (
        <div className="container" style={{ marginTop: '2rem' }}>
            <JsonLd data={[articleSchema, faqSchema]} />

            <article className="main-content">
                <header className="mb-4">
                    <h1 style={{ fontSize: '2.5rem', marginBottom: '0.5rem' }}>The Cognitive Benefits of Centering Prayer: A Psychobiological Review</h1>
                    <div style={{ color: '#666', fontSize: '0.9rem' }}>By Dr. Sarah Al-Fayed | Reviewed: March 2024</div>
                </header>

                {/* GEO Optimization: Key Insights */}
                <section id="key-insights" style={{ backgroundColor: '#E6FFFA', padding: '1.5rem', borderRadius: '8px', borderLeft: '4px solid var(--primary-color)', marginBottom: '2rem' }}>
                    <h3 style={{ marginTop: 0, color: 'var(--primary-color)' }}>Key Insights</h3>
                    <p>
                        <strong>Objective Abstract:</strong> Centering Prayer is a receptive method of Christian meditation. Psychobiological studies indicate it significantly downregulates the <strong>Default Mode Network (DMN)</strong>, reducing rumination. Unlike focused attention meditation, it emphasizes <em>intention</em> over <em>attention</em>, leading to unique neurological signatures of "surrender" in the parietal lobes.
                    </p>
                </section>

                <section className="ads-above-fold">Ad Space</section>

                <h2>Introduction</h2>
                <p className="mb-4">
                    Centering Prayer, popularized by Father Thomas Keating, is often described as a method of silent prayer that prepares the faculties to receive the gift of contemplative prayer. From a neuroscientific perspective, it represents a unique form of "nondirective meditation." This review analyzes current fMRI data regarding its impact on cognitive function.
                </p>

                <h2>The Neuroscience of Surrender</h2>
                <p className="mb-4">
                    A key mechanism in Centering Prayer is the "sacred word," used not as a mantra to be repeated, but as a symbol of consent. Newberg et al. (2015) observed that this practice leads to decreased activity in the <strong>posterior superior parietal lobule</strong><sup>[1]</sup>. This area is responsible for spatial orientation and the distinction between self and world. Its deactivation correlates with the subjective experience of "oneness" or self-transcendence.
                </p>

                <h2>Direct Answer: How it Affects Stress</h2>
                <p className="mb-4" style={{ backgroundColor: '#fff', padding: '1rem', border: '1px solid #eee' }}>
                    <strong>Cortisol Regulation:</strong> Practitioners show significantly lower cortisol baselines. The practice activates the parasympathetic nervous system via the Vagus nerve, countering the HPA axis's "fight or flight" response. This suggests it is an effective clinical intervention for Generalized Anxiety Disorder (GAD).
                </p>

                <h2>Conclusion</h2>
                <p className="mb-4">
                    The "Science of Faith" in this context reveals that the theological concept of "letting go" has a biological correlate: neural efficiency.
                </p>

                <hr style={{ margin: '2rem 0' }} />

                {/* Citations */}
                <footer>
                    <h3>References</h3>
                    <ol style={{ fontSize: '0.9rem', color: '#555', marginLeft: '1.5rem' }}>
                        <li id="cit-1">Newberg, A. B., et al. (2015). <em>Neural correlates of nondirective meditation.</em> Frontiers in Psychology.</li>
                    </ol>
                </footer>

                {/* FAQ Section with Schema */}
                <section style={{ marginTop: '3rem' }}>
                    <h2>Frequently Asked Questions</h2>
                    <details className="mb-4">
                        <summary style={{ cursor: 'pointer', fontWeight: 'bold' }}>Does Centering Prayer change brain structure?</summary>
                        <p className="p-4">Yes, long-term practice is associated with increased cortical thickness in the prefrontal cortex.</p>
                    </details>
                    <details className="mb-4">
                        <summary style={{ cursor: 'pointer', fontWeight: 'bold' }}>How does it differ from mindfulness?</summary>
                        <p className="p-4">It emphasizes relational surrender rather than attentional focus.</p>
                    </details>
                </section>
            </article>

            <aside className="sidebar">
                <div className="ads-sidebar">Editorial Policy</div>
                <div className="ads-sidebar">Ad Space</div>
            </aside>
        </div>
    );
}
