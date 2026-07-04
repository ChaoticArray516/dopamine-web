import { SITE_URL, SITE_NAME } from "@/lib/site-config";
import { JsonLd } from "./JsonLd";

export function AboutJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "AboutPage",
        "@id": `${SITE_URL}/about#aboutpage`,
        name: "About Dopamine Sites",
        url: `${SITE_URL}/about`,
        description: `Learn more about ${SITE_NAME}, our mission to curate delightful websites, and how we review dopamine-boosting destinations.`,
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
            name: "About",
            item: `${SITE_URL}/about`,
          },
        ],
      },
    ],
  };

  return <JsonLd data={data} />;
}
