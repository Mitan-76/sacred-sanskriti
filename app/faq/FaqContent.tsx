import JsonLd from "@/components/JsonLd";
import FAQAccordion from "@/components/FAQAccordion";
import { Button } from "@/components/ui/button";

const faqs = [
  {
    question: "What is this website about?",
    answer:
      "This website supports our YouTube channel by providing detailed articles, explanations, and references related to Hindu philosophy, rituals, traditions, and ancient knowledge systems explained through science and logic.",
  },
  {
    question: "What is the YouTube channel about?",
    answer:
      "The YouTube channel explains Hindu rituals, scriptures, symbols, and traditions using scientific reasoning, historical context, psychology, and logical analysis.",
  },
  {
    question: "Is this channel about religion or blind faith?",
    answer: "No. The channel does not promote blind faith or religious preaching. It focuses on rational thinking and evidence-based explanations.",
  },
  {
    question: "Does the channel promote superstition?",
    answer: "No. The channel challenges superstition and misinformation using logic, research, and historical evidence.",
  },
  {
    question: "Are Hindu scriptures treated as scientific facts?",
    answer: "No. Scriptures are treated as philosophical and historical texts, analyzed symbolically and contextually.",
  },
  {
    question: "What topics are covered on this channel?",
    answer: "Science behind rituals, mantras, myths vs facts, temple symbolism, psychology of practices, and history of traditions.",
  },
  {
    question: "Who should watch this channel?",
    answer: "Anyone curious about Hindu philosophy, Indian culture, science, and logical thinking.",
  },
  {
    question: "Is the content beginner-friendly?",
    answer: "Yes. Content is explained step by step in simple language.",
  },
  {
    question: "Do you provide sources and references?",
    answer: "Yes. References include ancient texts, academic research, and modern studies.",
  },
  {
    question: "Why should I trust this platform?",
    answer: "Because it encourages questioning, avoids sensationalism, and balances tradition with logic.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: { "@type": "Answer", text: faq.answer },
  })),
};

export default function FaqContent() {
  return (
    <>
      <JsonLd data={faqSchema} />

      <p className="mt-4 text-ink-500">
        Find answers to common questions about Sacred Sanskriti, our approach to exploring Hindu traditions
        through science and logic, and what makes our platform unique.
      </p>

      <div className="mt-6 rounded-md border-l-4 border-teal-500 bg-sage-50 p-5">
        <p className="m-0 text-sm leading-relaxed">
          <strong>Quick Note:</strong> We encourage questioning and critical thinking. If you don&apos;t find
          your answer here, feel free to <a href="/contact" className="text-teal-600 underline">contact us</a>.
        </p>
      </div>

      <div className="mt-8">
        <FAQAccordion faqs={faqs} />
      </div>

      <div className="mt-10 rounded-xl border border-ink-100 bg-sage-50 p-8 text-center">
        <h3 className="font-heading text-xl font-semibold text-ink-700">Still Have Questions?</h3>
        <p className="mt-3 text-ink-500">
          We&apos;re here to help! Our team is committed to providing clear, evidence-based answers to your
          questions about Hindu traditions, philosophy, and practices.
        </p>
        <Button className="mt-5" render={<a href="/contact" />}>
          Contact Us
        </Button>
      </div>

      <div className="mt-6 rounded-md bg-gold-50 p-4 text-sm text-ink-700">
        <p className="m-0">
          <strong>Tip:</strong> Bookmark this page for quick reference. We regularly update our FAQs based on
          the most common questions from our community.
        </p>
      </div>
    </>
  );
}
