'use client';

import { useEffect, useRef, type ReactNode } from 'react';

type Direction = 'up' | 'down' | 'left' | 'right' | 'scale' | 'none';

interface ScrollRevealProps {
  children: ReactNode;
  delay?: number;
  direction?: Direction;
  className?: string;
  distance?: number;
}

export default function ScrollReveal({
  children,
  delay = 0,
  direction = 'up',
  className = '',
  distance,
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('revealed');
          observer.unobserve(el);
        }
      },
      { threshold: 0.08, rootMargin: '0px 0px -30px 0px' }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const dirClass = direction !== 'up' ? `reveal--${direction}` : '';

  return (
    <div
      ref={ref}
      className={`reveal ${dirClass} ${className}`}
      style={{
        transitionDelay: `${delay}ms`,
        ...(distance !== undefined
          ? ({ '--reveal-distance': `${distance}px` } as React.CSSProperties)
          : {}),
      }}
    >
      {children}
    </div>
  );
}
