import { AffiliateLink } from "@/components/ads/AffiliateLink";
import type { ReactNode } from "react";

type AffiliateCtaProps = {
  href: string;
  merchant?: string;
  children: ReactNode;
  className?: string;
};

export function AffiliateCta({
  href,
  merchant = "other",
  children,
  className = "",
}: AffiliateCtaProps) {
  return (
    <AffiliateLink
      href={href}
      merchant={merchant}
      className={`inline-flex items-center justify-center rounded-lg bg-zinc-900 px-6 py-3 text-sm font-medium text-white hover:bg-zinc-800 dark:bg-white dark:text-zinc-900 dark:hover:bg-zinc-100 ${className}`}
    >
      {children}
    </AffiliateLink>
  );
}
