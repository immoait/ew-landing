"use client";

import { useTranslations } from "next-intl";
import { Bot, Clock, Zap, FileX } from "lucide-react";
import { AnimationWrapper } from "@/components/animation-wrapper";
import { Badge } from "@/components/ui/badge";

const featureData = [
  { key: "ai", icon: Bot, gradient: "from-primary to-primary-accent" },
  { key: "available", icon: Clock, gradient: "from-secondary to-secondary-light" },
  { key: "fast", icon: Zap, gradient: "from-primary-accent to-secondary" },
  { key: "paperless", icon: FileX, gradient: "from-secondary-light to-primary" },
] as const;

export function Features() {
  const t = useTranslations("features");

  return (
    <section id="features" className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <AnimationWrapper className="text-center mb-16">
          <Badge variant="secondary" className="mb-4">
            {t("badge")}
          </Badge>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
            {t("title")}
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            {t("description")}
          </p>
        </AnimationWrapper>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {featureData.map(({ key, icon: Icon, gradient }, index) => (
            <AnimationWrapper
              key={key}
              delay={index * 0.1}
              direction={index % 2 === 0 ? "left" : "right"}
            >
              <div className="group relative overflow-hidden rounded-2xl border border-border/50 bg-white p-8 sm:p-10 hover:shadow-lg transition-all duration-300">
                {/* Gradient accent */}
                <div
                  className={`absolute top-0 left-0 h-1 w-full bg-gradient-to-r ${gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                />

                <div
                  className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${gradient} flex items-center justify-center mb-6 shadow-lg`}
                >
                  <Icon className="w-7 h-7 text-white" />
                </div>

                <h3 className="text-xl font-semibold mb-3">
                  {t(`items.${key}.title`)}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {t(`items.${key}.description`)}
                </p>
              </div>
            </AnimationWrapper>
          ))}
        </div>
      </div>
    </section>
  );
}
