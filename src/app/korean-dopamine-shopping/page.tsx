import type { Metadata } from "next";
import Link from "next/link";
import { KoreanShoppingJsonLd } from "@/components/seo";
import { buildOpenGraph } from "@/components/seo/buildOpenGraph";
import {
  Container,
  PageHero,
  BreadcrumbNav,
} from "@/components/ui";
import { HowToSteps, FAQAccordion } from "@/components/content";
import { AffiliateCta } from "@/components/ads";
import { AffiliateLink } from "@/components/ads/AffiliateLink";

export const metadata: Metadata = {
  title: "The Ultimate Guide to Korean Dopamine Shopping (2026)",
  description: "Discover the best Korean beauty and lifestyle shops that deliver a dopamine hit, from YesStyle to StyleKorean and beyond.",
  openGraph: buildOpenGraph({
    title: "The Ultimate Guide to Korean Dopamine Shopping (2026)",
    description: "Discover the best Korean beauty and lifestyle shops that deliver a dopamine hit, from YesStyle to StyleKorean and beyond.",
  }),
  alternates: { canonical: "/korean-dopamine-shopping" },
};

const howToSteps = [
  {
    position: 1,
    name: "Pick your K-Beauty focus",
    text: "Decide whether you want skincare, makeup, or lifestyle products. A focused haul feels more satisfying and helps you stay within budget.",
  },
  {
    position: 2,
    name: "Compare prices and shipping",
    text: "Use our YesStyle vs StyleKorean comparison to find the best shipping rates and promotions for your region before you check out.",
  },
  {
    position: 3,
    name: "Build a dopamine haul",
    text: "Curate 3-5 items with playful packaging or satisfying textures. Part of the fun is the unboxing experience itself.",
  },
  {
    position: 4,
    name: "Track and unbox",
    text: "Follow your shipment, film the unboxing, and enjoy the serotonin boost of neatly packaged K-Beauty.",
  },
];

const faqItems = [
  {
    question: "What is Korean dopamine shopping?",
    answer: "It is the practice of buying brightly packaged, aesthetically pleasing Korean beauty and lifestyle products for the emotional reward rather than strict necessity.",
  },
  {
    question: "Is YesStyle or StyleKorean better for K-Beauty?",
    answer: "YesStyle often wins on product range and promotions, while StyleKorean can be faster for specific brands. See our full comparison for details.",
  },
  {
    question: "Do affiliate links cost me more?",
    answer: "No. Affiliate links earn us a small commission at no extra cost to you.",
  },
];

export default function KoreanDopamineShoppingPage() {
  return (
    <>
      <Container>
        <BreadcrumbNav
          items={[
            { name: "Home", url: "/" },
            { name: "Korean Dopamine Shopping", url: "/korean-dopamine-shopping" },
          ]}
        />

        <PageHero
          title="The Ultimate Guide to Korean Dopamine Shopping (2026)"
          description="The complete guide to shopping K-Beauty and lifestyle products that spark joy — from haul strategy to the best platforms."
        />

        <article className="mx-auto max-w-3xl space-y-8 text-zinc-700 dark:text-zinc-300">
          <p className="text-lg leading-relaxed">
            Korean dopamine shopping is more than a trend — it is a whole emotional experience. If you have ever fallen down a rabbit hole of snail-mucin serums, gradient lip tints, and pastel packaging, you already know the feeling. The{" "}
            <Link href="/sites" className="text-zinc-900 underline dark:text-zinc-100">
              dopamine sites directory
            </Link>{" "}
            may be full of fun distractions, but Korean shopping is where instant delight meets real self-care. In this guide, we will cover what makes K-Beauty so satisfying, where to shop, and how to build a haul that feels as good as it looks.
          </p>

          <h2 className="font-display text-2xl font-bold text-zinc-900 dark:text-zinc-100">Why Korean shopping feels so good</h2>
          <p>
            Korean beauty brands understand sensory marketing. Products arrive in boxes that feel like gifts, with samples, stickers, and handwritten-style thank-you notes. The textures are satisfying — jelly cleansers, cloud-like cushions, and glossy essences. Even the unboxing is designed to release dopamine. That emotional payoff is why shoppers keep coming back, often before they have finished their last purchase.
          </p>

          <h2 className="font-display text-2xl font-bold text-zinc-900 dark:text-zinc-100">Best platforms for Korean dopamine shopping</h2>
          <p>
            The two largest international gateways are{" "}
            <AffiliateLink href="https://www.yesstyle.com" merchant="yesstyle" className="text-zinc-900 underline dark:text-zinc-100">YesStyle</AffiliateLink>{" "}
            and{" "}
            <AffiliateLink href="https://www.stylekorean.com" merchant="stylekorean" className="text-zinc-900 underline dark:text-zinc-100">StyleKorean</AffiliateLink>
            . Both carry hundreds of Korean brands, but they differ in shipping speed, sample culture, and promotions. Our{" "}
            <Link href="/yesstyle-vs-stylekorean" className="text-zinc-900 underline dark:text-zinc-100">YesStyle vs StyleKorean</Link>{" "}
            breakdown compares price, shipping, product range, and rewards so you can choose the right store for your haul.
          </p>

          <div className="flex flex-wrap gap-4">
            <AffiliateCta href="https://www.yesstyle.com" merchant="yesstyle">
              Shop K-Beauty on YesStyle
            </AffiliateCta>
            <AffiliateCta href="https://www.stylekorean.com" merchant="stylekorean">
              Shop StyleKorean
            </AffiliateCta>
          </div>

          <h2 className="font-display text-2xl font-bold text-zinc-900 dark:text-zinc-100">How to shop Korean dopamine beauty</h2>
          <HowToSteps steps={howToSteps} />

          <h2 className="font-display text-2xl font-bold text-zinc-900 dark:text-zinc-100">Frequently asked questions</h2>
          <FAQAccordion items={faqItems} />

          <div className="rounded-2xl bg-zinc-100 p-6 dark:bg-zinc-900">
            <h3 className="font-display text-xl font-bold">Ready to build your haul?</h3>
            <p className="mt-2">
              Start with our platform comparison, then pick a category and enjoy the unboxing.
            </p>
            <div className="mt-4 flex flex-wrap gap-4">
              <Link
                href="/yesstyle-vs-stylekorean"
                className="inline-flex items-center rounded-lg bg-zinc-900 px-6 py-3 text-sm font-medium text-white hover:bg-zinc-800 dark:bg-white dark:text-zinc-900 dark:hover:bg-zinc-100"
              >
                YesStyle vs StyleKorean
              </Link>
              <Link
                href="/sites"
                className="inline-flex items-center rounded-lg border border-zinc-300 px-6 py-3 text-sm font-medium hover:bg-zinc-50 dark:border-zinc-700 dark:hover:bg-zinc-900"
              >
                Browse site reviews
              </Link>
            </div>
          </div>
        </article>
      </Container>
      <KoreanShoppingJsonLd />
    </>
  );
}
