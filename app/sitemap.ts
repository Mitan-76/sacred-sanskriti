import { MetadataRoute } from "next";
import { getPostsByCategory, getAllCategories } from "@/lib/content";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://sacredsanskriti.com";

  // No real per-page edit-date tracking exists for these pages, so lastModified
  // is omitted rather than faking a fresh "updated today" stamp on every build.
  const staticPages = ["", "/about", "/contact", "/faq", "/privacy", "/terms", "/how-we-research"];

  const staticRoutes = staticPages.map((route) => ({
    url: `${baseUrl}${route}`,
    changeFrequency: "weekly" as const,
    priority: route === "" ? 1 : 0.8,
  }));

  const categoryRoutes = getAllCategories().map((category) => {
    const posts = getPostsByCategory(category);
    const mostRecent = posts.reduce(
      (latest, post) => Math.max(latest, new Date(post.updatedAt).getTime()),
      0
    );

    return {
      url: `${baseUrl}/${category}`,
      // The hub's own content (its article list) genuinely changes with the
      // newest post in it, so this is a real signal, not a fabricated one.
      ...(mostRecent > 0 ? { lastModified: new Date(mostRecent) } : {}),
      changeFrequency: "weekly" as const,
      priority: 0.8,
    };
  });

  const articleRoutes = getAllCategories().flatMap((category) =>
    getPostsByCategory(category).map((post) => ({
      url: `${baseUrl}/${category}/${post.slug}`,
      lastModified: new Date(post.updatedAt),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    }))
  );

  return [...staticRoutes, ...categoryRoutes, ...articleRoutes];
}
