import HeroSection from "@/components/HeroSection";
import Overview from "@/components/Overview";
import QuestionSection from "@/components/QuestionSection";
import Schedule from "@/components/Schedule";
import Speakers from "@/components/Speakers";
import SuccessStoriesSection from "@/components/SuccessStoriesSection";
import Tickets from "@/components/Tickets";
import TrustedBy from "@/components/TrustedBySection";
import VenueInfoSection from "@/components/VenueInfoSection";

export default function Home() {
  return (
    <div className="bg-background min-h-screen">
      <HeroSection />
      <TrustedBy />
      <Overview />
      <Schedule />
      <Speakers />
      <SuccessStoriesSection />
      <Tickets />
      <VenueInfoSection />
      <QuestionSection />
    </div>
  );
}
