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
      intro="Myth vs Text is where popular belief about Hinduism gets checked against what the actual scriptures say — because the two have drifted apart more than most people realize, usually through centuries of retelling rather than any single deliberate distortion. Take the claim that Hinduism has '33 crore (330 million) gods': the number comes from a mistranslated Sanskrit word, and the real textual claim is a specific, nameable list of 33 deity-categories. Or Kali Yuga, the current age in Hindu cosmology, widely described in ways the source texts themselves don't quite say. This section exists because the myth-vs-text gap is often more interesting, and more revealing of how tradition actually works, than either the popular version or a flat debunking of it. Expect named texts, verse references, and an honest account of where scholars and traditions themselves disagree."
      posts={posts}
    />
  );
}
