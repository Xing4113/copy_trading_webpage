"use client"; // Runs on the client side

import NavigationContainer from "../ui/NavigationContainer";
import Image from "next/image";

export default function NavigateAppSection() {
  return (
    <section>
      <div className="w-full mt-[116px]" >
        
        {/* title */}
        <h1 className="text-center text-4xl font-semibold" style={{color: 'var(--light-blue)'}}>Navigate Our App in 5 Clicks</h1>

        <NavigationContainer />
        
        {/* google play & app store images */}
        <div className="flex justify-center gap-4 mt-6">
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
