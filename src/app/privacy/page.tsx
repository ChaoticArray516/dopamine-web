import type { Metadata } from "next";
import Link from "next/link";
import { PrivacyJsonLd } from "@/components/seo";
import { buildOpenGraph } from "@/components/seo/buildOpenGraph";
import { Container, Section, PageHero, BreadcrumbNav } from "@/components/ui";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Dopamine Sites privacy policy explains what data we collect, how we use it, and your rights as a visitor.",
  openGraph: buildOpenGraph({
    title: "Privacy Policy",
    description: "Dopamine Sites privacy policy explains what data we collect, how we use it, and your rights as a visitor.",
  }),
  alternates: { canonical: "/privacy" },
};

export default function PrivacyPage() {
  return (
    <>
      <Container>
        <BreadcrumbNav
          items={[
            { name: "Home", url: "/" },
            { name: "Privacy Policy", url: "/privacy" },
          ]}
        />
        <PageHero
          title="Privacy Policy"
          description="Your privacy matters. This policy explains what data we collect and how we use it."
        />

        <Section>
          <article className="mx-auto max-w-3xl space-y-6 text-zinc-700 dark:text-zinc-300">
            <p>Last updated: July 4, 2026.</p>

            <h2 className="font-display text-2xl font-bold">1. Information we collect</h2>
            <p>
              When you visit Dopamine Sites, we may collect limited information automatically, such as your IP address, browser type, device type, pages visited, and referring website. This data is used for analytics and to improve the user experience.
            </p>

            <h2 className="font-display text-2xl font-bold">2. Cookies and tracking</h2>
            <p>
              We use cookies and similar technologies to understand how visitors interact with our site. Some third-party services we use, such as Google Analytics and affiliate networks, may also place cookies or tracking pixels.
            </p>

            <h2 className="font-display text-2xl font-bold">3. Affiliate tracking</h2>
            <p>
              When you click an affiliate link, the merchant may use tracking cookies to attribute the referral to Dopamine Sites. This is how we earn commissions. These cookies are managed by the merchant, not by us.
            </p>

            <h2 className="font-display text-2xl font-bold">4. How we use your data</h2>
            <p>We use the information we collect to:</p>
            <ul className="list-disc space-y-2 pl-5">
              <li>Analyze traffic and improve our content</li>
              <li>Understand which pages and topics are most useful</li>
              <li>Maintain and secure the website</li>
              <li>Comply with legal obligations</li>
            </ul>

            <h2 className="font-display text-2xl font-bold">5. Your rights</h2>
            <p>
              Depending on your location, you may have the right to access, correct, or delete personal data we hold about you. You can also opt out of analytics tracking through your browser settings or by using a do-not-track signal.
            </p>

            <h2 className="font-display text-2xl font-bold">6. Contact us</h2>
            <p>
              If you have any questions about this Privacy Policy, please contact us through our{" "}
              <Link href="/contact" className="text-zinc-900 underline dark:text-zinc-100">
                contact page
              </Link>
              .
            </p>
          </article>
        </Section>
      </Container>
      <PrivacyJsonLd />
    </>
  );
}
