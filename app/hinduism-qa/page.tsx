import type { Metadata } from "next";
import { getPostsByCategory } from "@/lib/content";
import CategoryPage from "@/components/CategoryPage";

export const metadata: Metadata = {
  title: "Hinduism Q & A | Sacred Sanskriti",
  description:
    "Answers to commonly asked questions about Hinduism, Hindu culture, practices, philosophy, and traditions — explained clearly and thoughtfully.",
  alternates: {
    canonical: "/hinduism-qa",
  },
  openGraph: {
    title: "Hinduism Q & A | Sacred Sanskriti",
    description:
      "Answers to commonly asked questions about Hinduism, Hindu culture, practices, philosophy, and traditions.",
    url: "https://sacredsanskriti.com/hinduism-qa",
    siteName: "Sacred Sanskriti",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Hinduism Q & A | Sacred Sanskriti",
    description:
      "Answers to commonly asked questions about Hinduism, Hindu culture, practices, philosophy, and traditions.",
  },
};

export default function Page() {
  const posts = getPostsByCategory("hinduism-qa");

  return (
    <CategoryPage
      category="hinduism-qa"
      categoryLabel="Hinduism Q & A"
      intro="Hinduism Q & A exists for the questions people actually ask — about the figures, places, and ideas at the center of Hindu tradition — answered directly and checked against the sources behind them, not left as vague folklore. You'll find out who Karna really was and why the Mahabharata treats him as its most tragic figure, what the Kurukshetra War actually involved, practical guidance for visiting the Sri Venkateswara Swamy Temple at Tirupati or touring all 12 Jyotirlinga shrines, the real scope of Hanuman's strength and devotion, and what Dharma means beneath the single-word translations of 'duty' or 'religion' that rarely capture it. Every answer here starts with a direct response to the question in the title, then works through the textual and historical detail behind it — because 'it's complicated' is rarely a satisfying answer, and it's rarely the whole truth either."
      posts={posts}
    />
  );
}
