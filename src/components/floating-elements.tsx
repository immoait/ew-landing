"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { Luggage, CreditCard, Plane, Shield, MapPin } from "lucide-react";

const elements = [
  { Icon: Luggage, x: "8%", y: "20%", size: 20, parallaxFactor: 0.3, delay: 0, color: "#8F174F" },
  { Icon: Plane, x: "88%", y: "30%", size: 18, parallaxFactor: 0.5, delay: 1, color: "#089BC9" },
  { Icon: CreditCard, x: "15%", y: "55%", size: 16, parallaxFactor: 0.2, delay: 2, color: "#7BCBE2" },
  { Icon: Shield, x: "82%", y: "60%", size: 22, parallaxFactor: 0.4, delay: 0.5, color: "#B4175E" },
  { Icon: MapPin, x: "5%", y: "80%", size: 14, parallaxFactor: 0.35, delay: 1.5, color: "#089BC9" },
  { Icon: Luggage, x: "92%", y: "85%", size: 16, parallaxFactor: 0.25, delay: 3, color: "#8F174F" },
];

function FloatingElement({
  Icon,
  x,
  y,
  size,
  parallaxFactor,
  delay,
  color,
}: (typeof elements)[0]) {
  const { scrollY } = useScroll();
  const yOffset = useTransform(scrollY, [0, 3000], [0, -300 * parallaxFactor]);

  return (
    <motion.div
      className="absolute pointer-events-none"
      style={{
        left: x,
        top: y,
        y: yOffset,
      }}
      animate={{
        y: [0, -15, 0],
        rotate: [0, 5, -5, 0],
      }}
      transition={{
        duration: 6 + delay,
        repeat: Infinity,
        ease: "easeInOut",
        delay,
      }}
    >
      <Icon
        size={size}
        style={{ color }}
        className="opacity-[0.07]"
      />
    </motion.div>
  );
}

export function FloatingElements() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden hidden md:block">
      {elements.map((el, index) => (
        <FloatingElement key={index} {...el} />
      ))}
    </div>
  );
}
