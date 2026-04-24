"use client";

import React, { useEffect, useRef, useState } from "react";

interface RevealProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  duration?: number;
  distance?: number;
  direction?: "up" | "down" | "left" | "right" | "none";
  threshold?: number;
  once?: boolean;
}

// Singleton observer to reduce mobile overhead
let sharedObserver: IntersectionObserver | null = null;
const revealCallbacks = new Map<Element, (isVisible: boolean) => void>();

const getSharedObserver = () => {
  if (typeof window === "undefined") return null;
  
  if (!sharedObserver) {
    sharedObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const callback = revealCallbacks.get(entry.target);
          if (callback) {
            callback(entry.isIntersecting);
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );
  }
  return sharedObserver;
};

export default function Reveal({
  children,
  delay = 0,
  className = "",
  duration = 600,
  distance = 20,
  direction = "up",
  once = true,
}: RevealProps) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = getSharedObserver();
    if (!observer) return;

    const callback = (intersecting: boolean) => {
      if (intersecting) {
        setIsVisible(true);
        if (once) {
          observer.unobserve(el);
          revealCallbacks.delete(el);
        }
      } else if (!once) {
        setIsVisible(false);
      }
    };

    revealCallbacks.set(el, callback);
    observer.observe(el);

    return () => {
      observer.unobserve(el);
      revealCallbacks.delete(el);
    };
  }, [once]);

  const getTransform = () => {
    if (isVisible) return "none";
    switch (direction) {
      case "up": return `translateY(${distance}px)`;
      case "down": return `translateY(-${distance}px)`;
      case "left": return `translateX(${distance}px)`;
      case "right": return `translateX(-${distance}px)`;
      case "none": return "none";
      default: return `translateY(${distance}px)`;
    }
  };

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: getTransform(),
        transitionProperty: "opacity, transform",
        transitionDuration: `${duration}ms`,
        transitionDelay: `${delay}s`,
        transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
        willChange: "opacity, transform",
      }}
    >
      {children}
    </div>
  );
}
