
import { useState, useEffect, useRef, RefObject } from 'react';

interface UseIntersectionObserverOptions {
  root?: Element | null;
  rootMargin?: string;
  threshold?: number | number[];
  freezeOnceVisible?: boolean;
}

export function useIntersectionObserver(
  options: UseIntersectionObserverOptions = {}
): [RefObject<HTMLDivElement>, boolean] {
  const { 
    root = null, 
    rootMargin = '0px', 
    threshold = 0.1, 
    freezeOnceVisible = true 
  } = options;
  
  const elementRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;
    
    const observer = new IntersectionObserver(
      ([entry]) => {
        const isIntersecting = entry.isIntersecting;
        
        if (isIntersecting || !freezeOnceVisible) {
          setIsVisible(isIntersecting);
        } else if (freezeOnceVisible && isVisible) {
          // If we want to freeze the visibility once it's been seen
          // and it was previously visible, don't update state
          return;
        }
      },
      { root, rootMargin, threshold }
    );
    
    observer.observe(element);
    
    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, [root, rootMargin, threshold, freezeOnceVisible, isVisible]);
  
  return [elementRef, isVisible];
}
