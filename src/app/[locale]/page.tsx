import { Header } from "@/components/layout/header";
import { Hero } from "@/components/sections/hero";
import { HowItWorks } from "@/components/sections/how-it-works";
import { Stats } from "@/components/sections/stats";
import { Features } from "@/components/sections/features";
import { FAQ } from "@/components/sections/faq";
import { CTABanner } from "@/components/sections/cta-banner";
import { Footer } from "@/components/layout/footer";
import { ScrollToTop } from "@/components/scroll-to-top";

export default function Home() {
  return (
    <>
      <ScrollToTop />
      <Header />
      <main>
        <Hero />
        <HowItWorks />
        <Stats />
        <Features />
        <FAQ />
        <CTABanner />
      </main>
      <Footer />
    </>
  );
}
