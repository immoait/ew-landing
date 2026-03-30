"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { ArrowRight, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { TextReveal } from "@/components/text-reveal";

export function Hero() {
  const t = useTranslations("hero");

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Aurora gradient mesh background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-white via-white to-secondary-light/5" />

        {/* Multiple morphing gradient blobs — responsive sizes */}
        <motion.div
          className="absolute top-[10%] right-[10%] w-[250px] h-[250px] sm:w-[400px] sm:h-[400px] md:w-[600px] md:h-[600px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(8,155,201,0.12) 0%, rgba(123,203,226,0.08) 40%, transparent 70%)",
          }}
          animate={{
            scale: [1, 1.3, 1.1, 1],
            x: [0, 30, -20, 0],
            y: [0, -40, 20, 0],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute top-[30%] left-[5%] w-[200px] h-[200px] sm:w-[350px] sm:h-[350px] md:w-[500px] md:h-[500px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(143,23,79,0.08) 0%, rgba(180,23,94,0.05) 40%, transparent 70%)",
          }}
          animate={{
            scale: [1.2, 1, 1.3, 1.2],
            x: [0, -20, 40, 0],
            y: [0, 30, -20, 0],
          }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-[10%] right-[30%] w-[180px] h-[180px] sm:w-[300px] sm:h-[300px] md:w-[400px] md:h-[400px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(8,155,201,0.06) 0%, rgba(143,23,79,0.04) 50%, transparent 70%)",
          }}
          animate={{
            scale: [1, 1.4, 1],
            x: [0, 50, 0],
            y: [0, -30, 0],
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />
        {/* Fourth blob for more depth */}
        <motion.div
          className="absolute top-[60%] left-[40%] w-[150px] h-[150px] sm:w-[200px] sm:h-[200px] md:w-[300px] md:h-[300px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(123,203,226,0.1) 0%, transparent 60%)",
          }}
          animate={{
            scale: [1.1, 1, 1.2, 1.1],
            rotate: [0, 45, 0],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Noise texture overlay */}
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          }}
        />

        {/* Subtle grid */}
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage:
              "linear-gradient(#1a1a2e 1px, transparent 1px), linear-gradient(90deg, #1a1a2e 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-24 pb-16">
        <div className="text-center max-w-4xl mx-auto">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Badge variant="secondary" className="mb-8 text-xs sm:text-sm px-3 sm:px-4 py-1.5">
              {t("badge")}
            </Badge>
          </motion.div>

          {/* Word-by-word headline reveal */}
          <div className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight leading-[1.1]">
            <TextReveal
              text={t("title")}
              className="text-foreground block"
              delay={0.3}
            />
            <TextReveal
              text={t("titleHighlight")}
              className="bg-gradient-to-r from-primary via-primary-accent to-secondary bg-clip-text text-transparent block mt-2"
              delay={0.6}
            />
          </div>

          {/* Description with fade */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.0 }}
            className="mt-6 sm:mt-8 text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed"
          >
            {t("description")}
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.2 }}
            className="mt-8 sm:mt-10 flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center"
          >
            <Button size="lg" className="group w-full sm:w-auto" asChild>
              <a href="https://embed-app-eurowings-813672933176.europe-west3.run.app/" className="inline-flex items-center gap-2">
                {t("cta")}
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
            <Button variant="ghost" size="lg" className="w-full sm:w-auto" asChild>
              <a href="#how-it-works" className="inline-flex items-center gap-2">
                {t("learnMore")}
                <motion.span
                  animate={{ y: [0, 4, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <ChevronDown className="w-4 h-4" />
                </motion.span>
              </a>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
