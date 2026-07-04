import { SITE_URL } from "@/lib/site-config";
import { JsonLd } from "./JsonLd";
import type { Site } from "contentlayer/generated";

type SiteDetailJsonLdProps = {
  site: Site;
};

export function SiteDetailJsonLd({ site }: SiteDetailJsonLdProps) {
  const pageUrl = `${SITE_URL}/sites/${site.slug}`;
  const reviewDate = site.reviewDate
    ? new Date(site.reviewDate).toISOString().split("T")[0]
    : "2026-07-02";

  const data = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${pageUrl}#subject-org`,
        name: site.title,
        url: site.url,
      },
      {
        "@type": "Article",
        "@id": `${pageUrl}#article`,
        headline: `${site.title} Review`,
        description: site.description,
        image: site.featuredImage
          ? site.featuredImage.startsWith("http")
            ? site.featuredImage
            : `${SITE_URL}${site.featuredImage}`
          : `${SITE_URL}/og-default.png`,
        datePublished: reviewDate,
        dateModified: reviewDate,
        author: { "@id": `${SITE_URL}/#organization` },
        publisher: { "@id": `${SITE_URL}/#organization` },
        mainEntityOfPage: {
          "@type": "WebPage",
          "@id": pageUrl,
        },
        about: { "@id": `${pageUrl}#subject-org` },
      },
      {
        "@type": "Review",
        "@id": `${pageUrl}#review`,
        itemReviewed: { "@id": `${pageUrl}#subject-org` },
        reviewBody: site.reviewBody || site.description,
        reviewRating: {
          "@type": "Rating",
          ratingValue: site.ratingValue ? String(site.ratingValue) : "4",
          bestRating: "5",
          worstRating: "1",
        },
        author: { "@id": `${SITE_URL}/#organization` },
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
          { "@type": "ListItem", position: 2, name: "Sites Directory", item: `${SITE_URL}/sites` },
          { "@type": "ListItem", position: 3, name: site.title, item: pageUrl },
        ],
      },
    ],
  };

  return <JsonLd data={data} />;
}
