import { Metadata } from "next";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "About Us | Sacred Sanskriti - Where Vedic Wisdom Meets Science",
  description:
    "Learn about Sacred Sanskriti's mission to explore Hindu traditions through scientific reasoning, historical accuracy, and evidence-based research. Discover our E-E-A-T approach and core pillars.",
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    title: "About Sacred Sanskriti - Bridging Faith and Science",
    description: "A premier platform exploring Hindu philosophy through peer-reviewed research and logical analysis.",
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
          Welcome to <strong>Sacred Sanskriti</strong>, a premier digital platform dedicated to exploring the
          profound intersection of Hindu traditions, scientific logic, and historical accuracy.
        </p>

        <p>
          In an era of information overload, the true essence of Sanatana Dharma is often lost between blind
          faith and modern skepticism. Our mission is to bridge this gap by providing research-backed insights
          into the Hindu way of life. We don&apos;t just tell you what a tradition is; we explore the <em>why</em>,
          the <em>how</em>, and the scientific evidence behind it.
        </p>

        <h2>Our Core Pillars</h2>

        <p>Our content is meticulously categorized into five major dimensions:</p>

        <ol>
          <li>
            <strong>Mantras & Chants:</strong> An analysis of linguistic phonetics, rhythmic patterns, and the
            vibrational impact of Vedic sounds.
          </li>
          <li>
            <strong>Rituals:</strong> A historical deep dive into the evolution of Hindu orthopraxy and the
            logical frameworks behind them.
          </li>
          <li>
            <strong>Symbols:</strong> Decoding the complex semiotics of Hinduism—from the Sacred Aum to the
            geometry of Yantras.
          </li>
          <li>
            <strong>Myths vs. Original Texts:</strong> Fact-checking popular folklore against the authentic
            Shruti and Smriti scriptures (Vedas, Upanishads, Puranas).
          </li>
          <li>
            <strong>Science & Psychology:</strong> Understanding the neurological, psychological, and
            environmental impact of religious practices through the lens of modern research.
          </li>
        </ol>

        <h2>Our Research Methodology</h2>

        <p>We pride ourselves on authenticity. Every article and video on this platform is rooted in:</p>

        <ul>
          <li>Peer-reviewed scholarly papers.</li>
          <li>Reliable government archives and archaeological reports.</li>
          <li>Verified translations of ancient texts by recognized scholars.</li>
        </ul>

        <h2>Multi-Platform Learning</h2>

        <p>
          To provide a holistic experience, we integrate our deep-dive blog posts with visual storytelling. We
          believe in transparency; hence, all our work includes comprehensive citations and credits to original
          researchers.
        </p>

        <blockquote>
          Whether you are a seeker, a student of history, or a curious mind from any corner of the globe, we
          invite you to rediscover Hinduism—not just as a religion, but as a sophisticated science of living.
        </blockquote>

        <h2>Our Commitment to E-E-A-T</h2>

        <p>
          Sacred Sanskriti is built on the principles of{" "}
          <strong>Experience, Expertise, Authoritativeness, and Trustworthiness</strong>:
        </p>

        <ul>
          <li>
            <strong>Experience:</strong> Deep engagement with both traditional practices and modern scientific
            research.
          </li>
          <li>
            <strong>Expertise:</strong> Content created and reviewed by scholars, researchers, and
            practitioners.
          </li>
          <li>
            <strong>Authoritativeness:</strong> All claims backed by credible sources and academic references.
          </li>
          <li>
            <strong>Trustworthiness:</strong> Transparent methodology, cited sources, and fact-based analysis.
          </li>
        </ul>
      </div>
    </div>
  );
}
