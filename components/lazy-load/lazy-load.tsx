"use client";

import { useState, useEffect, useRef, ReactNode } from "react";

interface LazyShowProps {
  children: ReactNode;
  height?: string; // Crucial to prevent layout shift when unloading
}

export default function LazyLoad({ children, height = "300px" }: LazyShowProps) {
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // This is the fix: It will set to true when on screen, 
        // and false when it leaves the screen area.
        setIsVisible(entry.isIntersecting);
      },
      {
        // Adjust margins to decide when it triggers. 
        rootMargin: "100px 0px 100px 0px", 
        threshold: 0,
      }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, []);

  return (
    <div 
      ref={containerRef} 
      // When invisible, force the exact height placeholder so the page layout doesn't collapse
      style={{ height: isVisible ? "auto" : height }}
    >
      {isVisible ? children : null}
    </div>
  );
}