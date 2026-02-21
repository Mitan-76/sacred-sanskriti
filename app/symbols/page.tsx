import Link from "next/link";
import { getPostsByCategory } from "@/lib/content";

export default function SymbolsPage() {
  const posts = getPostsByCategory("symbols");

  return (
    <div>
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