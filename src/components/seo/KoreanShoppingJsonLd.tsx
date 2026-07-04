import { SITE_URL } from "@/lib/site-config";
import { JsonLd } from "./JsonLd";

export function KoreanShoppingJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id": `${SITE_URL}/korean-dopamine-shopping#article`,
        headline: "The Ultimate Guide to Korean Dopamine Shopping (2026)",
        description: "Discover the best Korean beauty and lifestyle shops that deliver a dopamine hit, from YesStyle to StyleKorean and beyond.",
        image: `${SITE_URL}/images/korean-dopamine-shopping.jpg`,
        datePublished: "2026-07-02",
        dateModified: "2026-07-02",
        author: { "@id": `${SITE_URL}/#organization` },
        publisher: { "@id": `${SITE_URL}/#organization` },
        mainEntityOfPage: {
          "@type": "WebPage",
          "@id": `${SITE_URL}/korean-dopamine-shopping`,
        },
      },
      {
        "@type": "HowTo",
        "@id": `${SITE_URL}/korean-dopamine-shopping#howto`,
        name: "How to Shop Korean Dopamine Beauty",
        step: [
          {
            "@type": "HowToStep",
            position: 1,
            name: "Pick your K-Beauty focus",
            text: "Decide whether you want skincare, makeup, or lifestyle products to narrow your dopamine shopping list.",
          },
          {
            "@type": "HowToStep",
            position: 2,
            name: "Compare prices and shipping",
            text: "Use our YesStyle vs StyleKorean comparison to find the best shipping rates and promotions for your region.",
          },
          {
            "@type": "HowToStep",
            position: 3,
            name: "Build a dopamine haul",
            text: "Curate 3-5 items with playful packaging or satisfying textures to maximize the unboxing experience.",
          },
          {
            "@type": "HowToStep",
            position: 4,
            name: "Track and unbox",
            text: "Follow your shipment, film the unboxing, and enjoy the serotonin boost of neatly packaged K-Beauty.",
          },
        ],
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
          { "@type": "ListItem", position: 2, name: "Korean Dopamine Shopping", item: `${SITE_URL}/korean-dopamine-shopping` },
        ],
      },
      {
        "@type": "FAQPage",
        mainEntity: [
          {
            "@type": "Question",
            name: "What is Korean dopamine shopping?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "It is the practice of buying brightly packaged, aesthetically pleasing Korean beauty and lifestyle products for the emotional reward rather than strict necessity.",
            },
          },
          {
            "@type": "Question",
            name: "Is YesStyle or StyleKorean better for K-Beauty?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "YesStyle often wins on product range and promotions, while StyleKorean can be faster for specific brands. See our full comparison for details.",
            },
          },
          {
            "@type": "Question",
            name: "Do affiliate links cost me more?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "No. Affiliate links earn us a small commission at no extra cost to you.",
            },
          },
        ],
      },
    ],
  };

  return <JsonLd data={data} />;
}
