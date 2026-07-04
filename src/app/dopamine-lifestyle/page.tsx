import type { Metadata } from "next";
import Link from "next/link";
import { LifestyleJsonLd } from "@/components/seo";
import { buildOpenGraph } from "@/components/seo/buildOpenGraph";
import { Container, Section, PageHero, BreadcrumbNav } from "@/components/ui";
import { ClusterCard } from "@/components/cards";

export const metadata: Metadata = {
  title: "Dopamine Lifestyle — Decor, Dressing & Healthy Dopamine",
  description: "Explore how dopamine decor, dopamine dressing, and healthy habits can boost your mood every day.",
  openGraph: buildOpenGraph({
    title: "Dopamine Lifestyle — Decor, Dressing & Healthy Dopamine",
    description: "Explore how dopamine decor, dopamine dressing, and healthy habits can boost your mood every day.",
  }),
  alternates: { canonical: "/dopamine-lifestyle" },
};

const clusters = [
  {
    title: "Dopamine Decor",
    description: "Create a happy, colorful space that sparks joy every time you walk in.",
    href: "/dopamine-decor",
    image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Dopamine Dressing",
    description: "Boost your mood with bold, expressive outfits and intentional color.",
    href: "/dopamine-dressing",
    image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Healthy Dopamine Menu",
    description: "Foods, habits, and routines that support natural dopamine production.",
    href: "/blog/healthy-dopamine-menu",
    image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&w=800&q=80",
  },
];

export default function DopamineLifestylePage() {
  return (
    <>
      <Container>
        <BreadcrumbNav
          items={[
            { name: "Home", url: "/" },
            { name: "Dopamine Lifestyle", url: "/dopamine-lifestyle" },
          ]}
        />

        <PageHero
          title="Dopamine Lifestyle"
          description="Decor, dressing, and daily habits designed to lift your mood — without buying things you don't need."
        />

        <article className="mx-auto max-w-3xl space-y-6 text-zinc-700 dark:text-zinc-300">
          <p className="text-lg leading-relaxed">
            Dopamine is not just about shopping. It is also about the colors you see when you wake up, the clothes you put on, and the small rituals that make a hard day feel manageable. The{" "}
            <Link href="/sites" className="text-zinc-900 underline dark:text-zinc-100">
              dopamine sites directory
            </Link>{" "}
            is great for a quick hit, but a dopamine lifestyle is about building sustainable joy into your environment and routine.
          </p>
        </article>

        <Section heading="Explore the lifestyle">
          <div className="grid gap-6 md:grid-cols-3">
            {clusters.map((cluster) => (
              <ClusterCard key={cluster.href} {...cluster} />
            ))}
          </div>
        </Section>

        <Section>
          <div className="rounded-2xl bg-zinc-100 p-6 text-center dark:bg-zinc-900">
            <h3 className="font-display text-xl font-bold">Want more?</h3>
            <p className="mt-2 text-zinc-700 dark:text-zinc-300">
              Dive into our blog for deeper guides on building a healthier, happier dopamine routine.
            </p>
            <Link
              href="/blog"
              className="mt-4 inline-flex items-center rounded-lg bg-zinc-900 px-6 py-3 text-sm font-medium text-white hover:bg-zinc-800 dark:bg-white dark:text-zinc-900 dark:hover:bg-zinc-100"
            >
              Read the blog
            </Link>
          </div>
        </Section>
      </Container>
      <LifestyleJsonLd />
    </>
  );
}
