import { SITE_URL } from "@/lib/site-config";
import { JsonLd } from "./JsonLd";

export function ComparisonJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id": `${SITE_URL}/yesstyle-vs-stylekorean#article`,
        headline: "YesStyle vs StyleKorean: Which Is Better for K-Beauty?",
        description: "A head-to-head comparison of two leading K-Beauty retailers covering price, shipping, product range, and affiliate rewards.",
        image: `${SITE_URL}/images/yesstyle-vs-stylekorean.jpg`,
        datePublished: "2026-07-02",
        dateModified: "2026-07-02",
        author: { "@id": `${SITE_URL}/#organization` },
        publisher: { "@id": `${SITE_URL}/#organization` },
        mainEntityOfPage: {
          "@type": "WebPage",
          "@id": `${SITE_URL}/yesstyle-vs-stylekorean`,
        },
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
          { "@type": "ListItem", position: 2, name: "YesStyle vs StyleKorean", item: `${SITE_URL}/yesstyle-vs-stylekorean` },
        ],
      },
      {
        "@type": "ItemList",
        "@id": `${SITE_URL}/yesstyle-vs-stylekorean#itemlist`,
        name: "K-Beauty Retailers Compared",
        numberOfItems: 2,
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "YesStyle",
            url: "https://www.yesstyle.com",
            description: "Massive K-Beauty and fashion range with frequent sales and affiliate rewards.",
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "StyleKorean",
            url: "https://www.stylekorean.com",
            description: "Focused Korean beauty retailer with competitive pricing on popular brands.",
          },
        ],
      },
    ],
  };

  return <JsonLd data={data} />;
}
