import type { Metadata } from "next";
import { Inter, Merriweather } from "next/font/google"; // Using Google Fonts
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";

const inter = Inter({ subsets: ["latin"], variable: "--font-main" });
const merriweather = Merriweather({
    weight: ["300", "400", "700"],
    subsets: ["latin"],
    variable: "--font-heading"
});

export const metadata: Metadata = {
    title: "Sacred Sanskriti | Scientific Study of Religious Phenomena",
    description: "Exploring the neuroscience, psychology, and evolutionary biology behind spiritual rituals, mantras, and symbols. Evidence-based analysis of Hindu traditions through science and logic.",
    keywords: ["Hindu philosophy", "Vedic science", "mantras", "rituals", "sacred symbols", "spirituality and science", "neuroscience of meditation", "Indian culture", "Sanatana Dharma"],
    authors: [{ name: "Sacred Sanskriti Team" }],
    creator: "Sacred Sanskriti",
    publisher: "Sacred Sanskriti",
    icons: {
        icon: '/logo.jpg',
    },
    metadataBase: new URL('https://sacredsanskriti.com'),
    openGraph: {
        type: 'website',
        locale: 'en_IN',
        url: 'https://sacredsanskriti.com',
        siteName: 'Sacred Sanskriti',
        title: 'Sacred Sanskriti | Where Vedic Wisdom Meets Modern Science',
        description: 'Exploring Hindu traditions through scientific reasoning, historical context, and logical analysis. Evidence-based insights into mantras, rituals, symbols, and ancient wisdom.',
        images: [
            {
                url: '/logo.jpg',
                width: 1200,
                height: 630,
                alt: 'Sacred Sanskriti Logo',
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Sacred Sanskriti | Scientific Study of Religious Phenomena',
        description: 'Evidence-based exploration of Hindu traditions through science and logic.',
        images: ['/logo.jpg'],
        creator: '@sacredsanskriti',
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
        },
    },
    verification: {
        // Add your verification codes when available
        // google: 'your-google-verification-code',
        // yandex: 'your-yandex-verification-code',
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <head>
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
                            "@context": "https://schema.org",
                            "@type": "Organization",
                            "name": "Sacred Sanskriti",
                            "url": "https://sacredsanskriti.com",
                            "logo": "https://sacredsanskriti.com/logo.jpg",
                            "description": "A premier digital platform exploring Hindu traditions through scientific reasoning, historical context, and logical analysis.",
                            "address": {
                                "@type": "PostalAddress",
                                "addressLocality": "Hyderabad",
                                "addressRegion": "Telangana",
                                "addressCountry": "IN"
                            },
                            "contactPoint": {
                                "@type": "ContactPoint",
                                "email": "contact@sacredsanskriti.com",
                                "contactType": "Customer Service"
                            },
                            "sameAs": [
                                "https://www.youtube.com/@sacredsanskriti"
                            ]
                        })
                    }}
                />
            </head>
            <body className={`${inter.variable} ${merriweather.variable}`}>
                <Header />
                <main className="page-transition" style={{ minHeight: '80vh' }}>
                    {children}
                </main>
                <BackToTop />
                <Footer />
            </body>
        </html>
    );
}
