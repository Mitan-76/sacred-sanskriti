# Image Generation Brief — Sacred Sanskriti

This file specified the article images that were missing from `public/images/` (confirmed via the SEO/schema audit). All images below have since been generated and placed — this file is kept as a historical spec. The entries for "How to Reduce Office Stress" and "OM Chanting and the Brain" have been removed, as both articles were deleted from the site.

**Format for all images:** JPG, **1200×630px** (matches the OG-image convention already used site-wide in `app/layout.tsx`), optimized for web (target under 300KB each).

**House style, applies to every image:** Sacred Sanskriti's brand line is "Where Science Meets the Sacred" — a calm, editorial, non-kitsch visual tone. Favor clean composition, restrained warm-neutral or deep-indigo palettes, soft natural or golden-hour lighting, and a documentary or editorial-illustration feel over saturated devotional-poster style or generic AI-stock-photo looks (no glowing auras, no hyper-stylized CGI deities, no stock "yoga on a beach" clichés). Where a specific deity, scripture scene, or named historical figure is depicted, keep the depiction respectful, traditional, and iconographically accurate rather than invented. Avoid text/typography baked into the image — titles are overlaid separately by the site.

Once images are generated and placed at the exact paths below, no further code changes are needed — the renderer fix already ships reading `post.image` correctly from frontmatter.

---

### 1. `public/images/karna-the-forgotten-hero.jpg`
**Article:** Karna: The Forgotten Hero of the Mahabharata
**Prompt:** A lone warrior in bronze-age Indian armor standing at the edge of a battlefield at dawn, Kavacha-style armor subtly visible, gazing toward a distant chariot array — composition emphasizes isolation and quiet dignity rather than combat action. Warm, low golden-hour light. Mood: tragic nobility, not triumph.

### 2. `public/images/interesting-facts-about-hanuman.jpg`
**Article:** Interesting Facts About Hanuman: The Immortal Devotee
**Prompt:** Hanuman depicted mid-leap across a stylized ocean toward a distant island silhouette (referencing the leap to Lanka), traditional iconography (vanara form, mace), rendered in a restrained, editorial illustration style rather than a hyper-glossy devotional-poster style. Dawn sky, soft orange-to-indigo gradient.

### 3. `public/images/mahabharat-facts-you-should-know.jpg`
**Article:** Mahabharat Facts You Should Know
**Prompt:** A wide, dust-toned panorama of the Kurukshetra battlefield at first light — two massed chariot armies facing each other in the distance, foreground empty and still. Documentary-epic framing, muted earth-tone palette, no close-up violence.

### 4. `public/images/sri-venkateswara-swamy-temple-tirupati-balaji-guide.jpg`
**Article:** Sri Venkateswara Swamy Temple, Tirupati Balaji guide
**Prompt:** The Tirumala hill temple's gopuram (tower) photographed in a realistic architectural-photography style at golden hour, pilgrims as small distant silhouettes to convey scale, South Indian Dravidian temple architecture accurately rendered.

### 5. `public/images/what-is-dharma-in-hinduism.jpg`
**Article:** What is Dharma in Hinduism?
**Prompt:** An abstract, editorial visual metaphor for balance and order — a single balanced scale or a still pond reflecting a temple silhouette, soft symmetrical composition, muted indigo and warm-gold palette. Avoid literal text like "Dharma" baked into the image.

### 6. `public/images/12-jyotirlinga-complete-guide.jpg`
**Article:** 12 Jyotirlinga: A Complete Guide to India's Sacred Shiva Shrines
**Prompt:** A collage-free single wide shot of one iconic Jyotirlinga shrine exterior (e.g. Somnath-style coastal temple) at dusk, with a subtle map-pin or constellation-of-dots motif faintly overlaid in the sky to hint at "12 locations across India" without literal text or a cluttered map graphic.

### 7. `public/images/real-meaning-gayatri-mantra.jpg`
**Article:** Understanding the Real Meaning of the Gayatri Mantra
**Prompt:** A figure in silhouette performing Sandhyavandanam (seated, hands in prayer or offering water) facing the rising sun over water or open horizon — the Savitr/dawn imagery central to the mantra's meaning. Warm sunrise palette, serene and still.

### 8. `public/images/kali-yuga-everything-you-need-to-know.jpg`
**Article:** Kali Yuga: Everything You Need to Know About the Age of Darkness
**Prompt:** An editorial, slightly somber composition — a single dim oil lamp (diya) flame in near-darkness, or a cracked ancient stone tablet half in shadow — evoking "the current, declining age" without being literally apocalyptic or frightening. Deep indigo and amber palette.


### 11. `public/images/why-we-ring-bells-in-temples-benefits.jpg`
**Article:** Why Do We Ring Bells in Temples?
**Prompt:** A close, editorial-photography-style shot of a traditional brass/copper temple bell mid-ring, shallow depth of field, temple interior softly blurred in the background. Warm brass tones.

### 12. `public/images/surya-namaskar.jpg`
**Article:** Surya Namaskar
**Prompt:** A single practitioner performing one clear pose from the Surya Namaskar sequence (e.g. the upward-facing backbend or standing forward bend) outdoors facing the rising sun, clean minimal background, realistic yoga-practice photography style — not an illustrated pose-chart.

### 13. `public/images/agnihotra.jpg`
**Article:** Agnihotra Ritual
**Prompt:** A small, controlled ritual fire in a copper vessel (kunda) at dawn or dusk, close framing on the flame and vessel with soft smoke, a blurred hint of a seated figure's hands in the foreground. Warm firelight against a cool twilight background.

### 14. `public/images/om-symbol.jpg`
**Article:** Om Symbol
**Prompt:** A clean, minimal rendering of the Devanagari Om (ॐ) glyph itself as the central subject — simple, well-balanced typographic/symbolic composition (not a literal object photo), subtle warm-gold color on a deep indigo or soft neutral background, no additional decorative clutter.

---

## After generation

Place each file at its exact path above, then verify locally with:

```bash
npm run build
```

No frontmatter or code changes are needed — `app/<category>/[slug]/page.tsx` already reads `post.image` correctly for all six content types as of this fix batch.
