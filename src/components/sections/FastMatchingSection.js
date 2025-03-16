"use client"; // Runs on the client side

import Image from "next/image";
import Video from "../ui/Video";

export default function FastMatchingSection() {
  return (
    <section>
      <div className="w-full mt-[50px]">
        
        {/* title */}
        <h1 className="text-center text-4xl font-semibold" style={{color: 'var(--light-blue)'}}>Fast Matching</h1>

        {/* Video & Description */}
        <div className="flex justify-center mt-[36px]">

            <div className="relative flex items-center justify-center -ml-[36px] mr-[36px]"> 

                <Image 
                    src="/images/mobile-1.png" 
                    width={200} 
                    height={500} 
                    alt="mobile-1"
                    style={{ width: "196px" }}
                    className="shadow-md rounded-4xl z-0"
                />

                <Video 
                    filePath="/videos/mobile-video.mp4" 
                    fileType="video/mp4" 
                    containerStyle="absolute px-[0.25px] top-[26.5px] z-10"
                    videoStyle="rounded-md" 
                />
            </div>


            <div className="pt-[64px]">
                <ul className="space-y-2 text-white text-[22px]">
                    <li className="flex items-center gap-3">
                        <img src="/images/list-icon.png" alt="icon" className="w-14 h-5 relative top-1" />
                        Spotlight
                    </li>
                    
                    <li className="flex items-center gap-3">
                        <img src="/images/list-icon.png" alt="icon" className="w-14 h-5 relative top-1" />
                        Top Strategies 
                    </li>
                    
                    <li className="flex items-center gap-3">
                        <img src="/images/list-icon.png" alt="icon" className="w-14 h-5 relative top-1" />
                        Low Drawdown
                    </li>
                    
                    <li className="flex items-center gap-3">
                        <img src="/images/list-icon.png" alt="icon" className="w-14 h-5 relative top-1" />
                        Medium Drawdown
                    </li>
                    
                    <li className="flex items-center gap-3">
                        <img src="/images/list-icon.png" alt="icon" className="w-14 h-5 relative top-1" />
                        High Drawdown
                    </li>
                    
                    <li className="flex items-center gap-3">
                        <img src="/images/list-icon.png" alt="icon" className="w-14 h-5 relative top-1" />
                        New Strategies
                    </li>
                    
                </ul>
            </div>

        </div>

      </div>
    </section>
  );
}
