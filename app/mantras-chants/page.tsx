import Link from "next/link";
import type { Metadata } from "next";
import { getPostsByCategory } from "@/lib/content";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "Mantras & Chants | Sacred Sanskriti",
  description:
    "Explore the science and meaning behind Vedic mantras and chants — from the Gayatri Mantra to Om chanting — with evidence-based insights and traditional wisdom.",
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

export default function MantrasChantsPage() {
  const posts = getPostsByCategory("mantras-chants");

  return (
    <div className="article-content">
      <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Mantras & Chants", href: "/mantras-chants" }]} />
      <h1>Mantras & Chants</h1>

      {posts.map((post) => (
        <div key={post.slug} style={{ marginBottom: "20px" }}>
          <h2>
            <Link href={`/mantras-chants/${post.slug}`}>
              {post.title}
            </Link>
          </h2>
          <p>{post.description}</p>
        </div>
      ))}
    </div>
  );
}