import Link from "next/link";
import type { Metadata } from "next";
import { getPostsByCategory } from "@/lib/content";

export const metadata: Metadata = {
  title: "Hinduism Q & A | Sacred Sanskriti",
  description:
    "Answers to commonly asked questions about Hinduism, Hindu culture, practices, philosophy, and traditions — explained clearly and thoughtfully.",
  openGraph: {
    title: "Hinduism Q & A | Sacred Sanskriti",
    description:
      "Answers to commonly asked questions about Hinduism, Hindu culture, practices, philosophy, and traditions.",
    url: "https://sacredsanskriti.com/hinduism-qa",
    siteName: "Sacred Sanskriti",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Hinduism Q & A | Sacred Sanskriti",
    description:
      "Answers to commonly asked questions about Hinduism, Hindu culture, practices, philosophy, and traditions.",
  },
};

export default function HinduismQAPage() {
  const posts = getPostsByCategory("hinduism-qa");

  return (
    <div className="article-content">
      <h1>Hinduism Q &amp; A</h1>
      <p style={{ marginBottom: "2rem", color: "#4a5568" }}>
        Clear, thoughtful answers to the most commonly asked questions about
        Hinduism — covering philosophy, culture, practices, and traditions.
      </p>

      {posts.length === 0 ? (
        <p>Articles coming soon.</p>
      ) : (
        posts.map((post) => (
          <div key={post.slug} style={{ marginBottom: "20px" }}>
            <h2>
              <Link href={`/hinduism-qa/${post.slug}`}>{post.title}</Link>
            </h2>
            <p>{post.description}</p>
          </div>
        ))
      )}
    </div>
  );
}
