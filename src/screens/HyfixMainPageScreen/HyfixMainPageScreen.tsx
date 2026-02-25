import { ScrollToTop } from "../../components/ScrollToTop";
import { ChipTechnologySection } from "./sections/ChipTechnologySection";
import { DronesAndRoboticsOverviewSection } from "./sections/DronesAndRoboticsOverviewSection/DronesAndRoboticsOverviewSection";
import { FooterWrapperSection } from "./sections/FooterWrapperSection";
import { HeroImageSection } from "./sections/HeroImageSection";
import { HyfixBrandingSection } from "./sections/HyfixBrandingSection/HyfixBrandingSection";
import { NavigationWrapperSection } from "./sections/NavigationWrapperSection";
import { NewsUpdatesSection } from "./sections/NewsUpdatesSection/NewsUpdatesSection";

export const HyfixMainPageScreen = (): JSX.Element => {
  return (
    <main className="overflow-hidden w-full min-w-0 min-h-screen relative bg-gray-700 pt-0">
      <ScrollToTop />
      {/* Navigation - fixed so it follows on screen when scrolling */}
      <NavigationWrapperSection />

      {/* Hero Section - Full screen dark with video */}
      <div className="translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:200ms]">
        <HeroImageSection />
      </div>

      {/* Chip Technology - White background */}
      <div className="translate-y-[-1rem] animate-reveal opacity-0 [--animation-delay:400ms]">
        <ChipTechnologySection />
      </div>

      {/* Drones Overview - Light gray background */}
      <div className="bg-gray-50 translate-y-[-1rem] animate-fade-up opacity-0 [--animation-delay:600ms]">
        <DronesAndRoboticsOverviewSection />
      </div>

      {/* Branding - White background */}
      <div className="bg-white translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:800ms]">
        <HyfixBrandingSection />
      </div>

      {/* News - Dark background */}
      <div className="bg-gradient-to-b from-gray-600 to-gray-700 translate-y-[-1rem] animate-reveal opacity-0 [--animation-delay:1000ms]">
        <NewsUpdatesSection />
      </div>

      {/* Footer - Distinct background (no line) */}
      <div className="translate-y-[-1rem] animate-fade-up opacity-0 [--animation-delay:1200ms]">
        <FooterWrapperSection />
      </div>
    </main>
  );
};
