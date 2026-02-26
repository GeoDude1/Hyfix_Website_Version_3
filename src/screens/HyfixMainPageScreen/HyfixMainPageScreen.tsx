import { ScrollToTop } from "../../components/ScrollToTop";
import { NavigationWrapperSection } from "./sections/NavigationWrapperSection";
import { NarrativeHeroSection } from "./sections/NarrativeHeroSection/NarrativeHeroSection";
import { ProblemBanSection } from "./sections/ProblemBanSection/ProblemBanSection";
import { MissionStatementSection } from "./sections/MissionStatementSection/MissionStatementSection";
import { ChipRevealSection } from "./sections/ChipRevealSection/ChipRevealSection";
import { SolutionChipSection } from "./sections/SolutionChipSection/SolutionChipSection";
import { CredibilitySection } from "./sections/CredibilitySection/CredibilitySection";
import { CTASection } from "./sections/CTASection/CTASection";
import { FooterWrapperSection } from "./sections/FooterWrapperSection";

export const HyfixMainPageScreen = (): JSX.Element => {
  return (
    <main className="overflow-hidden w-full min-w-0 min-h-screen relative bg-[#0a0a0a]">
      <ScrollToTop />
      <NavigationWrapperSection />

      {/* 1. Hero — Emotional Hook */}
      <NarrativeHeroSection />

      {/* 2. Problem: The Ban */}
      <ProblemBanSection />

      {/* 3. Mission Statement (Emotional Pivot) */}
      <MissionStatementSection />

      {/* 6b. With a Single Chip — heading + chip content in one scroll experience */}
      <ChipRevealSection />

      {/* 7. The Solution — Full-Screen Video + Chip Intro */}
      <SolutionChipSection />

      {/* 8. Credibility / Funding */}
      <CredibilitySection />

      {/* 9. CTA */}
      <CTASection />

      {/* Footer */}
      <FooterWrapperSection />
    </main>
  );
};
