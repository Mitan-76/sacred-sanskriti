export type SourceType = "scripture" | "study" | "book" | "web";

export interface SourceItem {
  title: string;
  url: string;
  type: SourceType;
}

const STUDY_DOMAINS = ["ncbi.nlm.nih.gov", "pubmed.ncbi.nlm.nih.gov", "doi.org", "mdpi.com", "literatur.thuenen.de"];
const SCRIPTURE_DOMAINS = ["vedabase.io", "wisdomlib.org", "sacred-texts.com"];

function classify(url: string): SourceType {
  if (STUDY_DOMAINS.some((d) => url.includes(d))) return "study";
  if (SCRIPTURE_DOMAINS.some((d) => url.includes(d))) return "scripture";
  return "web";
}

/**
 * Every citation on the site is already an inline <a href="https://..."> tag
 * (CLAUDE.md's external-link convention). Rather than hand-maintain a second,
 * separate Sources list per article — which would drift from the body over
 * time — this extracts the Sources section directly from what's actually
 * cited, so the two can never disagree. Phase 5's content-quality checker
 * (scripts/check-content.js) reuses this same function rather than reading a
 * separately-authored `sources:` frontmatter field, for the same reason.
 */
export function extractSources(markdownContent: string): SourceItem[] {
  const regex = /<a\s+href="(https?:\/\/[^"]+)"[^>]*>(.*?)<\/a>/gi;
  const seen = new Set<string>();
  const sources: SourceItem[] = [];

  let match: RegExpExecArray | null;
  while ((match = regex.exec(markdownContent)) !== null) {
    const [, url, rawTitle] = match;
    if (seen.has(url)) continue;
    seen.add(url);

    const title = rawTitle.replace(/<[^>]+>/g, "").trim();
    sources.push({ title, url, type: classify(url) });
  }

  return sources;
}
