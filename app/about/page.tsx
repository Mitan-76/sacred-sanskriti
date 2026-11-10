import { Metadata } from "next";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "About Us | Sacred Sanskriti - Where Vedic Wisdom Meets Science",
  description:
    "Sacred Sanskriti explores Hindu traditions for the global diaspora — what the texts actually say, how that compares to popular belief, and what evidence does and doesn't support.",
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    title: "About Sacred Sanskriti - Bridging Faith and Science",
    description: "A digital platform exploring Hindu philosophy through primary texts, research, and honest evidence-checking.",
    url: "https://sacredsanskriti.com/about",
  },
};

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-8 sm:px-6">
      <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "About Us", href: "/about" }]} />

      <div className="prose-article">
        <h1>Decoding the Eternal: Where Vedic Wisdom Meets Modern Science</h1>

        <p>
          <strong>Sacred Sanskriti</strong> is a digital platform exploring the intersection of Hindu tradition,
          what the original texts actually say, and what modern evidence does and doesn&apos;t support. We write
          for the global Hindu diaspora — readers in the US, UK, Canada, Australia, the Gulf, India, and
          anywhere else — as well as anyone curious about Hindu philosophy and practice, whether or not they
          grew up with it.
        </p>

        <p>
          Our approach is a hybrid one: we start with the tradition itself — what people actually believe and
          practice, and why it matters to them — then check it against the primary texts, and bring in a
          logic or science check only where real evidence exists. We don&apos;t force a scientific explanation
          onto something that doesn&apos;t have one, and we don&apos;t present belief as settled fact. The full
          detail of how we research and check every article is on our{" "}
          <a href="/how-we-research">How We Research</a> page.
        </p>

        <h2>Our Core Pillars</h2>

        <p>Our content is organized into six areas:</p>

        <ol>
          <li>
            <strong>Mantras & Chants:</strong> The meaning, structure, and acoustic science of Vedic sounds.
          </li>
          <li>
            <strong>Rituals:</strong> The history and purpose behind Hindu ritual practice.
          </li>
          <li>
            <strong>Symbols:</strong> The meaning of Hindu sacred symbols — from Om to sacred geometry.
          </li>
          <li>
            <strong>Myth vs. Text:</strong> Checking popular folklore against the actual Shruti and Smriti
            scriptures (Vedas, Upanishads, Puranas).
          </li>
          <li>
            <strong>Practices & Science:</strong> What research does and doesn&apos;t show about the
            neurological and psychological effects of spiritual practices.
          </li>
          <li>
            <strong>Hinduism Q&amp;A:</strong> Direct answers to the questions people actually ask about Hindu
            tradition, mythology, and deities.
          </li>
        </ol>

        <h2>How We Work</h2>

        <p>
          Every article cites its sources directly, with a Sources list at the end linking to the primary
          texts, studies, and reference works it draws on. We&apos;d rather an article say "the evidence here is
          thin" than overstate a claim — see <a href="/how-we-research">How We Research</a> for exactly what
          that checking process looks like, and what we deliberately don&apos;t claim.
        </p>

        <blockquote>
          Whether you are a seeker, a student of history, or a curious mind from any corner of the globe, we
          invite you to rediscover Hinduism — not just as a religion, but as a sophisticated science of living.
        </blockquote>

        <h2>Follow Along</h2>
        <p>
          Our <a href="https://www.youtube.com/@SacredSanskriti4all" target="_blank" rel="noopener noreferrer">YouTube channel</a>{" "}
          covers the same ground as the articles here, in video form.
        </p>
      </div>
    </div>
  );
}
