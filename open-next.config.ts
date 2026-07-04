// OpenNext Cloudflare 适配器配置
// 依据: workspace/SEO_TECH_SPEC.md §2.7.2 + nextjs_cloudflare_constraints.md §5.1 / §5.2
// ISR 页面 (/sites, /sites/[slug], /blog) 依赖 R2 incrementalCache + DO Queue
import { defineCloudflareConfig } from "@opennextjs/cloudflare";
import r2IncrementalCache from "@opennextjs/cloudflare/overrides/incremental-cache/r2-incremental-cache";
import { withRegionalCache } from "@opennextjs/cloudflare/overrides/incremental-cache/regional-cache";
import doQueue from "@opennextjs/cloudflare/overrides/queue/do-queue";

export default defineCloudflareConfig({
  incrementalCache: withRegionalCache(r2IncrementalCache, { mode: "long-lived" }),
  queue: doQueue,
});
