import type { Metadata } from "next";
import Link from "next/link";
import { ComparisonJsonLd } from "@/components/seo";
import { buildOpenGraph } from "@/components/seo/buildOpenGraph";
import { Container, PageHero, BreadcrumbNav } from "@/components/ui";
import { ComparisonTable } from "@/components/content";
import { AffiliateCta } from "@/components/ads";

export const metadata: Metadata = {
  title: "YesStyle vs StyleKorean: Which Is Better for K-Beauty?",
  description: "A head-to-head comparison of two leading K-Beauty retailers covering price, shipping, product range, and affiliate rewards.",
  openGraph: buildOpenGraph({
    title: "YesStyle vs StyleKorean: Which Is Better for K-Beauty?",
    description: "A head-to-head comparison of two leading K-Beauty retailers covering price, shipping, product range, and affiliate rewards.",
  }),
  alternates: { canonical: "/yesstyle-vs-stylekorean" },
};

const comparisonRows = [
  {
    label: "Product range",
    values: ["Massive — skincare, makeup, fashion, lifestyle", "Focused — skincare and makeup brands"],
    winnerIndex: 0,
  },
  {
    label: "Price",
    values: ["Frequent sales + bundle deals", "Competitive base prices"],
    winnerIndex: 0,
  },
  {
    label: "Shipping speed",
    values: ["7-21 days depending on region", "5-14 days for major markets"],
    winnerIndex: 1,
  },
  {
    label: "Samples & gifts",
    values: ["Generous sample packs", "Select free gifts with purchase"],
    winnerIndex: 0,
  },
  {
    label: "Best for",
    values: ["First-time K-Beauty explorers", "Repeat buyers seeking specific brands"],
    winnerIndex: undefined,
  },
];

export default function ComparisonPage() {
  return (
    <>
      <Container>
        <BreadcrumbNav
          items={[
            { name: "Home", url: "/" },
            { name: "YesStyle vs StyleKorean", url: "/yesstyle-vs-stylekorean" },
          ]}
        />

        <PageHero
          title="YesStyle vs StyleKorean: Which Is Better for K-Beauty?"
          description="A clear, side-by-side comparison of the two most popular international K-Beauty retailers."
        />

        <article className="mx-auto max-w-3xl space-y-8 text-zinc-700 dark:text-zinc-300">
          <p className="text-lg leading-relaxed">
            If you are diving into{" "}
            <Link href="/korean-dopamine-shopping" className="text-zinc-900 underline dark:text-zinc-100">
              Korean dopamine shopping
            </Link>
            , the first decision is where to buy. The{" "}
            <Link href="/sites" className="text-zinc-900 underline dark:text-zinc-100">
              dopamine sites directory
            </Link>{" "}
            covers fun distractions, but this comparison is about getting real products into your hands. YesStyle and StyleKorean are the two biggest names for international buyers. Both are legitimate, both ship worldwide, and both can trigger a serious dopamine hit when the box arrives. Here is how they stack up.
          </p>

          <ComparisonTable columns={["YesStyle", "StyleKorean"]} rows={comparisonRows} />

          <h2 className="font-display text-2xl font-bold text-zinc-900 dark:text-zinc-100">Verdict</h2>
          <p>
            Choose{" "}
            <strong>YesStyle</strong>{" "}
            if you want the widest selection, the best sales, and the most fun unboxing experience. Choose{" "}
            <strong>StyleKorean</strong>{" "}
            if you already know exactly which brand you want and care most about fast, reliable shipping.
          </p>

          <div className="flex flex-wrap gap-4">
            <AffiliateCta href="https://www.yesstyle.com" merchant="yesstyle">
              Shop YesStyle
            </AffiliateCta>
            <AffiliateCta href="https://www.stylekorean.com" merchant="stylekorean">
              Shop StyleKorean
            </AffiliateCta>
          </div>

          <div className="rounded-2xl bg-zinc-100 p-6 dark:bg-zinc-900">
            <h3 className="font-display text-xl font-bold">Still deciding?</h3>
            <p className="mt-2">
              Read our full{" "}
              <Link href="/korean-dopamine-shopping" className="text-zinc-900 underline dark:text-zinc-100">
                Korean dopamine shopping guide
              </Link>{" "}
              for a step-by-step haul strategy.
            </p>
          </div>
        </article>
      </Container>
      <ComparisonJsonLd />
    </>
  );
}
