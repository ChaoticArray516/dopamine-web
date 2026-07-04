import { allPosts } from "contentlayer/generated";

export function getAllPosts() {
  return allPosts;
}

export function getPostBySlug(slug: string) {
  return allPosts.find((post) => post.slug === slug);
}

export function getAllBlogSlugs() {
  return allPosts.map((post) => post.slug);
}
