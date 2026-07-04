import type { Metadata } from "next";
import Link from "next/link";
import { DressingJsonLd } from "@/components/seo";
import { buildOpenGraph } from "@/components/seo/buildOpenGraph";
import { Container, PageHero, BreadcrumbNav } from "@/components/ui";
import { HowToSteps, ImageGallery } from "@/components/content";
import { AffiliateCta } from "@/components/ads";

export const metadata: Metadata = {
  title: "What Is Dopamine Dressing? Boost Your Mood with Clothes",
  description: "Dopamine dressing is the practice of wearing bright, expressive outfits to improve your mood and confidence.",
  openGraph: buildOpenGraph({
    title: "What Is Dopamine Dressing? Boost Your Mood with Clothes",
    description: "Dopamine dressing is the practice of wearing bright, expressive outfits to improve your mood and confidence.",
  }),
  alternates: { canonical: "/dopamine-dressing" },
};

const howToSteps = [
  {
    position: 1,
    name: "Audit your wardrobe",
    text: "Identify the pieces that make you feel happiest when you put them on.",
  },
  {
    position: 2,
    name: "Add statement colors",
    text: "Introduce one bold color or pattern to neutral outfits.",
  },
  {
    position: 3,
    name: "Mix textures and accessories",
    text: "Layer different fabrics and add playful jewelry or scarves.",
  },
  {
    position: 4,
    name: "Wear it for yourself",
    text: "Choose outfits based on what boosts your mood, not just trends.",
  },
];

const galleryImages = [
  {
    src: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=800&q=80",
    alt: "Bold dopamine outfit with bright colors",
    caption: "Bold color outfit",
  },
  {
    src: "https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=800&q=80",
    alt: "Playful dopamine layering ideas",
    caption: "Playful layers",
  },
  {
    src: "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?auto=format&fit=crop&w=800&q=80",
    alt: "Comfortable dopamine loungewear",
    caption: "Comfortable loungewear",
  },
];

export default function DopamineDressingPage() {
  return (
    <>
      <Container>
        <BreadcrumbNav
          items={[
            { name: "Home", url: "/" },
            { name: "Dopamine Lifestyle", url: "/dopamine-lifestyle" },
            { name: "Dopamine Dressing", url: "/dopamine-dressing" },
          ]}
        />

        <PageHero
          title="What Is Dopamine Dressing? Boost Your Mood with Clothes"
          description="Use color, pattern, and texture to turn getting dressed into a daily mood boost."
        />

        <article className="mx-auto max-w-3xl space-y-8 text-zinc-700 dark:text-zinc-300">
          <p className="text-lg leading-relaxed">
            Dopamine dressing is the practice of choosing clothes that make you feel good. It is not about following trends or dressing for other people — it is about wearing color, texture, and silhouette in a way that boosts your mood. Like{" "}
            <Link href="/dopamine-decor" className="text-zinc-900 underline dark:text-zinc-100">
              dopamine decor
            </Link>
            , it is part of the broader{" "}
            <Link href="/dopamine-lifestyle" className="text-zinc-900 underline dark:text-zinc-100">
              dopamine lifestyle
            </Link>
            . And just like the{" "}
            <Link href="/sites" className="text-zinc-900 underline dark:text-zinc-100">
              dopamine sites directory
            </Link>{" "}
            gives you quick online joy, dopamine dressing gives you a wearable hit of happiness.
          </p>

          <h2 className="font-display text-2xl font-bold text-zinc-900 dark:text-zinc-100">Why it works</h2>
          <p>
            Color psychology research suggests that bright, saturated colors can increase energy and positive affect. Beyond science, there is a simple truth: when you like what you are wearing, you stand taller, smile more, and feel more like yourself. Dopamine dressing is a way to turn that truth into a daily habit.
          </p>

          <h2 className="font-display text-2xl font-bold text-zinc-900 dark:text-zinc-100">Outfit inspiration</h2>
          <ImageGallery images={galleryImages} />

          <h2 className="font-display text-2xl font-bold text-zinc-900 dark:text-zinc-100">How to start dopamine dressing</h2>
          <HowToSteps steps={howToSteps} />

          <h2 className="font-display text-2xl font-bold text-zinc-900 dark:text-zinc-100">Shop dopamine dressing</h2>
          <p>
            YesStyle is one of the best places to find playful, colorful, and affordable pieces for dopamine dressing. From pastel knits to bold accessories, their range makes it easy to experiment without spending a fortune.
          </p>
          <AffiliateCta href="https://www.yesstyle.com" merchant="yesstyle">
            Shop dopamine dressing on YesStyle
          </AffiliateCta>
        </article>
      </Container>
      <DressingJsonLd />
    </>
  );
}
