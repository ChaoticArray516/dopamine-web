import type { Metadata } from "next";
import { ContactJsonLd } from "@/components/seo";
import { buildOpenGraph } from "@/components/seo/buildOpenGraph";
import { Container, Section, PageHero, BreadcrumbNav } from "@/components/ui";
import { ContactForm } from "@/components/forms";

export const metadata: Metadata = {
  title: "Contact Dopamine Sites",
  description: "Get in touch with the Dopamine Sites team for feedback, partnership inquiries, or site submissions.",
  openGraph: buildOpenGraph({
    title: "Contact Dopamine Sites",
    description: "Get in touch with the Dopamine Sites team for feedback, partnership inquiries, or site submissions.",
  }),
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <>
      <Container>
        <BreadcrumbNav
          items={[
            { name: "Home", url: "/" },
            { name: "Contact", url: "/contact" },
          ]}
        />
        <PageHero
          title="Contact Dopamine Sites"
          description="Have a site we should feature, a partnership idea, or just want to say hi? We read every message."
        />

        <Section>
          <div className="mx-auto grid max-w-4xl gap-12 md:grid-cols-2">
            <div className="space-y-6 text-zinc-700 dark:text-zinc-300">
              <h2 className="font-display text-2xl font-bold">Ways to reach us</h2>
              <p>
                The fastest way to get a response is through the form on this page. For press, partnership, or sponsored listing inquiries, please include as much detail as possible.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="font-semibold">General:</span> hello@dopamineweb.com
                </li>
                <li className="flex items-start gap-3">
                  <span className="font-semibold">Partnerships:</span> partners@dopamineweb.com
                </li>
                <li className="flex items-start gap-3">
                  <span className="font-semibold">Twitter:</span> @dopaminesites
                </li>
              </ul>
              <p className="text-sm text-zinc-600 dark:text-zinc-400">
                We typically respond within 2-3 business days.
              </p>
            </div>

            <div className="rounded-2xl border border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-950">
              <ContactForm />
            </div>
          </div>
        </Section>
      </Container>
      <ContactJsonLd />
    </>
  );
}
