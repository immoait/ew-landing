"use client";

import { motion, useScroll, useTransform } from "framer-motion";

export function AirplaneJourney() {
  const { scrollYProgress } = useScroll();

  // Airplane position along the path
  const pathProgress = useTransform(scrollYProgress, [0, 1], [0, 1]);

  // Airplane moves along a curve from top-left to bottom-right
  const x = useTransform(pathProgress, [0, 0.2, 0.4, 0.6, 0.8, 1], [
    "5vw", "80vw", "10vw", "70vw", "20vw", "90vw",
  ]);
  const y = useTransform(pathProgress, [0, 0.2, 0.4, 0.6, 0.8, 1], [
    "15vh", "35vh", "50vh", "65vh", "80vh", "95vh",
  ]);
  const rotate = useTransform(pathProgress, [0, 0.15, 0.25, 0.35, 0.55, 0.65, 0.75, 0.95], [
    15, 25, 160, 15, 25, 160, 15, 25,
  ]);
  const opacity = useTransform(pathProgress, [0, 0.02, 0.95, 1], [0, 0.6, 0.6, 0]);

  return (
    <div className="fixed inset-0 pointer-events-none z-10 overflow-hidden">
      {/* Dotted trail path */}
      <svg
        className="absolute inset-0 w-full h-full"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
      >
        <motion.path
          d="M 5,15 Q 50,10 80,35 Q 95,45 10,50 Q -5,55 70,65 Q 95,70 20,80 Q -5,85 90,95"
          fill="none"
          stroke="url(#trailGradient)"
          strokeWidth="0.15"
          strokeDasharray="0.5 0.8"
          style={{
            pathLength: pathProgress,
          }}
        />
        <defs>
          <linearGradient id="trailGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#089BC9" stopOpacity="0.3" />
            <stop offset="50%" stopColor="#8F174F" stopOpacity="0.2" />
            <stop offset="100%" stopColor="#089BC9" stopOpacity="0.1" />
          </linearGradient>
        </defs>
      </svg>

      {/* Airplane */}
      <motion.div
        className="absolute"
        style={{
          left: x,
          top: y,
          rotate,
          opacity,
        }}
      >
        <svg
          width="32"
          height="32"
          viewBox="0 0 24 24"
          fill="none"
          className="drop-shadow-lg"
        >
          <path
            d="M21.71 10.29L14 2.59a1 1 0 00-1.42 0l-7.29 7.3a1 1 0 000 1.41l7.71 7.71a1 1 0 001.41 0l7.3-7.3a1 1 0 000-1.42z"
            fill="none"
          />
          {/* Simplified airplane silhouette */}
          <path
            d="M22 2L13.5 22l-2-8.5L3 11.5 22 2z"
            fill="#089BC9"
            opacity="0.8"
          />
          <path
            d="M22 2L11.5 13.5"
            stroke="#8F174F"
            strokeWidth="1"
            opacity="0.6"
          />
        </svg>
        {/* Glow effect behind airplane */}
        <div className="absolute inset-0 -m-4 bg-secondary/20 rounded-full blur-xl" />
      </motion.div>
    </div>
  );
}
