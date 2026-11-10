export interface SourceItem {
  title: string;
  url: string;
}

/**
 * Every citation on the site is already an inline <a href="https://..."> tag
 * (CLAUDE.md's external-link convention). Rather than hand-maintain a second,
 * separate Sources list per article — which would drift from the body over
 * time — this extracts the Sources section directly from what's actually
 * cited, so the two can never disagree.
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
    sources.push({ title, url });
  }

  return sources;
}
