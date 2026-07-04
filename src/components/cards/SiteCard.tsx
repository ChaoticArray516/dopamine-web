import Image from "next/image";
import Link from "next/link";
import type { Site } from "contentlayer/generated";
import { AffiliateLink } from "@/components/ads/AffiliateLink";

type SiteCardProps = {
  site: Site;
  showAffiliateCta?: boolean;
};

export function SiteCard({ site, showAffiliateCta = true }: SiteCardProps) {
  const detailHref = `/sites/${site.slug}`;

  return (
    <article className="group flex flex-col overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-sm transition-shadow hover:shadow-md dark:border-zinc-800 dark:bg-zinc-950">
      <Link href={detailHref} className="relative aspect-video overflow-hidden bg-zinc-100 dark:bg-zinc-900">
        {site.featuredImage ? (
          <Image
            src={site.featuredImage}
            alt={site.title}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        ) : (
          <div className="flex h-full items-center justify-center text-zinc-700 dark:text-zinc-400">{site.title}</div>
        )}
      </Link>
      <div className="flex flex-1 flex-col p-4">
        <div className="mb-2 inline-flex w-fit items-center rounded-full bg-zinc-100 px-2.5 py-0.5 text-xs font-medium text-zinc-700 dark:bg-zinc-800 dark:text-zinc-300">
          {site.category.replace(/-/g, " ")}
        </div>
        <Link href={detailHref}>
          <h2 className="font-display text-lg font-semibold">{site.title}</h2>
        </Link>
        <p className="mt-2 flex-1 text-sm text-zinc-700 dark:text-zinc-400">{site.description}</p>
        <div className="mt-4">
          {showAffiliateCta && site.affiliateMerchant ? (
            <AffiliateLink
              href={site.url}
              merchant={site.affiliateMerchant}
              className="inline-flex items-center rounded-lg bg-zinc-900 px-4 py-2 text-sm font-medium text-white hover:bg-zinc-800 dark:bg-white dark:text-zinc-900 dark:hover:bg-zinc-100"
            >
              Visit site
            </AffiliateLink>
          ) : (
            <Link
              href={detailHref}
              className="inline-flex items-center rounded-lg border border-zinc-300 px-4 py-2 text-sm font-medium hover:bg-zinc-50 dark:border-zinc-700 dark:hover:bg-zinc-900"
            >
              Read review
            </Link>
          )}
        </div>
      </div>
    </article>
  );
}
