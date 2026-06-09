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

function extractFAQs(content: string): Array<{ question: string; answer: string }> {
  const lines = content.split('\n');
  const faqIndex = lines.findIndex(l => l.startsWith('## Frequently Asked Questions'));
  if (faqIndex === -1) return [];

  const faqs: Array<{ question: string; answer: string }> = [];
  let question = '';
  let answerLines: string[] = [];

  for (let i = faqIndex + 1; i < lines.length; i++) {
    const line = lines[i];
    if (line.startsWith('### ')) {
      if (question && answerLines.length) {
        faqs.push({ question, answer: answerLines.join(' ').trim() });
      }
      question = line.replace(/^### /, '').trim();
      answerLines = [];
    } else if (line.startsWith('## ')) {
      break;
    } else if (question && line.trim() && !line.startsWith('---')) {
      answerLines.push(line.trim());
    }
  }
  if (question && answerLines.length) {
    faqs.push({ question, answer: answerLines.join(' ').trim() });
  }
  return faqs;
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
  
    url: `https://sacredsanskriti.com/myth-vs-text/${post.slug}`,
  
    datePublished: new Date(post.date).toISOString(),
    dateModified: new Date(post.date).toISOString(),
  
    image: `https://sacredsanskriti.com/logo.png`,
  
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
        name: "Myth vs Text",
        item: "https://sacredsanskriti.com/myth-vs-text"
      },
      {
        "@type": "ListItem",
        position: 3,
        name: post.title,
        item: `https://sacredsanskriti.com/myth-vs-text/${post.slug}`
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
      <div dangerouslySetInnerHTML={{ __html: contentHtml }} />

    </div>
  );
  
}