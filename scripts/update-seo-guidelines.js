'use strict';

/**
 * Monthly SEO/AEO/GEO Guidelines Updater
 *
 * Fetches recent articles from authoritative SEO sources, filters for
 * SEO/AEO/GEO relevance, summarises with Claude API, and writes a
 * draft update file for human review before merging into CLAUDE.md.
 *
 * Run manually:  npm run update-guidelines
 * Automated:     GitHub Actions (.github/workflows/update-seo-guidelines.yml)
 */

const fs   = require('fs');
const path = require('path');

// ─── Configuration ────────────────────────────────────────────────────────────

const ANTHROPIC_API_KEY = process.env.ANTHROPIC_API_KEY;
const DAYS_LOOKBACK     = 35; // slightly over a month to avoid gaps between runs
const MAX_ARTICLES      = 20; // cap sent to Claude to keep prompt cost reasonable

const RSS_SOURCES = [
  {
    name: 'Search Engine Journal',
    url:  'https://www.searchenginejournal.com/feed/',
  },
  {
    name: 'Search Engine Land — GEO',
    url:  'https://searchengineland.com/library/generative-engine-optimization/feed',
  },
  {
    name: 'Search Engine Land — Google Algorithm Updates',
    url:  'https://searchengineland.com/library/platforms/google/google-algorithm-updates/feed',
  },
  {
    name: 'Moz Blog',
    url:  'https://moz.com/blog/feed',
  },
];

const KEYWORDS = [
  'seo', 'search optimis', 'search optimiz',
  'answer engine', 'aeo',
  'generative engine', 'geo',
  'ai overview', 'ai search', 'ai mode',
  'search quality', 'helpful content',
  'e-e-a-t', 'eeat',
  'core update', 'ranking',
  'schema markup', 'structured data',
  'google search', 'bing search',
  'perplexity', 'chatgpt search',
  'search generative', 'llm search',
];

// ─── Helpers ──────────────────────────────────────────────────────────────────

async function fetchURL(url) {
  try {
    const res = await fetch(url, {
      headers: { 'User-Agent': 'SacredSanskritiBot/1.0 (SEO guidelines updater)' },
      signal:  AbortSignal.timeout(12000),
      redirect: 'follow',
    });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    return await res.text();
  } catch (err) {
    console.warn(`  ⚠ Could not fetch ${url}: ${err.message}`);
    return null;
  }
}

function extractTag(xml, tag) {
  // Handles CDATA and plain text variants
  const patterns = [
    new RegExp(`<${tag}[^>]*><!\\[CDATA\\[([\\s\\S]*?)\\]\\]><\\/${tag}>`, 'i'),
    new RegExp(`<${tag}[^>]*>([\\s\\S]*?)<\\/${tag}>`, 'i'),
  ];
  for (const re of patterns) {
    const m = re.exec(xml);
    if (m) return m[1].trim();
  }
  return '';
}

function stripHtml(str) {
  return str.replace(/<[^>]*>/g, ' ').replace(/&[a-z]+;/gi, ' ').replace(/\s+/g, ' ').trim();
}

function parseItems(xml) {
  if (!xml) return [];

  const cutoff = new Date();
  cutoff.setDate(cutoff.getDate() - DAYS_LOOKBACK);

  const items   = [];
  // Matches both RSS <item> and Atom <entry> blocks
  const itemRe  = /<(?:item|entry)[^>]*>([\s\S]*?)<\/(?:item|entry)>/gi;
  let match;

  while ((match = itemRe.exec(xml)) !== null) {
    const block  = match[1];
    const title  = stripHtml(extractTag(block, 'title'));
    const desc   = stripHtml(
      extractTag(block, 'description') ||
      extractTag(block, 'summary')     ||
      extractTag(block, 'content')
    );
    const date   = extractTag(block, 'pubDate')   ||
                   extractTag(block, 'published') ||
                   extractTag(block, 'updated');
    const link   = extractTag(block, 'link');

    if (!title) continue;

    // Skip if older than lookback window
    if (date) {
      const parsed = new Date(date);
      if (!isNaN(parsed) && parsed < cutoff) continue;
    }

    // Skip if not relevant to our topics
    const text = `${title} ${desc}`.toLowerCase();
    if (!KEYWORDS.some(kw => text.includes(kw))) continue;

    items.push({
      title: title.slice(0, 200),
      desc:  desc.slice(0, 400),
      date:  date.slice(0, 30),
      link:  link.slice(0, 300),
    });
  }

  return items;
}

// ─── Claude API ───────────────────────────────────────────────────────────────

async function callClaude(articles) {
  if (!ANTHROPIC_API_KEY) {
    throw new Error('ANTHROPIC_API_KEY environment variable is not set.');
  }

  const list = articles
    .map((a, i) => `${i + 1}. [${a.date}] ${a.title}\n   ${a.desc}`)
    .join('\n\n');

  const prompt = `You are an expert in SEO, AEO (Answer Engine Optimization), and GEO (Generative Engine Optimization).

Below are recent articles published in the last 35 days from Google Search Central, Search Engine Journal, Search Engine Land, and Moz. Your task is to extract genuinely new best practices, algorithm changes, or updated guidance relevant to a Hindu/spirituality content website.

ARTICLES:
${list}

Return your findings in exactly this format. Under each heading, write specific actionable bullet points. If there is nothing new for a category, write "No significant changes this period." Do not repeat basic well-known practices — only surface what is genuinely new or changed.

## SEO Updates
[bullet points]

## AEO Updates (Answer Engine Optimization)
[bullet points]

## GEO Updates (Generative Engine Optimization / AI Search)
[bullet points]

## Key Takeaway for a Spiritual/Religious Content Website
[one concise paragraph with the single most important action to take this month]`;

  const res = await fetch('https://api.anthropic.com/v1/messages', {
    method: 'POST',
    headers: {
      'x-api-key':         ANTHROPIC_API_KEY,
      'anthropic-version': '2023-06-01',
      'content-type':      'application/json',
    },
    body: JSON.stringify({
      model:      'claude-sonnet-4-6',
      max_tokens: 1500,
      messages:   [{ role: 'user', content: prompt }],
    }),
    signal: AbortSignal.timeout(60000),
  });

  if (!res.ok) {
    const body = await res.text();
    throw new Error(`Anthropic API error ${res.status}: ${body}`);
  }

  const data = await res.json();
  return data.content[0].text;
}

// ─── Main ─────────────────────────────────────────────────────────────────────

async function main() {
  console.log('Sacred Sanskriti — Monthly SEO/AEO/GEO Guidelines Updater');
  console.log('──────────────────────────────────────────────────────────');

  // Fetch all feeds in parallel
  console.log('\nFetching RSS feeds...');
  const feedResults = await Promise.all(
    RSS_SOURCES.map(async src => {
      const xml   = await fetchURL(src.url);
      const items = parseItems(xml);
      console.log(`  ${src.name}: ${items.length} relevant article(s) found`);
      return items;
    })
  );

  const allArticles = feedResults.flat();
  console.log(`\nTotal relevant articles: ${allArticles.length}`);

  if (allArticles.length === 0) {
    console.log('Nothing relevant found this period — no draft generated.');
    process.exit(0);
  }

  // Use most recent N articles
  const articles = allArticles.slice(0, MAX_ARTICLES);

  console.log(`\nSummarising ${articles.length} articles with Claude API...`);
  const summary = await callClaude(articles);

  // Write draft file
  const today   = new Date().toISOString().split('T')[0];
  const sources = RSS_SOURCES.map(s => s.name).join(', ');

  const draft = `# SEO/AEO/GEO Guidelines Update Draft
**Generated:** ${today}
**Sources:** ${sources}
**Articles analysed:** ${articles.length}

> **Instructions for reviewer:**
> 1. Read the update sections below carefully.
> 2. Copy any new or changed best practices into the relevant sections of \`CLAUDE.md\`.
> 3. Delete this file (\`seo-updates-draft.md\`) once reviewed.
> 4. Merge this PR.

---

${summary}

---

## Articles Reviewed

${articles.map(a => `- [${a.date}] **${a.title}**${a.link ? `\n  ${a.link}` : ''}`).join('\n')}
`;

  const outPath = path.join(process.cwd(), 'seo-updates-draft.md');
  fs.writeFileSync(outPath, draft, 'utf8');

  console.log('\n✓ Draft written to: seo-updates-draft.md');
  console.log('  Review the draft and merge relevant points into CLAUDE.md.');
}

main().catch(err => {
  console.error(`\n✗ Fatal error: ${err.message}`);
  process.exit(1);
});
