import { MetadataRoute } from "next";
import { getPostsByCategory, getAllCategories } from "@/lib/content";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://sacredsanskriti.com";
  const currentDate = new Date();

  const staticPages = [
    "",
    "/about",
    "/contact",
    "/faq",
    "/privacy",
    "/terms",
    "/mantras-chants",
    "/rituals",
    "/symbols",
    "/myth-vs-text",
    "/practices",
    "/hinduism-qa",
  ];

  const staticRoutes = staticPages.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: currentDate,
    changeFrequency: "weekly" as const,
    priority: route === "" ? 1 : 0.8,
  }));

  const dynamicRoutes = getAllCategories().flatMap((category) => {
    const posts = getPostsByCategory(category);

    return posts.map((post) => ({
      url: `${baseUrl}/${category}/${post.slug}`,
      lastModified: new Date(post.date),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    }));
  });

  return [...staticRoutes, ...dynamicRoutes];
}