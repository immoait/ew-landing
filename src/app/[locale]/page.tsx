import { Header } from "@/components/layout/header";
import { Hero } from "@/components/sections/hero";
import { HowItWorks } from "@/components/sections/how-it-works";
import { Stats } from "@/components/sections/stats";
import { Features } from "@/components/sections/features";
import { FAQ } from "@/components/sections/faq";
import { CTABanner } from "@/components/sections/cta-banner";
import { Footer } from "@/components/layout/footer";
import { AirplaneJourney } from "@/components/airplane-journey";
import { FloatingElements } from "@/components/floating-elements";

export default function Home() {
  return (
    <>
      <AirplaneJourney />
      <FloatingElements />
      <Header />
      <main className="relative z-[1]">
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
