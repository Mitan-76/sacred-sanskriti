import type { Metadata } from "next";
import { getPostsByCategory } from "@/lib/content";
import { notFound } from "next/navigation";
import { remark } from "remark";
import html from "remark-html";
import type { Post } from "@/lib/content";
import { extractFAQs } from "@/lib/faq";

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const posts: Post[] = getPostsByCategory("mantras-chants");
  const post = posts.find((p) => p.slug === params.slug);

  if (!post) {
    return {
      title: "Article Not Found",
    };
  }

  return {
    title: post.title,
  description: post.description,
  alternates: {
    canonical: `/mantras-chants/${post.slug}`,
  },
  openGraph: {
    title: post.title,
    description: post.description,
    url: `https://sacredsanskriti.com/mantras-chants/${post.slug}`,
    type: "article",
    images: [
      {
        url: `https://sacredsanskriti.com${post.image}`,
        width: 1200,
        height: 630,
        alt: post.title,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: post.title,
    description: post.description,
    images: [`https://sacredsanskriti.com${post.image}`],
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
    .use(html, { sanitize: false, allowDangerousHtml: true })
    .process(post.content);

  const contentHtml = processedContent.toString();

  const faqs = extractFAQs(post.content);
  const faqLd = faqs.length > 0 ? {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(({ question, answer }) => ({
      "@type": "Question",
      "name": question,
      "acceptedAnswer": { "@type": "Answer", "text": answer },
    })),
  } : null;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",

    headline: post.title,
    description: post.description,

    url: `https://sacredsanskriti.com/mantras-chants/${post.slug}`,

    datePublished: new Date(post.date).toISOString(),
    dateModified: new Date(post.date).toISOString(),

    image: `https://sacredsanskriti.com${post.image}`,

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
        url: "https://sacredsanskriti.com/logo.png"
      }
    },

    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://sacredsanskriti.com/mantras-chants/${post.slug}`
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
    <div className="article-content">

      {/* Article Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* FAQ Schema */}
      {faqLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }}
        />
      )}

      {/* Breadcrumb Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
      />

      <h1>{post.title}</h1>
      <p className="article-date" style={{ color: "#666", fontSize: "0.9rem", marginTop: "-0.5rem" }}>
        Published {new Date(post.date).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}
      </p>
      <div dangerouslySetInnerHTML={{ __html: contentHtml }} />

    </div>
  );
}
