import Link from "next/link";
import type { Metadata } from "next";
import { getPostsByCategory } from "@/lib/content";

export const metadata: Metadata = {
  title: "Practices | Sacred Sanskriti",
  description:
    "Discover ancient Hindu practices — pranayama, meditation, Surya Namaskar, Om chanting, and more — explained through modern science and their real benefits for mind and body.",
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

export default function PracticesPage() {
  const posts = getPostsByCategory("practices");

  return (
    <div className="article-content">
      <h1>Practices</h1>

      {posts.map((post) => (
        <div key={post.slug} style={{ marginBottom: "20px" }}>
          <h2>
            <Link href={`/practices/${post.slug}`}>
              {post.title}
            </Link>
          </h2>
          <p>{post.description}</p>
        </div>
      ))}
    </div>
  );
}