export type TerminalStep =
  | { kind: 'typed'; t: number; prompt: string; text: string; speed: number }
  | { kind: 'line'; t: number; cls?: string; text: string };

export interface AnimatedScript {
  type: 'animated';
  title: string;
  loopMs: number;
  steps: TerminalStep[];
}

export interface StaticScript {
  type: 'static';
  title?: string;
  content: string;
}

export type TerminalScript = AnimatedScript | StaticScript;
