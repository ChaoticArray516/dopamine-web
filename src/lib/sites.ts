import { allSites } from "contentlayer/generated";
import { SITE_CATEGORIES } from "@/lib/site-config";

export function getAllSites() {
  return allSites;
}

export function getAllCategories() {
  return SITE_CATEGORIES.map((slug) => ({
    slug,
    name: slug.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase()),
  }));
}

export function getSiteBySlug(slug: string) {
  return allSites.find((site) => site.slug === slug);
}

export function getSitesByCategory(category: string) {
  return allSites.filter((site) => site.category === category);
}

export function getAllSiteSlugs() {
  return allSites.map((site) => site.slug);
}

export function isSiteSlug(slug: string) {
  return allSites.some((site) => site.slug === slug);
}

export function isCategorySlug(slug: string) {
  return SITE_CATEGORIES.includes(slug as (typeof SITE_CATEGORIES)[number]);
}
