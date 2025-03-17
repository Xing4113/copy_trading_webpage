"use client"; // Runs on the client side

import GuideAccordion from "../ui/GuideAccordion";
import Image from "next/image";

export default function TradeInAppSection() {
  return (
    <section>
      <div className="w-full relative bg-[url('/images/bg-1.png')] bg-no-repeat bg-top bg-[length:200%] mt-[60px]" >
        
        {/* space */}
        <div className="w-full h-[350px]"></div>

        {/* title */}
        <h1 className="text-center text-4xl font-semibold" style={{color: 'var(--light-blue)'}}>Trade Like a Pro in Minutes</h1>

        <GuideAccordion />

        {/* google play & app store images */}
        <div className="flex justify-center gap-4 mt-[26px]">
            <Image 
                src="/images/google-play.jpg" 
                width={132} 
                height={64} 
                alt="Google Play"
                className="rounded-xl"
            />
            <Image 
                src="/images/app-store.jpg" 
                width={132} 
                height={64} 
                alt="App Store"
                className="rounded-xl z-10"
            />
        </div>

      </div>
    </section>
  );
}
