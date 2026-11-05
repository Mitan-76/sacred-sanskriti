import type { Metadata } from "next";
import type { Post } from "@/lib/content";
import { extractFAQs } from "@/lib/faq";

const SITE_URL = "https://sacredsanskriti.com";

export function buildArticleMetadata(post: Post, category: string): Metadata {
  const imageUrl = `${SITE_URL}${post.image}`;
  const url = `${SITE_URL}/${category}/${post.slug}`;

  return {
    title: post.title,
    description: post.description,
    alternates: {
      canonical: `/${category}/${post.slug}`,
    },
    openGraph: {
      title: post.title,
      description: post.description,
      url,
      siteName: "Sacred Sanskriti",
      type: "article",
      images: [{ url: imageUrl, width: 1200, height: 630, alt: post.title }],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
      images: [imageUrl],
    },
  };
}

export function buildArticleJsonLd(post: Post, category: string) {
  const url = `${SITE_URL}/${category}/${post.slug}`;

  const blogPostingLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.description,
    url,
    datePublished: new Date(post.date).toISOString(),
    dateModified: new Date(post.date).toISOString(),
    image: `${SITE_URL}${post.image}`,
    author: {
      "@type": "Organization",
      name: "Sacred Sanskriti",
      url: SITE_URL,
    },
    publisher: {
      "@type": "Organization",
      name: "Sacred Sanskriti",
      logo: {
        "@type": "ImageObject",
        url: `${SITE_URL}/logo.png`,
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": url,
    },
  };

  const faqs = extractFAQs(post.content);
  const faqLd =
    faqs.length > 0
      ? {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faqs.map(({ question, answer }) => ({
            "@type": "Question",
            name: question,
            acceptedAnswer: { "@type": "Answer", text: answer },
          })),
        }
      : null;

  return { blogPostingLd, faqLd };
}
