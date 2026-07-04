import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CategoryJsonLd, SiteDetailJsonLd } from "@/components/seo";
import { buildOpenGraph } from "@/components/seo/buildOpenGraph";
import { Container, Section, PageHero, BreadcrumbNav } from "@/components/ui";
import { SiteCard } from "@/components/cards";
import { AffiliateCta } from "@/components/ads";
import {
  getAllCategories,
  getAllSiteSlugs,
  getSiteBySlug,
  getSitesByCategory,
  isCategorySlug,
} from "@/lib/sites";
import { SITE_URL } from "@/lib/site-config";

export const revalidate = 3600;

export function generateStaticParams() {
  const categorySlugs = getAllCategories().map((c) => c.slug);
  const siteSlugs = getAllSiteSlugs();
  return [...categorySlugs, ...siteSlugs].map((slug) => ({ slug }));
}

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  if (isCategorySlug(slug)) {
    const category = getAllCategories().find((c) => c.slug === slug);
    return {
      title: `${category?.name} Sites`,
      description: `A curated list of ${category?.name?.toLowerCase()} sites that deliver instant delight.`,
      alternates: { canonical: `/sites/${slug}` },
    };
  }
  const site = getSiteBySlug(slug);
  return {
    title: `${site?.title} Review`,
    description: site?.description,
    openGraph: buildOpenGraph({
      title: `${site?.title} Review`,
      description: site?.description ?? "",
      image: site?.featuredImage
        ? site.featuredImage.startsWith("http")
          ? site.featuredImage
          : `${SITE_URL}${site.featuredImage}`
        : undefined,
    }),
    alternates: { canonical: `/sites/${slug}` },
  };
}

export default async function SiteRoutePage({ params }: Props) {
  const { slug } = await params;

  if (isCategorySlug(slug)) {
    const category = getAllCategories().find((c) => c.slug === slug)!;
    const sites = getSitesByCategory(slug);
    return (
      <>
        <Container>
          <BreadcrumbNav
            items={[
              { name: "Home", url: "/" },
              { name: "Sites Directory", url: "/sites" },
              { name: category.name, url: `/sites/${category.slug}` },
            ]}
          />
          <PageHero
            title={`${category.name} Sites`}
            description={`A curated collection of ${category.name.toLowerCase()} sites that deliver instant delight.`}
          />
          <Section>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {sites.map((site) => (
                <SiteCard key={site.slug} site={site} />
              ))}
            </div>
          </Section>
        </Container>
        <CategoryJsonLd category={category} sites={sites} />
      </>
    );
  }

  const site = getSiteBySlug(slug);
  if (!site) notFound();

  const category = getAllCategories().find((c) => c.slug === site.category)!;

  return (
    <>
      <Container>
        <BreadcrumbNav
          items={[
            { name: "Home", url: "/" },
            { name: "Sites Directory", url: "/sites" },
            { name: category.name, url: `/sites/${category.slug}` },
            { name: site.title, url: `/sites/${site.slug}` },
          ]}
        />

        <article className="mx-auto max-w-3xl space-y-8 py-12">
          <header className="text-center">
            <div className="mb-4 inline-flex items-center rounded-full bg-zinc-100 px-3 py-1 text-xs font-medium dark:bg-zinc-800">
              {category.name}
            </div>
            <h1 className="font-display text-3xl font-bold md:text-4xl">{site.title} Review</h1>
            <p className="mt-4 text-lg text-zinc-700 dark:text-zinc-400">{site.description}</p>
            {site.ratingValue && (
              <div className="mt-4 text-2xl font-bold text-amber-500">
                {site.ratingValue}/5
              </div>
            )}
          </header>

          <div className="prose max-w-none dark:prose-invert">
            <p className="text-lg leading-relaxed">
              {site.reviewBody || site.description}
            </p>
            <p>
              {site.affiliateMerchant === "yesstyle" || site.affiliateMerchant === "stylekorean"
                ? "This site is part of the Korean dopamine shopping ecosystem. If you are comparing retailers, read our YesStyle vs StyleKorean comparison before you buy."
                : "This site is a perfect example of how small, playful web experiences can deliver a quick mood boost without asking for much of your time."}
            </p>
          </div>

          <div className="flex flex-wrap gap-4">
            <AffiliateCta href={site.url} merchant={site.affiliateMerchant}>
              Try {site.title} →
            </AffiliateCta>
            <Link
              href={`/sites/${category.slug}`}
              className="inline-flex items-center rounded-lg border border-zinc-300 px-6 py-3 text-sm font-medium hover:bg-zinc-50 dark:border-zinc-700 dark:hover:bg-zinc-900"
            >
              More {category.name} sites
            </Link>
          </div>
        </article>
      </Container>
      <SiteDetailJsonLd site={site} />
    </>
  );
}
