import Header from "@/src/components/layout/Header";
import HeroSection from "@/src/components/sections/HeroSection";
import FastMatchingSection from "@/src/components/sections/FastMatchingSection";
import EasyAnalysisSection from "@/src/components/sections/EasyAnalysisSection";
import TradeInAppSection from "@/src/components/sections/TradeInAppSection";
import LinkAccountSection from "@/src/components/sections/LinkAccountSection";
import ChooseSection from "@/src/components/sections/ChooseSection";

export default function Home() {
  return (
    <div>
      <Header />

      <div className="body max-w-[1250px] shadow-lg mx-auto"> 
        <HeroSection />
        <FastMatchingSection />
        <EasyAnalysisSection />
        <TradeInAppSection />
        <LinkAccountSection />
        <ChooseSection />
      </div>
    </div>
  );
}
