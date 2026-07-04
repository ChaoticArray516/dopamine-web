import type { Metadata } from "next";
import { SITE_DEFAULT_OG_IMAGE } from "@/lib/site-config";

export type OpenGraphProps = {
  title: string;
  description: string;
  image?: string;
  type?: "website" | "article";
  locale?: string;
  siteName?: string;
};

export function buildOpenGraph({
  title,
  description,
  image = SITE_DEFAULT_OG_IMAGE,
  type = "website",
  locale = "en_US",
  siteName = "Dopamine Sites",
}: OpenGraphProps): Metadata["openGraph"] {
  return {
    title,
    description,
    type,
    locale,
    siteName,
    images: [
      {
        url: image,
        width: 1200,
        height: 630,
        alt: title,
      },
    ],
  };
}
