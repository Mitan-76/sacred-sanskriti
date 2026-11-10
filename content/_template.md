---
title: ""
description: ""
publishedAt: YYYY-MM-DD
updatedAt: YYYY-MM-DD
healthContent: false
tags: []
image: /images/article-slug.jpg
youtubeId:
---

<!--
  Blank article template — Phase 5.2 signature structure (CLAUDE.md §0/§5).
  Copy this file into the right content/<category>/ folder and rename it to
  the article's slug before filling it in. Delete this comment block and any
  section you don't use (the science-check and "for families abroad"
  sections are optional — skip rather than force them).

  Frontmatter notes:
  - title/description/publishedAt/updatedAt/healthContent/tags/image are all
    required — see CLAUDE.md §2 for the exact rules on each.
  - youtubeId is optional; delete the line entirely if there's no video.
  - Do NOT add slug/category/sources fields — slug and category are already
    derived from the file's path, and the Sources section below is
    auto-extracted from the citations you link in the body (lib/sources.ts).
  - Run `npm run check:content` before publishing.
-->

Opening paragraph: a direct 2-3 sentence answer to the title question — this
is what AI search and featured snippets lift, so answer first, explain after.

Second paragraph: broaden slightly — why this matters, what the rest of the
article covers. Link to 2-3 related articles here or in context below.

---

## [Heading: The Story / Tradition]

Open with a direct statement, not preamble. What do devotees believe, and why
does it matter?

## What Do the Texts Actually Say?

Name the specific text, verse, or chapter reference and which translation
you're using. Never invent a citation — if a claim has no verifiable source,
mark it `<!-- TODO-SOURCE: ... -->` instead of guessing (CLAUDE.md §0).

## Common Myths vs. Facts

Where does popular belief diverge from what the text/history actually says?

## [Optional] Does Science Support This? What the Research Shows

Only include this section with real, named evidence (a named study, working
verified link). Use "studies suggest" / "practitioners report" language, not
definitive claims. If healthContent: true, at least one source must be a
study-type citation (PubMed/PMC/DOI) or this will fail `check:content`.

## [Optional] For Families Abroad

How might a parent explain this to children, or to non-Hindu friends, living
outside India? Strong diaspora angle — skip if it doesn't add anything real.

---

## Frequently Asked Questions

### [Question 1]

[Answer — don't just repeat earlier paragraphs word for word.]

### [Question 2]

[Answer]

### [Question 3]

[Answer]

---

*Explore more [topic] in our [Category Name](/category-slug) section.*
