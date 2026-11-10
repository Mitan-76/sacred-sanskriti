import type { Metadata } from "next";
import { getPostsByCategory } from "@/lib/content";
import CategoryPage from "@/components/CategoryPage";

export const metadata: Metadata = {
  title: "Symbols | Sacred Sanskriti",
  description:
    "Explore the deep meaning behind Hindu sacred symbols — Om, the lotus, and more — and what modern research reveals about their psychological significance.",
  alternates: {
    canonical: "/symbols",
  },
  openGraph: {
    title: "Symbols | Sacred Sanskriti",
    description:
      "The deep meaning behind Hindu sacred symbols — Om, the lotus, and more — through modern research and traditional understanding.",
    url: "https://sacredsanskriti.com/symbols",
    siteName: "Sacred Sanskriti",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Symbols | Sacred Sanskriti",
    description:
      "The deep meaning behind Hindu sacred symbols — Om, the lotus, and more — through modern research and traditional understanding.",
  },
};

export default function Page() {
  const posts = getPostsByCategory("symbols");

  return (
    <CategoryPage
      category="symbols"
      categoryLabel="Symbols"
      intro="Symbols explains the meaning behind Hindu sacred imagery and sound — starting with Om, the single syllable considered the sound-form of ultimate reality and the seed from which nearly every other Vedic mantra opens. The Mandukya Upanishad treats Om as four components in one: three sounds — A, U, and M — mapped onto waking, dreaming, and deep sleep, plus the silence that follows them, representing a state beyond all three. This section also covers what neuroimaging research has and hasn't shown about the physiological effects of chanting Om specifically, as distinct from the broader devotional and philosophical meaning of the symbol itself. More Hindu symbols — the lotus, the swastika, yantras, and others — will be added here as they're researched with the same direct-answer-first approach used throughout the site."
      posts={posts}
    />
  );
}
