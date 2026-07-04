import type { Metadata } from "next";
import Link from "next/link";
import { DecorJsonLd } from "@/components/seo";
import { buildOpenGraph } from "@/components/seo/buildOpenGraph";
import { Container, PageHero, BreadcrumbNav } from "@/components/ui";
import { HowToSteps, ImageGallery } from "@/components/content";
import { AffiliateCta } from "@/components/ads";

export const metadata: Metadata = {
  title: "What Is Dopamine Decor? How to Create a Happy Space",
  description: "Dopamine decor uses bright colors, personal treasures, and sensory details to make your home feel uplifting.",
  openGraph: buildOpenGraph({
    title: "What Is Dopamine Decor? How to Create a Happy Space",
    description: "Dopamine decor uses bright colors, personal treasures, and sensory details to make your home feel uplifting.",
  }),
  alternates: { canonical: "/dopamine-decor" },
};

const howToSteps = [
  {
    position: 1,
    name: "Start with color",
    text: "Pick 2-3 colors that instantly make you smile and use them on walls, textiles, or accents.",
  },
  {
    position: 2,
    name: "Display personal treasures",
    text: "Showcase items that hold happy memories, like travel souvenirs or gifts from friends.",
  },
  {
    position: 3,
    name: "Layer textures",
    text: "Mix soft throws, woven baskets, and glossy ceramics to engage multiple senses.",
  },
  {
    position: 4,
    name: "Add living elements",
    text: "Plants and fresh flowers bring movement and natural color into the room.",
  },
  {
    position: 5,
    name: "Light it warmly",
    text: "Use warm bulbs, fairy lights, or candles to create a cozy, inviting glow.",
  },
];

const galleryImages = [
  {
    src: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=800&q=80",
    alt: "Colorful dopamine living room",
    caption: "Color-first living room",
  },
  {
    src: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800&q=80",
    alt: "Aesthetic dopamine desk setup",
    caption: "Aesthetic desk setup",
  },
  {
    src: "https://images.unsplash.com/photo-1522771753035-a0a1f66cd459?auto=format&fit=crop&w=800&q=80",
    alt: "Cozy dopamine bedroom corner",
    caption: "Cozy bedroom corner",
  },
];

export default function DopamineDecorPage() {
  return (
    <>
      <Container>
        <BreadcrumbNav
          items={[
            { name: "Home", url: "/" },
            { name: "Dopamine Lifestyle", url: "/dopamine-lifestyle" },
            { name: "Dopamine Decor", url: "/dopamine-decor" },
          ]}
        />

        <PageHero
          title="What Is Dopamine Decor? How to Create a Happy Space"
          description="Turn your home into a daily source of joy with color, texture, and personal meaning."
        />

        <article className="mx-auto max-w-3xl space-y-8 text-zinc-700 dark:text-zinc-300">
          <p className="text-lg leading-relaxed">
            Dopamine decor is the practice of designing your space to spark small, repeated moments of happiness. Instead of chasing a minimalist aesthetic or the latest trend, you fill your home with colors, objects, and textures that feel good to you. The{" "}
            <Link href="/sites" className="text-zinc-900 underline dark:text-zinc-100">
              dopamine sites directory
            </Link>{" "}
            can give you a quick mood boost online, but dopamine decor brings that same feeling into your physical environment. It is part of the broader{" "}
            <Link href="/dopamine-lifestyle" className="text-zinc-900 underline dark:text-zinc-100">
              dopamine lifestyle
            </Link>
            , which also includes dressing and a healthy{" "}
            <Link href="/blog/healthy-dopamine-menu" className="text-zinc-900 underline dark:text-zinc-100">
              dopamine menu
            </Link>
            .
          </p>

          <h2 className="font-display text-2xl font-bold text-zinc-900 dark:text-zinc-100">The science is simple</h2>
          <p>
            Bright colors, soft textures, and familiar objects all signal safety and reward to the brain. When your space includes these elements, you do not need a big purchase to feel better. A colorful mug, a well-placed plant, or a throw blanket in your favorite color can all nudge your mood upward.
          </p>

          <h2 className="font-display text-2xl font-bold text-zinc-900 dark:text-zinc-100">Inspiration gallery</h2>
          <ImageGallery images={galleryImages} />

          <h2 className="font-display text-2xl font-bold text-zinc-900 dark:text-zinc-100">How to create dopamine decor</h2>
          <HowToSteps steps={howToSteps} />

          <h2 className="font-display text-2xl font-bold text-zinc-900 dark:text-zinc-100">Shop decor ideas</h2>
          <p>
            If you are ready to bring more color and texture into your space, these Amazon picks are a great starting point. Look for throws, cushions, planters, and warm lighting that match your personal palette.
          </p>
          <AffiliateCta href="https://www.amazon.com" merchant="amazon">
            Shop decor on Amazon
          </AffiliateCta>
        </article>
      </Container>
      <DecorJsonLd />
    </>
  );
}
