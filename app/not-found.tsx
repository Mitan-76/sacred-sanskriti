import Link from "next/link";
import { Button } from "@/components/ui/button";
import { CATEGORIES } from "@/lib/navigation";

const POPULAR_ARTICLES = [
  { label: "Karna: The Forgotten Hero", href: "/hinduism-qa/karna-the-forgotten-hero" },
  { label: "Why Do We Ring Bells in Temples?", href: "/practices/why-do-we-ring-bells-in-temples" },
  { label: "33 Koti Devta", href: "/myth-vs-text/33-koti-devta" },
  { label: "Interesting Facts About Hanuman", href: "/hinduism-qa/interesting-facts-about-hanuman" },
  { label: "The Real Meaning of the Gayatri Mantra", href: "/mantras-chants/real-meaning-gayatri-mantra" },
];

export default function NotFound() {
  return (
    <div className="mx-auto max-w-2xl px-4 py-24 text-center sm:px-6">
      <h1 className="font-heading text-3xl font-bold text-ink-700">Page Not Found</h1>
      <p className="mt-4 text-ink-500">
        The page you&apos;re looking for doesn&apos;t exist or may have been moved.
      </p>
      <Button className="mt-6" render={<Link href="/" />}>
        Return to the homepage
      </Button>

      <div className="mt-14 text-left">
        <h2 className="font-heading text-lg font-semibold text-ink-700">Browse by Topic</h2>
        <div className="mt-3 flex flex-wrap gap-2">
          {CATEGORIES.map((category) => (
            <Link
              key={category.slug}
              href={`/${category.slug}`}
              className="rounded-full border border-ink-100 px-4 py-1.5 text-sm text-ink-700 hover:border-teal-500 hover:text-teal-600"
            >
              {category.label}
            </Link>
          ))}
        </div>
      </div>

      <div className="mt-10 text-left">
        <h2 className="font-heading text-lg font-semibold text-ink-700">Popular Articles</h2>
        <ul className="mt-3 flex flex-col gap-2">
          {POPULAR_ARTICLES.map((article) => (
            <li key={article.href}>
              <Link href={article.href} className="text-teal-600 hover:underline">
                {article.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
