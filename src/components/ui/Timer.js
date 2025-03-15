"use client"; // Ensures this component is a Client Component

import { useState, useEffect } from "react";

export default function Timer({ targetDate, customStyle }) {
  const [timeLeft, setTimeLeft] = useState(
    {
      days: String('0').padStart(2, "0"),
      hours: String('0').padStart(2, "0"),
      minutes: String('0').padStart(2, "0"),
      seconds: String('0').padStart(2, "0")
    }
  ); // Start as null to prevent SSR issues

  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = new Date(targetDate).getTime() - new Date().getTime();
      if (difference <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };

      return {
        days: String(Math.floor(difference / (1000 * 60 * 60 * 24))).padStart(2, "0"),
        hours: String(Math.floor((difference / (1000 * 60 * 60)) % 24)).padStart(2, "0"),
        minutes: String(Math.floor((difference / (1000 * 60)) % 60)).padStart(2, "0"),
        seconds: String(Math.floor((difference / 1000) % 60)).padStart(2, "0")
      };
    };

    setTimeLeft(calculateTimeLeft()); // Initialize countdown after first render

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <div className={`pt-1 pb-1 flex items-center justify-between min-w-[496px] ${customStyle}`}>
      
      <p className="text-sm text-center leading-tight uppercase">
        PROMOTION <br /> ENDS IN
      </p>

      <div className="flex space-x-2 mt-2">
        
        <div className="flex flex-col items-center min-w-[64px] gap-1.5">
          <span className="text-4xl">
            {timeLeft.days}
          </span>
          <span className="text-xs">Days</span>
        </div>

        <div className="flex items-start">
          <span className="text-3xl pt-0.5">:</span>
        </div>

        <div className="flex flex-col items-center min-w-[64px] gap-1.5">
          <span className="text-4xl">
            {timeLeft.hours}
          </span>
          <span className="text-xs">Hours</span>
        </div>

        <div className="flex items-start">
          <span className="text-3xl pt-0.5">:</span>
        </div>

        <div className="flex flex-col items-center min-w-[64px] gap-1.5">
          <span className="text-4xl">
            {timeLeft.minutes}
          </span>
          <span className="text-xs">Minutes</span>
        </div>

        <div className="flex items-start">
          <span className="text-3xl pt-0.5">:</span>
        </div>

        <div className="flex flex-col items-center min-w-[64px] gap-1.5">
          <span className="text-4xl">
            {timeLeft.seconds}
          </span>
          <span className="text-xs">Seconds</span>
        </div>
          
      </div>
      
    </div>
  );
  
}
