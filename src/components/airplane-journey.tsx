"use client";

import { useEffect, useRef, useState } from "react";
import { type MotionValue, motion, useScroll, useTransform } from "framer-motion";

export function AirplaneJourney() {
  const { scrollYProgress } = useScroll();
  const pathRef = useRef<SVGPathElement>(null);
  const [pathLength, setPathLength] = useState(0);

  useEffect(() => {
    if (pathRef.current) {
      setPathLength(pathRef.current.getTotalLength());
    }
  }, []);

  // Trail draws as user scrolls
  const trailDashOffset = useTransform(
    scrollYProgress,
    [0, 1],
    [pathLength, 0]
  );

  // Airplane position along path
  const progress = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <div className="fixed inset-0 pointer-events-none z-10 overflow-hidden hidden md:block">
      <svg
        className="absolute inset-0 w-full h-full"
        viewBox="0 0 1000 3000"
        preserveAspectRatio="xMidYMid slice"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="trailGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#089BC9" stopOpacity="0.25" />
            <stop offset="50%" stopColor="#8F174F" stopOpacity="0.15" />
            <stop offset="100%" stopColor="#089BC9" stopOpacity="0.1" />
          </linearGradient>
        </defs>

        {/* Trail path — dotted, draws on scroll */}
        <motion.path
          ref={pathRef}
          d="M 900,100 Q 500,300 150,600 Q -50,800 400,1000 Q 850,1200 700,1500 Q 550,1700 200,1800 Q -50,1900 500,2100 Q 900,2300 600,2600 Q 400,2800 800,3000"
          fill="none"
          stroke="url(#trailGradient)"
          strokeWidth="2"
          strokeDasharray="8 12"
          style={{
            strokeDashoffset: trailDashOffset,
          }}
        />

        {/* Airplane — moves along the same path */}
        <PlaneOnPath progress={progress} pathRef={pathRef} />
      </svg>
    </div>
  );
}

function PlaneOnPath({
  progress,
  pathRef,
}: {
  progress: MotionValue<number>;
  pathRef: React.RefObject<SVGPathElement | null>;
}) {
  const [pos, setPos] = useState({ x: 900, y: 100, angle: 0 });

  useEffect(() => {
    const unsubscribe = progress.on("change", (v) => {
      if (!pathRef.current) return;
      const len = pathRef.current.getTotalLength();
      const point = pathRef.current.getPointAtLength(v * len);
      const nextPoint = pathRef.current.getPointAtLength(
        Math.min(v * len + 2, len)
      );
      const angle =
        Math.atan2(nextPoint.y - point.y, nextPoint.x - point.x) *
        (180 / Math.PI);
      setPos({ x: point.x, y: point.y, angle });
    });
    return unsubscribe;
  }, [progress, pathRef]);

  return (
    <g
      transform={`translate(${pos.x}, ${pos.y}) rotate(${pos.angle})`}
      opacity="0.7"
    >
      {/* Glow */}
      <circle r="20" fill="#089BC9" opacity="0.08" />
      {/* Airplane pointing right by default */}
      <path
        d="M 12 0 L -6 -5 L -4 0 L -6 5 Z"
        fill="#089BC9"
      />
      <path
        d="M -2 -8 L 4 0 L -2 8"
        fill="none"
        stroke="#089BC9"
        strokeWidth="1"
        opacity="0.4"
      />
    </g>
  );
}
