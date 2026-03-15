"use client";

import { useTranslations } from "next-intl";
import { EurowingsLogo } from "@/components/eurowings-logo";
import { Link } from "@/i18n/navigation";

export function Footer() {
  const t = useTranslations("footer");
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-accent/30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row justify-between items-start gap-8">
          {/* Brand */}
          <div className="space-y-3">
            <EurowingsLogo width={140} height={32} />
            <p className="text-sm text-muted-foreground max-w-xs">
              {t("tagline")}
            </p>
          </div>

          {/* Legal Links */}
          <div className="space-y-3">
            <h4 className="text-sm font-semibold text-foreground">
              {t("legal")}
            </h4>
            <nav className="flex flex-col gap-2">
              <Link
                href="/privacy"
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                {t("privacy")}
              </Link>
              <Link
                href="/terms"
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                {t("terms")}
              </Link>
              <Link
                href="/imprint"
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                {t("imprint")}
              </Link>
            </nav>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 pt-6 border-t border-border">
          <p className="text-xs text-muted-foreground">
            {t("copyright", { year: String(year) })}
          </p>
        </div>
      </div>
    </footer>
  );
}
