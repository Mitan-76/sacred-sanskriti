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
  date: string;
  image: string;
  category: string;
}

export function getAllCategories(): string[] {
  return CATEGORIES.map((c) => c.slug);
}

export function getPostsByCategory(category: string): Post[] {
  const postsDirectory = path.join(process.cwd(), "content", category);

  const fileNames = fs.readdirSync(postsDirectory);

  return fileNames.map((fileName) => {
    const slug = fileName.replace(".md", "");
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, "utf8");
    const { data, content } = matter(fileContents);

    return {
      slug,
      title: data.title,
      description: data.description,
      date: data.date,
      image: data.image || "/logo.png",
      category,
      content,
    };
  });
}

export const getPostBySlug = cache(function getPostBySlug(
  category: string,
  slug: string
): Post | undefined {
  const fullPath = path.join(process.cwd(), "content", category, `${slug}.md`);

  try {
    const fileContents = fs.readFileSync(fullPath, "utf8");
    const { data, content } = matter(fileContents);

    return {
      slug,
      title: data.title,
      description: data.description,
      date: data.date,
      image: data.image || "/logo.png",
      category,
      content,
    };
  } catch {
    return undefined;
  }
});

function sortByDateDesc(posts: Post[]): Post[] {
  return [...posts].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
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
