# CTR Optimization Change Log

Tracks every title/description/H1/content change made under `ctr-plan.md`. The
owner compares each page in Search Console 28 days after its date against the
28 days before.

---

## 2026-11-10: Tier 1 — skipped items

`/practices/OM_Chanting_and_the_Brain` and `/practices/How_to_Reduce_Office_Stress`
(ctr-plan.md §2.1 and §2.4) were **not actioned**. Both articles were already
deleted earlier in the project (confirmed dead embedded YouTube videos, removed
with owner sign-off — see `docs/phase0-report.md` §7) and already 301-redirect
to `/practices`. Owner confirmed (2026-11-10) that no further action is needed
while the pages don't exist. Resurrecting them as new articles with working
sources would be a separate, new-article decision.

**Update 2026-11-11:** the owner supplied both articles and made their videos
public again, so both were restored — see the two 2026-11-11 entries below.

---

## 2026-11-11: OM Chanting and the Brain (restored)

- URL: /practices/OM_Chanting_and_the_Brain -> /practices/om-chanting-and-the-brain (permanent redirect; previously pointed to /practices while the article was deleted)
- Title: "OM Chanting and the Brain — What Modern Research Says About This Ancient Sound" -> "OM Chanting and the Brain: What the Studies Actually Show"
- Description: "Can chanting OM reduce stress, calm the mind, and improve your health? Explore what modern neuroscience and research say about OM chanting and its effects on the brain and body." -> "Key studies on OM chanting in one table: the fMRI pilot, the heart rate variability study, sample sizes, limitations and PubMed links."
- H1: matches title
- Content: short answer under the H1; study table (2 studies, all fields verified from NCBI abstracts); new sections on each study; "Does OM Chanting Stimulate the Vagus Nerve?"; "Limitations of the Research"; medical disclaimer (automatic, `healthContent: true`); video restored (NzWlC_x4yJ4, confirmed embeddable).
- Deliberate deviation from ctr-plan.md: the planned description said "vagus nerve and heart rate findings", but neither study measured the vagus nerve (it is the fMRI authors' proposed mechanism), so the description says "the heart rate variability study" instead, per the plan's own truth rule.
- Removed/softened claims: blood-pressure "listening to OM" study (no citation found) removed; vagal tone -> better digestion/sleep/emotional regulation removed; "not merely psychological" removed; cortisol section removed; "what researchers describe as a full-body calming loop" (unattributed) reworded as practitioner experience; "most people notice something shift within the first week" removed; fMRI result corrected from "resembled responses seen in some relaxation therapies" to what the paper says (similar to vagus nerve stimulation treatment).
- TODO-SOURCE left: none.
- Baseline: 2,195 impressions, position 10.8, CTR 0.05% (GSC, 1 Aug 2025 to 8 Nov 2026; measured on the old URL before deletion).

---

## 2026-11-11: Hindu Practices for Office Stress (restored)

- URL: /practices/How_to_Reduce_Office_Stress -> /practices/how-to-reduce-office-stress (permanent redirect; previously pointed to /practices)
- Title: "How to Reduce Office Stress? Ancient Hindu Practices + Modern Science Explained" -> "Hindu Practices for Office Stress: What Science Says"
- Description: "Learn how to reduce office stress naturally using ancient Hindu practices like Pranayama, Om chanting, meditation, and yoga supported by modern science." -> "Simple breathing, OM chanting and meditation practices you can do at work, with what the research actually shows for each one."
- H1: matches title
- Content: short answer under the H1 listing the five practices; a "What the evidence shows" line under each practice with a named PubMed source or a plain "limited evidence" note; medical disclaimer (automatic); video restored (oED3yK1shuo, confirmed embeddable).
- Removed/softened claims: meditation "improves attention span" removed (the cited 2014 meta-analysis found insufficient evidence for attention); "even 3 to 5 minutes makes a measurable difference for most people" removed; OM chanting "stimulates the vagus nerve" softened; chronic-stress list (blood pressure, immunity) narrowed to general associations; yoga "strong research support" changed to limited for desk routines, with a pointer to the studied Surya Namaskar article; "most people notice something shift within the first few days" removed; "2-4 weeks" result timing replaced with the 8-week program length the meditation trials actually used.
- TODO-SOURCE left: none.
- Baseline: 59 impressions, position 10.2, CTR 1.69% (GSC, 1 Aug 2025 to 8 Nov 2026; old URL).

---

## 2026-11-10: Who Was Karna? (hinduism-qa/karna-the-forgotten-hero)

- URL: `/hinduism-qa/karna-the-forgotten-hero` (unchanged)
- Title: "Karna: The Forgotten Hero of the Mahabharata" -> "Who Was Karna? Birth, Curses and Death in the Mahabharata"
- Description: "Explore the tragic life of Karna — his divine lineage, loyalty to Duryodhana, the curses that sealed his fate, and why he is called Danveer Karna." -> "Karna explained simply: his secret birth to Kunti, the curse that made him forget his knowledge, his loyalty to Duryodhana, and how he died."
- H1: matches title (template renders `post.title` as H1)
- Content: rewrote opening into a direct short answer; added a new H2 "Why Did Karna Forget His Knowledge in Battle?" (previously only covered inside "Why Was Karna Cursed Multiple Times?"); added two verified parva references — birth story to Adi Parva (Book 1, verse 1.104.7) and his death to Book 8 (Karna Parva); trimmed the "Why Was Karna Cursed Multiple Times?" section to avoid duplicating the new section.
- Removed/softened claims: none — no unsourced health claims on this page.
- TODO-SOURCE left: none. A parva/chapter citation for the Parashurama-curse episode specifically could not be confirmed via Wikipedia's Karna or Karna Parva pages (verified via live fetch, 2026-11-10) — rather than leave an unresolved TODO-SOURCE marker or invent a reference, that one sub-claim was left without a specific citation (the event itself was already in the article pre-edit, uncited).
- Baseline: 134 impressions, position 14.6, CTR 0% (GSC, 1 Aug 2025 to 8 Nov 2026).

---

## 2026-11-10: Why Do We Ring Bells in Temples? (practices/why-do-we-ring-bells-in-temples)

- URL: `/practices/why-do-we-ring-bells-in-temples` (unchanged; old URL `/practices/Why-Do-We-Ring-Bells-in-Temples-practices` already 301-redirects here)
- Title: "Why Do We Ring Bells in Temples?" -> "Why Do We Ring Bells in Temples? Tradition and Science"
- Description: "Why do we ring temple bells? Discover the scientific and spiritual reasoning behind the ritual, including brain activation and vagus nerve stimulation." -> "Why Hindus ring the temple bell before darshan — what scriptures and tradition say, and what science does and does not support."
- H1: matches title
- Content: replaced the rhetorical opening ("Have you ever noticed...") with a direct short answer (what tradition says the bell does, then what science does/doesn't confirm). The body's science section was already well-hedged (named PMC studies, explicit "not yet directly studied" language) from earlier phases, so no further softening was needed there. Medical disclaimer already renders automatically (`healthContent: true`).
- Removed/softened claims: the old description's "including brain activation and vagus nerve stimulation" (stated as settled fact) was replaced with "what science does and does not support" — the body itself was already appropriately hedged.
- TODO-SOURCE left: none.
- Baseline: 127 impressions, position 14.4, CTR 0% (GSC, 1 Aug 2025 to 8 Nov 2026).

---

## 2026-11-10: Homepage (/)

- URL: `/` (unchanged)
- Title: "Sacred Sanskriti | Where Science Meets the Sacred" -> "Sacred Sanskriti: Hindu Traditions, Texts and the Science"
- Description: "An evidence-based exploration of Hindu traditions — the neuroscience of mantras, psychology of rituals, and clear answers about Hinduism." -> "Hindu traditions, mantras and myths explained in plain English: what the original texts say, and what science can and cannot confirm."
- H1 (Hero, unchanged per plan): "Where Science Meets the Sacred"
- Content: added one sentence to the hero subtitle naming the audience (Hindu diaspora and curious readers worldwide) and what they get. The "Advertisement Space" placeholder was already removed in an earlier phase — nothing to do there.
- Removed/softened claims: none.
- TODO-SOURCE left: none.
- Baseline: 24 impressions, position 10.1, CTR 4.17% (GSC, 1 Aug 2025 to 8 Nov 2026).

---

## Also this round: `npm run check:content` extended

Added two new warning checks (ctr-plan.md §6.12): title over 60 characters,
and description under 120 characters (descriptions over 160 already failed
the build). No existing article fails on these — they surface as warnings
only. Current warnings from this new rule: `12-jyotirlinga-complete-guide`
(64-char title), `sri-venkateswara-swamy-temple-tirupati-balaji-guide`
(74-char title), `kali-yuga-everything-you-need-to-know` (64-char title), and
three descriptions a few characters under 120 (`interesting-facts-about-hanuman`,
`mahabharat-facts-you-should-know`, `33-koti-devta`). None are part of this
Tier 1 round; left for a future pass.
