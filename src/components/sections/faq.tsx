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
    <section id="faq" className="py-24 sm:py-32 bg-accent/30">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <AnimationWrapper className="text-center mb-12">
          <Badge className="mb-4">{t("badge")}</Badge>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
            {t("title")}
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            {t("description")}
          </p>
        </AnimationWrapper>

        <AnimationWrapper delay={0.2}>
          <div className="bg-white rounded-2xl border border-border/50 shadow-sm p-6 sm:p-8">
            <Accordion type="single" collapsible className="w-full">
              {faqKeys.map((key) => (
                <AccordionItem key={key} value={key}>
                  <AccordionTrigger className="text-left text-base">
                    {t(`items.${key}.question`)}
                  </AccordionTrigger>
                  <AccordionContent className="text-base leading-relaxed">
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
