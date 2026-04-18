import type { AnimatedScript } from './types';

export const flowHistory: AnimatedScript = {
  type: 'animated',
  title: '~/projects/ai-commit-dev — aic history',
  loopMs: 22000,
  steps: [
    { kind: 'typed', t: 100,   prompt: '$ ', text: 'aic history', speed: 60 },
    { kind: 'line',  t: 900,   text: '' },
    { kind: 'line',  t: 1000,  text: '? History entries' },
    { kind: 'line',  t: 1200,  cls: 'green', text: '> commit | Today 11:22 | ai-commit-dev | ✨ feat(theme-switcher): surface theme variants in the picker' },
    { kind: 'line',  t: 1350,  cls: 'dim', text: '  review | Today 11:19 | ai-commit-dev | Warning 1. CSS fallback now overrides every theme until JS runs src/sty...' },
    { kind: 'line',  t: 1500,  cls: 'dim', text: '  review | Today 11:18 | ai-commit-dev | Warning 1. Removed :root from the Solarized Dark theme means any unthem...' },
    { kind: 'line',  t: 1650,  cls: 'dim', text: '  commit | Today 11:11 | ai-commit-dev | ♻️ refactor(theme): make solarized dark the default theme' },
    { kind: 'line',  t: 1800,  cls: 'dim', text: '  commit | Today 11:11 | ai-commit-dev | ✨ feat(docs): refresh site with modular docs and themed demos' },
    { kind: 'line',  t: 1950,  cls: 'dim', text: '  commit | Today 10:06 | aicommit | ✨ feat(ci): surface WinGet release PRs in workflow summaries' },
    { kind: 'line',  t: 2100,  cls: 'dim', text: 'v commit | Today 09:54 | aicommit | 🐛 fix(ci): validate winGet fork ownership before submission' },
    { kind: 'line',  t: 2300,  cls: 'dim', text: '[↑↓ to move, enter to select, type to filter]' },

    { kind: 'line',  t: 3800,  text: '' },
    { kind: 'typed', t: 3900,  prompt: '$ ', text: 'aic history', speed: 40 },
    { kind: 'line',  t: 4500,  text: '' },
    { kind: 'line',  t: 4600,  cls: 'dim', text: '> History entries  commit | Today 11:22 | ai-commit-dev | ✨ feat(theme-switcher): surface theme variants in the picker' },

    { kind: 'line',  t: 5000,  text: '' },
    { kind: 'line',  t: 5100,  cls: 'green', text: '◇ commit  ✨ feat(theme-switcher): surface theme variants in the picker' },
    { kind: 'line',  t: 5300,  cls: 'dim', text: '  Today 11:22  •  openai  •  gpt-5.4-mini  •  ai-commit-dev' },
    { kind: 'line',  t: 5450,  cls: 'dim', text: '  repo: /Users/russ.mckendrick/Code/ai-commit-dev' },
    { kind: 'line',  t: 5600,  cls: 'dim', text: '  files: 3 files' },
    { kind: 'line',  t: 5750,  cls: 'dim', text: '  3 files  •  paths: src/ (3)' },
    { kind: 'line',  t: 5900,  cls: 'dim', text: '  • src/components/Layout.astro' },
    { kind: 'line',  t: 6050,  cls: 'dim', text: '  • src/components/ThemeSwitcher.astro' },
    { kind: 'line',  t: 6200,  cls: 'dim', text: '  • src/styles/global.css' },

    { kind: 'line',  t: 6600,  text: '' },
    { kind: 'line',  t: 6700,  cls: 'bold', text: '  ┌ Stored output ───────────────────────────────────────────────────────────────────────────┐' },
    { kind: 'line',  t: 6850,  cls: 'green bold', text: '  │ ✨ feat(theme-switcher): surface theme variants in the picker                            │' },
    { kind: 'line',  t: 7000,  text: '  │                                                                                          │' },
    { kind: 'line',  t: 7150,  cls: 'dim', text: "  │ - Show each theme's variant label alongside the current theme name                       │" },
    { kind: 'line',  t: 7300,  cls: 'dim', text: '  │ - Carry accent color through to the swatch for a richer preview                          │' },
    { kind: 'line',  t: 7450,  cls: 'dim', text: "  │ - Improve the trigger's spacing and icon treatment for a tighter control                 │" },
    { kind: 'line',  t: 7600,  cls: 'dim', text: '  │ - Add a default theme fallback so the UI renders correctly before hydration              │' },
    { kind: 'line',  t: 7750,  cls: 'bold', text: '  └──────────────────────────────────────────────────────────────────────────────────────────┘' },

    { kind: 'line',  t: 8200,  text: '? History entry' },
    { kind: 'line',  t: 8400,  cls: 'green', text: '> Back to list' },
    { kind: 'line',  t: 8550,  cls: 'dim', text: '  Exit' },
    { kind: 'line',  t: 8750,  cls: 'dim', text: '[↑↓ to move, enter to select, type to filter]' },

    { kind: 'line',  t: 10200, text: '' },
    { kind: 'typed', t: 10400, prompt: '$ ', text: '', speed: 30 },
  ],
};
