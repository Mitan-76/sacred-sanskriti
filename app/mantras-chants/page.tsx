import Link from "next/link";
import { getPostsByCategory } from "@/lib/content";

export default function MantrasChantsPage() {
  const posts = getPostsByCategory("mantras-chants");

  return (
    <div>
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