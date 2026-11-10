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
      intro="Practices looks at the physical and ritual acts of Hindu tradition — the Surya Namaskar sequence, temple bells, and more — through both their traditional purpose and whatever real research exists about their physiological or psychological effects. The approach here is deliberately narrow: where a controlled study actually measured something, we say what it found and how strong that evidence is, including when it's modest, mixed, or specific to a related practice rather than the one being discussed. Where no such evidence exists, we say so plainly rather than inventing a scientific gloss for a practice whose value may be entirely traditional, devotional, or psychological in ways science hasn't measured. The goal isn't to prove these practices work scientifically — it's to accurately describe what's actually known, and let the practice stand on its own tradition where the evidence doesn't reach."
      posts={posts}
    />
  );
}
