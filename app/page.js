import Header from "@/src/components/layout/Header";
import HeroSection from "@/src/components/sections/HeroSection";
import FastMatchingSection from "@/src/components/sections/FastMatchingSection";
import EasyAnalysisSection from "@/src/components/sections/EasyAnalysisSection";
import TradeInAppSection from "@/src/components/sections/TradeInAppSection";
import LinkAccountSection from "@/src/components/sections/LinkAccountSection";
import ChooseSection from "@/src/components/sections/ChooseSection";
import NavigateAppSection from "@/src/components/sections/NavigateAppSection"; 
import EnquireNowSection from "@/src/components/sections/EnquireNowSection";

export default function Home() {
  return (
    <div>
      <Header />

      <div className="body max-w-[1520px] shadow-[0px_4px_4px_rgba(0,0,0,0.2)] mx-[132px] pt-[83px] mb-[63px]"> 
        <HeroSection />
        <FastMatchingSection />
        <EasyAnalysisSection />
        <TradeInAppSection />
        <LinkAccountSection />
        <ChooseSection />
        <NavigateAppSection />
        <EnquireNowSection />
      </div>
    </div>
  );
}
