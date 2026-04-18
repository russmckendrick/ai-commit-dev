import { motion } from 'framer-motion';

interface Props {
  color?: string;
  size?: number;
  className?: string;
}

export default function FloatingGlow({ color = 'var(--accent)', size = 400, className }: Props) {
  return (
    <motion.div
      className={className}
      style={{
        position: 'absolute',
        width: size,
        height: size,
        borderRadius: '50%',
        background: `radial-gradient(circle, ${color} 0%, transparent 70%)`,
        opacity: 0.08,
        filter: 'blur(60px)',
        pointerEvents: 'none',
      }}
      animate={{
        x: [0, 30, -20, 10, 0],
        y: [0, -20, 15, -10, 0],
        scale: [1, 1.1, 0.95, 1.05, 1],
      }}
      transition={{
        duration: 20,
        repeat: Infinity,
        repeatType: 'loop',
        ease: 'easeInOut',
      }}
    />
  );
}
