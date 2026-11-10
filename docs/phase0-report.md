# Phase 0 Discovery Report

**Date:** 10 Nov 2026
**Scope:** No changes made — read-only discovery per the instructions file.

---

## 1. Framework and stack

- **Framework:** Next.js 14.2.5, App Router, TypeScript, React 18.
- **Node version:** not pinned anywhere (no `.nvmrc`/`engines` field). The repo's own GitHub Actions workflow uses Node 24; recommend pinning the app itself to the same.
- **Styling:** Tailwind CSS v4 + shadcn/ui (migrated from plain CSS in a redesign completed earlier this month — see "Already resolved" section below).
- **Content pipeline:** Markdown files with YAML frontmatter, parsed via `gray-matter`, rendered via `remark`/`remark-html`.

## 2. Where articles live

`content/<category>/<slug>.md`, one file per article, across 6 category folders: `hinduism-qa`, `myth-vs-text`, `practices`, `mantras-chants`, `rituals`, `symbols`.

**Current frontmatter fields:** `title`, `description`, `date`, `image` only. No `slug`, `tags`, `publishedAt`/`updatedAt` split, `youtubeId`, `ogImage`, `healthContent`, or `sources` fields exist yet — these are all genuinely new, per the Phase 5.1 schema.

Content is read via `lib/content.ts` (`getPostsByCategory`, `getPostBySlug`, `getAllCategories`, `getRelatedPosts`, `getLatestPosts`) — a single, already-centralized data layer, which is good news for Phase 5 schema work (one place to extend, not scattered per-route logic).

## 3. Head tags / `<head>` rendering

Uses Next.js's built-in Metadata API (`export const metadata` / `generateMetadata`) — not hand-rolled `<head>` tags. Every page already has a unique `title` and `description` (verified this session), a self-referencing `alternates.canonical`, and per-page OpenGraph/Twitter blocks. Article OG images use the real article image (1200×630 JPG), not a generated placeholder.

**`meta keywords`:** not present anywhere in the current codebase — nothing to remove here. (It may have existed in an older version this instruction file was written against; it's already gone.)

## 4. Existing infrastructure

| Item | Status |
|---|---|
| `sitemap.xml` | ✅ Dynamic, via `app/sitemap.ts` — all static pages, category hubs, and articles, with real per-article `lastmod` from `post.date`. |
| `robots.txt` | ✅ `public/robots.txt` — allows all, points to the sitemap. |
| `ads.txt` | ⚠️ Exists at `public/ads.txt` but contains a **placeholder** publisher ID (`pub-0000000000000000`), not a real one. |
| 404 page | ✅ Custom `app/not-found.tsx`, returns a real HTTP 404 (a soft-404 bug where every nonexistent slug returned 200 was found and fixed earlier this session). |
| JSON-LD | ✅ `Organization`/`WebSite` sitewide (`app/layout.tsx`), `BlogPosting`/`FAQPage`/`BreadcrumbList` per article (`lib/seo.ts` + `components/ArticlePage.tsx`), `BreadcrumbList` on category/static pages (`components/Breadcrumb.tsx`). |
| Analytics | ❌ **None installed.** No GA4, no gtag, no analytics script anywhere. Phase 3.1 is a clean install, not a migration. |
| `llms.txt` | ✅ Exists at `public/llms.txt` (not asked for in the instructions, but relevant to the site's existing GEO work). |

## 5. Redirects

Next.js supports 301s natively via a `redirects()` export in `next.config.mjs` (no middleware needed for simple static redirects). `next.config.mjs` currently has `images`, `reactStrictMode`, `poweredByHeader`, and a `headers()` block (security headers, added earlier this session) — no `redirects()` yet. Adding the Phase 2.1 slug redirects is a small, additive change to this same file.

## 6. Hosting / deploy setup — **could not be determined, need your input**

No `vercel.json`, `netlify.toml`, `Dockerfile`, or deploy workflow exists in the repo. The only GitHub Actions workflow present (`update-seo-guidelines.yml`) is an unrelated monthly automation, not a deploy pipeline. The repo's GitHub remote is `github.com/Mitan-76/sacred-sanskriti`. **Where is this actually deployed — Vercel (likely, since Next.js auto-deploys from GitHub with no committed config), Netlify, a VPS, something else?** This matters for how 301 redirects and security headers actually take effect in production (Vercel/Netlify honor `next.config.mjs` directly; a custom Node server behind nginx would need the redirect/header logic duplicated at the nginx layer too).

## 7. Already resolved (found during this session's earlier redesign, before this instructions file was written)

A few items this instructions file flags as problems no longer exist — likely because it was written against an older snapshot of the site:

- **Duplicated header menu (Phase 2.5):** fixed — `<Header />` now renders exactly once, in `app/layout.tsx`.
- **Footer "Silos" heading (Phase 2.5):** already renamed to "Explore."
- **Soft-404 bug:** already found and fixed (unrelated bug, a `loading.tsx` Suspense boundary forcing a 200 before `notFound()` could commit).
- **`meta keywords` tag (Phase 2.2):** not present; nothing to remove.
- Two articles the instructions name by old URL and in the Phase 6 fix table — **`How to Reduce Office Stress`** and **`OM Chanting and the Brain`** — were **deleted entirely earlier this session**, with your sign-off, because their embedded YouTube videos were confirmed dead via YouTube's oEmbed API (both returned 403/unavailable) and you asked for the articles removed rather than fixed. Every cross-link to them elsewhere on the site was also already cleaned up. **Phase 2.1's redirect table rows for these two, and their Phase 6 fix-list entries, are now moot** — there's nothing left to redirect or fix. If you want them rewritten with working videos and republished later, that's a new-article decision, not a Phase 1–6 fix.

## 8. Full article inventory

13 articles (not 15 — the instructions' count predates the two deletions above).

| URL | Category | Words | Frontmatter `date` | Real first-commit date | Last touched | Sources section? | YouTube embed? |
|---|---|---|---|---|---|---|---|
| `/hinduism-qa/what-is-dharma-in-hinduism` | hinduism-qa | ~900 | 2026-04-30 | 2026-05-01 | 2026-11-10 | No (inline citation links only) | No |
| `/hinduism-qa/mahabharat-facts-you-should-know` | hinduism-qa | 1,491 | 2026-05-22 | 2026-05-22 | 2026-06-09 | No | Yes |
| `/hinduism-qa/sri-venkateswara-swamy-temple-tirupati-balaji-guide` | hinduism-qa | 1,494 | 2026-05-23 | 2026-05-26 | 2026-06-09 | No | No |
| `/hinduism-qa/interesting-facts-about-hanuman` | hinduism-qa | 2,231 | 2026-05-14 | 2026-05-15 | 2026-06-09 | No | Yes |
| `/hinduism-qa/karna-the-forgotten-hero` | hinduism-qa | 2,223 | 2026-05-27 | 2026-06-02 | 2026-06-09 | No | No |
| `/hinduism-qa/12-jyotirlinga-complete-guide` | hinduism-qa | 2,045 | 2026-05-01 | 2026-05-01 | 2026-06-09 | No | Yes |
| `/mantras-chants/real-meaning-gayatri-mantra` | mantras-chants | 1,454 | 2026-05-08 | 2026-05-08 | 2026-11-05 | No | Yes |
| `/myth-vs-text/33-koti-devta` | myth-vs-text | ~900 | 2026-02-16 | 2026-02-22 | 2026-11-10 | No | No |
| `/myth-vs-text/kali-yuga-everything-you-need-to-know` | myth-vs-text | 1,748 | 2026-05-29 | 2026-06-09 | 2026-06-09 | No | No |
| `/practices/surya-namaskar` | practices | 886 | 2026-02-16 | 2026-02-22 | 2026-11-05 | No | No |
| `/practices/Why-Do-We-Ring-Bells-in-Temples-practices` | practices | 801 | 2026-03-28 | 2026-04-05 | 2026-11-05 | No | Yes |
| `/rituals/agnihotra` | rituals | 1,039 | 2026-02-16 | 2026-02-22 | 2026-11-05 | No | No |
| `/symbols/om-symbol` | symbols | ~850 | 2026-02-16 | 2026-02-22 | 2026-11-05 | No | No |

Notes:
- **No article has a formal "Sources" section today.** All citations are inline `<a>` tags mid-paragraph. Phase 1.6/5.1 is a real structural addition everywhere, not a reformat.
- **No article has AI-assistance disclosure or a visible byline today** — confirmed, matches the instructions' premise.
- Four articles share the exact same frontmatter date (`2026-02-16`) with real git history 6 days later (`2026-02-22`) — a batch import, as the instructions anticipated. Per Phase 1.4's own fallback rule, I'd treat **git first-commit date** as the more honest `publishedAt` for these four, pending your confirmation.
- `Why-Do-We-Ring-Bells-in-Temples-practices` is the one still-mixed-case, suffix-bearing slug needing the Phase 2.1 rename.

## 9. Proposed phase order

The instructions' own order (1 → 2 → 3 → 4 → 5 → 6) is already the right sequence for this stack — I'm not proposing a change, just confirming it holds up against what's actually here:

1. **Phase 1 (trust fixes)** first, as written — it fixes active misrepresentation (unnamed "scholars/researchers" claim), which is the highest-severity issue from the content-accuracy audit done earlier this session.
2. **Phase 2 (technical SEO)** next — mostly additive/config-level (`next.config.mjs` redirects/headers, already partially done), low risk.
3. **Phase 3 (analytics/consent)** — genuinely a clean install (nothing to migrate), can happen independently of Phase 2 if you want it sooner, but needs the GA4 ID and a hosting-provider answer (does your host support env vars the way Vercel does?) before it can be wired up.
4. **Phase 4 (engagement)** depends on Phase 5's `tags` field (for related articles) — consider doing the frontmatter schema piece of Phase 5.1 slightly earlier, before Phase 4.1, to avoid building "related articles" twice.
5. **Phase 5 (template/schema + checker script)** — the data-layer centralization in `lib/content.ts` makes this easier than it would be in a more scattered codebase.
6. **Phase 6 (per-article fixes)** last, as written, now against a 13-article list (not 15) and re-prioritized without the two deleted articles. I don't have `sacredsanskriti-gsc-analysis.md` (referenced for prioritizing this phase) — if you can share it, I'll use it; otherwise I'll prioritize by current word count/citation gaps from this session's content audit.

## 10. Owner inputs still needed before Phase 1 can finish

| Item | Status |
|---|---|
| YouTube channel URL | ✅ Already have it: `https://www.youtube.com/@SacredSanskriti4all` |
| Corrections/contact email | Defaulting to the existing `contactus@sacredsanskriti.com` unless you want a dedicated address |
| Confirm `publishedAt` for the 4 batch-imported articles | git-history date (2026-02-22) vs. keep frontmatter date (2026-02-16) — your call |
| Hosting/deploy platform | Needed to confirm redirects/headers actually apply in production |
| `sacredsanskriti-gsc-analysis.md` | Referenced for Phase 6 prioritization but not provided |

Still not needed yet (later phases): British/American English, GA4 ID, email provider, thin-category decision.
