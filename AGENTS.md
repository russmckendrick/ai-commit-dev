# AGENTS.md

## Tooling

- Package manager: `pnpm`
- Dev server: `pnpm dev`
- Verify site changes: `pnpm build`
- Refresh Cloudflare worker types after config changes: `pnpm generate-types`

## Docs Rules

- Treat `/Users/russ.mckendrick/Code/aicommit/docs` as the source of truth for shared command docs.
- Keep `/Users/russ.mckendrick/Code/ai-commit-dev/src/content/docs` in sync with those shared pages.
- Keep site-only marketing and demo copy aligned with the real CLI surface, especially provider support and `aic pr`.
- The website's release pages are driven by GitHub release data and `src/data/releases.fallback.json`; do not mirror `/Users/russ.mckendrick/Code/aicommit/docs/releases` unless explicitly asked.

## Design system

See [`DESIGN.md`](./DESIGN.md) for the project's design tokens and component conventions. Read it before generating UI.
