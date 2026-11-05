import type { Post } from "@/lib/content";
import Breadcrumb from "@/components/Breadcrumb";
import ArticleCard from "@/components/ArticleCard";

interface CategoryPageProps {
  category: string;
  categoryLabel: string;
  intro: string;
  posts: Post[];
}

export default function CategoryPage({ category, categoryLabel, intro, posts }: CategoryPageProps) {
  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6">
      <Breadcrumb items={[{ label: "Home", href: "/" }, { label: categoryLabel, href: `/${category}` }]} />
      <h1 className="font-heading text-3xl font-bold text-ink-700 sm:text-4xl">{categoryLabel}</h1>
      <p className="mt-3 max-w-2xl text-ink-500">{intro}</p>

      {posts.length === 0 ? (
        <p className="mt-10 text-ink-500">Articles coming soon.</p>
      ) : (
        <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <ArticleCard key={post.slug} post={post} />
          ))}
        </div>
      )}
    </div>
  );
}
