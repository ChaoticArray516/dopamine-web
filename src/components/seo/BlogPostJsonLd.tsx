import { SITE_URL } from "@/lib/site-config";
import { JsonLd } from "./JsonLd";
import type { Post } from "contentlayer/generated";

type BlogPostJsonLdProps = {
  post: Post;
};

export function BlogPostJsonLd({ post }: BlogPostJsonLdProps) {
  const pageUrl = `${SITE_URL}/blog/${post.slug}`;
  const published = post.datePublished
    ? new Date(post.datePublished).toISOString().split("T")[0]
    : "2026-07-02";
  const modified = post.dateModified
    ? new Date(post.dateModified).toISOString().split("T")[0]
    : published;

  const graph: Record<string, unknown>[] = [
    {
      "@type": "BlogPosting",
      "@id": `${pageUrl}#blogpost`,
      headline: post.title,
      description: post.excerpt,
      image: post.featuredImage
        ? post.featuredImage.startsWith("http")
          ? post.featuredImage
          : `${SITE_URL}${post.featuredImage}`
        : `${SITE_URL}/og-default.png`,
      datePublished: published,
      dateModified: modified,
      author: { "@id": `${SITE_URL}/#organization` },
      publisher: { "@id": `${SITE_URL}/#organization` },
      mainEntityOfPage: {
        "@type": "WebPage",
        "@id": pageUrl,
      },
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
        { "@type": "ListItem", position: 2, name: "Blog", item: `${SITE_URL}/blog` },
        { "@type": "ListItem", position: 3, name: post.title, item: pageUrl },
      ],
    },
  ];

  const faq = (post.faq ?? []) as { question: string; answer: string }[];

  if (faq.length > 0) {
    graph.push({
      "@type": "FAQPage",
      mainEntity: faq.map((item) => ({
        "@type": "Question",
        name: item.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: item.answer,
        },
      })),
    });
  }

  const data = {
    "@context": "https://schema.org",
    "@graph": graph,
  };

  return <JsonLd data={data} />;
}
