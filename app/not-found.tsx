import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="mx-auto max-w-xl px-4 py-24 text-center sm:px-6">
      <h1 className="font-heading text-3xl font-bold text-ink-700">Page Not Found</h1>
      <p className="mt-4 text-ink-500">
        The page you&apos;re looking for doesn&apos;t exist or may have been moved.
      </p>
      <Button className="mt-6" render={<Link href="/" />}>
        Return to the homepage
      </Button>
    </div>
  );
}
