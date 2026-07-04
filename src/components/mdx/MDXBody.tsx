"use client";

import { useMDXComponent } from "next-contentlayer2/hooks";
import Link from "next/link";
import type { ReactNode } from "react";
import { AffiliateLink } from "@/components/ads/AffiliateLink";

type MDXBodyProps = {
  code: string;
};

/** 根据 URL host 推断联盟商户；非联盟域名返回 null */
function inferMerchant(href: string): string | null {
  let host: string;
  try {
    host = new URL(href).hostname.replace(/^www\./, "");
  } catch {
    return null;
  }
  if (host.endsWith("yesstyle.com")) return "yesstyle";
  if (host.endsWith("stylekorean.com")) return "stylekorean";
  if (host.endsWith("amazon.com")) return "amazon";
  return null;
}

type AnchorProps = {
  href?: string;
  children?: ReactNode;
  [key: string]: unknown;
};

function MDXAnchor({ href = "", children, ...rest }: AnchorProps) {
  // 1. 站内链接 / 锚点 → next/link <Link>
  if (href.startsWith("/") || href.startsWith("#")) {
    return (
      <Link href={href} {...rest}>
        {children}
      </Link>
    );
  }
  // 2. 联盟商户 → <AffiliateLink>（自动 rel="nofollow sponsored noopener noreferrer" + target="_blank"）
  const merchant = inferMerchant(href);
  if (merchant) {
    return (
      <AffiliateLink href={href} merchant={merchant} {...rest}>
        {children}
      </AffiliateLink>
    );
  }
  // 3. 其他外链 → <a rel="noopener noreferrer" target="_blank">
  return (
    <a href={href} rel="noopener noreferrer" target="_blank" {...rest}>
      {children}
    </a>
  );
}

const components = {
  a: MDXAnchor,
};

export function MDXBody({ code }: MDXBodyProps) {
  const Component = useMDXComponent(code);
  return <Component components={components} />;
}
