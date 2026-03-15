"use client";

import { useTranslations } from "next-intl";
import { ClipboardList, Upload, Search, CheckCircle } from "lucide-react";
import { AnimationWrapper } from "@/components/animation-wrapper";
import { Badge } from "@/components/ui/badge";

const stepIcons = [ClipboardList, Upload, Search, CheckCircle];
const stepKeys = ["report", "upload", "review", "resolve"] as const;

export function HowItWorks() {
  const t = useTranslations("howItWorks");

  return (
    <section id="how-it-works" className="py-24 sm:py-32 bg-accent/30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <AnimationWrapper className="text-center mb-16">
          <Badge className="mb-4">{t("badge")}</Badge>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
            {t("title")}
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            {t("description")}
          </p>
        </AnimationWrapper>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {stepKeys.map((key, index) => {
            const Icon = stepIcons[index];
            return (
              <AnimationWrapper key={key} delay={index * 0.1}>
                <div className="relative group">
                  <div className="bg-white rounded-2xl p-8 shadow-sm border border-border/50 hover:shadow-md hover:border-primary/20 transition-all duration-300 h-full">
                    {/* Step number */}
                    <div className="absolute -top-3 -left-1 w-8 h-8 rounded-full bg-primary text-white text-sm font-bold flex items-center justify-center shadow-lg">
                      {index + 1}
                    </div>

                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center mb-5">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>

                    <h3 className="text-lg font-semibold mb-2">
                      {t(`steps.${key}.title`)}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {t(`steps.${key}.description`)}
                    </p>
                  </div>

                  {/* Connector line (hidden on last card and on mobile) */}
                  {index < 3 && (
                    <div className="hidden lg:block absolute top-1/2 -right-4 lg:-right-4 w-8 h-[2px] bg-gradient-to-r from-primary/30 to-secondary/30" />
                  )}
                </div>
              </AnimationWrapper>
            );
          })}
        </div>
      </div>
    </section>
  );
}
