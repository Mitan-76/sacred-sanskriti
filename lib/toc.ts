export interface TocItem {
  id: string;
  text: string;
}

function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-");
}

/** Injects a stable id into every <h2> in already-rendered HTML, so the
 * table of contents' anchor links actually have something to scroll to.
 * Deduplicates ids (heading text repeated verbatim is rare but not
 * impossible) by suffixing -2, -3, etc. */
export function addHeadingIds(html: string): string {
  const seen = new Map<string, number>();

  return html.replace(/<h2>(.*?)<\/h2>/g, (full, inner: string) => {
    const text = inner.replace(/<[^>]+>/g, "");
    const base = slugify(text);
    const count = seen.get(base) ?? 0;
    seen.set(base, count + 1);
    const id = count === 0 ? base : `${base}-${count + 1}`;
    return `<h2 id="${id}">${inner}</h2>`;
  });
}

/** Must run on the same HTML addHeadingIds already processed, so the ids
 * returned here match what's actually in the DOM. */
export function extractHeadings(htmlWithIds: string): TocItem[] {
  return Array.from(htmlWithIds.matchAll(/<h2 id="([^"]+)">(.*?)<\/h2>/g)).map((m) => ({
    id: m[1],
    text: m[2].replace(/<[^>]+>/g, ""),
  }));
}

export function countWords(text: string): number {
  return text.trim().split(/\s+/).filter(Boolean).length;
}
