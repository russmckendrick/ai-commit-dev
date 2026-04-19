# ai-commit.dev

Marketing and documentation site for [`aicommit`](https://github.com/russmckendrick/aicommit) — a Rust CLI that turns staged diffs into conventional commits, drafts PR descriptions, and reviews for bugs.

Live at **[ai-commit.dev](https://ai-commit.dev)**.

> Looking for the CLI itself? It lives at [russmckendrick/aicommit](https://github.com/russmckendrick/aicommit). This repo is just the website.

## Stack

- [Astro 6](https://astro.build) (static output) with [React](https://react.dev) islands
- [Tailwind CSS 4](https://tailwindcss.com) via the Vite plugin
- [Framer Motion](https://www.framer.com/motion/) for interactions
- [Mermaid](https://mermaid.js.org) diagrams via `astro-mermaid`
- [Cloudflare Workers](https://developers.cloudflare.com/workers/) with static assets

## Local development

Requirements: Node `>=22.12.0`, `pnpm@10.33.0` (pinned via `packageManager`).

```bash
pnpm install
pnpm dev        # http://localhost:4321
pnpm build      # output to ./dist
pnpm preview    # serve the built site
```

### Optional: GitHub token

The homepage and `/releases` page fetch from the [aicommit GitHub releases API](https://api.github.com/repos/russmckendrick/aicommit/releases) at build time ([`src/lib/releases.ts`](src/lib/releases.ts)). Unauthenticated requests are rate-limited to 60/hour per IP — fine locally, but set a token if you're hitting the limit:

```bash
export GITHUB_TOKEN=ghp_...
pnpm build
```

If the API call fails, the build falls back to [`src/data/releases.fallback.json`](src/data/releases.fallback.json).

## Project layout

```
src/
├── components/      Astro + React components
├── content/docs/    Markdown docs (collection)
├── data/            Terminal scripts, fallback release data
├── lib/             Release fetcher
├── pages/           Routes (index, docs/, releases/)
└── styles/          Global CSS
```

Docs pages are generated from Markdown in `src/content/docs/` via the `[...slug].astro` route.

## Deployment

Pushes to `main` trigger [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml), which builds the site and deploys to Cloudflare Workers via `wrangler deploy`.

### Required repo secrets

| Secret | Purpose |
| --- | --- |
| `CLOUDFLARE_API_TOKEN` | Custom token with `Workers Scripts: Edit`, `Account Settings: Read`, `Workers Routes: Edit`, `Zone: Read` |
| `CLOUDFLARE_ACCOUNT_ID` | Cloudflare account ID (dashboard sidebar) |

`GITHUB_TOKEN` is injected automatically by Actions — no setup needed.

### Worker config

[`wrangler.jsonc`](wrangler.jsonc) binds `./dist` as static assets and routes both `ai-commit.dev` and `www.ai-commit.dev` as custom domains. The zone must exist in the same Cloudflare account as the API token.

## License

MIT — same as the CLI.
