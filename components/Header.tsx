"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu } from "lucide-react";
import { CATEGORIES } from "@/lib/navigation";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-ink-100 bg-white/95 backdrop-blur-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
        <Link href="/" className="flex items-center gap-2 text-xl font-heading font-bold text-teal-700">
          <Image
            src="/logo.png"
            alt="Sacred Sanskriti logo"
            width={40}
            height={40}
            priority
            className="rounded-full"
          />
          <span>Sacred Sanskriti</span>
        </Link>

        <nav className="hidden items-center gap-6 md:flex">
          <Link href="/" className="text-sm font-medium text-ink-900 transition-colors hover:text-teal-600">
            Home
          </Link>
          {CATEGORIES.map((category) => (
            <Link
              key={category.slug}
              href={`/${category.slug}`}
              className="text-sm font-medium text-ink-900 transition-colors hover:text-teal-600"
            >
              {category.label}
            </Link>
          ))}
        </nav>

        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            aria-label="Open menu"
            onClick={() => setIsOpen(true)}
          >
            <Menu className="size-5" />
          </Button>
          <SheetContent side="right" className="flex w-4/5 max-w-xs flex-col gap-1 p-6">
            <SheetHeader className="p-0">
              <SheetTitle>Menu</SheetTitle>
            </SheetHeader>
            <nav className="mt-4 flex flex-col gap-1">
              <Link
                href="/"
                onClick={() => setIsOpen(false)}
                className="border-b border-ink-100 py-3 text-base font-medium text-ink-900 hover:text-teal-600"
              >
                Home
              </Link>
              {CATEGORIES.map((category) => (
                <Link
                  key={category.slug}
                  href={`/${category.slug}`}
                  onClick={() => setIsOpen(false)}
                  className="border-b border-ink-100 py-3 text-base font-medium text-ink-900 hover:text-teal-600"
                >
                  {category.label}
                </Link>
              ))}
              <Link
                href="/faq"
                onClick={() => setIsOpen(false)}
                className="border-b border-ink-100 py-3 text-base font-medium text-ink-900 hover:text-teal-600"
              >
                FAQ
              </Link>
              <div className="mt-4 flex flex-col gap-2 border-t border-ink-100 pt-4">
                <Link href="/about" onClick={() => setIsOpen(false)} className="text-sm font-medium text-ink-500">
                  About Us
                </Link>
                <Link href="/contact" onClick={() => setIsOpen(false)} className="text-sm font-medium text-ink-500">
                  Contact Us
                </Link>
              </div>
              <div className="mt-2 flex flex-col gap-2 border-t border-ink-100 pt-4 text-xs text-ink-500">
                <Link href="/privacy" onClick={() => setIsOpen(false)}>Privacy Policy</Link>
                <Link href="/terms" onClick={() => setIsOpen(false)}>Terms of Service</Link>
              </div>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
