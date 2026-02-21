import Link from "next/link";
import { getPostsByCategory } from "@/lib/content";

export default function RitualsPage() {
  const posts = getPostsByCategory("rituals");

  return (
    <div>
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