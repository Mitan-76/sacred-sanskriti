# Sacred Sanskriti: Implementation Instructions for Claude Code

**Site:** https://sacredsanskriti.com/
**Stack:** Node.js (framework to be detected in Phase 0)
**Prepared:** 10 Nov 2026
**Goal:** Build authority and organic traffic from the global Hindu diaspora, then monetize. English only. One new article per week.

---

## How to use this file

1. Put this file in the root of the website repo.
2. Copy the "Standing rules" section below into the repo's `CLAUDE.md` (create it if it does not exist).
3. Open Claude Code in the repo and run one phase at a time:
   > "Read sacredsanskriti-claude-code-instructions.md and do Phase 0. Stop and report before changing anything."
4. After each phase: review the diff, run the site locally, then commit. Do not run all phases in one go.
5. Items marked **[OWNER INPUT]** need a value from Mitan before Claude Code can finish them.

---

## Standing rules (copy into CLAUDE.md)

```markdown
# Sacred Sanskriti: rules for Claude Code

## Brand and editorial
- Byline on every article: "Sacred Sanskriti Editorial". Never invent a person, pen name, persona, photo, or credential.
- Never claim content is written or reviewed by scholars, researchers, or practitioners.
- Every article shows: published date, last updated date, AI-assistance disclosure, and a Sources section.
- Tone: respectful to tradition, honest about evidence. Use "tradition says", "the text says", "studies suggest" correctly. Never present a belief as scientific fact.
- English only. Sanskrit terms are fine but explain them in plain English the first time.
- Audience: Hindu diaspora worldwide (US, UK, Canada, Australia, Gulf, etc.). Avoid India-only assumptions (prices in INR only, "near you" travel tips, IST-only timings).

## Accuracy (hard rule)
- Never invent a citation, verse number, study, author, journal, year, statistic, or URL.
- If a claim has no verifiable source, mark it with `<!-- TODO-SOURCE: ... -->` and list it in the report. Do not guess.
- Health claims (stress, cortisol, blood pressure, vagus nerve, sleep, etc.) need a named study with a working link, or must be softened to "practitioners report" / "early research suggests", or removed.
- Do not change the meaning of article content without listing the change for owner approval.

## Technical
- Keep URLs lowercase, hyphenated, no underscores, no trailing category suffixes.
- Any URL change needs a permanent 301 redirect from the old URL.
- Do not add new dependencies without saying why. Prefer small, standard packages.
- Do not break existing routes. Run the build and a local smoke test after every change.
- Keep the existing ad slot CLS-safe (reserved height).
- Secrets and IDs (GA4, AdSense, email provider) go in environment variables, never hard-coded.
```

---

## Phase 0: Discovery (no changes)

**Task:** Understand the codebase and report back before touching anything.

1. Identify the framework (Express + templates, Next.js, Nuxt, Astro, Eleventy, custom, etc.) and the Node version.
2. Find where articles live (Markdown/MDX files, JSON, database, CMS, hard-coded components).
3. Find how pages render `<head>` (title, meta description, canonical, OG tags).
4. Check whether these exist: `sitemap.xml`, `robots.txt`, `ads.txt`, a 404 page, any JSON-LD, any analytics script.
5. Check how redirects can be added (framework config, middleware, hosting config).
6. Find the hosting/deploy setup (Vercel, Netlify, VPS + PM2, Render, etc.).
7. List every article with: URL, title, category, word count, presence of dates, presence of sources, presence of YouTube embed.

**Deliverable:** A short report (`docs/phase0-report.md`) with the findings and a proposed order for Phases 1 to 6, adjusted to the actual stack.

---

## Phase 1: Trust fixes (Option A, brand byline)

Highest priority. These fix claims that are currently inaccurate.

### 1.1 Rewrite the About page
- Remove the claim that content is "created and reviewed by scholars, researchers, and practitioners".
- Remove the E-E-A-T sentence (stating "we follow E-E-A-T" is not a trust signal; showing it is).
- New About page must cover: what the site is, who it is for (Hindus and curious readers worldwide, especially the diaspora), the hybrid approach (tradition + what the texts say + a logic/science check where evidence exists), and a link to "How We Research".
- Keep the X/Twitter link. Add the YouTube channel link. **[OWNER INPUT: YouTube channel URL]**

### 1.2 Create a "How We Research" page (`/how-we-research`)
Must state honestly:
- Articles are researched with the help of AI tools.
- Every article is checked before publishing: verse references against the source text, study links opened and confirmed, claims without a source removed or marked as tradition/belief.
- Which source types are used: primary texts (with translation named), academic papers (PubMed, journals), reputable reference works.
- What the site does NOT do: present belief as scientific fact, give medical advice.
- How readers can report an error (link to a corrections email or contact form). **[OWNER INPUT: corrections email address]**

### 1.3 Create a "Corrections & Updates" policy section
Can live inside How We Research. State that corrections are made openly and the "Last updated" date changes when they are.

### 1.4 Article byline block (component used on every article)
Display, directly under the H1:
```
By Sacred Sanskriti Editorial · Published 12 Oct 2026 · Updated 10 Nov 2026
Researched with AI tools and checked against the sources listed below. How we research →
```
- Dates come from article metadata (`publishedAt`, `updatedAt`), not from build time.
- If the real publish date is unknown for existing articles, use the earliest date from git history and mark it in the report for owner confirmation.

### 1.5 Medical disclaimer component
Add to every article in the Practices category and any article that mentions health effects:
> "This article is for educational purposes only and is not medical advice. Consult a qualified professional before starting any new practice, especially if you have a health condition."

### 1.6 Sources component
A standard "Sources" section at the end of every article: numbered list, each with title, author/publisher where known, and a link. Verse references formatted consistently, for example: *Rigveda 3.62.10*.

**Acceptance criteria for Phase 1**
- No page claims scholar review.
- Every article shows byline, both dates, AI disclosure, and a Sources section (even if marked incomplete).
- How We Research page is live and linked from the footer, About page, and every byline.

---

## Phase 2: Technical SEO

### 2.1 URL cleanup with 301 redirects
Normalize these slugs (lowercase, hyphens, no category suffix):

| Old URL | New URL |
|---|---|
| `/practices/How_to_Reduce_Office_Stress` | `/practices/how-to-reduce-office-stress` |
| `/practices/OM_Chanting_and_the_Brain` | `/practices/om-chanting-and-the-brain` |
| `/practices/Why-Do-We-Ring-Bells-in-Temples-practices` | `/practices/why-do-we-ring-bells-in-temples` |

- Also enforce: one canonical host (pick `https://sacredsanskriti.com`, redirect `www` and `http`), one trailing-slash rule.
- Update all internal links to the new URLs.

### 2.2 Head tags per page
- Unique `<title>` (under ~60 characters) and unique meta description (under ~155 characters) for every page.
- **Remove the `meta keywords` tag site-wide.** It is currently the same keyword list on every page and is ignored by Google.
- Self-referencing `<link rel="canonical">` on every page.
- Open Graph + Twitter tags per article (title, description, image, URL). Each article needs its own OG image (generate a simple branded template with the article title if no image exists).
- Make sure OG/Twitter descriptions are not just copies when a better social description exists (optional).

### 2.3 Structured data (JSON-LD)
- **Homepage:** `Organization` (name, logo, url, `sameAs` with X and YouTube) + `WebSite`.
- **Every article:** `Article` with `headline`, `description`, `image`, `datePublished`, `dateModified`, `author` as `Organization` (Sacred Sanskriti Editorial / Sacred Sanskriti), `publisher` as `Organization` with logo, `mainEntityOfPage`.
- **Every article and category page:** `BreadcrumbList`.
- **FAQ sections:** keep the visible FAQ content (it helps People Also Ask and AI answers). FAQPage markup is optional: Google stopped showing FAQ rich results for all sites on 7 May 2026, so do not expect a rich result from it.
- Validate with Google's Rich Results Test and the Schema.org validator.

### 2.4 Sitemap and robots
- Dynamic `sitemap.xml` listing all pages and articles with real `lastmod` from `updatedAt`.
- `robots.txt` allowing crawl and pointing to the sitemap.
- After deploy: submit the sitemap in Google Search Console. **[OWNER ACTION]**

### 2.5 Navigation and layout fixes
- Remove the duplicated header menu (it renders twice).
- Rename the footer heading "Silos" to "Topics".
- Add breadcrumbs on article pages (Home > Category > Article).
- Proper 404 page with links to categories and popular articles (returns HTTP 404, not 200).
- Pick one spelling standard (British or American) and apply it to UI text. **[OWNER INPUT: British or American English?]**

### 2.6 Performance (Core Web Vitals)
- Replace YouTube iframes with a lightweight click-to-load facade (thumbnail + play button; load iframe on click). Use `youtube-nocookie.com`.
- Images: modern formats (WebP/AVIF), explicit width/height, `loading="lazy"` below the fold, compressed hero image.
- Keep the ad slot's reserved height so ads do not shift layout.
- Self-host or `preload` fonts; avoid render-blocking scripts.
- Target Lighthouse mobile: Performance 90+, SEO 100, Accessibility 90+, Best Practices 90+.

### 2.7 Accessibility basics
- Alt text on all images, one H1 per page, logical heading order, sufficient colour contrast, focus styles on links/buttons.

**Acceptance criteria for Phase 2**
- Old URLs return 301 to new URLs; no internal links point to old URLs.
- No `meta keywords` tags anywhere.
- Rich Results Test shows valid Article + Breadcrumb on a sample article.
- Sitemap lists every article with correct lastmod.
- Lighthouse mobile targets met on the homepage and 2 articles.

---

## Phase 3: Analytics, consent, and monetization readiness

### 3.1 Analytics
- Install Google Analytics 4 via environment variable `GA4_ID`. **[OWNER INPUT: GA4 Measurement ID, create a GA4 property first]**
- Track events: YouTube embed click, outbound source link click, newsletter signup, scroll depth (GA4 enhanced measurement covers scroll).
- Link GA4 to Search Console. **[OWNER ACTION]**

### 3.2 Consent (needed because the audience includes UK and EU diaspora)
- Implement Google Consent Mode v2 so GA4 and ads respect consent.
- For AdSense later: Google requires a Google-certified CMP integrated with IAB TCF to serve personalized ads to users in the EEA, UK, and Switzerland. The simplest option is AdSense's own "Privacy & messaging" consent message, which is certified. Prepare the site so this can be switched on without code changes.
- Update the Privacy Policy to mention analytics, cookies, YouTube embeds, and (future) ads.

### 3.3 Ad readiness (do not apply for AdSense yet)
- Create `ads.txt` route ready to hold the AdSense publisher line. **[OWNER INPUT later: AdSense publisher ID]**
- Define 3 CLS-safe ad slots in the article template (after intro, mid-article, before Sources), switched off by a feature flag until approval.
- Remove the visible "Advertisement Space (CLS Protected)" placeholder text from the live homepage; keep the reserved space hidden behind the flag.

**Acceptance criteria for Phase 3**
- GA4 receives page views in DebugView (with consent granted).
- No analytics or ad cookies set before consent for EEA/UK visitors.
- Ad slots exist in code but are off.

---

## Phase 4: Engagement and internal linking

### 4.1 Related articles block
At the end of each article, show 3 related articles: same category first, then shared tags. Requires a `tags` field in article metadata.

### 4.2 Table of contents
Auto-generated from H2s for articles over ~1,200 words, with anchor links.

### 4.3 YouTube CTA
Under the byline or after the video facade: "Watch our videos on YouTube" with a subscribe link. **[OWNER INPUT: channel URL]**
Note: the channel is in Hinglish. Label it clearly, for example "Videos in Hindi/Hinglish", so English readers are not surprised.

### 4.4 Email capture
- One simple signup box after the article and in the footer: "Get one new article every week."
- Provider pluggable via env vars (Beehiiv, ConvertKit/Kit, Brevo, MailerLite, or a Supabase table to start). **[OWNER INPUT: which provider]**
- Double opt-in. Link to Privacy Policy.

### 4.5 Category pages
- Add a 100 to 200 word intro to each category page explaining what it covers.
- List articles newest first with date and short description.
- Hide or merge categories with fewer than 3 articles from the main menu until they have content, or show a "Coming soon" note. **[OWNER DECISION]**

**Acceptance criteria for Phase 4**
- Every article has related articles, a working YouTube CTA, and an email signup.
- Every category page has an intro.

---

## Phase 5: Article template and content quality system

### 5.1 Article metadata schema
Every article must have (frontmatter or DB fields):
```yaml
title:
slug:
category:        # mantras-chants | rituals | symbols | myth-vs-text | practices | hinduism-qa
tags: []
description:     # 140-155 chars, unique
publishedAt:     # YYYY-MM-DD
updatedAt:       # YYYY-MM-DD
youtubeId:       # optional
ogImage:
healthContent:   # true/false, triggers medical disclaimer
sources:
  - type: scripture | study | book | web
    title:
    reference:   # e.g. "Rigveda 3.62.10" or DOI/PubMed ID
    url:
```

### 5.2 Signature article structure (hybrid format)
New articles should follow this order. Not every section is required for every topic; skip the science check when there is no real evidence rather than forcing it.

1. **Short answer** (2 to 3 sentences that directly answer the title question; this is what AI search and featured snippets lift)
2. **The story / tradition** (what devotees believe and why it matters)
3. **What the texts actually say** (named text, verse/chapter reference, which translation)
4. **Common myths vs facts** (where popular belief differs from the text)
5. **Logic / science check** (only with real, named evidence; state limitations honestly)
6. **For families abroad** (optional: how to explain it to children or non-Hindu friends; strong diaspora angle)
7. **FAQ** (4 to 6 real questions; do not repeat earlier paragraphs word for word)
8. **Sources**

### 5.3 Pre-publish checker script
Create `npm run check:content` that fails or warns when an article:
- is missing `publishedAt`, `updatedAt`, `description`, `sources`, or `ogImage`
- has fewer than 3 sources
- has `healthContent: true` but no study-type source
- contains `TODO-SOURCE`
- has a description over 160 characters or a duplicate title/description
- contains any banned words list (optional, owner can add)
- has broken internal links

Run it in CI or as a pre-commit hook.

**Acceptance criteria for Phase 5**
- All 15 existing articles pass the metadata part of the checker (sources may still be flagged).
- A blank article template file exists for the weekly article.

---

## Phase 6: Fix the existing 15 articles

**Order (based on the Search Console export, see sacredsanskriti-gsc-analysis.md):** 1) OM Chanting and the Brain (61% of all impressions, position ~10.8; rebuild around a study table: authors, year, journal, sample size, finding, limitation, PubMed link; new title/meta mentioning "study", "fMRI", "vagus nerve"), 2) Karna, 3) Temple Bells, 4) 33 Koti Devta, 5) Hanuman, 6) Gayatri, then the rest. Tirupati and Jyotirlinga last.

Work article by article. For each one, produce a change list for owner approval before applying meaning-level edits. Never fabricate sources; use `TODO-SOURCE` where a source cannot be verified.

### Known issues from the audit (10 Nov 2026)

| Article | Fixes needed |
|---|---|
| Interesting Facts About Hanuman | Origin story names 3 blessings (Indra, Brahma, Agni) but power section adds Varuna: make consistent. "Philosopher, poet, grammarian" claimed in intro but never developed: develop or remove. Broken-jaw etymology stated as fact: note it is the traditional explanation. "Tens of millions chant daily" and similar statistics: source or soften. Ashram paragraph reads as an endorsement: neutralize. FAQ repeats body text: rewrite answers. Add verse/kanda references for central stories. |
| Real Meaning of the Gayatri Mantra | "Studies show" HRV/cortisol effects with no named study: add named studies or soften. "Energetic" section (24 shaktis, energy centres) has no textual or scientific support: label clearly as traditional belief with a source, or remove. 108 sun distance claim: source or remove. Clarify whether "Om" counts in the 24 syllables. Name the translation used for Rigveda 3.62.10. |
| OM Chanting and the Brain | Fix inconsistent study title. Complete the citation for the second study (authors, journal, year). Blood pressure claim has no citation: source or remove. Vagus nerve, cortisol, digestion, sleep claims: source or soften. Add study limitations (pilot, small sample). Remove "most people notice something within the first week" unless sourced. Add medical disclaimer. Change URL (Phase 2). |
| Kali Yuga | Section title "What did Krishna predict about Kali Yuga" contradicts the text saying the Gita does not mention Kali Yuga by name: retitle and reframe. Add verse references for Bhagavata and Mahabharata claims. Add a short neutral note on how the 3102 BCE date was derived and that the chronology is traditional. This article sits in Myth vs Text, so it must actually compare myth with text. |
| How to Reduce Office Stress | Health claims: source or soften. Add medical disclaimer. Change URL. |
| Why Do We Ring Bells in Temples | "Brain activation" and "vagus nerve stimulation" claims: source or soften. Add medical disclaimer. Change URL. |
| Surya Namaskar | Check health claims, add sources and medical disclaimer. |
| Tirupati Balaji guide | Darshan booking rules, timings, and fees change often: add "Last checked" date and link to the official TTD site. Add a section for diaspora visitors (NRI darshan, travel from abroad) only from official sources. |
| 12 Jyotirlinga guide | Same as Tirupati: link official temple sites, add "Last checked" date. |
| Karna, Mahabharat Facts, Dharma, 33 Koti Devta, Agnihotra, Om Symbol | Run the checker; add verse references and sources; add dates, byline, disclaimer where relevant. Agnihotra: any health/environment claims need named sources or must be softened. |

**Deliverable per article:** a diff plus a short change log in `docs/article-fixes.md` listing: what changed, what still needs a source, and anything needing owner approval.

---

## Final verification checklist (run after all phases)

- [ ] `npm run build` passes with no errors
- [ ] `npm run check:content` passes (or only expected TODO-SOURCE warnings)
- [ ] All old URLs 301 to new URLs; no 404s from internal links (run a link crawler)
- [ ] Rich Results Test: Article + Breadcrumb valid on 3 sample articles
- [ ] Lighthouse mobile scores meet Phase 2 targets
- [ ] No page claims scholar review; How We Research page linked from every article
- [ ] GA4 DebugView shows events; consent banner behaves correctly for EEA/UK
- [ ] Sitemap submitted in Search Console **[OWNER ACTION]**
- [ ] Request indexing for the updated top 5 articles in Search Console **[OWNER ACTION]**

---

## Owner inputs needed (collect before starting)

| Item | Needed for |
|---|---|
| YouTube channel URL | Phase 1.1, 2.3, 4.3 |
| Corrections / contact email | Phase 1.2 |
| British or American English | Phase 2.5 |
| GA4 Measurement ID | Phase 3.1 |
| Email provider choice | Phase 4.4 |
| Decision on thin categories (hide, merge, or "coming soon") | Phase 4.5 |
| Real publish dates for existing articles (if known) | Phase 1.4 |
| Search Console export (Queries, Pages, Countries) | Prioritizing Phase 6 and the content calendar |

---

## Notes on choices in this plan

- **Brand byline (Option A):** Google's guidance asks for accurate bylines where readers would expect them. A brand byline is accurate. A fake person is not, and Google's October 2026 guidance update explicitly calls fake author profiles deception.
- **FAQ markup:** Google removed FAQ rich results for all sites on 7 May 2026. FAQ content stays because it answers real questions and helps AI search; the markup is optional.
- **Consent:** AdSense requires a Google-certified CMP (IAB TCF) for personalized ads in the EEA, UK, and Switzerland. The diaspora audience includes the UK, so this is built in from the start.

Sources:
- Google Search's guidance about AI-generated content: https://developers.google.com/search/blog/2023/02/google-search-and-ai-content
- Fake author profiles called deception (Oct 2026 update): https://www.buildmvpfast.com/blog/google-helpful-content-guidelines-fake-author-profiles-2026
- FAQ rich results removed (May 2026): https://www.searchenginejournal.com/google-drops-faq-rich-results/574429/
- Google consent management requirements for publishers: https://support.google.com/adsense/answer/13554116
