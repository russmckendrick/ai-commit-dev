---
version: "alpha"
name: "ai-commit.dev Design System"
description: "A terminal-native, themeable design system for the aic CLI website."
colors:
  primary: "#2AA198"
  secondary: "#268BD2"
  tertiary: "#B58900"
  neutral: "#002B36"
  surface: "#073642"
  surface-raised: "#0A4B5A"
  on-surface: "#EEE8D5"
  on-surface-muted: "#93A1A1"
  on-surface-dim: "#657B83"
  border: "#0F4A59"
  accent-soft: "#063F46"
  error: "#DC322F"
  terminal-red: "#FF5F56"
  terminal-yellow: "#FFBD2E"
  terminal-green: "#27C93F"
typography:
  headline-display:
    fontFamily: "Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', system-ui, sans-serif"
    fontSize: 58px
    fontWeight: 600
    lineHeight: 1.03
    letterSpacing: -0.025em
    fontFeature: "'ss01', 'cv11'"
  headline-section:
    fontFamily: "Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', system-ui, sans-serif"
    fontSize: 42px
    fontWeight: 600
    lineHeight: 1.1
    letterSpacing: -0.02em
    fontFeature: "'ss01', 'cv11'"
  headline-content:
    fontFamily: "Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', system-ui, sans-serif"
    fontSize: 24px
    fontWeight: 600
    lineHeight: 1.2
    letterSpacing: -0.015em
    fontFeature: "'ss01', 'cv11'"
  body-lg:
    fontFamily: "Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', system-ui, sans-serif"
    fontSize: 17px
    fontWeight: 400
    lineHeight: 1.55
    letterSpacing: 0em
    fontFeature: "'ss01', 'cv11'"
  body-md:
    fontFamily: "Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', system-ui, sans-serif"
    fontSize: 15px
    fontWeight: 400
    lineHeight: 1.55
    letterSpacing: 0em
    fontFeature: "'ss01', 'cv11'"
  body-sm:
    fontFamily: "Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', system-ui, sans-serif"
    fontSize: 13.5px
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: 0em
    fontFeature: "'ss01', 'cv11'"
  mono-md:
    fontFamily: "'JetBrains Mono', ui-monospace, SFMono-Regular, Menlo, Consolas, monospace"
    fontSize: 13px
    fontWeight: 500
    lineHeight: 1.65
    letterSpacing: 0em
  mono-label:
    fontFamily: "'JetBrains Mono', ui-monospace, SFMono-Regular, Menlo, Consolas, monospace"
    fontSize: 11.5px
    fontWeight: 500
    lineHeight: 1.2
    letterSpacing: 0.06em
spacing:
  xs: 4px
  sm: 8px
  md: 16px
  lg: 24px
  xl: 40px
  xxl: 64px
  section: 96px
  shell-gutter: 32px
  nav-height: 60px
rounded:
  none: 0px
  xs: 4px
  sm: 6px
  md: 8px
  lg: 10px
  xl: 12px
  full: 999px
components:
  body-shell:
    backgroundColor: "{colors.neutral}"
    textColor: "{colors.on-surface-muted}"
    typography: "{typography.body-md}"
  heading-display:
    textColor: "{colors.on-surface}"
    typography: "{typography.headline-display}"
  heading-section:
    textColor: "{colors.on-surface}"
    typography: "{typography.headline-section}"
  nav-bar:
    backgroundColor: "{colors.neutral}"
    textColor: "{colors.on-surface}"
    height: "{spacing.nav-height}"
  button-primary:
    backgroundColor: "{colors.on-surface}"
    textColor: "{colors.neutral}"
    typography: "{typography.mono-label}"
    rounded: "{rounded.sm}"
    padding: "{spacing.sm}"
  button-secondary:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.on-surface}"
    typography: "{typography.mono-label}"
    rounded: "{rounded.sm}"
    padding: "{spacing.sm}"
  button-ghost:
    textColor: "{colors.on-surface-dim}"
    typography: "{typography.mono-label}"
    rounded: "{rounded.sm}"
    padding: "{spacing.sm}"
  icon-button:
    textColor: "{colors.on-surface-dim}"
    typography: "{typography.mono-label}"
    rounded: "{rounded.sm}"
    width: 36px
    height: 36px
  badge-accent:
    backgroundColor: "{colors.accent-soft}"
    textColor: "{colors.on-surface}"
    typography: "{typography.mono-label}"
    rounded: "{rounded.full}"
    padding: "{spacing.sm}"
  link-primary:
    textColor: "{colors.primary}"
    typography: "{typography.body-md}"
  link-secondary:
    textColor: "{colors.secondary}"
    typography: "{typography.body-md}"
  status-warning:
    textColor: "{colors.tertiary}"
    typography: "{typography.mono-md}"
  status-error:
    textColor: "{colors.error}"
    typography: "{typography.mono-md}"
  divider:
    backgroundColor: "{colors.border}"
    height: 1px
  terminal:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.on-surface}"
    typography: "{typography.mono-md}"
    rounded: "{rounded.lg}"
  terminal-chrome:
    backgroundColor: "{colors.surface-raised}"
    textColor: "{colors.on-surface}"
    typography: "{typography.mono-label}"
    height: "{spacing.xl}"
  terminal-dot-red:
    backgroundColor: "{colors.terminal-red}"
    rounded: "{rounded.full}"
    width: 11px
    height: 11px
  terminal-dot-yellow:
    backgroundColor: "{colors.terminal-yellow}"
    rounded: "{rounded.full}"
    width: 11px
    height: 11px
  terminal-dot-green:
    backgroundColor: "{colors.terminal-green}"
    rounded: "{rounded.full}"
    width: 11px
    height: 11px
  card:
    backgroundColor: "{colors.neutral}"
    textColor: "{colors.on-surface-muted}"
    typography: "{typography.body-sm}"
    rounded: "{rounded.xl}"
    padding: "{spacing.lg}"
  card-hover:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.on-surface}"
    typography: "{typography.body-sm}"
    rounded: "{rounded.xl}"
    padding: "{spacing.lg}"
  docs-code:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.on-surface}"
    typography: "{typography.mono-md}"
    rounded: "{rounded.lg}"
    padding: "{spacing.lg}"
  flow-tab-active:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.on-surface}"
    typography: "{typography.mono-md}"
    rounded: "{rounded.none}"
    padding: "{spacing.md}"
---

## Overview

ai-commit.dev should feel like a precise CLI manual wrapped in a polished terminal interface. The design is calm, technical, and low-friction: dense enough for developers to scan, but refined enough that the marketing surface still feels trustworthy. The primary emotional target is confidence - the user should feel that `aic` is a small, capable tool that fits naturally into an existing Git workflow.

The site is themeable, but the design language stays consistent across themes: semantic surfaces, muted text, thin separators, monospace command affordances, and small accent cues. Avoid decorative spectacle; let the terminal, docs, provider grid, and generated map previews carry the visual identity.

## Colors

The canonical token palette mirrors the default Solarized Dark theme from `src/styles/global.css`. `primary` is the terminal green accent used for prompts, active states, badges, and inline emphasis. `secondary` is the blue informational accent used by links, info states, and map/terminal output. `neutral`, `surface`, and `surface-raised` form the page, card, and terminal stack.

Text uses three layers: `on-surface` for headings and commands, `on-surface-muted` for body copy, and `on-surface-dim` for metadata, secondary nav links, and supporting labels. `accent-soft` approximates the CSS `color-mix()` accent wash used behind badges and highlighted docs elements. Warning, error, and terminal traffic-light colors should be sparse, contextual, and tied to actual CLI/status meaning.

## Theme Variants

The production site supports GitHub Dark, GitHub Light, Classic Light, Classic Dark, Solarized Light, Solarized Dark, Monokai, and Dracula. Treat these as alternate mappings for the same semantic roles rather than separate component systems. New UI should use semantic CSS variables such as `--bg`, `--bg-elev`, `--ink`, `--ink-soft`, `--line`, and `--accent`, then let `src/data/themes.ts` and `src/styles/global.css` provide theme-specific values.

## Typography

Inter is the primary reading face for page titles, section headings, body copy, and documentation prose. JetBrains Mono is a first-class brand element, not just a code font: use it for the `aic` wordmark, command labels, install snippets, terminal output, tabs, metadata, and compact controls.

Headlines are large but tight, with 600 weight and balanced line lengths. Body copy stays modest at 15-17px with generous line-height. Monospace labels are intentionally small, often uppercased, and should read like terminal chrome rather than marketing badges.

## Layout

Use a centered shell with a maximum width of 1200px, 32px desktop gutters, and 20px mobile gutters. Home sections breathe with roughly 96px vertical padding on desktop and 72px on smaller screens. Docs pages are denser: a 220px sticky sidebar, a flexible article column, and a top offset that respects the 60px sticky nav.

The site prefers line-based grids over floating card stacks. Feature, provider, docs, and flow-tab groups use 1px gaps, thin borders, and clipped containers to create structure without heavy panels. Keep hero layouts two-column on desktop and single-column on narrow viewports, with the terminal preview treated as primary content.

## Elevation & Depth

Depth is restrained. The base hierarchy comes from tonal surfaces, separators, and type contrast, not large shadows. Use shadows only for elements that genuinely float: sticky/mobile nav drawers, terminal previews, dropdown menus, and zoomed map previews.

Blurred translucency is appropriate for the sticky nav because it reinforces the shell without becoming decorative. Avoid generic glow effects; when emphasis is needed, prefer an accent line, a soft accent fill, or a 1px focus ring.

## Shapes

Corners are compact and utilitarian. Most controls use 6-8px radii, terminals and media cards use 10px, and grouped grids use 12-14px outer clipping. Pills are reserved for small status or release badges with `rounded.full`.

Sharp edges are acceptable inside dense structures such as tab lists and split grid cells. Do not over-round large page sections or create nested rounded panels inside other rounded panels.

## Components

Buttons are monospace, compact, and command-like. Primary buttons invert the foreground and background (`on-surface` on `neutral`) rather than relying on the accent color; accent is reserved for active states, prompts, links, and status indicators. Icon buttons are 32-36px square with subtle borders or hover fills.

Terminal blocks are signature components. Use a thin bordered frame, a raised chrome strip, three traffic-light dots, JetBrains Mono output, and accent-colored prompts. Code blocks in docs should reuse the terminal frame and copy affordance so examples feel consistent with the homepage demo.

Cards are usually grid cells, not floating islands. Feature cards, provider cells, docs cards, and theme cards should share thin separators, surface hover states, small metadata labels, and modest motion. Active tabs and selected theme cards use accent or foreground borders rather than saturated fills.

## Iconography

Use simple line icons at small sizes, usually 11-18px, aligned with monospace labels. Icons support scanability in nav, docs, and provider contexts; they should not become decorative illustrations. Provider marks and generated map previews are the main visual assets.

## Motion

Motion should be short, functional, and tied to state change. Existing timings are mostly 120-220ms for hover/focus states, with slightly longer map zoom transitions around 320ms. Respect reduced-motion preferences for decorative hover transforms and reveal effects.

## Do's and Don'ts

- Do build new UI from semantic variables and token roles, then verify it across both light and dark themes.
- Do use accent sparingly for prompts, active indicators, links, release badges, and focused status cues.
- Do keep command, provider, docs, and terminal surfaces information-dense with compact spacing and clear separators.
- Do preserve the terminal-native feel with JetBrains Mono labels, small icon buttons, and CLI-shaped copy.
- Don't introduce large decorative gradients, floating hero cards, or unrelated illustration styles.
- Don't hard-code theme-specific colors in components unless adding a new theme preview or generated map asset.
- Don't use heavy shadows for normal content cards; use borders, tonal surfaces, and accent lines first.
- Don't make marketing claims or demo copy that drift away from the real `aic` CLI command surface.
