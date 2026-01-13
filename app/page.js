import HeroSection from "@/components/HeroSection";
import Overview from "@/components/Overview";
import TrustedBy from "@/components/TrustedBy";

export default function Home() {
  return (
    <div className="bg-background min-h-screen">
      <HeroSection />
      <TrustedBy />
      <Overview />
    </div>
  );
}
