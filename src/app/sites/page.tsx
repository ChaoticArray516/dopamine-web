import type { Metadata } from "next";
import { SitesDirectoryJsonLd } from "@/components/seo";
import { buildOpenGraph } from "@/components/seo/buildOpenGraph";
import { Container, Section, PageHero, BreadcrumbNav } from "@/components/ui";
import { SiteCard } from "@/components/cards";
import { SiteFilter } from "@/components/sites/SiteFilter";
import { getAllSites } from "@/lib/sites";

export const revalidate = 3600;

export const metadata: Metadata = {
  title: "Dopamine Sites Directory — Oddly Satisfying, Fake Shopping & More",
  description: "The full directory of dopamine websites — fake-shopping apps, oddly satisfying toys, interactive art and cozy corners of the internet.",
  openGraph: buildOpenGraph({
    title: "Dopamine Sites Directory — Oddly Satisfying, Fake Shopping & More",
    description: "The full directory of dopamine websites — fake-shopping apps, oddly satisfying toys, interactive art and cozy corners of the internet.",
  }),
  alternates: { canonical: "/sites" },
};

export default function SitesDirectoryPage() {
  const sites = getAllSites();

  return (
    <>
      <Container>
        <BreadcrumbNav
          items={[
            { name: "Home", url: "/" },
            { name: "Sites Directory", url: "/sites" },
          ]}
        />

        <PageHero
          title="Dopamine Sites Directory"
          description="Oddly satisfying, fake shopping, interactive art, and cozy corners of the internet — all in one place."
        />

        <Section>
          <SiteFilter activeCategory="all" />
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {sites.map((site) => (
              <SiteCard key={site.slug} site={site} />
            ))}
          </div>
        </Section>
      </Container>
      <SitesDirectoryJsonLd sites={sites} />
    </>
  );
}
