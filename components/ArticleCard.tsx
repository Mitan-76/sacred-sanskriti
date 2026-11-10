import Link from "next/link";
import Image from "next/image";
import type { Post } from "@/lib/content";
import { getCategoryLabel } from "@/lib/navigation";
import { Card, CardContent } from "@/components/ui/card";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Badge } from "@/components/ui/badge";

function formatDate(date: string): string {
  return new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default function ArticleCard({ post }: { post: Post }) {
  return (
    <Link href={`/${post.category}/${post.slug}`} className="group block">
      <Card className="h-full overflow-hidden py-0 transition-shadow hover:shadow-md">
        <AspectRatio ratio={1200 / 630} className="bg-sage-100">
          <Image
            src={post.image}
            alt={post.title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </AspectRatio>
        <CardContent className="flex flex-col gap-2 p-5">
          <Badge variant="secondary" className="self-start bg-sage-100 text-teal-800">
            {getCategoryLabel(post.category)}
          </Badge>
          <h3 className="font-heading text-lg font-semibold leading-snug text-ink-700 group-hover:text-teal-700">
            {post.title}
          </h3>
          <p className="line-clamp-2 text-sm text-ink-500">{post.description}</p>
          <p className="mt-1 text-xs text-ink-500">{formatDate(post.publishedAt)}</p>
        </CardContent>
      </Card>
    </Link>
  );
}
