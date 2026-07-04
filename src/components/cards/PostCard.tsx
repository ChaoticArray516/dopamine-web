import Image from "next/image";
import Link from "next/link";
import type { Post } from "contentlayer/generated";

export function PostCard({ post }: { post: Post }) {
  const href = `/blog/${post.slug}`;
  const date = post.datePublished
    ? new Date(post.datePublished).toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      })
    : null;

  return (
    <article className="group flex flex-col overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-sm transition-shadow hover:shadow-md dark:border-zinc-800 dark:bg-zinc-950">
      <Link href={href} className="relative aspect-video overflow-hidden bg-zinc-100 dark:bg-zinc-900">
        {post.featuredImage ? (
          <Image
            src={post.featuredImage}
            alt={post.title}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        ) : (
          <div className="flex h-full items-center justify-center text-zinc-700 dark:text-zinc-400">Blog</div>
        )}
      </Link>
      <div className="flex flex-1 flex-col p-4">
        {post.category && (
          <div className="mb-2 inline-flex w-fit items-center rounded-full bg-zinc-100 px-2.5 py-0.5 text-xs font-medium text-zinc-700 dark:bg-zinc-800 dark:text-zinc-300">
            {post.category}
          </div>
        )}
        <Link href={href}>
          <h2 className="font-display text-lg font-semibold">{post.title}</h2>
        </Link>
        <p className="mt-2 flex-1 text-sm text-zinc-700 dark:text-zinc-400">{post.excerpt}</p>
        {date && (
          <time className="mt-4 block text-xs text-zinc-700 dark:text-zinc-400">{date}</time>
        )}
      </div>
    </article>
  );
}
