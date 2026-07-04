# Phase 2 → Phase 3 下游交接包

> **生成依据**：
> - Manus Round 1 骨架设计：`p2_handoff.md` 与 `rendering_spec_v1.md`（位于 `projs/dopamine_sites/prompts/dev_sop/mvp/phase2/`）
> - GLM-5.2 Round 2 完整规范生成：`phase2_round2_glm52_prompt.md`
> - 完整技术规范文档：`SEO_TECH_SPEC.md`、`INFORMATION_ARCHITECTURE.md`、`CONTENT_CLUSTER_STRATEGY.md`（位于 `projs/dopamine_sites/workspace/`）
> - 事实数据源：`p1_handoff.md` 竞品结构化数据 + 关键词机会清单 + SERP 现状

---

## 技术规范摘要

### 信息架构

完整 URL 路由表（详见 `INFORMATION_ARCHITECTURE.md` §1）：

| 层级 | 路由 | 页面类型 | 目标关键词 | Schema 类型 | 渲染模式 |
|------|------|---------|------------|------------|---------|
| L1 | `/` | 首页 | dopamine site, dopamine website | WebSite + Organization + ItemList | SSG |
| L1 | `/sites` | 目录首页 | dopamine sites list, oddly satisfying websites | CollectionPage + ItemList + BreadcrumbList | ISR (revalidate=3600) |
| L2 | `/sites/[slug]` | 分类页 + 详情页（合并路由） | fake shopping sites / [site name] review | ItemList + BreadcrumbList（分类）/ Article + Review + BreadcrumbList + Organization（详情） | ISR (revalidate=3600) |
| L1 | `/korean-dopamine-shopping` | 核心指南 | korean dopamine shopping, k-beauty haul | Article + HowTo + BreadcrumbList + FAQPage | SSG |
| L1 | `/yesstyle-vs-stylekorean` | 对比页 | yesstyle vs stylekorean | Article + BreadcrumbList + ItemList | SSG |
| L1 | `/dopamine-lifestyle` | 聚合页 | dopamine lifestyle, dopamine menu | CollectionPage + ItemList + BreadcrumbList | SSG |
| L2 | `/dopamine-decor` | 指南页 | dopamine decor, aesthetic room | Article + ImageGallery + BreadcrumbList + HowTo | SSG |
| L2 | `/dopamine-dressing` | 指南页 | dopamine dressing, mood boosting clothes | Article + ImageGallery + BreadcrumbList + HowTo | SSG |
| L1 | `/blog` | 博客首页 | dopamine articles | Blog + CollectionPage + BreadcrumbList | ISR (revalidate=86400) |
| L2 | `/blog/[slug]` | 博客文章 | (长尾词) | BlogPosting + BreadcrumbList + FAQPage | SSG |
| L1 | `/about` | 关于页 | about dopamine sites | AboutPage + BreadcrumbList | SSG |
| L1 | `/contact` | 联系页 | contact us | ContactPage + BreadcrumbList | SSG |
| L1 | `/affiliate-disclosure` | 披露页 | affiliate disclosure | WebPage + BreadcrumbList | SSG |
| L1 | `/privacy` | 隐私页 | privacy policy | WebPage + BreadcrumbList | SSG |

### CWV 优化目标

- **LCP** ≤ 2.5s
- **INP** ≤ 200ms
- **CLS** ≤ 0.1
- **首屏 JS Bundle** < 100KB (gzip)
- **Lighthouse Performance** ≥ 90

实现手段详见 `SEO_TECH_SPEC.md` §2：`next/image` + AVIF/WebP、`next/font/google` + `display:swap`、`next/dynamic` 懒加载交互组件、`@next/third-parties` afterInteractive 加载分析脚本、广告容器固定 `min-height` 防 CLS。

### Schema 标记规范

每类页面的完整 JSON-LD @graph 代码块（15 类页面，均已通过 `JSON.parse()` 验证，可直接复制使用）详见 `SEO_TECH_SPEC.md` §1：

| 页面 | Schema @graph 组合 | 代码块位置 |
|------|-------------------|-----------|
| `/` | WebSite + Organization + ItemList | SEO_TECH_SPEC.md §1.1 |
| `/sites` | CollectionPage + ItemList + BreadcrumbList | §1.2 |
| `/sites/[slug]` | 分类: ItemList + BreadcrumbList / 详情: Article + Review + BreadcrumbList + Organization | §1.3 + §1.4 |
| `/korean-dopamine-shopping` | Article + HowTo + BreadcrumbList + FAQPage | §1.5 |
| `/yesstyle-vs-stylekorean` | Article + BreadcrumbList + ItemList | §1.6 |
| `/dopamine-lifestyle` | CollectionPage + ItemList + BreadcrumbList | §1.7 |
| `/dopamine-decor` | Article + ImageGallery + BreadcrumbList + HowTo | §1.8 |
| `/dopamine-dressing` | Article + ImageGallery + BreadcrumbList + HowTo | §1.9 |
| `/blog` | Blog + CollectionPage + BreadcrumbList | §1.10 |
| `/blog/[slug]` | BlogPosting + BreadcrumbList + FAQPage | §1.11 |
| `/about` | AboutPage + BreadcrumbList | §1.12 |
| `/contact` | ContactPage + BreadcrumbList | §1.13 |
| `/affiliate-disclosure` | WebPage + BreadcrumbList | §1.14 |
| `/privacy` | WebPage + BreadcrumbList | §1.15 |

### 内容集群策略

3 个月发布日历（12 篇文章/页面，含发布周次和目标关键词）详见 `CONTENT_CLUSTER_STRATEGY.md` §2。三大集群：

- **Cluster 1 多巴胺网站目录**：支柱 `/sites` + `/blog/best-dopamine-sites-2026`
- **Cluster 2 韩国多巴胺购物**：支柱 `/korean-dopamine-shopping` + `/yesstyle-vs-stylekorean`（YesStyle 10% 联盟）
- **Cluster 3 多巴胺生活方式**：支柱 `/dopamine-lifestyle` + `/dopamine-decor` + `/dopamine-dressing`（Amazon + YesStyle 联盟 + 邮件订阅）

---

## 《渲染模式技术规范》位置

- **文件路径**：`projs/dopamine_sites/prompts/dev_sop/mvp/phase2/rendering_spec_v1.md`
- **包含**：全站页面渲染模式分配表 + 渲染模式决策树 + 组件层铁律 + 元数据规范 + 广告与变现约束 + 性能目标
- **Phase 3 每个 Batch 必须对照此文件执行，验收时检查**

---

## 功能需求清单（专为 Phase 3 准备）

| Batch | 功能点 | 推荐后端 | 依赖 | 验收标准 | 渲染约束检查项 |
|-------|--------|---------|------|---------|--------------|
| **3a** | 项目初始化与架构搭建：Next.js 14/15 App Router + React 19 + TS strict + Tailwind CSS + MDX/Contentlayer + `@next/third-parties` + `@opennextjs/cloudflare` + `wrangler` + schema-dts；按路由表创建完整目录结构；配置 `next.config.ts`（`images.loader:"custom"` + `loaderFile` + remotePatterns + AVIF/WebP）；配置 `tailwind.config.ts`；配置 `tsconfig.json`（strict）；创建 Cloudflare 4 件套（`wrangler.jsonc` / `open-next.config.ts` / `image-loader.ts` / `public/_headers`，见 `SEO_TECH_SPEC.md` §2.7） | DeepSeek-V4 | 无 | `npm run build` 通过，目录结构与路由表一致，`wrangler.jsonc` 含 `nodejs_compat` + `compatibility_date≥2025-05-05` | 目录结构符合 `rendering_spec_v1.md` 第 1 节路由表；无 `runtime="edge"`；禁止 `next build --turbo` |
| **3b** | 核心 SEO 组件开发：`JsonLd`（支持 @graph 数组 + 单对象）、`OpenGraph`、`Breadcrumb`、`AffiliateLink`（自动 `rel="nofollow sponsored"`）、`AdSlot`（固定 `min-height` 防 CLS）；全 TypeScript strict + 单元测试 | Kimi K2.6 | 3a | Lighthouse SEO = 100，Schema.org Rich Results Test 全部通过 | metadata 服务端生成；JSON-LD 内联；联盟链接 nofollow sponsored；广告容器 min-height |
| **3c** | 页面模板与路由实现：15 类页面（首页 / 目录 / 分类 / 详情 / 韩国购物指南 / 对比页 / 生活方式 / 装饰 / 穿搭 / 博客列表 / 博客详情 / 关于 / 联系 / 联盟披露 / 隐私）；每个页面嵌入对应 Schema（直接复制 `SEO_TECH_SPEC.md` §1 代码块）；动态路由实现 `generateStaticParams`；ISR 页面配置 `revalidate`；博客详情支持 MDX frontmatter | Kimi K2.6 | 3a | 所有路由可访问，无 404，Schema 验证通过，`npm run build` 零报错 | 每页渲染模式符合规范第 1 节；无违规 "use client" |
| **3d** | 跨文件重构与性能优化：全站 `<img>` → `next/image` 迁移（priority 标记首屏图）；字体切换为 `next/font/google` + `display:swap`；交互式筛选器 `next/dynamic` 懒加载 + Suspense 骨架屏；`@next/third-parties` 接入 GA（afterInteractive）；广告容器固定 `min-height`；联盟链接全部走 `AffiliateLink` 组件 | DeepSeek-V4 | 3b, 3c | 零报错，Lighthouse: LCP ≤ 2.5s, CLS ≤ 0.1, INP ≤ 200ms | 检查无违规 "use client"；CLS < 0.1；广告容器规范 |
| **3e** | 部署与 CI/CD：Cloudflare Workers 项目 + `wrangler.jsonc`（`nodejs_compat` + `compatibility_date:2025-05-05` + R2/DO bindings）+ `open-next.config.ts` + 域名绑定（`dopamineweb.com`）；GitHub Actions（`runs-on: linux`；PR → Lighthouse CI + 渲染约束合规检查；merge to main → `opennextjs-cloudflare build && opennextjs-cloudflare deploy`）；`robots.ts`（Disallow: `/api/`、`/admin/`、`/*?*` + AI 爬虫禁抓）+ `sitemap-index.xml`（分片：pages / sites / blog）；环境变量配置（含 `CLOUDFLARE_API_TOKEN`）；Workers Paid 计划 | DeepSeek-V4 | 3d | Cloudflare Workers 部署成功，`npm run preview`（workerd）通过，Lighthouse CI 阈值 Performance ≥ 90 / SEO ≥ 95，sitemap 可访问，robots.txt 生效，Worker gzip < 10 MiB | CI 包含约束合规性检查脚本（对照 `rendering_spec_v1.md` + `nextjs_cloudflare_constraints.md`） |

---

## 技术栈终选

**框架：Next.js 14/15 App Router + React 19 + TypeScript strict + Tailwind CSS + MDX/Contentlayer**

**终选理由**（200 字）：通过浏览器实测，DopamineShopping.com 和 YesStyle.com 均使用了 Next.js App Router 架构（页面源码中存在 `__next_f`），证明其在处理高流量电商和展示型内容时具备卓越的 SEO 能力和性能。我们的核心诉求是建立一个 SEO 驱动的目录和内容站，Next.js 原生支持的 SSG（静态生成）和 ISR（增量静态生成）能完美满足我们在性能（LCP/TTFB）和内容新鲜度之间的平衡。结合 Tailwind CSS 可快速实现响应式设计，而 MDX 则能高效管理长篇博客和指南内容。部署采用 Cloudflare Workers + `@opennextjs/cloudflare`（OpenNext 适配器），兼顾全球边缘性能与低成本（Workers Paid $5/月起），ISR 通过 R2 + Durable Objects Queue 实现。

**部署**：Cloudflare Workers + `@opennextjs/cloudflare`（OpenNext）— `workerd` 运行时 + R2 ISR 缓存 + DO Queue revalidation + Cloudflare Images（`next/image` 自定义 loader）。约束依据：`action/quickopa/tecth_arch/nextjs_cloudflare_constraints.md`。

**SEO 工具链**：schema-dts（类型安全的 Schema.org 生成）+ `@next/third-parties`（GA 加载）。

---

## 下游消费指南（Phase 3 必须遵守）

1. Phase 3 必须按 Batch 顺序执行（3a → 3b → 3c → 3d → 3e），禁止跳 Batch
2. Phase 3 每个 Batch 必须切换对应后端模型：
   - Batch 3a / 3d / 3e → **DeepSeek-V4**（1M 上下文 + 384K 输出 + Terminal-Bench 67.9% + JSON mode 99.1%）
   - Batch 3b / 3c → **Kimi K2.6**（SWE-Bench Pro 58.6% + LiveCodeBench 89.6% + Next.js 基准领先）
3. Phase 3 的 Schema 实现必须严格复制 `SEO_TECH_SPEC.md` §1 中的 JSON-LD 代码块（禁止自行发挥）
4. Phase 3 的 URL 路由必须与 `INFORMATION_ARCHITECTURE.md` §1 路由表一致，禁止随意增减路由
5. Phase 3 的渲染模式必须与 `rendering_spec_v1.md` 完全一致（SSG / ISR 分配 + 代码标志）
6. Phase 3 的联盟链接必须使用 `AffiliateLink` 组件，自动添加 `rel="nofollow sponsored"`
7. Phase 3 的广告容器必须使用 `AdSlot` 组件，固定 `min-height` 防 CLS；内容页最多 3 个广告位，首屏最多 1 个
8. Phase 3 的 CWV 优化措施（`next/image` priority + Cloudflare Images 自定义 loader、`next/font` display:swap、`next/dynamic` 懒加载、`@next/third-parties` afterInteractive）必须在 3d 中逐项落地，不得仅在注释中标注
9. Phase 4 内容填充必须基于 `CONTENT_CLUSTER_STRATEGY.md` §2 的 3 个月发布日历；禁止修改任何页面的渲染模式
10. 禁止引用"Phase 2 策略文档"、"Manus 骨架"或"Gemini 骨架"——必须以本文件、`SEO_TECH_SPEC.md`、`INFORMATION_ARCHITECTURE.md`、`CONTENT_CLUSTER_STRATEGY.md`、`rendering_spec_v1.md`、`nextjs_cloudflare_constraints.md` 的表格和代码块为唯一依据
11. **Cloudflare Workers + OpenNext 约束**（依据 `action/quickopa/tecth_arch/nextjs_cloudflare_constraints.md`）：
    - 禁止 `export const runtime = "edge"`（§2.1）；禁止 `next build --turbo`（§3.2）
    - `wrangler.jsonc` 必须含 `nodejs_compat` + `compatibility_date ≥ 2025-05-05`（§2.2）
    - ISR 页面（`/sites`、`/sites/[slug]`（合并分类+详情）、`/blog`）依赖 R2 + DO Queue，配置见 `SEO_TECH_SPEC.md` §2.7（§5.1）
    - `next/image` 必须用 Cloudflare Images 自定义 loader（§6.1）；静态资源缓存必须用 `public/_headers`（§5.3）
    - 集成测试必须用 `npm run preview`（workerd），`npm run dev` 不够（§11.1）
    - 生产环境必须 Workers Paid 计划；Worker gzip < 10 MiB（§3.1 / §12）

---

## 交付物清单（Phase 2 产出文件）

| 文件 | 位置 | 内容 |
|------|------|------|
| `p2_handoff.md`（本文件） | `projs/dopamine_sites/workspace/` | Phase 2 → Phase 3 整合交接包 |
| `SEO_TECH_SPEC.md` | `projs/dopamine_sites/workspace/` | 15 类页面完整 JSON-LD + CWV 实现代码 + robots.ts + sitemap 配置 |
| `INFORMATION_ARCHITECTURE.md` | `projs/dopamine_sites/workspace/` | 完整 URL 路由表 + 页面层级树 + 核心转化路径 |
| `CONTENT_CLUSTER_STRATEGY.md` | `projs/dopamine_sites/workspace/` | 3 个月发布日历 + Cluster 明细 + 内链策略表 |
| `rendering_spec_v1.md` | `projs/dopamine_sites/prompts/dev_sop/mvp/phase2/` | 渲染模式技术规范（Phase 3-5 持续引用） |
| `p2_handoff.md`（Round 1 骨架） | `projs/dopamine_sites/prompts/dev_sop/mvp/phase2/` | Manus Round 1 骨架设计（历史留档，已被本文件取代） |
