import { VscGitCommit, VscSearch, VscGitPullRequest, VscHistory, VscGraph, VscSplitHorizontal } from 'react-icons/vsc';

const iconMap: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  commit: VscGitCommit,
  review: VscSearch,
  pr: VscGitPullRequest,
  log: VscHistory,
  map: VscGraph,
  split: VscSplitHorizontal,
};

interface Props {
  icon: string;
  size?: number;
}

export default function FeatureIcon({ icon, size = 24 }: Props) {
  const Icon = iconMap[icon];
  if (!Icon) return null;
  return <Icon size={size} />;
}
