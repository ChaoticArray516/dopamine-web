import type { Metadata } from "next";
import Link from "next/link";
import { AffiliateDisclosureJsonLd } from "@/components/seo";
import { buildOpenGraph } from "@/components/seo/buildOpenGraph";
import { Container, Section, PageHero, BreadcrumbNav } from "@/components/ui";

export const metadata: Metadata = {
  title: "Affiliate Disclosure",
  description: "Dopamine Sites participates in affiliate programs. This page explains how we use affiliate links and how they support our work.",
  openGraph: buildOpenGraph({
    title: "Affiliate Disclosure",
    description: "Dopamine Sites participates in affiliate programs. This page explains how we use affiliate links and how they support our work.",
  }),
  alternates: { canonical: "/affiliate-disclosure" },
};

export default function AffiliateDisclosurePage() {
  return (
    <>
      <Container>
        <BreadcrumbNav
          items={[
            { name: "Home", url: "/" },
            { name: "Affiliate Disclosure", url: "/affiliate-disclosure" },
          ]}
        />
        <PageHero
          title="Affiliate Disclosure"
          description="We believe in being transparent about how Dopamine Sites is funded."
        />

        <Section>
          <article className="mx-auto max-w-3xl space-y-6 text-zinc-700 dark:text-zinc-300">
            <p>
              Dopamine Sites participates in several affiliate advertising programs. This means that some of the links on our website — including links to YesStyle, StyleKorean, Amazon, and other merchants — are affiliate links. If you click on one of these links and make a purchase, we may receive a small commission at no additional cost to you.
            </p>
            <h2 className="font-display text-2xl font-bold">Why we use affiliate links</h2>
            <p>
              Running a curated directory takes time: researching sites, writing reviews, maintaining the platform, and keeping content up to date. Affiliate commissions help cover these costs while keeping the core directory free to use. They do not influence our editorial opinions or which sites we choose to feature.
            </p>
            <h2 className="font-display text-2xl font-bold">Our partners</h2>
            <p>We currently work with or link to affiliate programs including, but not limited to:</p>
            <ul className="list-disc space-y-2 pl-5">
              <li>YesStyle affiliate program</li>
              <li>StyleKorean affiliate program</li>
              <li>Amazon Associates</li>
            </ul>
            <h2 className="font-display text-2xl font-bold">No extra cost to you</h2>
            <p>
              Affiliate links do not change the price you pay. The merchant pays us a referral fee out of their own revenue as a thank-you for sending them a customer. You can always choose to visit a merchant directly instead of using our affiliate link.
            </p>
            <h2 className="font-display text-2xl font-bold">Questions?</h2>
            <p>
              If you have any questions about our affiliate relationships, feel free to contact us through our{" "}
              <Link href="/contact" className="text-zinc-900 underline dark:text-zinc-100">
                contact page
              </Link>
              .
            </p>
          </article>
        </Section>
      </Container>
      <AffiliateDisclosureJsonLd />
    </>
  );
}
