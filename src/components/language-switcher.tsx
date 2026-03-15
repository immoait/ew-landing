"use client";

import { useLocale } from "next-intl";
import { useRouter, usePathname } from "@/i18n/navigation";
import { cn } from "@/lib/utils";

export function LanguageSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const switchLocale = (newLocale: "en" | "de") => {
    router.replace(pathname, { locale: newLocale });
  };

  return (
    <div className="flex items-center gap-1 rounded-full border border-border bg-accent/50 p-0.5">
      <button
        onClick={() => switchLocale("en")}
        className={cn(
          "rounded-full px-3 py-1 text-xs font-medium transition-all duration-200 cursor-pointer",
          locale === "en"
            ? "bg-white text-foreground shadow-sm"
            : "text-muted-foreground hover:text-foreground"
        )}
      >
        EN
      </button>
      <button
        onClick={() => switchLocale("de")}
        className={cn(
          "rounded-full px-3 py-1 text-xs font-medium transition-all duration-200 cursor-pointer",
          locale === "de"
            ? "bg-white text-foreground shadow-sm"
            : "text-muted-foreground hover:text-foreground"
        )}
      >
        DE
      </button>
    </div>
  );
}
