# 内容集群策略文档 (CONTENT_CLUSTER_STRATEGY)

> **项目**：Dopamine Sites
> **生成阶段**：Phase 2 Round 2（GLM-5.2 完整规范生成）
> **上游依据**：`p2_handoff.md`（Manus Round 1 骨架，3 个月发布日历）+ `p1_handoff.md`（内容集群建议）
> **生产域名**：`https://dopamineweb.com`

---

## 1. 内容集群总览

基于 `p1_handoff.md` 三大内容集群建议与社区需求金字塔，本站构建三个内容集群，每个集群由支柱页面（Pillar）+ 子话题（Supporting）+ 博客文章组成，通过内部链接相互强化。

| Cluster | 主题 | 支柱页面 | 目标人群 | 变现方式 |
|---------|------|---------|---------|---------|
| Cluster 1 | 多巴胺网站目录 | `/sites` + `/blog/best-dopamine-sites-2026` | 无聊解压、找趣味网站的网民 | 赞助收录 + 展示广告 |
| Cluster 2 | 韩国多巴胺购物 | `/korean-dopamine-shopping` + `/yesstyle-vs-stylekorean` | K-Beauty/K-Fashion 爱好者 | YesStyle/StyleKorean 联盟（10% 佣金） |
| Cluster 3 | 多巴胺生活方式 | `/dopamine-lifestyle` + `/dopamine-decor` + `/dopamine-dressing` | 追求审美与情绪提升的用户 | Amazon Associates（Decor）+ YesStyle（Dressing）+ 邮件订阅 |

---

## 2. 3 个月内容发布日历（完整）

| 月份 | 周次 | 所属集群 | 文章/页面标题 | 目标关键词 | URL 路径 | 内容类型 | 字数目标 | 内链指向 | 渲染模式 |
|------|------|---------|-------------|-----------|---------|---------|---------|---------|---------|
| M1 | W1 | Cluster 1 | Best Dopamine Sites to Visit When Bored in 2026 | dopamine sites to visit when bored | `/blog/best-dopamine-sites-2026` | Listicle | 1500 | `/sites`、`/sites/fake-shopping` | SSG |
| M1 | W2 | Cluster 3 | What is Dopamine Decor? How to Create a Happy Space | dopamine decor aesthetic | `/dopamine-decor` | Guide | 2000 | `/blog`、联盟商品（Amazon） | SSG |
| M1 | W3 | Cluster 2 | The Ultimate Guide to Korean Dopamine Shopping | korean dopamine shopping online | `/korean-dopamine-shopping` | Guide | 2500 | `/yesstyle-vs-stylekorean`、`/sites/yesstyle` | SSG |
| M1 | W4 | Cluster 2 | YesStyle vs StyleKorean: Which is Better for K-Beauty? | yesstyle vs stylekorean | `/yesstyle-vs-stylekorean` | Comparison | 2000 | `/korean-dopamine-shopping`、`/sites/yesstyle`、`/sites/stylekorean` | SSG |
| M2 | W5 | Cluster 1 | 10 Oddly Satisfying Websites That Will Give You Dopamine | oddly satisfying websites to visit | `/blog/oddly-satisfying-websites` | Listicle | 1500 | `/sites/oddly-satisfying`、`/sites` | SSG |
| M2 | W6 | Cluster 3 | What is Dopamine Dressing? Boost Your Mood with Clothes | dopamine dressing website shopping | `/dopamine-dressing` | Guide | 2000 | `/blog`、联盟商品（YesStyle） | SSG |
| M2 | W7 | Cluster 1 | FoodNeverComes & Fake Shopping Sites Explained | fake shopping sites korea | `/blog/fake-shopping-sites-explained` | Article | 1800 | `/sites/fake-shopping`、`/korean-dopamine-shopping` | SSG |
| M2 | W8 | Cluster 3 | How to Build a Healthy "Dopamine Menu" | dopamine menu ideas | `/blog/healthy-dopamine-menu` | Guide | 1500 | `/dopamine-lifestyle`、`/dopamine-decor`、`/dopamine-dressing` | SSG |
| M3 | W9 | Cluster 1 | 15 Best Aesthetic Websites to Cure Boredom | aesthetic websites | `/blog/aesthetic-websites` | Listicle | 1500 | `/sites`、`/sites/cozy` | SSG |
| M3 | W10 | Cluster 2 | Where to Buy Aesthetic Korean Decor Online | aesthetic korean decor | `/blog/buy-aesthetic-korean-decor` | Guide | 1800 | `/dopamine-decor`、联盟商品（YesStyle/Amazon） | SSG |
| M3 | W11 | Cluster 2 | Best K-Beauty Hauls of 2026: What to Buy on YesStyle | k-beauty haul | `/blog/best-k-beauty-hauls-2026` | Listicle | 1800 | `/yesstyle-vs-stylekorean`、`/sites/yesstyle` | SSG |
| M3 | W12 | Cluster 3 | Dopamine Room Makeover: Before & After | dopamine room makeover | `/blog/dopamine-room-makeover` | Guide | 2000 | `/dopamine-decor`、联盟商品（Amazon） | SSG |

---

## 3. Cluster 明细

### Cluster 1：多巴胺网站目录 (Dopamine Site Directory)

**支柱页面（Pillar）**：
- `/sites` — 目录首页（ISR，核心导航枢纽）
- `/blog/best-dopamine-sites-2026` — 首篇支柱博客（W1 发布）

**子话题（Supporting）**：
- `/sites/fake-shopping` — 假装购物分类
- `/sites/oddly-satisfying` — 解压互动分类
- `/sites/interactive-art` — 互动艺术分类
- `/sites/cozy` — 治愈冥想分类

**博客文章**：
- `/blog/best-dopamine-sites-2026` (W1)
- `/blog/oddly-satisfying-websites` (W5)
- `/blog/fake-shopping-sites-explained` (W7)
- `/blog/aesthetic-websites` (W9)

**变现**：赞助收录（Sponsored Listings）+ 目录页/博客页展示广告

### Cluster 2：韩国多巴胺购物 (Korean Dopamine Shopping)

**支柱页面（Pillar）**：
- `/korean-dopamine-shopping` — 核心指南（SSG，含 HowTo + FAQPage）
- `/yesstyle-vs-stylekorean` — 高转化对比页

**子话题（Supporting）**：
- `/sites/yesstyle` — YesStyle 站点测评
- `/sites/stylekorean` — StyleKorean 站点测评

**博客文章**：
- `/blog/buy-aesthetic-korean-decor` (W10)
- `/blog/best-k-beauty-hauls-2026` (W11)

**变现**：YesStyle 联盟（10% 佣金）+ StyleKorean 联盟

### Cluster 3：多巴胺生活方式 (Dopamine Lifestyle & Aesthetics)

**支柱页面（Pillar）**：
- `/dopamine-lifestyle` — 生活方式聚合页
- `/dopamine-decor` — 装饰指南（含 ImageGallery + HowTo）
- `/dopamine-dressing` — 穿搭指南（含 ImageGallery + HowTo）

**子话题（Supporting）**：
- 多巴胺装饰实操（房间改造、配色方案）
- 多巴胺穿搭公式（色彩搭配、单品推荐）
- 健康多巴胺获取（Dopamine Menu、替代成瘾方案）

**博客文章**：
- `/blog/healthy-dopamine-menu` (W8)
- `/blog/dopamine-room-makeover` (W12)

**变现**：Amazon Associates（Decor 商品）+ YesStyle 联盟（Dressing 商品）+ 邮件订阅留存

---

## 4. 内部链接策略表

| 锚文本 | 来源页面 | 目标 URL | 规则 |
|--------|---------|---------|------|
| "dopamine sites directory" | 所有指南页/博客页前 200 字 | `/sites` | 强制：每篇指南/博客正文首段必须包含 |
| "fake shopping sites" | `/blog/best-dopamine-sites-2026`、`/blog/fake-shopping-sites-explained` | `/sites/fake-shopping` | 提及 fake shopping 时必须链接 |
| "oddly satisfying websites" | `/blog/oddly-satisfying-websites`、`/blog/aesthetic-websites` | `/sites/oddly-satisfying` | 提及 oddly satisfying 时链接 |
| "Korean dopamine shopping" | `/yesstyle-vs-stylekorean`、`/blog/best-k-beauty-hauls-2026`、`/blog/buy-aesthetic-korean-decor` | `/korean-dopamine-shopping` | 提及韩国购物时链接回支柱页 |
| "YesStyle vs StyleKorean" | `/korean-dopamine-shopping`、`/blog/best-k-beauty-hauls-2026` | `/yesstyle-vs-stylekorean` | 提及对比时链接 |
| "dopamine decor" | `/dopamine-lifestyle`、`/blog/healthy-dopamine-menu`、`/blog/dopamine-room-makeover` | `/dopamine-decor` | 提及装饰时链接 |
| "dopamine dressing" | `/dopamine-lifestyle`、`/blog/healthy-dopamine-menu` | `/dopamine-dressing` | 提及穿搭时链接 |
| "dopamine menu" | `/dopamine-decor`、`/dopamine-dressing` | `/blog/healthy-dopamine-menu` | 提及健康多巴胺时链接 |
| 文章间交叉链接 | 同 Cluster 内博客文章 | 对应 `/blog/[slug]` | 每篇博客至少 2 条指向同 Cluster 其他文章 |
| 站点测评内链 | `/sites/[slug]`（购物类） | `/korean-dopamine-shopping` 或 `/yesstyle-vs-stylekorean` | 购物类站点详情页必须链向对比页 |
| 联盟披露链接 | 任意含 AffiliateLink 的页面页脚 | `/affiliate-disclosure` | 所有含联盟链接的页面页脚必须链接披露页 |

---

## 5. 内链结构图（文字版）

```
                        ┌─────────────────────────────────────────┐
                        │  /  (首页 — Pillar)                       │
                        │  WebSite + Organization + ItemList       │
                        └──────────────┬──────────────────────────┘
                                       │
            ┌──────────────────────────┼──────────────────────────┐
            ▼                          ▼                          ▼
   ┌─────────────────┐      ┌─────────────────────┐     ┌─────────────────────┐
   │  Cluster 1      │      │  Cluster 2          │     │  Cluster 3          │
   │  /sites (Pillar)│      │  /korean-dopamine-  │     │  /dopamine-lifestyle│
   │                 │      │  shopping (Pillar)  │     │  (Pillar)           │
   └────────┬────────┘      └──────────┬──────────┘     └──────────┬──────────┘
            │                          │                           │
   ┌────────┼────────┐        ┌────────┴────────┐         ┌───────┴────────┐
   ▼        ▼        ▼        ▼                 ▼         ▼                ▼
 /sites/   /sites/  /sites/  /yesstyle-       /blog/     /dopamine-      /dopamine-
 fake-     oddly-   cozy     vs-stylekorean   best-k-    decor           dressing
 shopping  satisfy          (Comparison)      beauty-    (Guide)         (Guide)
   │        │                 │               hauls       │                │
   │        │                 │                            │                │
   ▼        ▼                 ▼                            ▼                ▼
 /blog/    /blog/            /sites/yesstyle             /blog/           /blog/
 best-     oddly-            /sites/stylekorean          dopamine-        healthy-
 dopamine  satisfy                                       room-            dopamine-
 -sites    -websites                                     makeover         menu
 -2026
```

---

## 6. 渲染模式合规性说明

所有博客文章（`/blog/[slug]`）与指南页（`/dopamine-*`、`/korean-dopamine-shopping`、`/yesstyle-vs-stylekorean`）均为 **SSG**，与 `rendering_spec_v1.md` §1 一致。博客首页 `/blog` 与目录页 `/sites` 为 **ISR**，分别设置 `revalidate=86400` 与 `revalidate=3600`。

Phase 4 内容填充时：
- 不得改变任何页面的渲染模式
- 新增内容页面的渲染模式必须登记到 `rendering_spec_v1.md`
- JSON-LD 中的 `dateModified` 必须随内容更新而更新
- 内容注入不得改变任何页面的 `"use client"` / Server Component 状态
