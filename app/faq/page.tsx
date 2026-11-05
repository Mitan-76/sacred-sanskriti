import { Metadata } from "next";
import Breadcrumb from "@/components/Breadcrumb";
import FaqContent from "./FaqContent";

export const metadata: Metadata = {
  title: "Frequently Asked Questions | Sacred Sanskriti",
  description:
    "Find answers about Sacred Sanskriti's approach to exploring Hindu traditions through science, logic, and evidence-based research.",
  alternates: {
    canonical: "/faq",
  },
};

export default function FAQPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-8 sm:px-6">
      <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "FAQ", href: "/faq" }]} />
      <h1 className="font-heading text-3xl font-bold text-ink-700">Frequently Asked Questions</h1>
      <FaqContent />
    </div>
  );
}
