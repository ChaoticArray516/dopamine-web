import { SITE_URL, SITE_NAME } from "@/lib/site-config";
import { JsonLd } from "./JsonLd";

export function PrivacyJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${SITE_URL}/privacy#webpage`,
        name: "Privacy Policy",
        url: `${SITE_URL}/privacy`,
        description: `${SITE_NAME} privacy policy explains what data we collect, how we use it, and your rights as a visitor.`,
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
            name: "Privacy Policy",
            item: `${SITE_URL}/privacy`,
          },
        ],
      },
    ],
  };

  return <JsonLd data={data} />;
}
