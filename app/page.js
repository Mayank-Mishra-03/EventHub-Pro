import HeroSection from "@/components/HeroSection";
import Overview from "@/components/Overview";
import Schedule from "@/components/Schedule";
import Speakers from "@/components/Speakers";
import SuccessStoriesSection from "@/components/SuccessStoriesSection";
import TrustedBy from "@/components/TrustedBySection";

export default function Home() {
  return (
    <div className="bg-background min-h-screen">
      <HeroSection />
      <TrustedBy />
      <Overview />
      <Schedule />
      <Speakers/>
      <SuccessStoriesSection/>
    </div>
  );
}
