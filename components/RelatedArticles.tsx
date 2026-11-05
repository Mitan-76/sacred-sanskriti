import type { Post } from "@/lib/content";
import ArticleCard from "@/components/ArticleCard";

export default function RelatedArticles({ posts }: { posts: Post[] }) {
  if (posts.length === 0) return null;

  return (
    <section className="mt-12 border-t border-ink-100 pt-10">
      <h2 className="font-heading text-2xl font-semibold text-ink-700">You Might Also Like</h2>
      <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {posts.map((post) => (
          <ArticleCard key={post.slug} post={post} />
        ))}
      </div>
    </section>
  );
}
