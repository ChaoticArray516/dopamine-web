// 全站唯一域名与站点配置定义点
// 依据: MASTER_SOP.md SOP-3A-07 + workspace/p2_handoff.md
// 所有 SEO 组件和页面 metadata 必须从此 import，禁止散落硬编码域名

export const SITE_URL = "https://dopamineweb.com";
export const SITE_NAME = "Dopamine Sites";
export const SITE_DESCRIPTION =
  "A curated directory of websites, apps and shopping destinations that deliver instant delight — from oddly satisfying sites and fake-shopping toys to Korean dopamine shopping guides.";
export const SITE_DEFAULT_OG_IMAGE = `${SITE_URL}/og-default.png`;

// 站点分类（与 src/lib/constants.ts 的 SiteCategory 对应的 slug）
export const SITE_CATEGORIES = [
  "fake-shopping",
  "oddly-satisfying",
  "interactive-art",
  "cozy",
] as const;
