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
      intro="Clear, thoughtful answers to the most commonly asked questions about Hinduism — covering philosophy, culture, practices, and traditions."
      posts={posts}
    />
  );
}
