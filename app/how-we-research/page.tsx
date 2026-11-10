import { Metadata } from "next";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "How We Research | Sacred Sanskriti",
  description:
    "How Sacred Sanskriti researches, checks, and corrects its articles — what sources we use, what we don't claim, and how to report an error.",
  alternates: {
    canonical: "/how-we-research",
  },
};

export default function HowWeResearchPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-8 sm:px-6">
      <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "How We Research", href: "/how-we-research" }]} />

      <h1 className="font-heading text-3xl font-bold text-ink-700">How We Research</h1>
      <p className="mt-4 text-ink-500">
        Every article on Sacred Sanskriti is written by the Sacred Sanskriti Editorial team — never under an
        invented name or a borrowed credential. Here is honestly how that process works.
      </p>

      <div className="prose-article mt-8">
        <h2>We Use AI Tools to Research and Write</h2>
        <p>
          Articles are researched and drafted with the help of AI tools. We say this plainly because we'd rather
          you know how the work gets done than have you assume a claim about human expertise we can't back up.
          AI assistance speeds up research and drafting; it does not replace the checking described below.
        </p>

        <h2>What We Check Before Publishing</h2>
        <p>Every article is checked against its own claims before it goes live:</p>
        <ul>
          <li>Verse and chapter references are checked against the actual source text, not assumed from memory.</li>
          <li>Every study link is opened and confirmed to say what the article says it says.</li>
          <li>A claim with no verifiable source is either removed, or clearly marked as tradition or belief rather than fact.</li>
        </ul>
        <p>
          This checking is ongoing, not one-time — if we find an error in an older article, we fix it and update
          the article's "Updated" date, rather than leaving it as published and wrong.
        </p>

        <h2>What Sources We Use</h2>
        <ul>
          <li><strong>Primary texts</strong> — the Vedas, Upanishads, Puranas, and epics, with the specific translation named where it affects the meaning.</li>
          <li><strong>Academic papers</strong> — PubMed, peer-reviewed journals, and university research, for any claim about physiological or psychological effects.</li>
          <li><strong>Reputable reference works</strong> — Wikipedia, Britannica, government and official institutional sources, for historical, geographic, and biographical claims.</li>
        </ul>
        <p>Every source we cite is linked directly in the article, and listed again in that article's Sources section.</p>

        <h2>What We Don't Do</h2>
        <ul>
          <li>We don't present a traditional belief as a settled scientific fact. Where research exists, we say what it actually found and how strong the evidence is — including when it's weak, mixed, or doesn't exist yet.</li>
          <li>We don't give medical advice. Articles that touch on health effects (breathing practices, sound, ritual, etc.) carry a disclaimer, and none of it should replace a qualified professional.</li>
        </ul>

        <h2>Corrections &amp; Updates</h2>
        <p>
          We make corrections openly. When an error is fixed, the article's visible "Updated" date changes to
          reflect it — we don't quietly edit something and leave the old date standing.
        </p>
        <p>
          If you've found something that looks wrong — a mistranslated verse, a study we've misread, a broken
          link — we want to know.{" "}
          <a href="mailto:contactus@sacredsanskriti.com">Email us at contactus@sacredsanskriti.com</a> with the
          article and what you've found, and we'll check it.
        </p>
      </div>
    </div>
  );
}
