"use client";

import { useEffect } from "react";

export default function DebugDiagnostics() {
  useEffect(() => {
    if (process.env.NODE_ENV !== "development") return;

    const checkOverflow = () => {
      const offenders = [...document.querySelectorAll("*")].filter(
        (el) => el instanceof HTMLElement && el.scrollWidth > document.documentElement.clientWidth
      );
      
      if (offenders.length > 0) {
        console.group("📱 Mobile Overflow Offenders");
        console.table(
          offenders.map((el) => {
            const htmlEl = el as HTMLElement;
            return {
              tag: htmlEl.tagName,
              id: htmlEl.id,
              className: htmlEl.className,
              scrollWidth: htmlEl.scrollWidth,
              clientWidth: document.documentElement.clientWidth,
            };
          })
        );
        console.groupEnd();
      }
    };

    // Initial check
    checkOverflow();

    // Check on resize
    window.addEventListener("resize", checkOverflow);
    
    // Check for layout shifts and long tasks
    const observer = new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        if (entry.entryType === "layout-shift") {
          console.warn("⚠️ Layout Shift detected:", entry);
        }
        if (entry.entryType === "longtask") {
          console.warn("🐌 Long Task detected (Possible Jank):", entry);
        }
      }
    });

    observer.observe({ entryTypes: ["layout-shift", "longtask"] });

    return () => {
      window.removeEventListener("resize", checkOverflow);
      observer.disconnect();
    };
  }, []);

  return null;
}
