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
  const posts = getPostsByCategory("myth-vs-text");
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
    url: `https://sacredsanskriti.com/myth-vs-text/${post.slug}`,
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

export default async function MythVsTextArticle({
  params,
}: {
  params: { slug: string };
}) {
  const posts = getPostsByCategory("myth-vs-text");
  const post = posts.find((p) => p.slug === params.slug);

  if (!post) return notFound();

  const processedContent = await remark()
    .use(html)
    .process(post.content);

  const contentHtml = processedContent.toString();
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
  
    headline: post.title,
    description: post.description,
  
    url: `https://sacredsanskriti.com/myth-vs-text/${post.slug}`,
  
    datePublished: new Date(post.date).toISOString(),
    dateModified: new Date(post.date).toISOString(),
  
    image: `https://sacredsanskriti.com/logo.jpg`,
  
    author: {
      "@type": "Organization",
      name: "Sacred Sanskriti",
      url: "https://sacredsanskriti.com"
    },
  
    publisher: {
      "@type": "Organization",
      name: "Sacred Sanskriti",
      logo: {
        "@type": "ImageObject",
        url: "https://sacredsanskriti.com/logo.jpg"
      }
    },
  
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://sacredsanskriti.com/myth-vs-text/${post.slug}`
    }
  };
  const breadcrumbLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://sacredsanskriti.com"
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Mantras & Chants",
        item: "https://sacredsanskriti.com/mantras-chants"
      },
      {
        "@type": "ListItem",
        position: 3,
        name: post.title,
        item: `https://sacredsanskriti.com/mantras-chants/${post.slug}`
      }
    ]
  };
  

  return (
    <div>
  
      {/* Article Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
  
      {/* Breadcrumb Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
      />
  
      <h1>{post.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: contentHtml }} />
  
    </div>
  );
  
}