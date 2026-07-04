import type { Metadata } from "next";
import Link from "next/link";
import { HomeJsonLd } from "@/components/seo";
import { buildOpenGraph } from "@/components/seo/buildOpenGraph";
import { Container, Section, PageHero } from "@/components/ui";
import { SiteCard, PostCard, ClusterCard } from "@/components/cards";
import { getAllSites } from "@/lib/sites";
import { getAllPosts } from "@/lib/blog";
import { SITE_NAME, SITE_DESCRIPTION } from "@/lib/site-config";

export const metadata: Metadata = {
  title: SITE_NAME,
  description: SITE_DESCRIPTION,
  openGraph: buildOpenGraph({ title: SITE_NAME, description: SITE_DESCRIPTION }),
  alternates: { canonical: "/" },
};

const featuredSlugs = [
  "dopamineshopping",
  "the-useless-web",
  "bored-button",
  "pixel-thoughts",
  "window-swap",
  "pointer-pointer",
];

const clusters = [
  {
    title: "Site Directory",
    description: "Browse fake shopping, oddly satisfying, interactive art, and cozy sites.",
    href: "/sites",
    image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Korean Dopamine Shopping",
    description: "K-Beauty hauls, platform comparisons, and shopping guides.",
    href: "/korean-dopamine-shopping",
    image: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Dopamine Lifestyle",
    description: "Decor, dressing, and habits for everyday joy.",
    href: "/dopamine-lifestyle",
    image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=800&q=80",
  },
];

export default function Home() {
  const sites = getAllSites();
  const featuredSites = featuredSlugs
    .map((slug) => sites.find((s) => s.slug === slug))
    .filter(Boolean);
  const latestPosts = getAllPosts().slice(0, 3);

  return (
    <>
      <Container>
        <PageHero
          title="Dopamine Sites — A Curated Directory of Delightful Websites & Shopping"
          description="Discover oddly satisfying websites, fake shopping escapes, Korean dopamine shopping, and lifestyle inspiration — all in one fast, lightweight directory."
          cta={{ label: "Explore the directory", href: "/sites" }}
        />

        <Section heading="Featured dopamine sites">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {featuredSites.map((site) => (
              <SiteCard key={site!.slug} site={site!} />
            ))}
          </div>
        </Section>

        <Section heading="Explore by topic">
          <div className="grid gap-6 md:grid-cols-3">
            {clusters.map((cluster) => (
              <ClusterCard key={cluster.href} {...cluster} />
            ))}
          </div>
        </Section>

        <Section heading="Latest from the blog">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {latestPosts.map((post) => (
              <PostCard key={post.slug} post={post} />
            ))}
          </div>
          <div className="mt-8 text-center">
            <Link
              href="/blog"
              className="inline-flex items-center rounded-lg border border-zinc-300 px-6 py-3 text-sm font-medium hover:bg-zinc-50 dark:border-zinc-700 dark:hover:bg-zinc-900"
            >
              View all posts
            </Link>
          </div>
        </Section>
      </Container>
      <HomeJsonLd />
    </>
  );
}
