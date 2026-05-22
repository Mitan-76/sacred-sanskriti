import Link from "next/link";
import type { Metadata } from "next";
import { getPostsByCategory } from "@/lib/content";

export const metadata: Metadata = {
  title: "Rituals | Sacred Sanskriti",
  description:
    "Understand the science and tradition behind Hindu rituals — from Agnihotra to daily worship — and the evidence-based reasons these practices have endured for thousands of years.",
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

export default function RitualsPage() {
  const posts = getPostsByCategory("rituals");

  return (
    <div className="article-content">
      <h1>Rituals</h1>

      {posts.map((post) => (
        <div key={post.slug} style={{ marginBottom: "20px" }}>
          <h2>
            <Link href={`/rituals/${post.slug}`}>
              {post.title}
            </Link>
          </h2>
          <p>{post.description}</p>
        </div>
      ))}
    </div>
  );
}