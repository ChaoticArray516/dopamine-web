import type { NextConfig } from "next";
import { withContentlayer } from "next-contentlayer2";

// 依据: workspace/SEO_TECH_SPEC.md §2.1
// Cloudflare 约束: action/quickopa/tecth_arch/nextjs_cloudflare_constraints.md §6.1 / §5.3
const nextConfig: NextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  images: {
    // Cloudflare Workers 必须使用自定义 loader（Cloudflare Images），默认优化不可用（约束 §6.1）
    loader: "custom",
    loaderFile: "./image-loader.ts",
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "dopamineshopping.com",
      },
      {
        protocol: "https",
        hostname: "theuselessweb.com",
      },
      {
        protocol: "https",
        hostname: "www.yesstyle.com",
      },
      {
        protocol: "https",
        hostname: "www.stylekorean.com",
      },
      {
        protocol: "https",
        hostname: "m.media-amazon.com",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
    minimumCacheTTL: 60 * 60 * 24 * 30,
  },
  // 注意: headers() 在 Cloudflare Workers 上不适用于 /_next/static/* 与 public/（约束 §5.3）
  // 静态资源缓存必须用 public/_headers 文件配置（见 SOP-3A-13）
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
        ],
      },
    ];
  },
};

export default withContentlayer(nextConfig);
