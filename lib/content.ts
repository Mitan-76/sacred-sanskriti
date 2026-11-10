import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { cache } from "react";
import { CATEGORIES } from "@/lib/navigation";

export interface Post {
  slug: string;
  title: string;
  description: string;
  content: string;
  publishedAt: string;
  updatedAt: string;
  image: string;
  category: string;
  healthContent: boolean;
}

export function getAllCategories(): string[] {
  return CATEGORIES.map((c) => c.slug);
}

function toPost(data: Record<string, unknown>, content: string, slug: string, category: string): Post {
  return {
    slug,
    title: data.title as string,
    description: data.description as string,
    publishedAt: (data.publishedAt as string) ?? (data.date as string),
    updatedAt: (data.updatedAt as string) ?? (data.publishedAt as string) ?? (data.date as string),
    image: (data.image as string) || "/logo.png",
    category,
    healthContent: Boolean(data.healthContent),
    content,
  };
}

export function getPostsByCategory(category: string): Post[] {
  const postsDirectory = path.join(process.cwd(), "content", category);

  const fileNames = fs.readdirSync(postsDirectory);

  const posts = fileNames.map((fileName) => {
    const slug = fileName.replace(".md", "");
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, "utf8");
    const { data, content } = matter(fileContents);

    return toPost(data, content, slug, category);
  });

  // Newest first — this was previously just filesystem/directory read order,
  // which is why category pages weren't actually listing newest-first per
  // Phase 4.5's requirement.
  return sortByDateDesc(posts);
}

export const getPostBySlug = cache(function getPostBySlug(
  category: string,
  slug: string
): Post | undefined {
  const fullPath = path.join(process.cwd(), "content", category, `${slug}.md`);

  try {
    const fileContents = fs.readFileSync(fullPath, "utf8");
    const { data, content } = matter(fileContents);

    return toPost(data, content, slug, category);
  } catch {
    return undefined;
  }
});

function sortByDateDesc(posts: Post[]): Post[] {
  return [...posts].sort(
    (a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
  );
}

export function getLatestPosts(limit = 5): Post[] {
  const all = getAllCategories().flatMap((category) => getPostsByCategory(category));
  return sortByDateDesc(all).slice(0, limit);
}

/**
 * Related articles, biased toward the current category but backfilled from
 * other categories' most recent posts when the category has too few siblings
 * (several categories only have 1-2 articles today) — otherwise the section
 * would be empty or near-empty most of the time.
 */
export function getRelatedPosts(category: string, excludeSlug: string, limit = 3): Post[] {
  const sameCategory = sortByDateDesc(
    getPostsByCategory(category).filter((p) => p.slug !== excludeSlug)
  );

  if (sameCategory.length >= limit) {
    return sameCategory.slice(0, limit);
  }

  const others = sortByDateDesc(
    getAllCategories()
      .filter((c) => c !== category)
      .flatMap((c) => getPostsByCategory(c))
  );

  return [...sameCategory, ...others.slice(0, limit - sameCategory.length)];
}
