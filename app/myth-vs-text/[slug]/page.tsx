import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getPostsByCategory, getPostBySlug } from "@/lib/content";
import { buildArticleMetadata } from "@/lib/seo";
import ArticlePage from "@/components/ArticlePage";

const CATEGORY = "myth-vs-text";

export async function generateStaticParams() {
  return getPostsByCategory(CATEGORY).map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const post = getPostBySlug(CATEGORY, params.slug);
  return post ? buildArticleMetadata(post, CATEGORY) : { title: "Article Not Found" };
}

export default function Page({ params }: { params: { slug: string } }) {
  const post = getPostBySlug(CATEGORY, params.slug);
  if (!post) return notFound();

  return <ArticlePage post={post} category={CATEGORY} />;
}
