"use client"; // Runs on the client side

import Image from "next/image";

export default function EasyAnalysisSection() {
  return (
    <section>
      <div className="w-full mt-[60px]">
        
        {/* title */}
        <h1 className="text-center text-4xl font-semibold" style={{color: 'var(--light-blue)'}}>Easy Analysis</h1>

        {/* Description */}
        <p className="text-center font-semibold text-xl max-w-[850px] mx-auto mt-[28px]" style={{color: 'var(--gold)'}}>
            Instant clarity on the Masters' profile. Get a snapshot of their trade history, profitability, risk, and portfolio all in one place. 
        </p>

        {/* Mobile & Function Images */}
        <div className="flex justify-center mt-[36px] relative">

            <div className="relative">
            
                <Image 
                    src="/images/mobile-2.png" 
                    width={200} 
                    height={500} 
                    alt="mobile-1"
                    style={{ width: "196px" }}
                    className="shadow-[0px_0px_36px_rgba(0,0,0,0.5)] rounded-[24px] z-0"
                />

                {/* function 1 */}
                <Image 
                    src="/images/analysis/function-1.png" 
                    width={200} 
                    height={500} 
                    alt="function-1"
                    style={{ width: "196px" }}
                    className="z-10 absolute top-[-22px] left-[-98px]"
                />
                
                {/* function 2 */}
                <Image 
                    src="/images/analysis/function-2.png" 
                    width={200} 
                    height={500} 
                    alt="function-2"
                    style={{ width: "196px" }}
                    className="z-10 absolute top-[68px] right-[-98px]"
                />

                {/* function 3 */}
                <Image 
                    src="/images/analysis/function-3.png" 
                    width={200} 
                    height={500} 
                    alt="function-3"
                    style={{ width: "196px" }}
                    className="z-10 absolute top-[138px] left-[-98px]"
                />

                {/* function 4 */}
                <Image 
                    src="/images/analysis/function-4.png" 
                    width={200} 
                    height={500} 
                    alt="function-4"
                    style={{ width: "196px" }}
                    className="z-10 absolute top-[188px] right-[-98px]"
                />

                {/* function 5 */}
                <Image 
                    src="/images/analysis/function-5.png" 
                    width={200} 
                    height={500} 
                    alt="function-5"
                    style={{ width: "196px" }}
                    className="z-10 absolute bottom-[-22px] left-[-98px]"
                />

            </div>

        </div>

      </div>
    </section>
  );
}
