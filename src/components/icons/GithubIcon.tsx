import { FaGithub } from 'react-icons/fa';

interface Props {
  size?: number;
}

export default function GithubIcon({ size = 18 }: Props) {
  return <FaGithub size={size} />;
}
