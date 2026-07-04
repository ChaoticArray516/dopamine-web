import { SITE_URL } from "@/lib/site-config";
import { JsonLd } from "./JsonLd";

export function DecorJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id": `${SITE_URL}/dopamine-decor#article`,
        headline: "What Is Dopamine Decor? How to Create a Happy Space",
        description: "Dopamine decor uses bright colors, personal treasures, and sensory details to make your home feel uplifting.",
        image: `${SITE_URL}/images/dopamine-decor.jpg`,
        datePublished: "2026-07-02",
        dateModified: "2026-07-02",
        author: { "@id": `${SITE_URL}/#organization` },
        publisher: { "@id": `${SITE_URL}/#organization` },
        mainEntityOfPage: {
          "@type": "WebPage",
          "@id": `${SITE_URL}/dopamine-decor`,
        },
      },
      {
        "@type": "ImageGallery",
        "@id": `${SITE_URL}/dopamine-decor#gallery`,
        name: "Dopamine Decor Inspiration",
        image: [
          {
            "@type": "ImageObject",
            url: `${SITE_URL}/images/dopamine-decor-1.jpg`,
            name: "Colorful dopamine living room",
          },
          {
            "@type": "ImageObject",
            url: `${SITE_URL}/images/dopamine-decor-2.jpg`,
            name: "Aesthetic dopamine desk setup",
          },
          {
            "@type": "ImageObject",
            url: `${SITE_URL}/images/dopamine-decor-3.jpg`,
            name: "Cozy dopamine bedroom corner",
          },
        ],
      },
      {
        "@type": "HowTo",
        "@id": `${SITE_URL}/dopamine-decor#howto`,
        name: "How to Create Dopamine Decor",
        step: [
          { "@type": "HowToStep", position: 1, name: "Start with color", text: "Pick 2-3 colors that instantly make you smile and use them on walls, textiles, or accents." },
          { "@type": "HowToStep", position: 2, name: "Display personal treasures", text: "Showcase items that hold happy memories, like travel souvenirs or gifts from friends." },
          { "@type": "HowToStep", position: 3, name: "Layer textures", text: "Mix soft throws, woven baskets, and glossy ceramics to engage multiple senses." },
          { "@type": "HowToStep", position: 4, name: "Add living elements", text: "Plants and fresh flowers bring movement and natural color into the room." },
          { "@type": "HowToStep", position: 5, name: "Light it warmly", text: "Use warm bulbs, fairy lights, or candles to create a cozy, inviting glow." },
        ],
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
          { "@type": "ListItem", position: 2, name: "Dopamine Lifestyle", item: `${SITE_URL}/dopamine-lifestyle` },
          { "@type": "ListItem", position: 3, name: "Dopamine Decor", item: `${SITE_URL}/dopamine-decor` },
        ],
      },
    ],
  };

  return <JsonLd data={data} />;
}
