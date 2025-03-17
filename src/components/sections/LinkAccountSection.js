"use client"; // Runs on the client side

import RegistrationSlider from "../ui/RegistrationSlider";
import Button from "../ui/Button";

export default function LinkAccountSection() {
  return (
    <section>
      <div className="w-full mt-[176px]" >
        
        {/* title */}
        <h1 className="text-center text-4xl font-semibold" style={{color: 'var(--light-blue)'}}>How to Link MT4 Account</h1>

        <RegistrationSlider />

        <div className="w-full flex justify-center mt-1">
            <Button title="Register Now" titleStyle="text-[16px] tracking-wider" buttonStyle="rounded-md shadow-lg px-4.5 py-1.5 mb-[25px]"  otherStyle={{ backgroundColor: "var(--orange)"}} />
        </div>

      </div>
    </section>
  );
}
