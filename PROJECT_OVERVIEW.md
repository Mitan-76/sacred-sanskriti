# Sacred Sanskriti — Project Overview

**Live URL:** https://sacredsanskriti.com  
**Repository:** https://github.com/Mitan-76/sacred-sanskriti  
**Contact:** contactus@sacredsanskriti.com  
**Location:** Hyderabad, India

---

## What This Site Is

Sacred Sanskriti is an educational content platform that explores Hindu traditions — mantras, rituals, symbols, mythology, and practices — through scientific reasoning, historical accuracy, and Vedic scholarship. The mission is to bridge faith and empirical understanding, providing evidence-based insights into Sanatana Dharma without superstition or dogma.

---

## Technology Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 14.2.5 (App Router) |
| Language | TypeScript 5 |
| Styling | Plain CSS with CSS variables (no Tailwind) |
| Content | Markdown files + gray-matter (YAML frontmatter) |
| Markdown rendering | remark + remark-html |
| Image optimisation | Next.js Image component + sharp |
| Fonts | Google Fonts — Inter (body), Merriweather (headings) |
| Package manager | npm |

---

## Project Structure

```
/
├── app/                        # Next.js App Router — all routes live here
│   ├── layout.tsx              # Root layout: Header, Footer, BackToTop, global meta
│   ├── globals.css             # All site-wide CSS (no external CSS library)
│   ├── page.tsx                # Home page
│   ├── loading.tsx             # Global loading spinner
│   ├── sitemap.ts              # Auto-generated sitemap.xml
│   ├── about/page.tsx
│   ├── contact/page.tsx
│   ├── faq/page.tsx
│   ├── privacy/page.tsx
│   ├── terms/page.tsx
│   ├── mantras-chants/
│   │   ├── page.tsx            # Category listing
│   │   └── [slug]/page.tsx     # Dynamic article
│   ├── rituals/                # Same pattern as above
│   ├── symbols/                # Same pattern
│   ├── myth-vs-text/           # Same pattern
│   ├── practices/
│   │   ├── page.tsx
│   │   ├── [slug]/page.tsx
│   │   └── the-cognitive-benefits-of-centering-prayer/page.tsx  # Hardcoded exception
│   └── hinduism-qa/            # Same pattern
│       ├── page.tsx
│       └── [slug]/page.tsx
│
├── components/
│   ├── Header.tsx              # Sticky nav, desktop + mobile hamburger sidebar
│   ├── Footer.tsx              # 3-column dark footer
│   ├── ArticleLayout.tsx       # Article wrapper: breadcrumbs, share buttons, author bio
│   ├── BackToTop.tsx           # Fixed scroll-to-top button
│   ├── Breadcrumb.tsx          # Breadcrumb nav + BreadcrumbList JSON-LD
│   └── JsonLd.tsx              # Generic JSON-LD script injector
│
├── content/                    # All article content as markdown files
│   ├── mantras-chants/
│   ├── rituals/
│   ├── symbols/
│   ├── myth-vs-text/
│   ├── practices/
│   └── hinduism-qa/
│
├── lib/
│   └── content.ts              # getPostsByCategory() — the only content API
│
├── public/
│   ├── logo.png / logo.jpg
│   ├── home-banner.png
│   ├── robots.txt
│   ├── ads.txt                 # AdSense publisher ID (currently placeholder)
│   ├── llms.txt                # LLM indexing directive
│   └── images/                 # Article images referenced in frontmatter
│
├── package.json
├── tsconfig.json
└── next-env.d.ts
```

---

## Content System

### How Content Works

All articles are plain `.md` files stored in `content/{category}/`. The filename (minus `.md`) becomes the URL slug. There is no CMS, no database, and no API — everything is read from the filesystem at build time.

**To publish a new article:**
1. Create a `.md` file in the correct `content/{category}/` folder
2. Add the required frontmatter (see below)
3. Run `npm run build` — the article appears automatically in the category listing, the sitemap, and the home page Latest Articles feed

### Markdown Frontmatter Format

```yaml
---
title: "Article Title Here"
description: "One or two sentence meta description for SEO and card previews."
date: YYYY-MM-DD
image: /images/your-image-filename.jpg
---
```

Only these four fields are read by the system. Do not add `slug`, `author`, `keywords`, or `lastUpdated` — they are ignored.

### Content Processor (`lib/content.ts`)

```typescript
getPostsByCategory(category: string): Post[]
```

Reads all `.md` files from `content/{category}/`, parses frontmatter with `gray-matter`, and returns an array of `Post` objects. The `slug` field is derived from the filename. The `image` field falls back to `/logo.png` if not provided.

### Rendering Pipeline

Markdown is converted to HTML using `remark` + `remark-html` with `sanitize: false` and `allowDangerousHtml: true`. This means raw HTML (iframes, divs, custom elements) written inside `.md` files will pass through and render on the page — useful for YouTube video embeds.

### YouTube Video Embeds in Articles

**Shorts (vertical):**
```html
<div style="display:flex;justify-content:center;margin:1.5rem 0;">
  <iframe width="315" height="560" src="https://www.youtube.com/embed/VIDEO_ID"
    title="Title" frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowfullscreen style="border-radius:12px;"></iframe>
</div>
```

**Long-form 16:9:**
```html
<div style="position:relative;padding-bottom:56.25%;height:0;overflow:hidden;border-radius:12px;margin:1.5rem 0;">
  <iframe style="position:absolute;top:0;left:0;width:100%;height:100%;"
    src="https://www.youtube.com/embed/VIDEO_ID" title="Title" frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowfullscreen></iframe>
</div>
```

---

## Content Pillars (Silos)

| Pillar | URL | Content Folder |
|---|---|---|
| Mantras & Chants | `/mantras-chants` | `content/mantras-chants/` |
| Rituals | `/rituals` | `content/rituals/` |
| Symbols | `/symbols` | `content/symbols/` |
| Myth vs Text | `/myth-vs-text` | `content/myth-vs-text/` |
| Practices | `/practices` | `content/practices/` |
| Hinduism Q & A | `/hinduism-qa` | `content/hinduism-qa/` |

**Adding a new pillar** requires changes in 5 places:
1. Create `content/{new-slug}/` folder
2. Create `app/{new-slug}/page.tsx` (category listing)
3. Create `app/{new-slug}/[slug]/page.tsx` (article page)
4. Add to `silos` and `categories` arrays in `app/page.tsx`
5. Add to `staticPages` and `categories` arrays in `app/sitemap.ts`
6. Add nav link in `components/Header.tsx` (desktop + mobile)
7. Add footer link in `components/Footer.tsx`

---

## Routing

| Pattern | Example URL | What renders |
|---|---|---|
| `/` | sacredsanskriti.com | Home page — silo cards + latest posts |
| `/{category}` | `/mantras-chants` | All posts in that category |
| `/{category}/{slug}` | `/mantras-chants/gayatri-mantra` | Single article from `.md` file |
| `/about`, `/contact`, `/faq`, `/privacy`, `/terms` | Static pages | Hardcoded static pages |

---

## SEO & Structured Data

### JSON-LD Schemas Injected

| Schema | Where injected |
|---|---|
| Organization | `app/layout.tsx` (all pages) |
| WebSite + SearchAction | `app/layout.tsx` (all pages) |
| BreadcrumbList | Each `[slug]/page.tsx` + `Breadcrumb.tsx` |
| BlogPosting | Each `[slug]/page.tsx` |
| FAQPage | `app/faq/page.tsx` |
| Article | `app/practices/the-cognitive-benefits.../page.tsx` |

### Meta Tags
- Open Graph (og:title, og:description, og:image, og:type)
- Twitter Card (summary_large_image)
- Robots: index, follow
- Canonical URLs via `metadataBase` in layout.tsx

### Sitemap
Auto-generated at `/sitemap.xml` by `app/sitemap.ts`. Includes all static pages (priority 0.8, weekly) and all dynamic article routes (priority 0.7, monthly). Update this file whenever a new pillar is added.

### Robots
`public/robots.txt` — allows all crawlers, 1-second crawl delay, references sitemap.

### ads.txt
`public/ads.txt` — currently contains a placeholder AdSense publisher ID. Replace `pub-0000000000000000` with the real ID when AdSense is activated.

---

## Design System

### Colour Palette (CSS variables in `globals.css`)

| Variable | Value | Usage |
|---|---|---|
| `--primary-color` | `#62C1AE` | Teal — nav accents, table headers |
| `--secondary-color` | `#CEDCB9` | Sage — borders, subtle backgrounds |
| `--accent-color` | `#D4AF37` | Gold — highlights |
| `--text-color` | `#1A202C` | Dark grey — body text |
| `--bg-color` | `#F9FCFA` | Off-white cream — page background |
| `--link-color` | `#4A9D8E` | Teal variant — hyperlinks |

### Typography
- **Headings:** Merriweather serif (weights 300, 400, 700)
- **Body:** Inter sans-serif
- Both loaded from Google Fonts with `display: swap`

### Layout
- Max container width: 1200px (CSS variable `--container-width`)
- 12-column CSS grid on desktop, single column on mobile
- Mobile breakpoint: 768px
- Article content max-width: 780px, centred

### Key CSS Classes
- `.article-content` — wraps all article pages
- `.container` — 12-col grid container
- `.card` — white card with shadow and border
- `.nav-link` — navigation link with teal underline on hover
- `.mobile-nav` — slide-in mobile sidebar
- `.ads-above-fold` / `.ads-sidebar` — CLS-protected ad placeholders

---

## Build & Deploy

### Local Development

```bash
npm install
npm run dev       # http://localhost:3000
```

### Production Build

```bash
npm run build     # Compiles to .next/
npm run start     # Serves the production build locally
```

### Deployment

No `vercel.json`, `netlify.toml`, or `Dockerfile` is present. The project is structured for **Vercel deployment via GitHub integration** (push to main → auto-deploy). The `.gitignore` includes `.vercel` and `.next/`.

### Build Output Types

| Symbol | Meaning |
|---|---|
| `○ (Static)` | Pre-rendered as static HTML at build time |
| `ƒ (Dynamic)` | Server-rendered on demand (article `[slug]` pages) |

Category index pages are static. Article `[slug]` pages are dynamic (rendered on request, reading from filesystem).

---

## GPT / AI Content Watermarks to Watch For

When importing AI-generated content, check for and remove these before publishing:

- `:contentReference[oaicite:N]{index=N}` — inline citation placeholders
- `[1]`, `[2]`, `[3]` — numbered reference markers in text
- `## References` / `## Sources` sections at the end
- `*By [Author Name] — Last updated: YYYY-MM-DD*` bylines
- `> **TL;DR:**` summary blocks
- Inline `<script type="application/ld+json">` blocks (the page template handles this)
- `slug:`, `author:`, `keywords:`, `lastUpdated:` frontmatter fields (not read by the system)
- Inline `# Article Title` h1 at the top of the body (the template renders the frontmatter `title` as h1 — a second one creates a duplicate)

---

## Known Issues & Gaps

- **No custom 404 page** — Next.js default error page is shown
- **ads.txt** has a placeholder publisher ID — needs updating before AdSense goes live
- **TypeScript strict mode is off** (`"strict": false` in tsconfig.json)
- **Contact form** has no backend handler — email is displayed as plain text
- **No analytics** — no Google Analytics, Plausible, or equivalent integrated
- **No search** — no site-wide search functionality
- **remark-gfm is installed** (in package.json) but not wired into any article renderer — markdown pipe tables (`| col | col |`) will not render as HTML tables; use raw HTML `<table>` in the markdown body instead

---

## Article Writing Standards

- No inline h1 heading in the markdown body (template adds it)
- No author bylines
- No TL;DR blocks
- No numbered citation references in body text
- No References/Sources sections
- No `<script>` blocks in markdown (JSON-LD is handled by the page template)
- YouTube embeds: use raw HTML iframe in the markdown body (see embed patterns above)
- Frontmatter: only `title`, `description`, `date`, `image`
- Images: place in `public/images/` and reference as `/images/filename.jpg` in frontmatter
