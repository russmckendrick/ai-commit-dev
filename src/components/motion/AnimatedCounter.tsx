import { motion, useMotionValue, useTransform, animate } from 'framer-motion';
import { useEffect, useRef } from 'react';

interface Props {
  value: number;
  suffix?: string;
  className?: string;
}

export default function AnimatedCounter({ value, suffix = '', className }: Props) {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const unsubscribe = rounded.on('change', (v) => {
      if (ref.current) {
        ref.current.textContent = v + suffix;
      }
    });

    const controls = animate(count, value, {
      duration: 1.5,
      ease: [0.25, 0.1, 0.25, 1],
    });

    return () => {
      controls.stop();
      unsubscribe();
    };
  }, [value, suffix]);

  return <span ref={ref} className={className}>0{suffix}</span>;
}
