"use client";

import { useState } from "react";
import { Check, Link2 } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ShareButtonsProps {
  url: string;
  title: string;
}

export default function ShareButtons({ url, title }: ShareButtonsProps) {
  const [copied, setCopied] = useState(false);

  const encodedUrl = encodeURIComponent(url);
  const encodedTitle = encodeURIComponent(title);

  const links = [
    { label: "X", href: `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}` },
    { label: "Facebook", href: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}` },
    { label: "LinkedIn", href: `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}` },
  ];

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Clipboard API unavailable — no-op, buttons below still work.
    }
  };

  return (
    <div className="flex flex-wrap items-center gap-2 border-t border-ink-100 pt-6">
      <span className="text-sm font-medium text-ink-500">Share:</span>
      {links.map((link) => (
        <Button key={link.label} variant="outline" size="sm" render={
          <a href={link.href} target="_blank" rel="noopener noreferrer" />
        }>
          {link.label}
        </Button>
      ))}
      <Button variant="outline" size="sm" onClick={handleCopy}>
        {copied ? <Check className="size-3.5" /> : <Link2 className="size-3.5" />}
        {copied ? "Copied" : "Copy Link"}
      </Button>
    </div>
  );
}
