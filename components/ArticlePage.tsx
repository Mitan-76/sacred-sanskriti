import Image from "next/image";
import Link from "next/link";
import type { Post } from "@/lib/content";
import { getRelatedPosts } from "@/lib/content";
import { getCategoryLabel } from "@/lib/navigation";
import { getArticleBody, extractFAQs } from "@/lib/faq";
import { markdownToHtml } from "@/lib/markdown";
import { buildArticleJsonLd } from "@/lib/seo";
import { extractSources } from "@/lib/sources";
import Breadcrumb from "@/components/Breadcrumb";
import JsonLd from "@/components/JsonLd";
import { Badge } from "@/components/ui/badge";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import FAQAccordion from "@/components/FAQAccordion";
import ShareButtons from "@/components/ShareButtons";
import RelatedArticles from "@/components/RelatedArticles";
import Sources from "@/components/Sources";
import MedicalDisclaimer from "@/components/MedicalDisclaimer";
import YouTubeFacade from "@/components/YouTubeFacade";
import { extractYouTubeEmbed, stripYouTubeSection } from "@/lib/youtube";
import AdSlot from "@/components/AdSlot";

const SITE_URL = "https://sacredsanskriti.com";

function formatDate(date: string): string {
  return new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

interface ArticlePageProps {
  post: Post;
  category: string;
}

export default async function ArticlePage({ post, category }: ArticlePageProps) {
  const categoryLabel = getCategoryLabel(category);
  const youtubeEmbed = extractYouTubeEmbed(post.content);
  const bodyMarkdown = stripYouTubeSection(getArticleBody(post.content));
  const contentHtml = await markdownToHtml(bodyMarkdown);
  const faqs = extractFAQs(post.content);
  const sources = extractSources(post.content);
  const { blogPostingLd, faqLd } = buildArticleJsonLd(post, category);
  const relatedPosts = getRelatedPosts(category, post.slug);
  const url = `${SITE_URL}/${category}/${post.slug}`;

  return (
    <div className="mx-auto max-w-3xl px-4 py-8 sm:px-6">
      <JsonLd data={blogPostingLd} />
      {faqLd && <JsonLd data={faqLd} />}

      <Breadcrumb
        items={[
          { label: "Home", href: "/" },
          { label: categoryLabel, href: `/${category}` },
          { label: post.title, href: `/${category}/${post.slug}` },
        ]}
      />

      <Badge variant="secondary" className="bg-sage-100 text-teal-800">
        {categoryLabel}
      </Badge>

      <h1 className="mt-3 font-heading text-3xl font-bold leading-tight text-ink-700 sm:text-4xl">
        {post.title}
      </h1>

      <p className="mt-3 text-sm text-ink-500">
        By Sacred Sanskriti Editorial · Published {formatDate(post.publishedAt)} · Updated{" "}
        {formatDate(post.updatedAt)}
      </p>
      <p className="mt-1 text-sm text-ink-500">
        Researched with AI tools and checked against the sources listed below.{" "}
        <Link href="/how-we-research" className="text-teal-600 underline">
          How we research →
        </Link>
      </p>

      <div className="mt-8 overflow-hidden rounded-xl">
        <AspectRatio ratio={1200 / 630} className="bg-sage-100">
          <Image
            src={post.image}
            alt={post.title}
            fill
            priority
            sizes="(max-width: 768px) 100vw, 768px"
            className="object-cover"
          />
        </AspectRatio>
      </div>

      {youtubeEmbed && <YouTubeFacade videoId={youtubeEmbed.videoId} title={youtubeEmbed.title} />}

      {post.healthContent && <MedicalDisclaimer />}

      <AdSlot position="after-intro" />

      <div
        className="prose-article mt-8"
        dangerouslySetInnerHTML={{ __html: contentHtml }}
      />

      <AdSlot position="mid-article" />

      {faqs.length > 0 && (
        <section className="mt-10 border-t border-ink-100 pt-8">
          <h2 className="font-heading text-2xl font-semibold text-ink-700">
            Frequently Asked Questions
          </h2>
          <div className="mt-4">
            <FAQAccordion faqs={faqs} />
          </div>
        </section>
      )}

      <AdSlot position="before-sources" />

      <Sources sources={sources} />

      <div className="mt-8">
        <ShareButtons url={url} title={post.title} />
      </div>

      <RelatedArticles posts={relatedPosts} />
    </div>
  );
}
