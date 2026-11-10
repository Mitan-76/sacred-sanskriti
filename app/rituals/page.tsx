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
      intro="Rituals covers the structured, repeated acts of Hindu religious life — starting with Agnihotra, the twice-daily Vedic fire offering performed at the precise moment of sunrise and sunset. It's one of the oldest and simplest Vedic fire rituals, and also one with a genuinely contested evidence base: some studies report measurable air-quality effects around the ritual fire, while the most carefully controlled test of its specific ritual elements found no measurable difference whether the mantras and exact timing were followed or not. That tension — real tradition, partial and mixed evidence — is exactly what this section is for: taking a ritual seriously on its own terms while being honest about where the science actually lands. More rituals will be added here as they're researched to the same standard."
      posts={posts}
    />
  );
}
