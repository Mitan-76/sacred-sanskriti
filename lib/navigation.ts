export interface CategoryInfo {
  slug: string;
  label: string;
}

export const CATEGORIES: CategoryInfo[] = [
  { slug: "hinduism-qa", label: "Hinduism Q & A" },
  { slug: "myth-vs-text", label: "Myth vs Text" },
  { slug: "practices", label: "Practices" },
  { slug: "mantras-chants", label: "Mantras & Chants" },
  { slug: "rituals", label: "Rituals" },
  { slug: "symbols", label: "Symbols" },
];

export const NAV_LINKS = [
  { label: "Home", href: "/" },
  ...CATEGORIES.map((c) => ({ label: c.label, href: `/${c.slug}` })),
];

export const FOOTER_LINKS = [
  { label: "About", href: "/about" },
  { label: "How We Research", href: "/how-we-research" },
  { label: "Contact", href: "/contact" },
  { label: "FAQ", href: "/faq" },
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Terms of Service", href: "/terms" },
];

export function getCategoryLabel(slug: string): string {
  return CATEGORIES.find((c) => c.slug === slug)?.label ?? slug;
}
