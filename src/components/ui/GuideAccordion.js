import styles from "@/styles/ui/GuideAccordion.module.scss";

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
    <div className={`w-full grid grid-cols-2 gap-y-6 px-[74px] mt-7 ${styles.accordionContainer}`}>
      
      {/* Step Buttons (Left Side) */}
        {guide.map((item) => (
          <button 
            key={item.id}
            onClick={() => setActiveStep(item.id)}
            className={`border rounded-lg p-4 flex items-center gap-[82px] cursor-pointer z-20 ${styles.stepButton}
                ${ activeStep === item.id ? "w-[100.25%] row-span-1 rounded-r-none border-r-0" : "w-[98%]" }
              `}
            style={{ borderColor: item.color, backgroundColor: "var(--background)", order: item.id }}
          >
            <span 
              className={`italic text-[40px] ${styles.stepNumber}`} 
              style={{ color: item.color }} 
            >
              {item.id}
            </span>
            <p 
                className={`font-semibold ${styles.stepText}`}
                style={{ color: activeStep === item.id ? "var(--light-blue)" : "white" }}
            >
              {item.step}
            </p>
          </button>
        ))}

      {/* Dynamic Content Section */}
      <div 
        className={`row-span-4 flex justify-center items-center border rounded-3xl py-3 z-0 ${styles.imageContainer}
                    ${activeStep === 1 ? "rounded-tl-none" : ""} 
                    ${activeStep === guide.length ? "rounded-bl-none" : ""}
                  `} 
        style={{ borderColor: guide[activeStep - 1]?.color, backgroundColor: "var(--background)", order: activeStep }} 
      >
        {/* Display Step Image */}
        <Image 
            src={guide[activeStep - 1]?.imagePath}
            width={380} 
            height={425} 
            alt={`Step ${activeStep}`} 
            className={`w-[380px] rounded-xl drop-shadow-[0px_10px_30px_rgba(0,0,0,0.4)] ${styles.stepImage}`}
        />

      </div>

    </div>
  );
}
