# Changelog

All notable changes to Sacred Sanskriti will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/)
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

---

## [Unreleased]

### Added
### Changed
### Fixed
### Removed
### SEO
### Security

---

## [0.1.0] - 2026-05-08

Initial tracked release. Establishes the full site foundation including content
architecture, SEO infrastructure, design system, and all six content pillars.

### Added
- Full Next.js 14 App Router site with TypeScript
- Six content pillars: Mantras & Chants, Rituals, Symbols, Myth vs Text,
  Practices, Hinduism Q & A
- Markdown-based CMS (`lib/content.ts`) — filename becomes URL slug,
  YAML frontmatter drives metadata
- Dynamic routing for all category and article pages (`[slug]/page.tsx`)
- Home page with hero banner, silo cards for all pillars, and Latest Articles
  feed (top 5 sorted by date)
- Static pages: About, Contact, FAQ, Privacy Policy, Terms of Service
- Header with sticky navigation, desktop nav, and mobile hamburger sidebar
- Footer with pillar links and legal links
- BackToTop button with smooth scroll
- Breadcrumb component with BreadcrumbList JSON-LD
- ArticleLayout component with breadcrumbs, social share buttons, and author bio
- JsonLd utility component for structured data injection
- YouTube video embed support (Shorts portrait and 16:9 landscape patterns)
  directly in markdown via raw HTML passthrough
- `PROJECT_OVERVIEW.md` documenting site architecture, content standards,
  embed patterns, and AI content watermark checklist
- `public/robots.txt` — allows all crawlers, 1-second crawl delay
- `public/ads.txt` — AdSense publisher ID placeholder
- `public/llms.txt` — LLM indexing directive

### Content — Articles Published
- *Understanding the Real Meaning of the Gayatri Mantra* (Mantras & Chants)
- *The Science Behind OM Chanting and the Brain* (Practices)
- *Why Do We Ring Bells in Temples?* (Practices)
- *How to Reduce Office Stress Using Ancient Practices* (Practices)
- *Surya Namaskar: The Science Behind the Sun Salutation* (Practices)
- *Agnihotra: The Vedic Fire Ritual* (Rituals)
- *The Om Symbol: Meaning and Sacred Geometry* (Symbols)
- *33 Koti Devta: Myth vs Text* (Myth vs Text)
- *12 Jyotirlinga: A Complete Guide to India's Sacred Shiva Shrines* (Hinduism Q & A)
- *What is Dharma in Hinduism?* (Hinduism Q & A)
- *The Cognitive Benefits of Centering Prayer* (Practices — hardcoded route)

### SEO
- `BlogPosting` JSON-LD schema on all dynamic article pages
- `BreadcrumbList` JSON-LD schema on all article and category pages
- `Organization` JSON-LD schema in root layout (site-wide)
- `WebSite` JSON-LD schema with `SearchAction` in root layout
- `FAQPage` JSON-LD schema on `/faq` page
- Open Graph tags (og:title, og:description, og:image, og:type) on all pages
- Twitter Card (`summary_large_image`) on all pages
- Dynamic `sitemap.xml` covering all static pages and article routes
- Per-article `generateMetadata()` for unique title, description, and OG tags
- Robots meta: `index: true`, `follow: true`, max-snippet `-1`
- Image alt text on all key images
- Font display strategy set to `swap` for Core Web Vitals
- `sharp` for Next.js image optimisation pipeline
- Contact email updated to `contactus@sacredsanskriti.com`

### Fixed
- TypeScript build errors resolved across all dynamic route pages
- Font loading optimised based on PageSpeed Insights recommendations
- Image sizes corrected for performance and layout stability (CLS)

---

[Unreleased]: https://github.com/Mitan-76/sacred-sanskriti/compare/v0.1.0...HEAD
[0.1.0]: https://github.com/Mitan-76/sacred-sanskriti/releases/tag/v0.1.0
