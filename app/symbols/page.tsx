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
      intro="The deep meaning behind Hindu sacred symbols — Om, the lotus, and more — through modern research and traditional understanding."
      posts={posts}
    />
  );
}
