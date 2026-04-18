import { useState } from 'react';
import type { AnimatedScript } from '../data/terminals/types';
import TerminalAnimated from './TerminalAnimated';
import { flowCommit } from '../data/terminals/flow-commit';
import { flowReview } from '../data/terminals/flow-review';
import { flowPr } from '../data/terminals/flow-pr';
import { flowLog } from '../data/terminals/flow-log';
import { flowMap } from '../data/terminals/flow-map';
import { flowHistory } from '../data/terminals/flow-history';

interface Flow {
  id: string;
  cmd: string;
  tag: string;
  desc: string;
  script: AnimatedScript;
}

const flows: Flow[] = [
  { id: 'commit',  cmd: 'aic',         tag: 'commit',  desc: 'Conventional commit from your staged diff',  script: flowCommit },
  { id: 'review',  cmd: 'aic review',  tag: 'review',  desc: 'AI diff review grouped by severity',          script: flowReview },
  { id: 'pr',      cmd: 'aic pr',      tag: 'pr',      desc: 'Draft PR title + Markdown description',       script: flowPr },
  { id: 'log',     cmd: 'aic log',     tag: 'log',     desc: 'Rewrite the last N commit messages',          script: flowLog },
  { id: 'map',     cmd: 'aic map',     tag: 'map',     desc: 'SVG visualizations — treemap, heat, activity', script: flowMap },
  { id: 'history', cmd: 'aic history', tag: 'history', desc: 'Browse, filter, reuse past generations',      script: flowHistory },
];

export default function FlowShowcase() {
  const [activeId, setActiveId] = useState<string>(flows[0].id);
  const active = flows.find(f => f.id === activeId) ?? flows[0];

  return (
    <div className="flow-showcase">
      <div className="flow-tabs" role="tablist">
        {flows.map((flow) => {
          const isActive = flow.id === activeId;
          return (
            <button
              key={flow.id}
              role="tab"
              aria-selected={isActive}
              className={`flow-tab ${isActive ? 'active' : ''}`}
              onClick={() => setActiveId(flow.id)}
            >
              <span className="flow-tab-cmd">
                <span className="dim">$ </span>
                {flow.cmd}
              </span>
              <span className="flow-tab-desc">{flow.desc}</span>
            </button>
          );
        })}
      </div>
      <div className="flow-terminal" key={active.id}>
        <TerminalAnimated script={active.script} />
      </div>
    </div>
  );
}
