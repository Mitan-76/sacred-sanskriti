import type { Metadata } from "next";
import { getPostsByCategory } from "@/lib/content";
import { notFound } from "next/navigation";
import { remark } from "remark";
import html from "remark-html";

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const posts = getPostsByCategory("mantras-chants");
  const post = posts.find((p) => p.slug === params.slug);

  if (!post) {
    return {
      title: "Article Not Found",
    };
  }

  return {
    title: post.title,
  description: post.description,
  openGraph: {
    title: post.title,
    description: post.description,
    url: `https://sacredsanskriti.com/mantras-chants/${post.slug}`,
    siteName: "Sacred Sanskriti",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: post.title,
    description: post.description,
    },
  };
}

export default async function MantraPage({
  params,
}: {
  params: { slug: string };
}) {
  const posts = getPostsByCategory("mantras-chants");

  const post = posts.find((p) => p.slug === params.slug);

  if (!post) return notFound();

  const processedContent = await remark()
    .use(html)
    .process(post.content);

  const contentHtml = processedContent.toString();

  return (
    <div>
      <h1>{post.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: contentHtml }} />
    </div>
  );
}