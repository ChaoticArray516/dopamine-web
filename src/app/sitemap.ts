import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site-config";
import { getAllCategories, getAllSiteSlugs } from "@/lib/sites";
import { getAllBlogSlugs } from "@/lib/blog";

const STATIC_ROUTES = [
  "/",
  "/sites",
  "/korean-dopamine-shopping",
  "/yesstyle-vs-stylekorean",
  "/dopamine-lifestyle",
  "/dopamine-decor",
  "/dopamine-dressing",
  "/blog",
  "/about",
  "/contact",
  "/affiliate-disclosure",
  "/privacy",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date().toISOString();

  const staticEntries: MetadataRoute.Sitemap = STATIC_ROUTES.map((route) => ({
    url: `${SITE_URL}${route}`,
    lastModified: now,
    changeFrequency: route === "/" ? "daily" : "weekly",
    priority: route === "/" ? 1 : 0.8,
  }));

  const categoryEntries: MetadataRoute.Sitemap = getAllCategories().map(
    (category) => ({
      url: `${SITE_URL}/sites/${category.slug}`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.7,
    })
  );

  const siteEntries: MetadataRoute.Sitemap = getAllSiteSlugs().map((slug) => ({
    url: `${SITE_URL}/sites/${slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  const blogEntries: MetadataRoute.Sitemap = getAllBlogSlugs().map((slug) => ({
    url: `${SITE_URL}/blog/${slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  return [
    ...staticEntries,
    ...categoryEntries,
    ...siteEntries,
    ...blogEntries,
  ];
}
