import React from "react";
import Image from "next/image";

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
    <Image
      src="/Eurowings_Logo.png"
      alt="Eurowings"
      width={width}
      height={height}
      className={className}
      priority
    />
  );
}
