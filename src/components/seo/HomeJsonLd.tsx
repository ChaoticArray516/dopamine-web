import { SITE_URL, SITE_NAME, SITE_DESCRIPTION } from "@/lib/site-config";
import { JsonLd } from "./JsonLd";

export function HomeJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": `${SITE_URL}/#website`,
        name: SITE_NAME,
        url: SITE_URL,
        description: SITE_DESCRIPTION,
        publisher: { "@id": `${SITE_URL}/#organization` },
        potentialAction: {
          "@type": "SearchAction",
          target: {
            "@type": "EntryPoint",
            urlTemplate: `${SITE_URL}/sites?q={search_term_string}`,
          },
          "query-input": "required name=search_term_string",
        },
      },
      {
        "@type": "Organization",
        "@id": `${SITE_URL}/#organization`,
        name: SITE_NAME,
        url: SITE_URL,
        logo: {
          "@type": "ImageObject",
          url: `${SITE_URL}/logo.png`,
          width: 512,
          height: 512,
        },
        sameAs: [
          "https://twitter.com/dopaminesites",
          "https://www.pinterest.com/dopaminesites",
          "https://www.reddit.com/user/dopaminesites",
        ],
      },
      {
        "@type": "ItemList",
        "@id": `${SITE_URL}/#featured-sites`,
        name: "Featured Dopamine Sites",
        itemListOrder: "https://schema.org/ItemListOrderDescending",
        numberOfItems: 6,
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "DopamineShopping.com",
            url: `${SITE_URL}/sites/dopamineshopping`,
            description: "A fake-shopping site that sells the dopamine of buying without the invoice.",
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "The Useless Web",
            url: `${SITE_URL}/sites/the-useless-web`,
            description: "One click, one random oddly-satisfying website.",
          },
          {
            "@type": "ListItem",
            position: 3,
            name: "Bored Button",
            url: `${SITE_URL}/sites/bored-button`,
            description: "Press the button to escape boredom with a random interactive site.",
          },
          {
            "@type": "ListItem",
            position: 4,
            name: "Pixel Thoughts",
            url: `${SITE_URL}/sites/pixel-thoughts`,
            description: "A 60-second meditation that puts your stress into a fading star.",
          },
          {
            "@type": "ListItem",
            position: 5,
            name: "Window Swap",
            url: `${SITE_URL}/sites/window-swap`,
            description: "Look out of a stranger's window somewhere in the world.",
          },
          {
            "@type": "ListItem",
            position: 6,
            name: "Pointer Pointer",
            url: `${SITE_URL}/sites/pointer-pointer`,
            description: "Move your cursor and a photo of someone pointing at it appears.",
          },
        ],
      },
    ],
  };

  return <JsonLd data={data} />;
}
