import { Fragment } from "react";
import JsonLd from "@/components/JsonLd";
import {
  Breadcrumb as BreadcrumbRoot,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

interface BreadcrumbItemData {
  label: string;
  href: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItemData[];
}

export default function Breadcrumb({ items }: BreadcrumbProps) {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.label,
      item: `https://sacredsanskriti.com${item.href}`,
    })),
  };

  return (
    <>
      <JsonLd data={breadcrumbSchema} />
      <BreadcrumbRoot className="py-4">
        <BreadcrumbList>
          {items.map((item, index) => (
            <Fragment key={item.href}>
              {index > 0 && <BreadcrumbSeparator />}
              <BreadcrumbItem>
                {index === items.length - 1 ? (
                  <BreadcrumbPage className="text-ink-700 font-medium">{item.label}</BreadcrumbPage>
                ) : (
                  <BreadcrumbLink render={<a href={item.href} />} className="text-teal-600">
                    {item.label}
                  </BreadcrumbLink>
                )}
              </BreadcrumbItem>
            </Fragment>
          ))}
        </BreadcrumbList>
      </BreadcrumbRoot>
    </>
  );
}
