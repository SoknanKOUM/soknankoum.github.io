import { ReactNode } from 'react';
import { useReveal } from '@/hooks/useReveal';

type Direction = 'up' | 'left' | 'right';

type RevealProps = {
  children: ReactNode;
  direction?: Direction;
  delay?: number;
  className?: string;
  as?: 'div' | 'section' | 'article' | 'li';
};

const hiddenByDirection: Record<Direction, string> = {
  up: 'translate-y-8',
  left: '-translate-x-10',
  right: 'translate-x-10',
};

export function Reveal({
  children,
  direction = 'up',
  delay = 0,
  className = '',
  as = 'div',
}: RevealProps) {
  const { ref, visible } = useReveal<HTMLElement>();
  const Tag = as as 'div' | 'section' | 'article' | 'li';
  const visibilityClasses = visible
    ? 'opacity-100 translate-x-0 translate-y-0 scale-100'
    : `opacity-0 scale-[0.98] ${hiddenByDirection[direction]}`;

  return (
    <Tag
      ref={ref as never}
      style={{ transitionDelay: `${delay}ms` }}
      className={`transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] will-change-transform ${visibilityClasses} ${className}`}
    >
      {children}
    </Tag>
  );
}
