import { SITE_URL, SITE_NAME } from "@/lib/site-config";
import { JsonLd } from "./JsonLd";

export function AffiliateDisclosureJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${SITE_URL}/affiliate-disclosure#webpage`,
        name: "Affiliate Disclosure",
        url: `${SITE_URL}/affiliate-disclosure`,
        description: `${SITE_NAME} participates in affiliate programs. This page explains how we use affiliate links and how they support our work.`,
        isPartOf: { "@id": `${SITE_URL}/#website` },
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: SITE_URL,
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Affiliate Disclosure",
            item: `${SITE_URL}/affiliate-disclosure`,
          },
        ],
      },
    ],
  };

  return <JsonLd data={data} />;
}
