import type { Metadata } from "next";
import { getPostsByCategory } from "@/lib/content";
import CategoryPage from "@/components/CategoryPage";

export const metadata: Metadata = {
  title: "Rituals | Sacred Sanskriti",
  description:
    "Understand the science and tradition behind Hindu rituals — from Agnihotra to daily worship — and why these practices have endured for millennia.",
  alternates: {
    canonical: "/rituals",
  },
  openGraph: {
    title: "Rituals | Sacred Sanskriti",
    description:
      "The science and tradition behind Hindu rituals — from Agnihotra to daily worship — and why these practices have endured for thousands of years.",
    url: "https://sacredsanskriti.com/rituals",
    siteName: "Sacred Sanskriti",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Rituals | Sacred Sanskriti",
    description:
      "The science and tradition behind Hindu rituals — from Agnihotra to daily worship — and why these practices have endured for thousands of years.",
  },
};

export default function Page() {
  const posts = getPostsByCategory("rituals");

  return (
    <CategoryPage
      category="rituals"
      categoryLabel="Rituals"
      intro="The science and tradition behind Hindu rituals — from Agnihotra to daily worship — and why these practices have endured for thousands of years."
      posts={posts}
    />
  );
}
