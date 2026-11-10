import type { Metadata } from "next";
import { getPostsByCategory } from "@/lib/content";
import CategoryPage from "@/components/CategoryPage";

export const metadata: Metadata = {
  title: "Practices | Sacred Sanskriti",
  description:
    "Discover ancient Hindu practices — pranayama, meditation, Surya Namaskar, and more — explained through modern science and their real benefits.",
  alternates: {
    canonical: "/practices",
  },
  openGraph: {
    title: "Practices | Sacred Sanskriti",
    description:
      "Ancient Hindu practices — pranayama, meditation, Surya Namaskar, and Om chanting — explained through modern science.",
    url: "https://sacredsanskriti.com/practices",
    siteName: "Sacred Sanskriti",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Practices | Sacred Sanskriti",
    description:
      "Ancient Hindu practices — pranayama, meditation, Surya Namaskar, and Om chanting — explained through modern science.",
  },
};

export default function Page() {
  const posts = getPostsByCategory("practices");

  return (
    <CategoryPage
      category="practices"
      categoryLabel="Practices"
      intro="Ancient Hindu practices — pranayama, meditation, Surya Namaskar, and Om chanting — explained through modern science."
      posts={posts}
    />
  );
}
