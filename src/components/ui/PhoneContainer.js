import { useRef, useState } from "react";
import { Search, Zap, UserRound , CircleDot , ChartNoAxesCombined } from "lucide-react";

export default function PhoneContainer({filePath, fileType, containerStyle, videoStyle}) {

  return (
    
    <div className={`${containerStyle}`}>
        
        {/* Top Part */}
        <div className="h-6 bg-white text-blue-500 flex items-center justify-center text-[10px] rounded-t-xl border-b border-gray-300 font-semibold">
          Discover
        </div>

        {/* Video */}
        <video
            width="300"
            className={videoStyle}
            autoPlay
            loop
        >
            <source src={filePath} type={fileType} />
            Your browser does not support the video tag.
        </video>

        {/* Bottom Part */}

        <div className="h-10 bg-white rounded-b-xl">

          <div className="flex items-center justify-around border-t border-gray-300">
            {/* Discover Icon */}
            <div className="flex flex-col items-center justify-center text-blue-500">
              <Search size={15} />
              <span className="text-[7px]">Discover</span>
            </div>

            {/* Activity Icon */}
            <div className="flex flex-col items-center justify-center text-gray-500">
              <Zap size={15} fill="currentColor" />
              <span className="text-[7px]">Activity</span>
            </div>

            {/* Trade Icon */}
            <div className="flex flex-col items-center justify-center text-gray-500">
              <ChartNoAxesCombined size={15} />
              <span className="text-[7px]">Trade</span>
            </div>

            {/* Positions Icon */}
            <div className="flex flex-col items-center justify-center text-gray-500">
              <CircleDot size={15} />
              <span className="text-[7px]">Positions</span>
            </div>

            {/* Account Icon */}
            <div className="flex flex-col items-center justify-center text-gray-500">
              <UserRound size={15} fill="currentColor" />
              <span className="text-[7px]">Account</span>
            </div>

          </div>

          {/* iPhone Home Indicator */}
          <div className="w-20 h-1 bg-black rounded-full mx-auto mt-2"></div>

        </div>
        
    </div>
  );
}
