# Dopamine Sites

**Live site**: [https://dopamineweb.com](https://dopamineweb.com)

A curated directory of websites, apps, and shopping destinations that deliver instant delight — from oddly satisfying sites and fake-shopping toys to Korean dopamine shopping guides.

Built with **Next.js 15 App Router**, **React 19**, **TypeScript**, **Tailwind CSS v4**, and deployed to **Cloudflare Workers** via [`@opennextjs/cloudflare`](https://opennext.js.org/cloudflare).

---

## Tech Stack

| Layer | Choice |
|-------|--------|
| Framework | Next.js 15.5.20 (App Router) |
| React | 19.2.4 |
| Language | TypeScript 5 (strict) |
| Styling | Tailwind CSS v4 (CSS-first config) |
| Content | contentlayer2 + MDX |
| Fonts | Inter (sans), Poppins (display) via `next/font/google` |
| SEO | Next.js Metadata API + JSON-LD `@graph` + sitemap + robots |
| Deployment | Cloudflare Workers (`@opennextjs/cloudflare`) |
| Package Manager | pnpm |

---

## Getting Started

```bash
cd workspace
pnpm install
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

> **Note**: Tailwind v4 uses CSS-first configuration in `src/app/globals.css`. If you modify `@theme inline` tokens, delete `.next/` and restart `pnpm dev` to regenerate utility classes.

---

## Build & Deploy

### Local build

```bash
pnpm build
```

### Preview on Cloudflare Workers (local)

```bash
pnpm preview
```

### Deploy to production

```bash
pnpm deploy
```

> Requires Cloudflare credentials and `wrangler.jsonc` configuration. Do not commit API tokens or `.env*` files.

---

## Project Structure

```
workspace/
├── content/
│   ├── blog/          # MDX blog posts
│   └── sites/         # MDX site reviews
├── public/
│   ├── _headers       # Cloudflare security headers
│   └── ...            # Static assets
├── src/
│   ├── app/           # Next.js App Router routes
│   ├── components/    # React components (ads, cards, layout, seo, etc.)
│   └── lib/           # Utilities, config, content helpers
├── contentlayer.config.ts
├── next.config.ts
├── open-next.config.ts
├── wrangler.jsonc
└── package.json
```

---

## Content Clusters

- **Dopamine Sites Directory** — oddly satisfying, fake shopping, interactive art, cozy
- **Korean Dopamine Shopping** — YesStyle, StyleKorean, K-beauty hauls
- **Dopamine Lifestyle** — room decor, aesthetic dressing, healthy routines

---

## SEO & Compliance

- JSON-LD structured data rendered server-side for every route.
- Sitemap generated at `/sitemap.xml`.
- `robots.ts` blocks `/api/`, `/admin/`, and known AI crawlers.
- Affiliate links use `rel="nofollow sponsored noopener noreferrer"`.
- See [`COMPLIANCE_REPORT.md`](./COMPLIANCE_REPORT.md) for the full constraint audit.

---

## License

© Dopamine Sites. All rights reserved.
