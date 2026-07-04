import { SITE_URL } from "@/lib/site-config";
import { JsonLd } from "./JsonLd";
import type { Site } from "contentlayer/generated";

type CategoryJsonLdProps = {
  category: {
    slug: string;
    name: string;
  };
  sites: Site[];
};

export function CategoryJsonLd({ category, sites }: CategoryJsonLdProps) {
  const data = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "ItemList",
        "@id": `${SITE_URL}/sites/${category.slug}#itemlist`,
        name: `${category.name} Sites`,
        description: `A curated list of ${category.name.toLowerCase()} sites that deliver instant delight.`,
        url: `${SITE_URL}/sites/${category.slug}`,
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
          { "@type": "ListItem", position: 3, name: category.name, item: `${SITE_URL}/sites/${category.slug}` },
        ],
      },
    ],
  };

  return <JsonLd data={data} />;
}
