import { useState } from "react";
import Image from "next/image";

export default function GuideAccordion() {
  const [activeStep, setActiveStep] = useState(2);

  const guide = [
    {
      id: 1,
      step: "Install our app, “Blackwell Invest”",
      imagePath: "/images/guide/guide-1.png",
      color: "var(--gold)"
    },
    {
      id: 2,
      step: "Choose a signal Master and click “Copy”",
      imagePath: "/images/guide/guide-2.png",
      color: "var(--orange)"
    },
    {
      id: 3,
      step: "Set your trade size preferences",
      imagePath: "/images/guide/guide-3.png",
      color: "var(--gold)"
    },
    {
      id: 4,
      step: "Click “Agree and Copy”",
      imagePath: "/images/guide/guide-4.png",
      color: "var(--orange)"
    }
  ];

  return (
    <div className="w-full flex justify-center mt-7 px-[74px]">
      
      {/* Step Buttons */}
      <div className="w-1/2 flex flex-col justify-between">
        {guide.map((item) => ( 
          <button 
            key={item.id}
            onClick={() => setActiveStep(item.id)}
            className={`border rounded-lg p-4 flex items-center gap-[82px] z-10
                ${ activeStep === item.id ? "w-[100.25%] rounded-r-none border-r-0" : "w-[98%]" }
              `}
            style={{ borderColor: item.color, backgroundColor: "var(--background)" }}
          >
            <span 
              className="italic text-[40px]"
              style={{ color: item.color }} 
            >
              {item.id}
            </span>
            <p 
                className="font-semibold"
                style={{ color: activeStep === item.id ? "var(--light-blue)" : "white" }}
            >{item.step}</p>
          </button>
        ))}
      </div>

      {/* Dynamic Content Section */}
      <div 
        className={`w-1/2 rounded-3xl flex justify-center items-center border py-[20px] z-0 
                    ${activeStep === 1 ? "rounded-tl-none" : ""} 
                    ${activeStep === guide.length ? "rounded-bl-none" : ""}`
                  }  
        style={{ borderColor: guide[activeStep - 1]?.color, backgroundColor: "var(--background)" }} 
      >
        {/* Display Step Image */}
        <Image 
            src={guide[activeStep - 1]?.imagePath}
            width={380} 
            height={425} 
            alt={`Step ${activeStep}`} 
            className="w-[380px] rounded-xl drop-shadow-[0px_10px_30px_rgba(0,0,0,0.4)]"
        />

      </div>

    </div>
  );
}
