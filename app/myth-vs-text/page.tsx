import Link from "next/link";
import { getPostsByCategory } from "@/lib/content";

export default function MythVsTextPage() {
  const posts = getPostsByCategory("myth-vs-text");

  return (
    <div>
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