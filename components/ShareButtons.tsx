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
  const [instagramCopied, setInstagramCopied] = useState(false);

  const encodedUrl = encodeURIComponent(url);
  const encodedTitle = encodeURIComponent(title);

  const links = [
    { label: "X", href: `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}` },
    { label: "Facebook", href: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}` },
    { label: "Threads", href: `https://www.threads.net/intent/post?text=${encodedTitle}%20${encodedUrl}` },
  ];

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(url);
      return true;
    } catch {
      return false;
    }
  };

  const handleCopy = async () => {
    if (await copyToClipboard()) {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  // Instagram has no public web share-intent for an arbitrary external URL
  // (unlike X/Facebook/Threads). The standard workaround: copy the link, then
  // open Instagram so the visitor can paste it into a DM, bio, or story.
  const handleInstagram = async () => {
    const ok = await copyToClipboard();
    if (ok) {
      setInstagramCopied(true);
      setTimeout(() => setInstagramCopied(false), 2500);
    }
    window.open("https://www.instagram.com/", "_blank", "noopener,noreferrer");
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
      <Button variant="outline" size="sm" onClick={handleInstagram}>
        {instagramCopied ? "Link Copied" : "Instagram"}
      </Button>
      <Button variant="outline" size="sm" onClick={handleCopy}>
        {copied ? <Check className="size-3.5" /> : <Link2 className="size-3.5" />}
        {copied ? "Copied" : "Copy Link"}
      </Button>
    </div>
  );
}
