import { SITE_URL } from "@/lib/site-config";
import { JsonLd } from "./JsonLd";
import type { Site } from "contentlayer/generated";

type SitesDirectoryJsonLdProps = {
  sites: Site[];
};

export function SitesDirectoryJsonLd({ sites }: SitesDirectoryJsonLdProps) {
  const data = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CollectionPage",
        "@id": `${SITE_URL}/sites#collectionpage`,
        name: "Dopamine Sites Directory",
        description: "The full directory of dopamine websites — fake-shopping apps, oddly satisfying toys, interactive art and cozy corners of the internet.",
        url: `${SITE_URL}/sites`,
        isPartOf: { "@id": `${SITE_URL}/#website` },
      },
      {
        "@type": "ItemList",
        "@id": `${SITE_URL}/sites#itemlist`,
        name: "All Dopamine Sites",
        numberOfItems: sites.length,
        itemListElement: sites.map((site, index) => ({
          "@type": "ListItem",
          position: index + 1,
          url: `${SITE_URL}/sites/${site.slug}`,
          name: site.title,
        })),
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
          { "@type": "ListItem", position: 2, name: "Sites Directory", item: `${SITE_URL}/sites` },
        ],
      },
    ],
  };

  return <JsonLd data={data} />;
}
