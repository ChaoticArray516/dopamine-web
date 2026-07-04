import { SITE_URL } from "@/lib/site-config";
import { JsonLd } from "./JsonLd";

export function LifestyleJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CollectionPage",
        "@id": `${SITE_URL}/dopamine-lifestyle#collectionpage`,
        name: "Dopamine Lifestyle — Decor, Dressing & Healthy Dopamine",
        description: "Explore how dopamine decor, dopamine dressing, and healthy habits can boost your mood every day.",
        url: `${SITE_URL}/dopamine-lifestyle`,
        isPartOf: { "@id": `${SITE_URL}/#website` },
      },
      {
        "@type": "ItemList",
        "@id": `${SITE_URL}/dopamine-lifestyle#itemlist`,
        name: "Dopamine Lifestyle Topics",
        numberOfItems: 3,
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Dopamine Decor",
            url: `${SITE_URL}/dopamine-decor`,
            description: "Create a happy, colorful space that sparks joy.",
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Dopamine Dressing",
            url: `${SITE_URL}/dopamine-dressing`,
            description: "Boost your mood with bold, expressive outfits.",
          },
          {
            "@type": "ListItem",
            position: 3,
            name: "Healthy Dopamine Menu",
            url: `${SITE_URL}/blog/healthy-dopamine-menu`,
            description: "Foods and habits that support natural dopamine production.",
          },
        ],
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
          { "@type": "ListItem", position: 2, name: "Dopamine Lifestyle", item: `${SITE_URL}/dopamine-lifestyle` },
        ],
      },
    ],
  };

  return <JsonLd data={data} />;
}
