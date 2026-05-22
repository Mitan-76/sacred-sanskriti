import Link from "next/link";
import type { Metadata } from "next";
import { getPostsByCategory } from "@/lib/content";

export const metadata: Metadata = {
  title: "Myth vs Text | Sacred Sanskriti",
  description:
    "Separating myth from scripture — what Hindu texts actually say versus common misconceptions. Evidence-based readings of Vedic and Puranic literature.",
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

export default function MythVsTextPage() {
  const posts = getPostsByCategory("myth-vs-text");

  return (
    <div className="article-content">
      <h1>Myth vs Text</h1>

      {posts.map((post) => (
        <div key={post.slug} style={{ marginBottom: "20px" }}>
          <h2>
            <Link href={`/myth-vs-text/${post.slug}`}>
              {post.title}
            </Link>
          </h2>
          <p>{post.description}</p>
        </div>
      ))}
    </div>
  );
}