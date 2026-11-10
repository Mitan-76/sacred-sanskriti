import type { Metadata } from "next";
import { getPostsByCategory } from "@/lib/content";
import CategoryPage from "@/components/CategoryPage";

export const metadata: Metadata = {
  title: "Mantras & Chants | Sacred Sanskriti",
  description:
    "Explore the science and meaning behind Vedic mantras and chants — from the Gayatri Mantra to Om chanting — with evidence-based insights.",
  alternates: {
    canonical: "/mantras-chants",
  },
  openGraph: {
    title: "Mantras & Chants | Sacred Sanskriti",
    description:
      "Explore the science and meaning behind Vedic mantras and chants — from the Gayatri Mantra to Om chanting.",
    url: "https://sacredsanskriti.com/mantras-chants",
    siteName: "Sacred Sanskriti",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mantras & Chants | Sacred Sanskriti",
    description:
      "Explore the science and meaning behind Vedic mantras and chants — from the Gayatri Mantra to Om chanting.",
  },
};

export default function Page() {
  const posts = getPostsByCategory("mantras-chants");

  return (
    <CategoryPage
      category="mantras-chants"
      categoryLabel="Mantras & Chants"
      intro="The science and meaning behind Vedic mantras and chants — from the Gayatri Mantra to Om chanting."
      posts={posts}
    />
  );
}
