import type { Metadata } from "next";
import { AboutJsonLd } from "@/components/seo";
import { buildOpenGraph } from "@/components/seo/buildOpenGraph";
import { Container, Section, PageHero, BreadcrumbNav } from "@/components/ui";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Dopamine Sites",
  description: "Learn more about Dopamine Sites, our mission to curate delightful websites, and how we review dopamine-boosting destinations.",
  openGraph: buildOpenGraph({
    title: "About Dopamine Sites",
    description: "Learn more about Dopamine Sites, our mission to curate delightful websites, and how we review dopamine-boosting destinations.",
  }),
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <>
      <Container>
        <BreadcrumbNav
          items={[
            { name: "Home", url: "/" },
            { name: "About", url: "/about" },
          ]}
        />
        <PageHero
          title="About Dopamine Sites"
          description="We hunt down the internet's most delightful corners — from oddly satisfying toys to Korean dopamine shopping — so you can find your next mood boost."
        />

        <Section>
          <div className="mx-auto max-w-3xl space-y-6 text-zinc-700 dark:text-zinc-300">
            <p>
              Dopamine Sites is a curated directory of websites, apps, and shopping destinations designed to deliver instant delight. Whether you are looking for a fake-shopping fix, a meditative window into someone else&apos;s world, or the best K-Beauty haul, we map the internet by the feeling it gives you.
            </p>
            <h2 className="font-display text-2xl font-bold">Our mission</h2>
            <p>
              The modern web is built for engagement, not joy. We think it should be easier to find experiences that make you smile, relax, or creatively recharge — without falling into infinite-scroll traps. Our mission is to surface those corners, review them honestly, and connect you with them through a fast, lightweight directory.
            </p>
            <h2 className="font-display text-2xl font-bold">What we cover</h2>
            <ul className="list-disc space-y-2 pl-5">
              <li>
                <strong>Oddly satisfying websites</strong> — calming, repetitive, and visually pleasing experiences.
              </li>
              <li>
                <strong>Fake shopping sites</strong> — the dopamine of buying without spending a cent.
              </li>
              <li>
                <strong>Interactive art &amp; cozy corners</strong> — creative toys and mindful escapes.
              </li>
              <li>
                <strong>Korean dopamine shopping</strong> — K-Beauty and lifestyle hauls that spark joy.
              </li>
              <li>
                <strong>Dopamine lifestyle</strong> — decor, dressing, and healthy habits for everyday joy.
              </li>
            </ul>
            <h2 className="font-display text-2xl font-bold">How we make money</h2>
            <p>
              Some links on Dopamine Sites are affiliate links, which means we may earn a small commission if you make a purchase — at no extra cost to you. We only recommend platforms and products we genuinely think are worth your time. Read our full{" "}
              <Link href="/affiliate-disclosure" className="text-zinc-900 underline dark:text-zinc-100">
                Affiliate Disclosure
              </Link>{" "}
              for details.
            </p>
            <h2 className="font-display text-2xl font-bold">Get in touch</h2>
            <p>
              Have a site we should review, a partnership idea, or feedback on the directory?{" "}
              <Link href="/contact" className="text-zinc-900 underline dark:text-zinc-100">
                Contact us here
              </Link>
              .
            </p>
          </div>
        </Section>
      </Container>
      <AboutJsonLd />
    </>
  );
}
