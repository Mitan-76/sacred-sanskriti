# Sacred Sanskriti — Content & SEO Guidelines

This file is automatically loaded by Claude Code. Apply every rule below whenever a new article is added, formatted, or updated on this website.

---

## 1. File Placement

| Category | Folder | Use for |
|---|---|---|
| Q&A about Hindu traditions, mythology, deities | `content/hinduism-qa/` | Factual, question-driven articles |
| What texts actually say vs popular belief | `content/myth-vs-text/` | Myth-busting, textual analysis |
| Spiritual practices and their science | `content/practices/` | Neuroscience, psychology of practice |
| Mantras and their meaning or science | `content/mantras-chants/` | Mantra guides, acoustic analysis |
| Hindu rituals | `content/rituals/` | Ritual explanations |
| Hindu symbols | `content/symbols/` | Symbol meaning and significance |

---

## 2. Frontmatter Standards

**Required fields only:**
```yaml
---
title: "Article Title Here"
description: "One sentence, ~20 words, starts with a verb, lists 3-4 key topics covered."
date: YYYY-MM-DD
image: /images/article-slug.jpg
---
```

**Always remove:** `slug`, `author`, `keywords`, `lastUpdated` — these are not used by the site.

**Description format:** One sentence, ~20 words, starts with a verb (Explore / Discover / Learn), lists the key topics. Match the style of existing articles.

---

## 3. GPT Watermark Removal

When processing GPT-generated content, always write clean from scratch rather than copying character-by-character. This eliminates:
- Zero-width spaces (U+200B)
- Soft hyphens (U+00AD)
- Zero-width non-joiners/joiners (U+200C, U+200D)
- Directional marks (U+200E, U+200F)
- Unicode tag characters

Also check for and fix encoding corruption: `MahÄbhÄrata` → `Mahabharata`, `sÅ«ta` → `suta`, etc.

---

## 4. Content Formatting Standards

### Structure
- **Opening:** 2–3 prose paragraphs with no heading → `---` horizontal rule → main `##` sections
- **Sections:** `##` for main headings, `###` for subsections
- **FAQ:** Always end with `## Frequently Asked Questions` using `###` for each question
- **Closing line:** Italics link back to the relevant section, e.g.:
  `*Explore more answers to common questions about Hinduism in our [Hinduism Q & A](/hinduism-qa) section.*`

### What to Remove from GPT/AI-generated drafts
- TL;DR blockquotes
- Author bylines (`*By Anya Sharma...*`)
- Inline citation numbers `[1]` `[2]` `[3]`
- `## Sources` / `## References` sections with external links
- `<script type="application/ld+json">` JSON-LD blocks (the renderers generate these automatically)
- Duplicate headings (article title repeated as `#` heading)
- `### Internal Link Suggestions` blocks
- Duplicate FAQ sections

### Formatting Rules
- Sanskrit/foreign terms: *italics*
- Key concepts and names: **bold**
- Bullet lists: use `-` not `*`
- External links: always `<a href="URL" target="_blank" rel="noopener noreferrer">text</a>` — never plain markdown `[text](url)` for external sites, as markdown cannot open new tabs

---

## 5. SEO Best Practices

- Every page must have a **unique** `title` and `description` — never rely on layout fallbacks
- Title format for category pages: `"Category Name | Sacred Sanskriti"`
- Run `npm run indexnow` after every deployment to notify Bing immediately
- Check Core Web Vitals periodically via PageSpeed Insights
- The `app/hinduism-qa/[slug]/page.tsx` and `app/myth-vs-text/[slug]/page.tsx` renderers automatically generate `BlogPosting`, `BreadcrumbList`, and `FAQPage` JSON-LD schema — do not add these manually to markdown files

---

## 6. AEO — Answer Engine Optimization

- **Section openings:** Every `##` section must open with a direct answer in the first 40–60 words. Never start a section with preamble phrases like:
  - "Before diving into..."
  - "It is important to understand..."
  - "This is perhaps the most..."
  - "The tradition of X has its roots in..."
  Replace these with a direct statement that answers the heading question immediately.
- **Heading hierarchy:** Always use `##` → `###` — never skip levels
- **FAQ section:** Required on every article — the page renderer automatically extracts these into `FAQPage` schema
- **Content freshness:** Update the `date` field whenever an article is significantly revised

---

## 7. GEO — Generative Engine Optimization

- **Non-commodity framing:** Always present what the texts *actually say* vs popular belief. The myth-vs-text angle is the site's strongest GEO asset.
- **First 200 words:** Must directly address the article's primary topic — no generic intros
- **AI crawler access:** Never block AI crawlers in `robots.txt` (GPTBot, ClaudeBot, PerplexityBot, Googlebot-extended)
- **Topic ownership signals:** Every article must link to 2–3 related articles on the site to reinforce topical authority clusters
- **Citation-worthy elements:** Include specific facts, dates, named scholars, and named source texts (Bhagavata Purana, Shiva Purana, etc.) — these make content more likely to be cited by AI models

---

## 8. Internal Linking Map

Every new article should link to relevant existing articles. Current site articles and their paths:

| Topic | Internal link path |
|---|---|
| What is Dharma | `/hinduism-qa/what-is-dharma-in-hinduism` |
| Mahabharata facts | `/hinduism-qa/mahabharat-facts-you-should-know` |
| Karna | `/hinduism-qa/karna-the-forgotten-hero` |
| Hanuman facts | `/hinduism-qa/interesting-facts-about-hanuman` |
| 12 Jyotirlinga guide | `/hinduism-qa/12-jyotirlinga-complete-guide` |
| Tirupati Balaji guide | `/hinduism-qa/sri-venkateswara-swamy-temple-tirupati-balaji-guide` |
| Kali Yuga | `/myth-vs-text/kali-yuga-everything-you-need-to-know` |

Update this table whenever a new article is published.

---

## 9. External Linking Guidelines

### Rules
- Add **2–4 external links** per article to high-authority, topically relevant websites
- All external links must use HTML anchor tags with `target="_blank" rel="noopener noreferrer"` — not markdown syntax
- **Always verify URLs are live** using WebFetch before adding — domain expiry is a real risk (e.g., salasarbalaji.org expired mid-project)
- **Never guess URLs** — search and verify first
- Present link options to the user before implementing

### Preferred Source Hierarchy (highest to lowest reliability)
1. **Government sites** — `.gov.in`, `.gov` domains never expire, maximum trust signal
2. **Wikipedia** — Permanent, highest domain authority, safe for any factual reference
3. **Established institutions** — Britannica, World History Encyclopedia, Aeon Essays, PubMed
4. **Official temple/organisation websites** — verify they are live; prefer Wikipedia over private temple domains when in doubt
5. **Reputable devotional communities** — e.g., Neem Karoli Baba Ashram (nkbashram.org), Vedabase (vedabase.io)

### Link Placement by Article Type

| Article content | Recommended external link type |
|---|---|
| Pilgrimage / temple guide | Official temple site or Wikipedia + Government tourism portal (Incredible India, state tourism) |
| Historical claims / scholars named | Wikipedia profile of the scholar cited |
| Sacred texts referenced | Vedabase (vedabase.io) or sacred-texts.com |
| Devotional practices / communities | Official ashram or community site (verified live) |
| Scientific / research claims | PubMed, academic journal, or university source |
| Geographic location mentioned | Government district site or Incredible India page |
| Philosophical concepts | Britannica, World History Encyclopedia, or Aeon Essays |

### External Links Added So Far (do not duplicate)
- **12 Jyotirlinga article:** Somnath Temple Trust (Wikipedia), Incredible India
- **Hanuman article:** Neem Karoli Baba Ashram, Salasar Balaji Temple (Wikipedia), Wikipedia Hanuman Chalisa
- **Karna article:** Wikipedia Karna, Britannica Mahabharata, Aeon Essays Mahabharata moral vision
- **Mahabharat article:** Kurukshetra Govt. of Haryana, Wikipedia A. L. Basham, Vedabase Bhagavad Gita
- **Tirupati article:** Incredible India Tirupati, Wikipedia Venkateswara Temple, tirumala.org, Tirupati District Govt Religious Tourism, TTD booking portal
- **Kali Yuga article:** Isha Foundation / Sadhguru
- **OM Chanting article:** PubMed (two studies)

---

## 10. Article Processing Checklist

Run through this checklist before marking any article as complete:

### Metadata
- [ ] Frontmatter has `title`, `description`, `date`, `image` only
- [ ] Description is one sentence, ~20 words, starts with a verb
- [ ] Image path follows `/images/article-slug.jpg` format

### Content Cleaning
- [ ] No invisible Unicode watermarks
- [ ] No TL;DR blockquote
- [ ] No author byline
- [ ] No inline citation numbers `[1]` `[2]`
- [ ] No Sources / References section
- [ ] No JSON-LD script blocks
- [ ] No duplicate headings
- [ ] No Internal Link Suggestions block

### Formatting
- [ ] Opening prose (no heading) → `---` → `##` sections
- [ ] Every `##` section opens with a direct answer (no preamble)
- [ ] Sanskrit terms in *italics*, key concepts in **bold**
- [ ] Bullet lists use `-`
- [ ] `## Frequently Asked Questions` section with `###` questions
- [ ] Closing italics link to relevant site section

### SEO / AEO / GEO
- [ ] 2–3 internal links to related site articles
- [ ] 2–4 external links to verified high-authority sites
- [ ] All external links open in new tab (`target="_blank" rel="noopener noreferrer"`)
- [ ] Internal linking map updated if this is a new article
- [ ] `npm run indexnow` scheduled after deployment
