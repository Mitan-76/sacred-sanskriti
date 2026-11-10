import { PlayCircle } from "lucide-react";

export default function YouTubeCTA() {
  return (
    <a
      href="https://www.youtube.com/@SacredSanskriti4all"
      target="_blank"
      rel="noopener noreferrer"
      className="mt-4 flex items-center gap-3 rounded-lg border border-ink-100 p-4 text-sm transition-colors hover:border-teal-500"
    >
      <PlayCircle className="size-6 shrink-0 text-teal-600" />
      <span>
        <span className="font-medium text-ink-700">Watch our videos on YouTube</span>
        <span className="block text-ink-500">Videos are in Hindi/Hinglish — the articles here are in English.</span>
      </span>
    </a>
  );
}
