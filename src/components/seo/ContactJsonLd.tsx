import { SITE_URL, SITE_NAME } from "@/lib/site-config";
import { JsonLd } from "./JsonLd";

export function ContactJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "ContactPage",
        "@id": `${SITE_URL}/contact#contactpage`,
        name: "Contact Dopamine Sites",
        url: `${SITE_URL}/contact`,
        description: `Get in touch with the ${SITE_NAME} team for feedback, partnership inquiries, or site submissions.`,
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
            name: "Contact",
            item: `${SITE_URL}/contact`,
          },
        ],
      },
    ],
  };

  return <JsonLd data={data} />;
}
