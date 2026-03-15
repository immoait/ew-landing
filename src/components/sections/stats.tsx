"use client";

import { useTranslations } from "next-intl";
import { motion, useInView, useMotionValue, useTransform, animate } from "framer-motion";
import { useRef, useEffect } from "react";
import { Clock, Timer, Heart, Headphones } from "lucide-react";

function AnimatedNumber({
  value,
  duration = 2,
  delay = 0,
}: {
  value: number;
  duration?: number;
  delay?: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const motionValue = useMotionValue(0);
  const rounded = useTransform(motionValue, (latest) => Math.round(latest));
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (isInView) {
      const controls = animate(motionValue, value, {
        duration,
        delay,
        ease: "easeOut",
      });
      return controls.stop;
    }
  }, [isInView, motionValue, value, duration, delay]);

  useEffect(() => {
    const unsubscribe = rounded.on("change", (latest) => {
      if (ref.current) {
        ref.current.textContent = String(latest);
      }
    });
    return unsubscribe;
  }, [rounded]);

  return <span ref={ref}>0</span>;
}

const statIcons = [Clock, Timer, Heart, Headphones];
const statKeys = ["resolution", "filing", "satisfaction", "availability"] as const;

export function Stats() {
  const t = useTranslations("stats");
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section ref={sectionRef} className="py-12 sm:py-16 md:py-20 relative overflow-hidden">
      {/* Subtle gradient line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2/3 h-px bg-gradient-to-r from-transparent via-secondary/30 to-transparent" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 md:gap-12">
          {statKeys.map((key, index) => {
            const Icon = statIcons[index];
            const value = parseInt(t(`${key}.value`));
            return (
              <motion.div
                key={key}
                className="text-center group"
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{
                  duration: 0.6,
                  delay: index * 0.15,
                  ease: [0.21, 0.47, 0.32, 0.98],
                }}
              >
                <div className="inline-flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-gradient-to-br from-primary/10 to-secondary/10 mb-3 sm:mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Icon className="w-4 h-4 sm:w-5 sm:h-5 text-secondary" />
                </div>
                <div className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-foreground">
                  <AnimatedNumber
                    value={value}
                    delay={index * 0.15 + 0.3}
                    duration={1.5}
                  />
                  <span className="text-primary">{t(`${key}.unit`)}</span>
                </div>
                <p className="mt-1 sm:mt-2 text-xs sm:text-sm text-muted-foreground font-medium">
                  {t(`${key}.label`)}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Bottom gradient line */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-2/3 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
    </section>
  );
}
