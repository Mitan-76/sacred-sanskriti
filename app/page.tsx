import type { Metadata } from "next";
import { AudioLines, Flame, Infinity as InfinityIcon, BookOpen, Sunrise, HelpCircle } from "lucide-react";
import { getLatestPosts } from "@/lib/content";
import Hero from "@/components/Hero";
import CategoryCard from "@/components/CategoryCard";
import ArticleCard from "@/components/ArticleCard";

export const metadata: Metadata = {
  title: "Sacred Sanskriti | Where Science Meets the Sacred",
  description:
    "An evidence-based exploration of Hindu traditions — the neuroscience of mantras, psychology of rituals, meaning of sacred symbols, and clear answers about Hinduism.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Sacred Sanskriti | Where Science Meets the Sacred",
    description:
      "An evidence-based exploration of Hindu traditions — the neuroscience of mantras, psychology of rituals, meaning of sacred symbols, and clear answers about Hinduism.",
    url: "https://sacredsanskriti.com",
    siteName: "Sacred Sanskriti",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sacred Sanskriti | Where Science Meets the Sacred",
    description:
      "An evidence-based exploration of Hindu traditions — the neuroscience of mantras, psychology of rituals, meaning of sacred symbols, and clear answers about Hinduism.",
  },
};

const PILLARS = [
  { title: "Mantras & Chants", slug: "mantras-chants", description: "Meaning, structure, rhythm, and sound science.", icon: AudioLines },
  { title: "Rituals", slug: "rituals", description: "Evolutionary biology and sociology of rituals.", icon: Flame },
  { title: "Symbols", slug: "symbols", description: "Semiotics and the psychological impact of sacred geometry.", icon: InfinityIcon },
  { title: "Myth vs Text", slug: "myth-vs-text", description: "Comparative linguistics and historical accuracy.", icon: BookOpen },
  { title: "Practices", slug: "practices", description: "Neuroscience and psychology behind spiritual acts.", icon: Sunrise },
  { title: "Hinduism Q & A", slug: "hinduism-qa", description: "Clear answers to commonly asked questions about Hinduism, culture, and traditions.", icon: HelpCircle },
];

export default function Home() {
  const latestPosts = getLatestPosts(5);

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6">
      <Hero />

      <section id="explore" className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {PILLARS.map((pillar) => (
          <CategoryCard
            key={pillar.slug}
            slug={pillar.slug}
            title={pillar.title}
            description={pillar.description}
            icon={pillar.icon}
          />
        ))}
      </section>

      <section className="mt-14">
        <h2 className="font-heading text-2xl font-semibold text-ink-700">Latest Articles</h2>
        <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {latestPosts.map((post) => (
            <ArticleCard key={`${post.category}-${post.slug}`} post={post} />
          ))}
        </div>
      </section>
    </div>
  );
}
