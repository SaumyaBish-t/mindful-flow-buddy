
import React, { ReactNode } from 'react';
import { useIntersectionObserver } from '../hooks/use-intersection-observer';
import { cn } from '@/lib/utils';

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right' | 'none';
}

const AnimatedSection: React.FC<AnimatedSectionProps> = ({
  children,
  className,
  delay = 0,
  direction = 'up'
}) => {
  const [ref, isVisible] = useIntersectionObserver({
    threshold: 0.1,
    rootMargin: '-50px'
  });

  const getAnimationClasses = () => {
    if (!isVisible) return 'opacity-0';
    
    const baseClasses = 'transition-all duration-700 ease-out opacity-100';
    
    const directionClasses = {
      up: 'translate-y-0',
      down: 'translate-y-0', 
      left: 'translate-x-0',
      right: 'translate-x-0',
      none: ''
    };
    
    return `${baseClasses} ${directionClasses[direction]}`;
  };
  
  const getInitialClasses = () => {
    const directionClasses = {
      up: 'translate-y-12',
      down: 'translate-y-[-3rem]',
      left: 'translate-x-12',
      right: 'translate-x-[-3rem]',
      none: ''
    };
    
    return `opacity-0 ${directionClasses[direction]}`;
  };

  return (
    <div
      ref={ref}
      className={cn(
        getInitialClasses(),
        getAnimationClasses(),
        className
      )}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

export default AnimatedSection;
