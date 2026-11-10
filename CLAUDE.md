# Sacred Sanskriti — Content & SEO Guidelines

This file is automatically loaded by Claude Code. Apply every rule below whenever a new article is added, formatted, or updated on this website.

---

## 0. Standing Rules — Brand, Accuracy & Technical (read first; highest priority)

Added 10 Nov 2026 from the site's implementation instructions (`sacredsanskriti-claude-code-instructions.md`). These take precedence over anything below if the two ever conflict. Rollout status (what's live vs. still pending) is tracked in `docs/phase0-report.md`.

### Brand and editorial
- **Byline:** every article shows "By Sacred Sanskriti Editorial" — never a named person, pen name, persona, photo, or invented credential.
- **Never claim** content is written or reviewed by scholars, researchers, or practitioners. Say instead that it is researched from trusted, reliable sources — and actually name those sources inline or in a Sources section. The research itself is the trust signal, not an unverifiable claim about who performed it.
- Every article shows a published date, a last-updated date, an AI-assistance disclosure, and a Sources section — live as of 10 Nov 2026 (`components/ArticlePage.tsx`, `components/Sources.tsx`).
- **Tone:** respectful to tradition, honest about evidence. Use "tradition says," "the text says," "studies suggest" precisely — never present a belief as scientific fact.
- English only, **American spelling** (color, organize, center, honor, recognized, fulfill, memorize — not colour/organise/centre/honour/recognised/fulfil/memorise). Sanskrit terms are fine but explain them in plain English on first use.
- **Audience:** the Hindu diaspora worldwide (US, UK, Canada, Australia, Gulf, etc.), not an India-only readership — avoid India-only assumptions (INR-only prices, "near you" travel framing, IST-only timings).

### Accuracy (hard rule)
- **Never invent** a citation, verse number, study, author, journal, year, statistic, or URL. This hardens the "never guess URLs" rule in §9 to cover every factual claim, not just link destinations.
- If a claim has no verifiable source, mark it `<!-- TODO-SOURCE: ... -->` in the draft rather than guessing, and flag it for review.
- **Health claims** (stress, cortisol, blood pressure, vagus nerve, sleep, etc.) need a named study with a working, verified link, or must be softened to "practitioners report" / "early research suggests," or removed entirely.
- Don't change the meaning of existing published content without flagging the change for owner approval first.

### Technical
- URLs: lowercase, hyphenated, no underscores, no trailing category suffixes (e.g. `/practices/why-do-we-ring-bells-in-temples`, not `/practices/Why-Do-We-Ring-Bells-in-Temples-practices`).
- Any URL change needs a permanent 301 redirect from the old URL, and every internal link to the old URL must be updated in the same change.
- Don't add new dependencies without saying why; prefer small, standard packages.
- Don't break existing routes — run the build and a local smoke test after every change.
- Keep ad slots CLS-safe (reserved height) once ads go live.
- Secrets and IDs (GA4, AdSense, email provider) go in environment variables, never hard-coded.

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

**Required fields:**
```yaml
---
title: "Article Title Here"
description: "One sentence, ~20 words, starts with a verb, lists 3-4 key topics covered."
publishedAt: YYYY-MM-DD
updatedAt: YYYY-MM-DD
healthContent: true | false
image: /images/article-slug.jpg
---
```

- `publishedAt`: the real date the article first went live. For a new article this is today; never backdate it.
- `updatedAt`: bump this to today whenever you make a meaningful edit to a published article (this is what drives the visible "Updated" date, the sitemap's `lastmod`, and the schema's `dateModified` — see `lib/content.ts`). Leave it equal to `publishedAt` on first publish.
- `healthContent`: `true` if the article makes any claim about a physiological or psychological effect (stress, breathing, brain activity, blood pressure, etc.) — this triggers the medical disclaimer (`components/MedicalDisclaimer.tsx`). `false` otherwise.
- **Always remove:** `slug`, `keywords`, `date`, `author` — `date` is superseded by `publishedAt`/`updatedAt` above; `author` is never used — the byline shown on every article (see §0) is a fixed "Sacred Sanskriti Editorial" string in the template, not sourced from frontmatter.
- **Sources section:** don't write one by hand — `components/Sources.tsx` auto-generates it from every external `<a href="https://...">` citation already in the article body (see `lib/sources.ts`), so it can never drift from what's actually cited. Just make sure every real citation in the body is a proper external link per the External Links Guidelines (§9).
- **YouTube embeds (if any):** must follow this exact shape — `lib/youtube.ts` extracts it into a lightweight click-to-load facade and strictly expects a `## Watch: ...` heading, immediately followed by the iframe wrapper `<div>`, immediately followed by a `---` divider, with nothing else in between:
  ```markdown
  ## Watch: Article Title

  <div style="position:relative;padding-bottom:56.25%;height:0;overflow:hidden;border-radius:12px;margin:1.5rem 0;">
    <iframe style="position:absolute;top:0;left:0;width:100%;height:100%;" src="https://www.youtube.com/embed/VIDEO_ID" title="Video Title" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
  </div>

  ---
  ```
  Don't embed a video inline mid-paragraph or add commentary sentences between the `</div>` and the `---` — the facade renders near the top of the article regardless of where this section sits, so write the surrounding prose without assuming the video appears exactly where this block is.

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
- Fabricated personal bylines, pen names, or personas (`*By Anya Sharma...*`) — never invent a person (see §0). The one standard byline, "By Sacred Sanskriti Editorial," is added automatically by the article template; don't write it into the markdown draft.
- Inline citation numbers `[1]` `[2]` `[3]`
- A raw, unverified `## Sources` / `## References` dump copied straight from a GPT draft — strip it, but don't leave the article with nothing in its place: per §0, every article should end with its own curated Sources section (numbered list: title, author/publisher where known, link), built from citations you've actually verified, not the draft's own list
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
- `components/ArticlePage.tsx` (the shared template used by all 6 category route wrappers) and `lib/seo.ts` automatically generate `BlogPosting`, `FAQPage`, and `BreadcrumbList` JSON-LD schema for every article — do not add these manually to markdown files

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
- **Content freshness:** Update the `updatedAt` field whenever an article is significantly revised (see §2)

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
| 33 Koti Devta (myth vs. 33 crore gods) | `/myth-vs-text/33-koti-devta` |
| Gayatri Mantra meaning | `/mantras-chants/real-meaning-gayatri-mantra` |
| Agnihotra ritual | `/rituals/agnihotra` |
| Om symbol | `/symbols/om-symbol` |
| Surya Namaskar | `/practices/surya-namaskar` |
| Why Do We Ring Bells in Temples | `/practices/why-do-we-ring-bells-in-temples` |

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
- **Gayatri Mantra article:** Wikipedia (Gayatri Mantra), PubMed Central (OM chanting fMRI study, PMC3099099)
- **Why Do We Ring Bells in Temples article:** PubMed Central (copper antimicrobial mechanisms, PMC3239771), PubMed Central (OM chanting fMRI study, PMC3099099)
- **Agnihotra article:** Wikipedia (Agnihotra)
- **Om Symbol article:** Wikipedia (Mandukya Upanishad), PubMed Central (OM chanting fMRI study, PMC3099099)
- **33 Koti Devta article:** Wikipedia (Deva, Hinduism), Wisdomlib (Sanskrit dictionary entry for "koti"), Wisdomlib (Brihadaranyaka Upanishad 3.9, Shakalya-Brahmana)
- **Surya Namaskar article:** Wikipedia (Surya Namaskar), PubMed Central (HRV comparison study, PMC10919408)
- **What is Dharma article:** Vedabase.io (Bhagavata Purana 1.17.24), Britannica (dharma — religious concept)

---

## 10. Article Processing Checklist

Run through this checklist before marking any article as complete:

### Metadata
- [ ] Frontmatter has `title`, `description`, `publishedAt`, `updatedAt`, `healthContent`, `image` only
- [ ] Description is one sentence, ~20 words, starts with a verb
- [ ] Image path follows `/images/article-slug.jpg` format

### Content Cleaning
- [ ] No invisible Unicode watermarks
- [ ] No TL;DR blockquote
- [ ] No fabricated personal byline (the standard "By Sacred Sanskriti Editorial" byline is template-generated, not written in the draft)
- [ ] No inline citation numbers `[1]` `[2]`
- [ ] No raw, unverified GPT-dumped Sources/References list — replaced with a curated one (see §0)
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
