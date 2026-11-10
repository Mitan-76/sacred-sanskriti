#!/usr/bin/env node
/**
 * Phase 5.3 content-quality checker. Run with `npm run check:content`.
 *
 * Reads every article's RAW frontmatter directly (not through
 * lib/content.ts's defaulting logic) so it can tell "field missing" apart
 * from "field present but falsy" — the whole point of this check.
 *
 * Sources are validated by re-parsing each article's body with the same
 * extractSources() logic the site itself renders with (lib/sources.js),
 * not a separately-authored `sources:` frontmatter list — see CLAUDE.md §2
 * for why: a hand-duplicated list is exactly the kind of thing that drifts
 * from what's actually in the article.
 */
const fs = require("fs");
const path = require("path");
const matter = require("gray-matter");

const CONTENT_DIR = path.join(process.cwd(), "content");
const CATEGORIES = ["hinduism-qa", "myth-vs-text", "practices", "mantras-chants", "rituals", "symbols"];
const STATIC_ROUTES = ["/", "/about", "/contact", "/faq", "/privacy", "/terms", "/how-we-research"];

// Owner-extensible: add any phrases that shouldn't appear in published
// content (slurs, banned marketing language, etc). Empty by default.
const BANNED_WORDS = [];

const STUDY_DOMAINS = ["ncbi.nlm.nih.gov", "pubmed.ncbi.nlm.nih.gov", "doi.org", "mdpi.com", "literatur.thuenen.de"];

function extractSources(markdown) {
  const regex = /<a\s+href="(https?:\/\/[^"]+)"[^>]*>(.*?)<\/a>/gi;
  const seen = new Set();
  const sources = [];
  let match;
  while ((match = regex.exec(markdown)) !== null) {
    const [, url] = match;
    if (seen.has(url)) continue;
    seen.add(url);
    sources.push({ url, isStudy: STUDY_DOMAINS.some((d) => url.includes(d)) });
  }
  return sources;
}

function extractInternalLinks(markdown) {
  const links = new Set();
  for (const m of markdown.matchAll(/<a\s+href="(\/[^"]*)"/gi)) links.add(m[1]);
  for (const m of markdown.matchAll(/\[[^\]]*\]\((\/[^)]*)\)/g)) links.add(m[1]);
  return [...links];
}

function collectArticles() {
  const articles = [];
  for (const category of CATEGORIES) {
    const dir = path.join(CONTENT_DIR, category);
    if (!fs.existsSync(dir)) continue;
    for (const fileName of fs.readdirSync(dir)) {
      if (!fileName.endsWith(".md")) continue;
      const slug = fileName.replace(/\.md$/, "");
      const raw = fs.readFileSync(path.join(dir, fileName), "utf8");
      const { data, content } = matter(raw);
      articles.push({ category, slug, data, content, file: `content/${category}/${fileName}` });
    }
  }
  return articles;
}

function main() {
  const articles = collectArticles();
  const validRoutes = new Set([
    ...STATIC_ROUTES,
    ...CATEGORIES.map((c) => `/${c}`),
    ...articles.map((a) => `/${a.category}/${a.slug}`),
  ]);

  const failures = [];
  const warnings = [];
  const titlesSeen = new Map();
  const descriptionsSeen = new Map();

  for (const article of articles) {
    const { data, content, file } = article;
    const fail = (msg) => failures.push(`${file}: ${msg}`);
    const warn = (msg) => warnings.push(`${file}: ${msg}`);

    // Required frontmatter.
    for (const field of ["title", "description", "publishedAt", "updatedAt", "image"]) {
      if (data[field] === undefined || data[field] === null || data[field] === "") {
        fail(`missing required frontmatter field "${field}"`);
      }
    }
    if (typeof data.healthContent !== "boolean") {
      fail(`"healthContent" must be explicitly true or false, got ${JSON.stringify(data.healthContent)}`);
    }
    if (!Array.isArray(data.tags) || data.tags.length === 0) {
      warn(`no "tags" set — related-articles tag-matching won't work for this article`);
    }

    // Description length (spec: 140-160 chars; CLAUDE.md's own stricter
    // ~20-word/155-char guidance already covers the upper end in practice).
    if (typeof data.description === "string") {
      if (data.description.length > 160) {
        fail(`description is ${data.description.length} chars, over the 160 limit`);
      } else if (data.description.length < 120) {
        warn(`description is only ${data.description.length} chars, under the 120-160 target range (ctr-plan.md §6)`);
      }
    }

    // Title length (ctr-plan.md §6: under 60 chars, no brand suffix).
    if (typeof data.title === "string" && data.title.length > 60) {
      warn(`title is ${data.title.length} chars, over the 60-char target (ctr-plan.md §6)`);
    }

    // Duplicate title/description across the whole site.
    if (data.title) {
      if (titlesSeen.has(data.title)) {
        fail(`title duplicates ${titlesSeen.get(data.title)}`);
      } else {
        titlesSeen.set(data.title, file);
      }
    }
    if (data.description) {
      if (descriptionsSeen.has(data.description)) {
        fail(`description duplicates ${descriptionsSeen.get(data.description)}`);
      } else {
        descriptionsSeen.set(data.description, file);
      }
    }

    // TODO-SOURCE markers (CLAUDE.md §0's accuracy hard rule).
    if (content.includes("TODO-SOURCE")) {
      fail(`contains a TODO-SOURCE marker — unverified claim not yet resolved`);
    }

    // Sources.
    const sources = extractSources(content);
    if (sources.length < 3) {
      warn(`only ${sources.length} source(s) cited — CLAUDE.md §9 asks for 2-4, aim for 3+`);
    }
    if (data.healthContent === true && !sources.some((s) => s.isStudy)) {
      fail(`healthContent is true but no study-type source (PubMed/PMC/DOI) is cited`);
    }

    // Broken internal links.
    for (const link of extractInternalLinks(content)) {
      const path_ = link.split("#")[0].replace(/\/$/, "") || "/";
      if (!validRoutes.has(path_)) {
        fail(`internal link "${link}" does not match any real route`);
      }
    }

    // Banned words (owner-extensible, empty by default).
    for (const word of BANNED_WORDS) {
      if (content.toLowerCase().includes(word.toLowerCase())) {
        fail(`contains banned word/phrase "${word}"`);
      }
    }
  }

  console.log(`Checked ${articles.length} articles.\n`);

  if (warnings.length > 0) {
    console.log(`⚠ ${warnings.length} warning(s):`);
    warnings.forEach((w) => console.log(`  - ${w}`));
    console.log("");
  }

  if (failures.length > 0) {
    console.log(`✗ ${failures.length} failure(s):`);
    failures.forEach((f) => console.log(`  - ${f}`));
    process.exit(1);
  }

  console.log("✓ All checks passed.");
}

main();
