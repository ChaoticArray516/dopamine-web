import Link from "next/link";
import { JsonLd } from "./JsonLd";

export type BreadcrumbItem = {
  name: string;
  url: string;
};

type BreadcrumbProps = {
  items: BreadcrumbItem[];
};

export function Breadcrumb({ items }: BreadcrumbProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };

  return (
    <>
      <nav aria-label="breadcrumb" className="py-4">
        <ol className="flex flex-wrap items-center gap-2 text-sm text-zinc-700 dark:text-zinc-400">
          {items.map((item, index) => (
            <li key={item.url} className="flex items-center gap-2">
              {index > 0 && (
                <span aria-hidden="true" className="text-zinc-400">
                  /
                </span>
              )}
              {index === items.length - 1 ? (
                <span aria-current="page">{item.name}</span>
              ) : (
                <Link
                  href={item.url}
                  className="hover:text-zinc-900 dark:hover:text-zinc-100"
                >
                  {item.name}
                </Link>
              )}
            </li>
          ))}
        </ol>
      </nav>
      <JsonLd data={schema} />
    </>
  );
}
