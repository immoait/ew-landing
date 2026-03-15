import React from "react";

interface EurowingsLogoProps {
  className?: string;
  width?: number;
  height?: number;
}

export function EurowingsLogo({
  className,
  width = 180,
  height = 40,
}: EurowingsLogoProps) {
  return (
    <svg
      viewBox="0 0 360 80"
      width={width}
      height={height}
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Eurowings"
    >
      {/* Three diagonal stripes — two maroon, one blue */}
      <rect
        x="0"
        y="12"
        width="8"
        height="56"
        rx="2"
        fill="#8F174F"
        transform="skewX(-12)"
      />
      <rect
        x="14"
        y="12"
        width="8"
        height="56"
        rx="2"
        fill="#8F174F"
        transform="skewX(-12)"
      />
      <rect
        x="28"
        y="12"
        width="8"
        height="56"
        rx="2"
        fill="#089BC9"
        transform="skewX(-12)"
      />
      {/* Wordmark */}
      <text
        x="52"
        y="57"
        fill="#1A1A2E"
        fontFamily="var(--font-dm-sans), DM Sans, system-ui, sans-serif"
        fontWeight="700"
        fontSize="42"
        letterSpacing="-0.5"
      >
        eurowings
      </text>
    </svg>
  );
}
