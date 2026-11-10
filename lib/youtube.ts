export interface YouTubeEmbed {
  videoId: string;
  title: string;
}

/**
 * Finds the one "## Watch: ..." YouTube iframe embed a few articles have,
 * if present. Attribute order in the raw <iframe> varies between articles,
 * so src/title are matched independently rather than with one ordered regex.
 */
export function extractYouTubeEmbed(markdownContent: string): YouTubeEmbed | null {
  const iframeMatch = markdownContent.match(/<iframe\b[^>]*>/i);
  if (!iframeMatch) return null;

  const tag = iframeMatch[0];
  const srcMatch = tag.match(/src="https:\/\/www\.youtube\.com\/embed\/([a-zA-Z0-9_-]+)"/);
  const titleMatch = tag.match(/title="([^"]*)"/);

  if (!srcMatch) return null;

  return {
    videoId: srcMatch[1],
    title: titleMatch?.[1] ?? "Watch on YouTube",
  };
}

/** Removes the "## Watch: ..." heading and its iframe block from the body —
 * the extracted embed is rendered separately as a click-to-load facade. */
export function stripYouTubeSection(markdownContent: string): string {
  // Expects the established content convention: a "## Watch: ..." heading
  // immediately followed by the iframe wrapper div, immediately followed by
  // a "---" divider, with nothing else in between (see CLAUDE.md §4).
  return markdownContent.replace(/##\s+Watch:[\s\S]*?<\/div>\s*\n+---\s*\n+/, "");
}
