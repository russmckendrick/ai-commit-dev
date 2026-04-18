import { SiOpenai, SiAnthropic, SiOllama } from 'react-icons/si';
import { VscAzure, VscTerminal } from 'react-icons/vsc';
import { IoFlash } from 'react-icons/io5';

interface Props {
  provider: string;
  size?: number;
}

export default function ProviderIcon({ provider, size = 28 }: Props) {
  switch (provider) {
    case 'OpenAI':
      return <SiOpenai size={size} />;
    case 'Azure OpenAI':
      return <VscAzure size={size} />;
    case 'Anthropic':
      return <SiAnthropic size={size} />;
    case 'Groq':
      return <IoFlash size={size} />;
    case 'Ollama':
      return <SiOllama size={size} />;
    case 'Claude Code':
    case 'Codex':
      return <VscTerminal size={size} />;
    default:
      return null;
  }
}
