import type { Metadata } from "next";
import { BlogListJsonLd } from "@/components/seo";
import { buildOpenGraph } from "@/components/seo/buildOpenGraph";
import { Container, Section, PageHero, BreadcrumbNav } from "@/components/ui";
import { PostCard } from "@/components/cards";
import { getAllPosts } from "@/lib/blog";

export const revalidate = 86400;

export const metadata: Metadata = {
  title: "Dopamine Sites Blog — Tips, Tutorials & Guides",
  description: "Tips, tutorials and guides about dopamine sites, decor, dressing and shopping.",
  openGraph: buildOpenGraph({
    title: "Dopamine Sites Blog — Tips, Tutorials & Guides",
    description: "Tips, tutorials and guides about dopamine sites, decor, dressing and shopping.",
  }),
  alternates: { canonical: "/blog" },
};

export default function BlogListPage() {
  const posts = getAllPosts();

  return (
    <>
      <Container>
        <BreadcrumbNav
          items={[
            { name: "Home", url: "/" },
            { name: "Blog", url: "/blog" },
          ]}
        />

        <PageHero
          title="Dopamine Sites Blog"
          description="Tips, tutorials, and guides about dopamine sites, decor, dressing, and shopping."
        />

        <Section>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {posts.map((post) => (
              <PostCard key={post.slug} post={post} />
            ))}
          </div>
        </Section>
      </Container>
      <BlogListJsonLd posts={posts} />
    </>
  );
}
