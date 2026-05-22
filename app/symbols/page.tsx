import Link from "next/link";
import type { Metadata } from "next";
import { getPostsByCategory } from "@/lib/content";

export const metadata: Metadata = {
  title: "Symbols | Sacred Sanskriti",
  description:
    "Explore the deep meaning behind Hindu sacred symbols — Om, the lotus, and more — and what modern research reveals about their psychological, cultural, and spiritual significance.",
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

export default function SymbolsPage() {
  const posts = getPostsByCategory("symbols");

  return (
    <div className="article-content">
      <h1>Symbols</h1>

      {posts.map((post) => (
        <div key={post.slug} style={{ marginBottom: "20px" }}>
          <h2>
            <Link href={`/symbols/${post.slug}`}>
              {post.title}
            </Link>
          </h2>
          <p>{post.description}</p>
        </div>
      ))}
    </div>
  );
}