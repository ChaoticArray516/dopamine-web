import { SITE_URL, SITE_NAME } from "@/lib/site-config";
import { JsonLd } from "./JsonLd";
import type { Post } from "contentlayer/generated";

type BlogListJsonLdProps = {
  posts: Post[];
};

export function BlogListJsonLd({ posts }: BlogListJsonLdProps) {
  const data = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Blog",
        "@id": `${SITE_URL}/blog#blog`,
        name: `${SITE_NAME} Blog`,
        url: `${SITE_URL}/blog`,
        description: "Tips, tutorials and guides about dopamine sites, decor, dressing and shopping.",
        isPartOf: { "@id": `${SITE_URL}/#website` },
      },
      {
        "@type": "CollectionPage",
        "@id": `${SITE_URL}/blog#collectionpage`,
        name: "Dopamine Sites Blog",
        url: `${SITE_URL}/blog`,
        isPartOf: { "@id": `${SITE_URL}/#website` },
      },
      {
        "@type": "ItemList",
        "@id": `${SITE_URL}/blog#itemlist`,
        name: "Latest Blog Posts",
        numberOfItems: posts.length,
        itemListElement: posts.map((post, index) => ({
          "@type": "ListItem",
          position: index + 1,
          url: `${SITE_URL}/blog/${post.slug}`,
          name: post.title,
        })),
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
          { "@type": "ListItem", position: 2, name: "Blog", item: `${SITE_URL}/blog` },
        ],
      },
    ],
  };

  return <JsonLd data={data} />;
}
