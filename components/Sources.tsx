import type { SourceItem } from "@/lib/sources";

export default function Sources({ sources }: { sources: SourceItem[] }) {
  if (sources.length === 0) return null;

  return (
    <section className="mt-10 border-t border-ink-100 pt-8">
      <h2 className="font-heading text-2xl font-semibold text-ink-700">Sources</h2>
      <ol className="mt-4 list-decimal space-y-2 pl-5 text-sm text-ink-500">
        {sources.map((source, index) => (
          <li key={index}>
            <a
              href={source.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-teal-600 hover:underline"
            >
              {source.title}
            </a>
          </li>
        ))}
      </ol>
    </section>
  );
}
