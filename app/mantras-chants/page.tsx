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
      intro="Mantras & Chants explores the meaning, structure, and — where it's been genuinely studied — the acoustic and neurological science behind Vedic sound. The Gayatri Mantra is the starting point: one of the oldest and most widely recited verses in the Vedic tradition, and one of the most widely misunderstood, often reduced to a vague 'prayer to the sun' rather than its actual request for clarity of mind. Here you'll find the mantra broken down word by word, its traditional recitation schedule, and an honest account of what research on related Sanskrit chanting practices does and doesn't show about its effects on the nervous system. More mantras and chants will be added here as they're researched to the same standard: a direct translation first, then the tradition, then whatever real evidence exists — never the reverse."
      posts={posts}
    />
  );
}
