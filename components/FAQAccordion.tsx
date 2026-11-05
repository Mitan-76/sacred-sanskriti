"use client";

import type { FAQItem } from "@/lib/faq";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";

export default function FAQAccordion({ faqs }: { faqs: FAQItem[] }) {
  if (faqs.length === 0) return null;

  return (
    <Accordion>
      {faqs.map((faq, index) => (
        <AccordionItem key={index} value={index} className="border-ink-100">
          <AccordionTrigger className="font-heading text-base text-ink-700">
            {faq.question}
          </AccordionTrigger>
          <AccordionContent className="text-ink-500">{faq.answer}</AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
