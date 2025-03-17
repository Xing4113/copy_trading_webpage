"use client"; // Runs on the client side

import FeatureList from "../ui/FeatureList";
import Button from "../ui/Button";

export default function ChooseSection() {
  return (
    <section>
      <div className="w-full bg-[url('/images/bg-2.png')] bg-no-repeat bg-top bg-[length:195%] mt-[60px]" >
        
        {/* space */}
        <div className="w-full h-[296px]"></div>

        {/* title */}
        <h1 className="text-center text-4xl font-semibold" style={{color: 'var(--light-blue)'}}>Why Choose Us?</h1>

        {/* Feature List */}
        <FeatureList />

        {/* Register Button */}
        <div className="w-full flex justify-center mt-8">
            <Button title="Register Now" titleStyle="text-[16px] tracking-wider" buttonStyle="rounded-md shadow-lg px-4.5 py-1.5 mb-[25px]"  otherStyle={{ backgroundColor: "var(--orange)"}} />
        </div>

      </div>
    </section>
  );
}
