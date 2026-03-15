import { useTranslations } from "next-intl";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";

export default function PrivacyPage() {
  const t = useTranslations("privacy");

  return (
    <>
      <Header />
      <main className="pt-32 pb-24">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl sm:text-4xl font-bold mb-6">{t("title")}</h1>
          <div className="prose prose-gray max-w-none">
            <p className="text-muted-foreground text-lg">{t("content")}</p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
