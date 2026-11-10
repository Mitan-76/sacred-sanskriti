import Link from "next/link";
import { PlayCircle, Mail } from "lucide-react";
import { CATEGORIES, FOOTER_LINKS } from "@/lib/navigation";

export default function Footer() {
  return (
    <footer className="mt-16 bg-ink-900 text-white">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-4 py-12 sm:px-6 md:grid-cols-3">
        <div>
          <h3 className="font-heading text-lg font-semibold text-teal-400">Sacred Sanskriti</h3>
          <p className="mt-3 text-sm text-ink-300">
            Bridging the gap between spiritual tradition and empirical science.
          </p>
          <div className="mt-4 flex gap-3">
            <a
              href="https://www.youtube.com/@SacredSanskriti4all"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Sacred Sanskriti on YouTube"
              className="text-ink-300 transition-colors hover:text-teal-400"
            >
              <PlayCircle className="size-5" />
            </a>
            <a
              href="mailto:contactus@sacredsanskriti.com"
              aria-label="Email Sacred Sanskriti"
              className="text-ink-300 transition-colors hover:text-teal-400"
            >
              <Mail className="size-5" />
            </a>
          </div>
        </div>

        <div>
          <h4 className="font-heading text-sm font-semibold uppercase tracking-wide text-ink-300">
            Topics
          </h4>
          <ul className="mt-3 flex flex-col gap-2 text-sm">
            {CATEGORIES.map((category) => (
              <li key={category.slug}>
                <Link href={`/${category.slug}`} className="text-ink-300 hover:text-teal-400">
                  {category.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-heading text-sm font-semibold uppercase tracking-wide text-ink-300">
            Company
          </h4>
          <ul className="mt-3 flex flex-col gap-2 text-sm">
            {FOOTER_LINKS.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="text-ink-300 hover:text-teal-400">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10 py-6 text-center text-sm text-ink-300">
        &copy; {new Date().getFullYear()} Sacred Sanskriti. All rights reserved.
      </div>
    </footer>
  );
}
