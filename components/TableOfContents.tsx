import type { TocItem } from "@/lib/toc";

export default function TableOfContents({ items }: { items: TocItem[] }) {
  if (items.length === 0) return null;

  return (
    <nav aria-label="Table of contents" className="mt-8 rounded-lg border border-ink-100 bg-sage-50 p-5">
      <p className="text-xs font-medium uppercase tracking-wide text-ink-500">On This Page</p>
      <ol className="mt-3 flex flex-col gap-1.5 text-sm">
        {items.map((item) => (
          <li key={item.id}>
            <a href={`#${item.id}`} className="text-teal-600 hover:underline">
              {item.text}
            </a>
          </li>
        ))}
      </ol>
    </nav>
  );
}
