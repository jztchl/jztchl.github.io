'use client';

import { useEffect, useState } from 'react';

interface LazySectionProps {
  children: React.ReactNode;
  rootMargin?: string;
  threshold?: number;
}

export default function LazySection({ 
  children, 
  rootMargin = '100px', 
  threshold = 0.1 
}: LazySectionProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  useEffect(() => {
    if (!hasMounted) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin, threshold }
    );

    const element = document.getElementById('lazy-section');
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, [hasMounted, rootMargin, threshold]);

  if (!hasMounted) {
    return <div id="lazy-section" className="min-h-[200px]" />;
  }

  return (
    <div id="lazy-section">
      {isVisible ? children : <div className="min-h-[200px]" />}
    </div>
  );
}
