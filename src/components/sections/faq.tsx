"use client";

import { useTranslations } from "next-intl";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { AnimationWrapper } from "@/components/animation-wrapper";
import { Badge } from "@/components/ui/badge";

const faqKeys = ["q1", "q2", "q3", "q4", "q5", "q6"] as const;

export function FAQ() {
  const t = useTranslations("faq");

  return (
    <section id="faq" className="py-20 sm:py-24 md:py-32 bg-accent/30">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <AnimationWrapper className="text-center mb-10 sm:mb-12">
          <Badge className="mb-4">{t("badge")}</Badge>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">
            {t("title")}
          </h2>
          <p className="mt-3 sm:mt-4 text-base sm:text-lg text-muted-foreground">
            {t("description")}
          </p>
        </AnimationWrapper>

        <AnimationWrapper delay={0.2}>
          <div className="bg-white rounded-2xl border border-border/50 shadow-sm p-4 sm:p-6 md:p-8">
            <Accordion type="single" collapsible className="w-full">
              {faqKeys.map((key) => (
                <AccordionItem key={key} value={key}>
                  <AccordionTrigger className="text-left text-sm sm:text-base">
                    {t(`items.${key}.question`)}
                  </AccordionTrigger>
                  <AccordionContent className="text-sm sm:text-base leading-relaxed">
                    {t(`items.${key}.answer`)}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </AnimationWrapper>
      </div>
    </section>
  );
}
