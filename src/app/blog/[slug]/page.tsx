import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { BlogPostJsonLd } from "@/components/seo";
import { buildOpenGraph } from "@/components/seo/buildOpenGraph";
import { Container, Section, BreadcrumbNav } from "@/components/ui";
import { FAQAccordion } from "@/components/content";
import { PostCard } from "@/components/cards";
import { MDXBody } from "@/components/mdx/MDXBody";
import { getAllBlogSlugs, getPostBySlug, getAllPosts } from "@/lib/blog";
import { SITE_URL } from "@/lib/site-config";

export function generateStaticParams() {
  return getAllBlogSlugs().map((slug) => ({ slug }));
}

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.excerpt,
    openGraph: buildOpenGraph({
      title: post.title,
      description: post.excerpt,
      image: post.featuredImage
        ? post.featuredImage.startsWith("http")
          ? post.featuredImage
          : `${SITE_URL}${post.featuredImage}`
        : undefined,
      type: "article",
    }),
    alternates: { canonical: `/blog/${post.slug}` },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const date = post.datePublished
    ? new Date(post.datePublished).toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      })
    : null;

  const relatedPosts = getAllPosts()
    .filter(
      (p) =>
        p.slug !== post.slug && (p.category === post.category || p.tags?.some((t) => post.tags?.includes(t)))
    )
    .slice(0, 3);

  const faq = (post.faq ?? []) as { question: string; answer: string }[];

  return (
    <>
      <Container>
        <BreadcrumbNav
          items={[
            { name: "Home", url: "/" },
            { name: "Blog", url: "/blog" },
            { name: post.title, url: `/blog/${post.slug}` },
          ]}
        />

        <article className="mx-auto max-w-3xl py-12">
          <header className="mb-8 text-center">
            {post.category && (
              <div className="mb-3 inline-flex items-center rounded-full bg-zinc-100 px-3 py-1 text-xs font-medium dark:bg-zinc-800">
                {post.category}
              </div>
            )}
            <h1 className="font-display text-3xl font-bold md:text-4xl">{post.title}</h1>
            <p className="mt-4 text-lg text-zinc-700 dark:text-zinc-400">{post.excerpt}</p>
            {date && <time className="mt-4 block text-sm text-zinc-600 dark:text-zinc-400">{date}</time>}
          </header>

          <div className="prose max-w-none dark:prose-invert">
            <MDXBody code={post.body.code} />
          </div>

          {faq.length > 0 && (
            <div className="mt-12">
              <h2 className="mb-4 font-display text-2xl font-bold">Frequently asked questions</h2>
              <FAQAccordion items={faq} />
            </div>
          )}
        </article>

        {relatedPosts.length > 0 && (
          <Section heading="Related posts">
            <div className="mx-auto max-w-6xl grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {relatedPosts.map((relatedPost) => (
                <PostCard key={relatedPost.slug} post={relatedPost} />
              ))}
            </div>
          </Section>
        )}
      </Container>
      <BlogPostJsonLd post={post} />
    </>
  );
}
