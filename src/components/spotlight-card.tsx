"use client";

import { useState, useRef } from "react";
import { cn } from "@/lib/utils";

interface SpotlightCardProps {
  children: React.ReactNode;
  className?: string;
}

export function SpotlightCard({ children, className }: SpotlightCardProps) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={cn("relative", className)}
    >
      {/* Spotlight glow — clipped to card shape */}
      <div
        className="absolute inset-0 pointer-events-none transition-opacity duration-300 z-10 rounded-2xl overflow-hidden"
        style={{
          opacity: isHovered ? 1 : 0,
        }}
      >
        <div
          className="absolute inset-0"
          style={{
            background: `radial-gradient(400px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(8, 155, 201, 0.1), rgba(143, 23, 79, 0.05), transparent 60%)`,
          }}
        />
      </div>
      {children}
    </div>
  );
}
