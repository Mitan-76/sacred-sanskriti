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
  tags: string[];
  youtubeId?: string;
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
    tags: Array.isArray(data.tags) ? (data.tags as string[]) : [],
    youtubeId: (data.youtubeId as string) || undefined,
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

function sharedTagCount(a: Post, b: Post): number {
  return a.tags.filter((tag) => b.tags.includes(tag)).length;
}

/** Shared-tag count first (descending), recency as the tiebreak — used
 * within each priority bucket in getRelatedPosts, not across them. */
function sortByTagOverlapThenDate(posts: Post[], current: Post): Post[] {
  return [...posts].sort((a, b) => {
    const tagDiff = sharedTagCount(b, current) - sharedTagCount(a, current);
    if (tagDiff !== 0) return tagDiff;
    return new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime();
  });
}

/**
 * Related articles: same category first (as many as available, up to
 * limit), backfilled from other categories when the current category is
 * thin (several categories only have 1-2 articles today) — otherwise the
 * section would be empty or near-empty most of the time. Within each of
 * those two buckets, articles sharing more tags with the current one sort
 * first; recency is only the final tiebreak.
 */
export function getRelatedPosts(category: string, excludeSlug: string, limit = 3): Post[] {
  const current = getPostBySlug(category, excludeSlug);
  const allOtherPostsInCategory = getPostsByCategory(category).filter((p) => p.slug !== excludeSlug);
  const sameCategory = current
    ? sortByTagOverlapThenDate(allOtherPostsInCategory, current)
    : sortByDateDesc(allOtherPostsInCategory);

  if (sameCategory.length >= limit) {
    return sameCategory.slice(0, limit);
  }

  const otherCategoryPosts = getAllCategories()
    .filter((c) => c !== category)
    .flatMap((c) => getPostsByCategory(c));
  const others = current
    ? sortByTagOverlapThenDate(otherCategoryPosts, current)
    : sortByDateDesc(otherCategoryPosts);

  return [...sameCategory, ...others.slice(0, limit - sameCategory.length)];
}
