import { SiOpenai, SiAnthropic, SiOllama, SiClaude } from 'react-icons/si';
import { VscAzure } from 'react-icons/vsc';
import { LuZap, LuCodeXml } from 'react-icons/lu';

const map: Record<string, React.ComponentType<{ size?: number }>> = {
  openai: SiOpenai,
  anthropic: SiAnthropic,
  'azure-openai': VscAzure,
  groq: LuZap,
  ollama: SiOllama,
  'claude-code': SiClaude,
  codex: LuCodeXml,
};

interface Props {
  name: string;
  size?: number;
}

export default function ProviderIcon({ name, size = 28 }: Props) {
  const Icon = map[name];
  if (!Icon) return null;
  return <Icon size={size} />;
}
