"use client";

import Link from "next/link";
import { SITE_CATEGORIES } from "@/lib/site-config";

type SiteFilterProps = {
  activeCategory?: string;
};

export function SiteFilter({ activeCategory = "all" }: SiteFilterProps) {
  const categories = [
    { slug: "all", label: "All" },
    ...SITE_CATEGORIES.map((slug) => ({
      slug,
      label: slug.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase()),
    })),
  ];

  return (
    <div className="flex flex-wrap gap-2" role="group" aria-label="Filter sites by category">
      {categories.map((category) => {
        const isActive = activeCategory === category.slug;
        const href = category.slug === "all" ? "/sites" : `/sites/${category.slug}`;
        return (
          <Link
            key={category.slug}
            href={href}
            className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
              isActive
                ? "bg-zinc-900 text-white dark:bg-white dark:text-zinc-900"
                : "border border-zinc-300 text-zinc-700 hover:bg-zinc-50 dark:border-zinc-700 dark:text-zinc-300 dark:hover:bg-zinc-900"
            }`}
            aria-current={isActive ? "page" : undefined}
          >
            {category.label}
          </Link>
        );
      })}
    </div>
  );
}
