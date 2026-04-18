import type { StaticScript } from './types';

export const installWindows: StaticScript = {
  type: 'static',
  title: 'Windows',
  content: `# Pre-built binary (WinGet coming soon)
Invoke-WebRequest \`
  -Uri "https://github.com/russmckendrick/aicommit/releases/latest/download/aic-windows-amd64.exe" \`
  -OutFile "aic.exe"
./aic.exe setup`,
};
