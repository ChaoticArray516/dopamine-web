import type { ReactNode } from "react";
import { AffiliateMerchant } from "@/lib/constants";

export type AffiliateLinkProps = {
  href: string;
  children: ReactNode;
  merchant?: AffiliateMerchant | string;
  className?: string;
};

// Server Component：确保 rel 属性直接出现在服务端 HTML 中
export function AffiliateLink({
  href,
  children,
  merchant = AffiliateMerchant.Other,
  className = "",
}: AffiliateLinkProps) {
  return (
    <a
      href={href}
      rel="nofollow sponsored noopener noreferrer"
      target="_blank"
      data-affiliate-merchant={merchant}
      className={className}
    >
      {children}
    </a>
  );
}
