import type { StaticScript } from './types';

export const installMacOS: StaticScript = {
  type: 'static',
  title: 'macOS',
  content: `# Homebrew — recommended on macOS
brew install russmckendrick/tap/aicommit

# then
aic setup`,
};
