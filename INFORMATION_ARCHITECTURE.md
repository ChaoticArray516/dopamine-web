# 信息架构文档 (INFORMATION_ARCHITECTURE)

> **项目**：Dopamine Sites
> **生成阶段**：Phase 2 Round 2（GLM-5.2 完整规范生成）
> **上游依据**：`p2_handoff.md`（Manus Round 1 骨架）+ `rendering_spec_v1.md`
> **生产域名**：`https://dopamineweb.com`

---

## 1. URL 路由表（完整）

| 层级 | 路由 | 页面类型 | 目标关键词 | Schema 类型 | 渲染模式 | 内链指向 | 备注 |
|------|------|---------|------------|------------|---------|---------|------|
| L1 | `/` | 首页 | dopamine site, dopamine website | WebSite + Organization + ItemList | SSG | `/sites`、`/korean-dopamine-shopping`、`/dopamine-lifestyle`、`/blog` | 静态主页，缓存时间长 |
| L1 | `/sites` | 目录首页 | dopamine sites list, oddly satisfying websites | CollectionPage + ItemList + BreadcrumbList | ISR (revalidate=3600) | `/sites/[slug]` | 定期重新生成，展示最新站点 |
| L2 | `/sites/[slug]` | 分类页 + 详情页（合并路由） | fake shopping sites, aesthetic websites / [site name] review | ItemList + BreadcrumbList（分类）/ Article + Review + BreadcrumbList + Organization（详情） | ISR (`generateStaticParams` + revalidate=3600) | `/sites`、`/korean-dopamine-shopping`（详情属购物类时） | ⚠️ 单路由承担分类与详情；Phase 3c 按 slug 区分渲染。原 `/sites/[category]` 已合并（Next.js 不允许同层级两个动态段） |
| L1 | `/korean-dopamine-shopping` | 核心指南 | korean dopamine shopping, k-beauty haul | Article + HowTo + BreadcrumbList + FAQPage | SSG | `/yesstyle-vs-stylekorean`、`/sites/yesstyle`、`/sites/stylekorean` | 韩国多巴胺购物长文指南 |
| L1 | `/yesstyle-vs-stylekorean` | 对比页 | yesstyle vs stylekorean | Article + BreadcrumbList + ItemList | SSG | `/korean-dopamine-shopping`、`/sites/yesstyle`、`/sites/stylekorean` | 高转化对比测评页 |
| L1 | `/dopamine-lifestyle` | 聚合页 | dopamine lifestyle, dopamine menu | CollectionPage + ItemList + BreadcrumbList | SSG | `/dopamine-decor`、`/dopamine-dressing`、`/blog/healthy-dopamine-menu` | 生活方式内容入口 |
| L2 | `/dopamine-decor` | 指南页 | dopamine decor, aesthetic room | Article + ImageGallery + BreadcrumbList + HowTo | SSG | `/dopamine-lifestyle`、联盟商品（Amazon） | 视觉驱动型内容 |
| L2 | `/dopamine-dressing` | 指南页 | dopamine dressing, mood boosting clothes | Article + ImageGallery + BreadcrumbList + HowTo | SSG | `/dopamine-lifestyle`、联盟商品（YesStyle） | 视觉驱动型内容 |
| L1 | `/blog` | 博客首页 | dopamine articles | Blog + CollectionPage + BreadcrumbList | ISR (revalidate=86400) | `/blog/[slug]` | 博客列表 |
| L2 | `/blog/[slug]` | 博客文章 | (长尾词) | BlogPosting + BreadcrumbList + FAQPage | SSG (`generateStaticParams`) | 同 Cluster 内文章、相关指南 | 静态博客文章 |
| L1 | `/about` | 关于页 | about dopamine sites | AboutPage + BreadcrumbList | SSG | `/contact` | |
| L1 | `/contact` | 联系页 | contact us | ContactPage + BreadcrumbList | SSG | `/about` | |
| L1 | `/affiliate-disclosure` | 披露页 | affiliate disclosure | WebPage + BreadcrumbList | SSG | `/privacy` | 必须的合规页面 |
| L1 | `/privacy` | 隐私页 | privacy policy | WebPage + BreadcrumbList | SSG | `/affiliate-disclosure` | |

### 不需要索引的路径

| 路径 | 原因 |
|------|------|
| `/api/*` | 内部接口，无 SEO 价值 |
| `/admin/*` | 后台管理，需保护 |
| `/*?*`（带参数链接） | 避免参数导致的重复内容惩罚（如 `?sort=*`、`?q=*`） |

---

## 2. 页面层级树

```
/ （首页 — WebSite + Organization + 精选站点 ItemList）
├── /sites （目录首页 — CollectionPage + ItemList，ISR）
│   └── /sites/[slug] （合并路由 — 分类页 ItemList / 详情页 Article+Review，ISR revalidate=3600）
│       ├── /sites/fake-shopping （分类页 — ItemList）
│       ├── /sites/oddly-satisfying （分类页）
│       ├── /sites/interactive-art （分类页）
│       ├── /sites/cozy （分类页）
│       ├── /sites/dopamineshopping （详情页 — Article + Review）
│       ├── /sites/foodnevercomes （详情页）
│       ├── /sites/the-useless-web （详情页）
│       └── …（更多分类与详情 slug；Phase 3c 按 slug 区分渲染分类列表 vs 站点详情）
├── /korean-dopamine-shopping （核心指南 — Article + HowTo + FAQPage）
│   └── /yesstyle-vs-stylekorean （对比页 — Article + ItemList）
├── /dopamine-lifestyle （聚合页 — CollectionPage）
│   ├── /dopamine-decor （指南页 — Article + ImageGallery + HowTo）
│   └── /dopamine-dressing （指南页 — Article + ImageGallery + HowTo）
├── /blog （博客首页 — Blog + CollectionPage，ISR）
│   ├── /blog/best-dopamine-sites-2026
│   ├── /blog/oddly-satisfying-websites
│   ├── /blog/fake-shopping-sites-explained
│   ├── /blog/healthy-dopamine-menu
│   └── /blog/[slug] …（更多博客文章）
└── /about、/contact、/affiliate-disclosure、/privacy （静态合规页）
```

---

## 3. 核心转化路径

### 路径 A：目录浏览 → 联盟点击（主转化路径）

```
1. 用户着陆 / 或 /sites （SSG/ISR，首屏含站点卡片网格）
   ↓ CTA："Explore the directory"
2. 用户进入 /sites/fake-shopping 分类页（ISR，/sites/[slug] 合并路由）
   ↓ 浏览站点卡片
3. 用户点击进入 /sites/dopamineshopping 详情页（ISR，同一 /sites/[slug] 路由，含 Review Schema）
   ↓ 详情页底部 AffiliateLink（rel="nofollow sponsored"）
4. 用户点击联盟链接 → 跳转 dopamineshopping.com（无佣金，纯引流）
   或 /yesstyle-vs-stylekorean 对比页 → 点击 YesStyle 联盟链接（10% 佣金）
```

**每个步骤的 CTA**：
- `/` 与 `/sites`：卡片上 "Visit site" 按钮（站点为联盟时用 AffiliateLink）
- `/sites/[slug]`：文章底部 "Try [site name] →" 主 CTA + "Compare alternatives" 次要链接
- `/yesstyle-vs-stylekorean`：对比表每行 "View on YesStyle" / "View on StyleKorean" AffiliateLink

### 路径 B：指南阅读 → 联盟购买

```
1. 用户搜索 "korean dopamine shopping" → 进入 /korean-dopamine-shopping（SSG，含 HowTo + FAQPage）
   ↓ 指南内嵌联盟商品推荐
2. 用户点击 "Shop K-Beauty on YesStyle"（AffiliateLink，10% 佣金）
   或跳转 /yesstyle-vs-stylekorean 做购买决策
3. 用户在 YesStyle 完成购买 → 联盟佣金转化
```

**每个步骤的 CTA**：
- 指南页：步骤卡内嵌 "Recommended platform" AffiliateLink + 文末 "Full comparison" 链向对比页
- 对比页：胜出方高亮 "Best for [use case]" AffiliateLink

### 路径 C：娱乐浏览 → 广告互动

```
1. 用户搜索 "websites to visit when bored" → 进入 /blog/best-dopamine-sites-2026（SSG）
   ↓ 博客文章内嵌 1 个首屏广告位 + 2 个内容区广告位（AdSlot，固定 min-height）
2. 用户浏览榜单 → 点击内链进入 /sites/oddly-satisfying
3. 用户在目录页与广告位互动 → 展示广告变现
```

**每个步骤的 CTA**：
- 博客文章：榜单每项 "Visit site" + 文末 "More dopamine sites →" 链向 `/sites`
- 目录页：广告位（首屏最多 1 个）+ 站点卡片

### 路径 D：邮件订阅（长期留存）

```
1. 用户在任意指南页/博客页底部看到邮件订阅表单（Server Component 渲染容器）
   ↓ 提交邮箱（Client Component 处理表单）
2. 订阅成功 → 每周 Top 10 多巴胺网站榜单邮件
   ↓ 邮件内链回 /sites 与最新博客
3. 用户回访 → 重复路径 A/B/C
```

**CTA**：
- 指南页/博客页底部："Get the weekly dopamine drop in your inbox"
- 订阅成功页：返回 `/sites` 浏览按钮

---

## 4. 渲染模式合规性说明

本路由表所有页面的渲染模式与 `rendering_spec_v1.md` §1 全站页面渲染模式分配表完全一致：

- **SSG 页面**（默认 Server Component）：`/`、`/korean-dopamine-shopping`、`/yesstyle-vs-stylekorean`、`/dopamine-lifestyle`、`/dopamine-decor`、`/dopamine-dressing`、`/blog/[slug]`、`/about`、`/contact`、`/affiliate-disclosure`、`/privacy`
- **ISR 页面**（`export const revalidate` 或 `generateStaticParams` + `revalidate`）：`/sites` (3600s)、`/sites/[slug]` (3600s，合并分类页+详情页)、`/blog` (86400s)
- **CSR 组件**（仅在交互式筛选器、广告脚本、邮件表单等子组件上 `"use client"`）：无页面级 CSR

Phase 3 实现时，每个页面的代码标志必须与上表"渲染模式"列一致，验收时对照 `rendering_spec_v1.md` §1 逐页检查。
