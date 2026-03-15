"use client";

import { useTranslations } from "next-intl";
import { Bot, Clock, Zap, FileX } from "lucide-react";
import { AnimationWrapper } from "@/components/animation-wrapper";
import { SpotlightCard } from "@/components/spotlight-card";
import { Badge } from "@/components/ui/badge";

const featureData = [
  { key: "ai", icon: Bot, gradient: "from-primary to-primary-accent", span: "md:col-span-2 md:row-span-2" },
  { key: "available", icon: Clock, gradient: "from-secondary to-secondary-light", span: "" },
  { key: "fast", icon: Zap, gradient: "from-primary-accent to-secondary", span: "" },
  { key: "paperless", icon: FileX, gradient: "from-secondary-light to-primary", span: "md:col-span-2" },
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

        {/* Asymmetric Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-5">
          {featureData.map(({ key, icon: Icon, gradient, span }, index) => (
            <AnimationWrapper
              key={key}
              delay={index * 0.1}
              direction={index % 2 === 0 ? "up" : "up"}
              className={span}
            >
              <SpotlightCard className="h-full">
                <div className="group relative overflow-hidden rounded-2xl border border-border/50 bg-white h-full p-8 sm:p-10 hover:shadow-xl transition-all duration-500">
                  {/* Gradient accent line */}
                  <div
                    className={`absolute top-0 left-0 h-1 w-full bg-gradient-to-r ${gradient} scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`}
                  />

                  <div
                    className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${gradient} flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}
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
              </SpotlightCard>
            </AnimationWrapper>
          ))}
        </div>
      </div>
    </section>
  );
}
