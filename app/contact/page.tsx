import type { Metadata } from "next";
import Breadcrumb from "@/components/Breadcrumb";
import { AspectRatio } from "@/components/ui/aspect-ratio";

export const metadata: Metadata = {
  title: "Contact Us | Sacred Sanskriti",
  description:
    "Get in touch with the Sacred Sanskriti team. Share your questions, feedback, or research about Hindu traditions, Vedic science, and spiritual phenomena.",
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    title: "Contact Us | Sacred Sanskriti",
    description: "Get in touch with the Sacred Sanskriti team. Share your questions, feedback, or research about Hindu traditions.",
    url: "https://sacredsanskriti.com/contact",
    siteName: "Sacred Sanskriti",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Us | Sacred Sanskriti",
    description: "Get in touch with the Sacred Sanskriti team. Share your questions, feedback, or research about Hindu traditions.",
  },
};

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-2xl px-4 py-8 sm:px-6">
      <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Contact Us", href: "/contact" }]} />

      <h1 className="font-heading text-3xl font-bold text-ink-700">Contact Us</h1>
      <p className="mt-4 text-ink-900">
        We&apos;d love to hear from you. Whether you have questions, feedback, or research to share, please reach out.
      </p>

      <div className="mt-6 rounded-lg border border-ink-100 bg-sage-50 p-6">
        <p>
          <strong>Email:</strong> contactus@sacredsanskriti.com
        </p>
        <p className="mt-2">
          <strong>Address:</strong> Hyderabad, India
        </p>
      </div>

      <div className="mt-8 overflow-hidden rounded-lg">
        <AspectRatio ratio={16 / 9}>
          <iframe
            src="https://www.google.com/maps?q=Hyderabad&output=embed"
            className="h-full w-full border-0"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </AspectRatio>
      </div>
    </div>
  );
}
