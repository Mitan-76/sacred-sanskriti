import type { Metadata } from "next";
import { getPostsByCategory } from "@/lib/content";
import CategoryPage from "@/components/CategoryPage";

export const metadata: Metadata = {
  title: "Myth vs Text | Sacred Sanskriti",
  description:
    "Separating myth from scripture — what Hindu texts actually say versus common misconceptions. Evidence-based readings of Vedic and Puranic literature.",
  alternates: {
    canonical: "/myth-vs-text",
  },
  openGraph: {
    title: "Myth vs Text | Sacred Sanskriti",
    description:
      "What Hindu texts actually say versus common misconceptions — evidence-based readings of Vedic and Puranic literature.",
    url: "https://sacredsanskriti.com/myth-vs-text",
    siteName: "Sacred Sanskriti",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Myth vs Text | Sacred Sanskriti",
    description:
      "What Hindu texts actually say versus common misconceptions — evidence-based readings of Vedic and Puranic literature.",
  },
};

export default function Page() {
  const posts = getPostsByCategory("myth-vs-text");

  return (
    <CategoryPage
      category="myth-vs-text"
      categoryLabel="Myth vs Text"
      intro="What Hindu texts actually say versus common misconceptions — evidence-based readings of Vedic and Puranic literature."
      posts={posts}
    />
  );
}
