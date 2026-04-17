"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles, Compass } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { TextReveal } from "@/components/text-reveal";
import { SpotlightCard } from "@/components/spotlight-card";

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

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-20 pb-10 sm:pt-24 sm:pb-12">
        <div className="text-center max-w-3xl mx-auto">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Badge variant="secondary" className="mb-4 sm:mb-5 text-xs sm:text-sm px-3 py-1">
              {t("badge")}
            </Badge>
          </motion.div>

          {/* Word-by-word headline reveal */}
          <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight leading-[1.1]">
            <TextReveal
              text={t("title")}
              className="text-foreground block"
              delay={0.3}
            />
            <TextReveal
              text={t("titleHighlight")}
              className="bg-gradient-to-r from-primary via-primary-accent to-secondary bg-clip-text text-transparent block mt-1 sm:mt-2"
              delay={0.6}
            />
          </div>
        </div>

        {/* Two big boxes */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1.0 }}
          className="mt-7 sm:mt-10 grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5 max-w-4xl mx-auto"
        >
          {/* Primary box — Report with Rose */}
          <SpotlightCard className="h-full">
            <div className="group relative h-full overflow-hidden rounded-2xl sm:rounded-3xl border border-primary/20 bg-gradient-to-br from-white to-primary/5 p-5 sm:p-7 shadow-lg shadow-primary/5 hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500 flex flex-col">
              {/* Gradient accent line */}
              <div className="absolute top-0 left-0 h-1 w-full bg-gradient-to-r from-primary via-primary-accent to-secondary" />

              <div className="flex items-center gap-3 mb-3 sm:mb-4">
                <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-gradient-to-br from-primary to-primary-accent flex items-center justify-center shadow-lg shadow-primary/20 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                  <Sparkles className="w-5 h-5 text-white" />
                </div>
                <span className="text-xs font-semibold uppercase tracking-wider text-primary">
                  {t("primaryBox.eyebrow")}
                </span>
              </div>

              <h3 className="text-lg sm:text-xl md:text-2xl font-bold tracking-tight text-foreground mb-2">
                {t("primaryBox.title")}
              </h3>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                {t("primaryBox.description")}
              </p>

              {/* CTA + note pinned to the bottom */}
              <div className="mt-auto pt-5">
                <Button size="lg" className="group/btn w-full" asChild>
                  <a
                    href="https://embed-app-eurowings-823415516695.europe-west3.run.app/"
                    className="inline-flex items-center justify-center gap-2"
                  >
                    {t("primaryBox.cta")}
                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </a>
                </Button>
                <p className="pt-3 text-xs text-muted-foreground/80 text-center">
                  {t("primaryBox.note")}
                </p>
              </div>
            </div>
          </SpotlightCard>

          {/* Secondary box — Learn more */}
          <SpotlightCard className="h-full">
            <div className="group relative h-full overflow-hidden rounded-2xl sm:rounded-3xl border border-border/60 bg-white/70 backdrop-blur-sm p-5 sm:p-7 shadow-md hover:shadow-xl hover:border-secondary/30 transition-all duration-500 flex flex-col">
              <div className="flex items-center gap-3 mb-3 sm:mb-4">
                <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-gradient-to-br from-secondary to-secondary-light flex items-center justify-center shadow-lg shadow-secondary/20 group-hover:scale-110 group-hover:-rotate-3 transition-all duration-300">
                  <Compass className="w-5 h-5 text-white" />
                </div>
                <span className="text-xs font-semibold uppercase tracking-wider text-secondary">
                  {t("secondaryBox.eyebrow")}
                </span>
              </div>

              <h3 className="text-lg sm:text-xl md:text-2xl font-bold tracking-tight text-foreground mb-2">
                {t("secondaryBox.title")}
              </h3>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                {t("secondaryBox.description")}
              </p>

              {/* CTA + note pinned to the bottom */}
              <div className="mt-auto pt-5">
                <Button
                  size="lg"
                  variant="outline"
                  className="group/btn w-full border-secondary/30 hover:bg-secondary/5 hover:border-secondary/60"
                  asChild
                >
                  <a href="#how-it-works" className="inline-flex items-center justify-center gap-2">
                    {t("secondaryBox.cta")}
                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </a>
                </Button>
                <p className="pt-3 text-xs text-muted-foreground/80 text-center">
                  {t("secondaryBox.note")}
                </p>
              </div>
            </div>
          </SpotlightCard>
        </motion.div>
      </div>
    </section>
  );
}
