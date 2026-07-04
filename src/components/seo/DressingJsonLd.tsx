import { SITE_URL } from "@/lib/site-config";
import { JsonLd } from "./JsonLd";

export function DressingJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id": `${SITE_URL}/dopamine-dressing#article`,
        headline: "What Is Dopamine Dressing? Boost Your Mood with Clothes",
        description: "Dopamine dressing is the practice of wearing bright, expressive outfits to improve your mood and confidence.",
        image: `${SITE_URL}/images/dopamine-dressing.jpg`,
        datePublished: "2026-07-02",
        dateModified: "2026-07-02",
        author: { "@id": `${SITE_URL}/#organization` },
        publisher: { "@id": `${SITE_URL}/#organization` },
        mainEntityOfPage: {
          "@type": "WebPage",
          "@id": `${SITE_URL}/dopamine-dressing`,
        },
      },
      {
        "@type": "ImageGallery",
        "@id": `${SITE_URL}/dopamine-dressing#gallery`,
        name: "Dopamine Dressing Inspiration",
        image: [
          {
            "@type": "ImageObject",
            url: `${SITE_URL}/images/dopamine-dressing-1.jpg`,
            name: "Bold dopamine outfit with bright colors",
          },
          {
            "@type": "ImageObject",
            url: `${SITE_URL}/images/dopamine-dressing-2.jpg`,
            name: "Playful dopamine layering ideas",
          },
          {
            "@type": "ImageObject",
            url: `${SITE_URL}/images/dopamine-dressing-3.jpg`,
            name: "Comfortable dopamine loungewear",
          },
        ],
      },
      {
        "@type": "HowTo",
        "@id": `${SITE_URL}/dopamine-dressing#howto`,
        name: "How to Start Dopamine Dressing",
        step: [
          { "@type": "HowToStep", position: 1, name: "Audit your wardrobe", text: "Identify the pieces that make you feel happiest when you put them on." },
          { "@type": "HowToStep", position: 2, name: "Add statement colors", text: "Introduce one bold color or pattern to neutral outfits." },
          { "@type": "HowToStep", position: 3, name: "Mix textures and accessories", text: "Layer different fabrics and add playful jewelry or scarves." },
          { "@type": "HowToStep", position: 4, name: "Wear it for yourself", text: "Choose outfits based on what boosts your mood, not just trends." },
        ],
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
          { "@type": "ListItem", position: 2, name: "Dopamine Lifestyle", item: `${SITE_URL}/dopamine-lifestyle` },
          { "@type": "ListItem", position: 3, name: "Dopamine Dressing", item: `${SITE_URL}/dopamine-dressing` },
        ],
      },
    ],
  };

  return <JsonLd data={data} />;
}
