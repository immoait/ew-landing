"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { AnimationWrapper } from "@/components/animation-wrapper";

export function CTABanner() {
  const t = useTranslations("ctaBanner");

  return (
    <section id="start-claim" className="py-20 sm:py-24 md:py-32 relative overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary-accent to-secondary" />

      {/* Animated mesh overlay */}
      <motion.div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at 20% 50%, rgba(255,255,255,0.08) 0%, transparent 50%)",
        }}
        animate={{
          background: [
            "radial-gradient(ellipse at 20% 50%, rgba(255,255,255,0.08) 0%, transparent 50%)",
            "radial-gradient(ellipse at 80% 50%, rgba(255,255,255,0.12) 0%, transparent 50%)",
            "radial-gradient(ellipse at 20% 50%, rgba(255,255,255,0.08) 0%, transparent 50%)",
          ],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Floating orbs */}
      <motion.div
        className="absolute top-0 right-0 w-96 h-96 rounded-full bg-white/5 blur-3xl"
        animate={{
          scale: [1, 1.3, 1],
          x: [0, -50, 0],
          opacity: [0.1, 0.2, 0.1],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-white/5 blur-3xl"
        animate={{
          scale: [1.3, 1, 1.3],
          x: [0, 40, 0],
          opacity: [0.1, 0.15, 0.1],
        }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
        <AnimationWrapper>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight">
            {t("title")}
          </h2>
          <p className="mt-3 sm:mt-4 text-base sm:text-lg text-white/80 max-w-xl mx-auto">
            {t("description")}
          </p>
          <div className="mt-8">
            <Button
              size="lg"
              className="bg-white text-primary hover:bg-white/90 hover:text-primary-accent shadow-xl group"
              asChild
            >
              <a href="https://embed-app-eurowings-823415516695.europe-west3.run.app/" className="inline-flex items-center gap-2">
                {t("cta")}
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
          </div>
        </AnimationWrapper>
      </div>
    </section>
  );
}
