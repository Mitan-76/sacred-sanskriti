import Link from "next/link";
import type { LucideIcon } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

interface CategoryCardProps {
  slug: string;
  title: string;
  description: string;
  icon: LucideIcon;
}

export default function CategoryCard({ slug, title, description, icon: Icon }: CategoryCardProps) {
  return (
    <Link href={`/${slug}`} className="group block">
      <Card className="h-full transition-shadow hover:shadow-md">
        <CardContent className="flex flex-col gap-3">
          <div className="flex size-11 items-center justify-center rounded-full bg-sage-100 text-teal-700">
            <Icon className="size-5" />
          </div>
          <h3 className="font-heading text-lg font-semibold text-ink-700 group-hover:text-teal-700">
            {title}
          </h3>
          <p className="text-sm text-ink-500">{description}</p>
        </CardContent>
      </Card>
    </Link>
  );
}
