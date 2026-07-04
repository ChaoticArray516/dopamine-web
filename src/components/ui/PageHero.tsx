import type { ReactNode } from "react";
import { AffiliateLink } from "@/components/ads/AffiliateLink";
import Link from "next/link";

type PageHeroProps = {
  title: string;
  description?: string;
  cta?: {
    label: string;
    href: string;
    affiliate?: boolean;
    merchant?: string;
  };
  children?: ReactNode;
};

export function PageHero({ title, description, cta, children }: PageHeroProps) {
  return (
    <div className="py-16 text-center md:py-20">
      <h1 className="font-display text-3xl font-bold tracking-tight md:text-4xl">
        {title}
      </h1>
      {description && (
        <p className="mx-auto mt-4 max-w-2xl text-lg text-zinc-700 dark:text-zinc-400">
          {description}
        </p>
      )}
      {cta && (
        <div className="mt-6">
          {cta.affiliate ? (
            <AffiliateLink
              href={cta.href}
              merchant={cta.merchant}
              className="inline-flex items-center rounded-lg bg-zinc-900 px-6 py-3 text-sm font-medium text-white hover:bg-zinc-800 dark:bg-white dark:text-zinc-900 dark:hover:bg-zinc-100"
            >
              {cta.label}
            </AffiliateLink>
          ) : (
            <Link
              href={cta.href}
              className="inline-flex items-center rounded-lg bg-zinc-900 px-6 py-3 text-sm font-medium text-white hover:bg-zinc-800 dark:bg-white dark:text-zinc-900 dark:hover:bg-zinc-100"
            >
              {cta.label}
            </Link>
          )}
        </div>
      )}
      {children}
    </div>
  );
}
