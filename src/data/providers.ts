export interface ProviderLink {
  name: string;
  href: string;
}

export const providerLinks: ProviderLink[] = [
  { name: 'openai', href: 'https://openai.com/' },
  { name: 'anthropic', href: 'https://www.anthropic.com/' },
  {
    name: 'azure-openai',
    href: 'https://azure.microsoft.com/en-us/products/ai-foundry/models/openai/',
  },
  { name: 'groq', href: 'https://groq.com/' },
  { name: 'ollama', href: 'https://ollama.com/' },
  { name: 'claude-code', href: 'https://claude.com/product/claude-code' },
  { name: 'codex', href: 'https://openai.com/codex/' },
  { name: 'copilot', href: 'https://github.com/features/copilot' },
];
