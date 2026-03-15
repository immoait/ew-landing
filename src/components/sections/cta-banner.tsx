"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { AnimationWrapper } from "@/components/animation-wrapper";

export function CTABanner() {
  const t = useTranslations("ctaBanner");

  return (
    <section className="py-24 sm:py-32 relative overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary-accent to-secondary" />

      {/* Decorative elements */}
      <motion.div
        className="absolute top-0 right-0 w-96 h-96 rounded-full bg-white/5 blur-3xl"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.1, 0.2, 0.1],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-white/5 blur-3xl"
        animate={{
          scale: [1.3, 1, 1.3],
          opacity: [0.1, 0.15, 0.1],
        }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
        <AnimationWrapper>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white">
            {t("title")}
          </h2>
          <p className="mt-4 text-lg text-white/80">{t("description")}</p>
          <div className="mt-8">
            <Button
              size="lg"
              className="bg-white text-primary hover:bg-white/90 hover:text-primary-accent shadow-xl"
              asChild
            >
              <a href="#start-claim" className="gap-2">
                {t("cta")}
                <ArrowRight className="w-4 h-4" />
              </a>
            </Button>
          </div>
        </AnimationWrapper>
      </div>
    </section>
  );
}
