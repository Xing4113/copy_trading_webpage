"use client"; // Runs on the client side

import Image from "next/image";
import Button from "../ui/Button";

export default function HeroSection() {
  return (
    <section className="relative">
      <div className="flex pt-16">
        {/* Left: Image */}
        <div className="relative w-1/2 h-[800px] overflow-clip overflow-y-visible">
            <Image 
                src="/images/hand.png" 
                width={925} 
                height={900} 
                alt="Trading App"
                style={{ width: "925px" }}
                className="absolute left-[-340px] max-w-none"
            />
        </div>

        <div className="w-1/2 h-[800px] pt-[70px] pr-[95px]">

            <div className="relative min-h-[288px]">

                <p className="text-center leading-14"> 
                    <span className="text-[64px]" style={{color: "var(--light-blue)"}}>COPY TRADING</span> <br/> 
                    <span className="text-[46px] italic">with Blackwell Invest</span>
                </p>
                
                {/* google play & app store images */}
                <div className="flex justify-center gap-4 mt-4">
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
                
                <Image 
                    src="/images/regular.png" 
                    width={160} 
                    height={160} 
                    alt="Regular"
                    className="absolute -right-2 -bottom-0 z-0"
                />

            </div>
            
            {/* Choose & Trade (Ready-To-Go Strategies) */}
            <div>

                <p className="leading-8 mb-0 mt-1"> 
                    <span className="text-[34px] font-semibold" style={{color: "var(--light-blue)"}}>Choose & Trade</span> <br/> 
                    <span className="text-[34px] font-semibold italic" style={{color: "var(--gold)"}}>Ready-To-Go Strategiest</span>
                </p>

                <p className="text-[16px] font-semibold leading-5"> 
                    Browse and copy hundreds of investment strategies developed by master traders! Whether you are a pro or beginner, you can now trade quicker and more confidently.
                </p>
                
                {/* Financial Products */}
                <div className="flex gap-3 my-[25px]">
                    <span className="px-3 py-0.5 border-2 rounded-lg font-semibold" style={{borderColor: "var(--gold)"}}>Forex</span>
                    <span className="px-3 py-0.5 border-2 rounded-lg font-semibold" style={{borderColor: "var(--orange)"}}>Precious Metals</span>
                    <span className="px-3 py-0.5 border-2 border-red-400 rounded-lg font-semibold" >Oil</span>
                    <span className="px-3 py-0.5 border-2 rounded-lg font-semibold" style={{borderColor: "var(--light-blue)"}}>Indices</span>
                </div>
                
                <Button title="Register Now" titleStyle="text-[20px] font-semibold" buttonStyle="rounded-md shadow-md px-6 py-1.5 mb-[25px]"  otherStyle={{ backgroundColor: "var(--orange)"}} />

                <p className="italic">When you invest, your capital is at risk. Be prudent.</p>
            </div>

        </div>

      </div>
    </section>
  );
}
