import { useEffect, useRef, useState } from 'react';
import type { AnimatedScript } from '../data/terminals/types';

interface Props {
  script: AnimatedScript;
}

export default function TerminalAnimated({ script }: Props) {
  const [tick, setTick] = useState(0);
  const rafRef = useRef<number | undefined>(undefined);
  const startRef = useRef(typeof performance !== 'undefined' ? performance.now() : 0);
  const bodyRef = useRef<HTMLDivElement | null>(null);
  const prevLineCount = useRef(0);

  useEffect(() => {
    let mounted = true;
    startRef.current = performance.now();
    const loop = (now: number) => {
      if (!mounted) return;
      setTick((now - startRef.current) % script.loopMs);
      rafRef.current = requestAnimationFrame(loop);
    };
    rafRef.current = requestAnimationFrame(loop);
    return () => {
      mounted = false;
      if (rafRef.current !== undefined) cancelAnimationFrame(rafRef.current);
    };
  }, [script.loopMs]);

  const lines: JSX.Element[] = [];
  for (let i = 0; i < script.steps.length; i++) {
    const step = script.steps[i];
    if (tick < step.t) break;
    if (step.kind === 'line') {
      lines.push(
        <div key={i} className={step.cls || ''}>
          {step.text || '\u00a0'}
        </div>
      );
    } else {
      const dt = tick - step.t;
      const chars = Math.min(step.text.length, Math.floor(dt / step.speed));
      const visible = step.text.slice(0, chars);
      const next = script.steps[i + 1];
      const isCurrent = !next || tick < next.t;
      lines.push(
        <div key={i}>
          <span className="prompt">{step.prompt}</span>
          <span className="user">{visible}</span>
          {isCurrent && <span className="cursor" />}
        </div>
      );
    }
  }

  useEffect(() => {
    const body = bodyRef.current;
    if (!body) return;
    const count = lines.length;
    if (count < prevLineCount.current) {
      body.scrollTop = 0;
    } else if (count > prevLineCount.current) {
      body.scrollTop = body.scrollHeight;
    }
    prevLineCount.current = count;
  });

  return (
    <div className="terminal">
      <div className="term-chrome">
        <span className="term-dot r" />
        <span className="term-dot y" />
        <span className="term-dot g" />
        <span className="term-title">{script.title}</span>
      </div>
      <div className="term-body" ref={bodyRef}>
        {lines}
      </div>
    </div>
  );
}
