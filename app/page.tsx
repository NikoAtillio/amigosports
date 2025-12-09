import HeroSection from "./_components/home/hero-section";
import StatsSection from "./_components/home/stats-section";
import ThreePillars from "./_components/home/three-pillars";
import CommunityPreview from "./_components/home/community-preview";
import FeaturedAthletes from "./_components/home/featured-athletes";
import HowItWorks from "./_components/home/how-it-works";
import SocialProof from "./_components/home/social-proof";
import MediaMentions from "./_components/home/media-mentions";
import FinalCTA from "./_components/home/final-cta";

export default function Home() {
  return (
    <div className="pt-16">
      <HeroSection />
      <StatsSection />
      <ThreePillars />
      <CommunityPreview />
      <FeaturedAthletes />
      <HowItWorks />
      <SocialProof />
      <MediaMentions />
      <FinalCTA />
    </div>
  );
}
