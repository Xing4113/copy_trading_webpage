import Header from "@/src/components/layout/Header";
import HeroSection from "@/src/components/sections/HeroSection";

export default function Home() {
  return (
    <div>
      <Header />

      <div className="body max-w-[1250px] shadow-lg drop-shadow-xl mx-auto"> 
        <HeroSection />

      </div>
    </div>
  );
}
