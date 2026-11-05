export interface FAQItem {
  question: string;
  answer: string;
}

function stripMarkdown(text: string): string {
  return text
    .replace(/<a\s+[^>]*>(.*?)<\/a>/gi, "$1")
    .replace(/\[([^\]]+)\]\([^)]+\)/g, "$1")
    .replace(/\*\*(.*?)\*\*/g, "$1")
    .replace(/\*(.*?)\*/g, "$1")
    .replace(/\s{2,}/g, " ")
    .trim();
}

function isClosingCrossLinkLine(line: string): boolean {
  return /^\*.*\[.*\]\(.*\).*\*$/.test(line);
}

function isHorizontalRule(line: string): boolean {
  return /^-{3,}$/.test(line);
}

export function extractFAQs(markdownContent: string): FAQItem[] {
  const lines = markdownContent.split("\n");
  const faqHeadingIndex = lines.findIndex((line) =>
    /^##\s+Frequently Asked Questions/i.test(line.trim())
  );

  if (faqHeadingIndex === -1) {
    return [];
  }

  const faqs: FAQItem[] = [];
  let currentQuestion: string | null = null;
  let answerLines: string[] = [];

  const flush = () => {
    if (currentQuestion !== null) {
      const answer = stripMarkdown(answerLines.join(" "));
      if (answer.length > 0) {
        faqs.push({ question: stripMarkdown(currentQuestion), answer });
      }
    }
    currentQuestion = null;
    answerLines = [];
  };

  for (let i = faqHeadingIndex + 1; i < lines.length; i++) {
    const raw = lines[i];
    const trimmed = raw.trim();

    if (/^###\s+/.test(trimmed)) {
      flush();
      currentQuestion = trimmed.replace(/^###\s+/, "");
      continue;
    }

    if (/^##\s+/.test(trimmed)) {
      // Next top-level section — stop collecting, flush whatever is pending.
      break;
    }

    if (trimmed.length === 0) {
      continue;
    }

    if (isClosingCrossLinkLine(trimmed)) {
      // The article's closing italic cross-link line is not part of any
      // FAQ answer — exclude it instead of letting it bleed into the last one.
      continue;
    }

    if (isHorizontalRule(trimmed)) {
      // A `---` divider between sections is not FAQ answer content.
      continue;
    }

    if (currentQuestion !== null) {
      answerLines.push(trimmed);
    }
  }

  flush();

  return faqs;
}
