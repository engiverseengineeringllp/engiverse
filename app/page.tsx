import { HeroSection } from "@/components/home/HeroSection";
import { ServicesOverview } from "@/components/home/ServicesOverview";
import PortfolioSection from "@/components/home/PortfolioSection";
import { AboutSection } from "@/components/home/AboutSection";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <HeroSection />
      <ServicesOverview />
      <PortfolioSection />
      <AboutSection />
    </main>
  );
}
