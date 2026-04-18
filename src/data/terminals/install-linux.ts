import type { StaticScript } from './types';

export const installLinux: StaticScript = {
  type: 'static',
  title: 'Linux',
  content: `ARCH=$(uname -m | sed 's/x86_64/amd64/;s/aarch64/arm64/')
curl -sL "https://github.com/russmckendrick/aicommit/releases/\\
  latest/download/aic-linux-\${ARCH}" -o aic
chmod +x aic && sudo mv aic /usr/local/bin/
aic setup`,
};
