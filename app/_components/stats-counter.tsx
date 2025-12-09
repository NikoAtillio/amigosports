"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "react-intersection-observer";

interface StatsCounterProps {
  end: number;
  duration?: number;
  prefix?: string;
  suffix?: string;
  decimals?: number;
}

export default function StatsCounter({ 
  end, 
  duration = 2000, 
  prefix = "", 
  suffix = "",
  decimals = 0 
}: StatsCounterProps) {
  const [count, setCount] = useState(0);
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });
  const countingRef = useRef(false);

  useEffect(() => {
    if (inView && !countingRef?.current) {
      countingRef.current = true;
      let startTime: number | null = null;
      const step = (timestamp: number) => {
        if (!startTime) startTime = timestamp;
        const progress = Math?.min?.((timestamp - startTime) / duration, 1);
        setCount(Math?.floor?.(progress * end) ?? 0);
        if (progress < 1) {
          window?.requestAnimationFrame?.(step);
        }
      };
      window?.requestAnimationFrame?.(step);
    }
  }, [inView, end, duration]);

  const formattedCount = count?.toLocaleString?.("en-GB", {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  }) ?? "0";

  return (
    <span ref={ref}>
      {prefix}{formattedCount}{suffix}
    </span>
  );
}
