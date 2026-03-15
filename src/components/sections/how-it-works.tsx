"use client";

import { useTranslations } from "next-intl";
import { useRef } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { MessageSquare, Camera, Cpu, CheckCircle2 } from "lucide-react";
import { AnimationWrapper } from "@/components/animation-wrapper";
import { SpotlightCard } from "@/components/spotlight-card";
import { Badge } from "@/components/ui/badge";

const stepIcons = [MessageSquare, Camera, Cpu, CheckCircle2];
const stepKeys = ["report", "upload", "review", "resolve"] as const;

export function HowItWorks() {
  const t = useTranslations("howItWorks");
  const sectionRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(lineRef, { once: true, margin: "-200px" });

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const lineProgress = useTransform(scrollYProgress, [0.1, 0.5], [0, 1]);

  return (
    <section
      id="how-it-works"
      ref={sectionRef}
      className="py-20 sm:py-24 md:py-32 bg-accent/30 relative overflow-hidden"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <AnimationWrapper className="text-center mb-12 sm:mb-16">
          <Badge className="mb-4">{t("badge")}</Badge>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">
            {t("title")}
          </h2>
          <p className="mt-3 sm:mt-4 text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
            {t("description")}
          </p>
        </AnimationWrapper>

        {/* Animated connecting line (desktop) */}
        <div ref={lineRef} className="relative">
          <div className="hidden lg:block absolute top-[60px] left-[12%] right-[12%] h-[2px]">
            <div className="absolute inset-0 bg-border/40 rounded-full" />
            <motion.div
              className="absolute inset-y-0 left-0 bg-gradient-to-r from-primary via-secondary to-primary rounded-full"
              style={{
                scaleX: isInView ? lineProgress : 0,
                transformOrigin: "left",
              }}
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {stepKeys.map((key, index) => {
              const Icon = stepIcons[index];
              return (
                <AnimationWrapper key={key} delay={index * 0.15}>
                  <SpotlightCard>
                    <div className="group relative bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-border/50 hover:shadow-lg transition-all duration-500 h-full">
                      {/* Step number */}
                      <motion.div
                        className="absolute -top-3 -left-1 w-8 h-8 rounded-full bg-gradient-to-br from-primary to-secondary text-white text-sm font-bold flex items-center justify-center shadow-lg"
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        viewport={{ once: true }}
                        transition={{
                          type: "spring",
                          stiffness: 300,
                          delay: 0.3 + index * 0.15,
                        }}
                      >
                        {index + 1}
                      </motion.div>

                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                        <Icon className="w-6 h-6 text-primary" />
                      </div>

                      <h3 className="text-lg font-semibold mb-2">
                        {t(`steps.${key}.title`)}
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {t(`steps.${key}.description`)}
                      </p>
                    </div>
                  </SpotlightCard>
                </AnimationWrapper>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
