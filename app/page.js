import HeroSection from "@/components/HeroSection";
import Overview from "@/components/Overview";
import Schedule from "@/components/Schedule";
import TrustedBy from "@/components/TrustedBy";

export default function Home() {
  return (
    <div className="bg-background min-h-screen">
      <HeroSection />
      <TrustedBy />
      <Overview />
      <Schedule />
    </div>
  );
}
