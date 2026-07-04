import type { ImageLoaderProps } from "next/image";

// Cloudflare Images 自定义 loader
// 依据: action/quickopa/tecth_arch/nextjs_cloudflare_constraints.md §6.1
// 在 Cloudflare Workers 上 next/image 默认优化不可用，必须走 Cloudflare Images 的 /cdn-cgi/image/ 端点
// next.config.ts 中 images.loader:"custom" + loaderFile:"./image-loader.ts" 指向本文件
export default function cloudflareLoader({ src, width, quality }: ImageLoaderProps) {
  if (process.env.NODE_ENV === "development") {
    return `${src}?width=${width}`;
  }
  return `/cdn-cgi/image/width=${width},quality=${quality ?? 75}/${
    src.startsWith("/") ? src.slice(1) : src
  }`;
}
