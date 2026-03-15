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
        <div className="mt-10 pt-6 border-t border-border flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="text-xs text-muted-foreground">
            {t("copyright", { year: String(year) })}
          </p>
          <p className="text-xs text-muted-foreground/60 flex items-center gap-1">
            {t("poweredBy")}{" "}
            <a
              href="https://913.ai"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-muted-foreground/80 hover:text-secondary transition-colors"
            >
              913.ai
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
