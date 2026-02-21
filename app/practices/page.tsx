import Link from "next/link";
import { getPostsByCategory } from "@/lib/content";

export default function PracticesPage() {
  const posts = getPostsByCategory("practices");

  return (
    <div>
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