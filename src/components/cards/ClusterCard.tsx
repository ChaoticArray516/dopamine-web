import Image from "next/image";
import Link from "next/link";

type ClusterCardProps = {
  title: string;
  description: string;
  href: string;
  image?: string;
};

export function ClusterCard({ title, description, href, image }: ClusterCardProps) {
  return (
    <Link
      href={href}
      className="group relative flex min-h-[220px] flex-col justify-end overflow-hidden rounded-2xl bg-zinc-900 p-6 text-white"
    >
      {image && (
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover opacity-60 transition-transform duration-300 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
      )}
      <div className="relative z-10">
        <h3 className="font-display text-xl font-bold">{title}</h3>
        <p className="mt-1 text-sm text-zinc-200">{description}</p>
      </div>
    </Link>
  );
}
