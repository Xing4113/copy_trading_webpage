"use client"; // Runs on the client side
import EnquireForm from "../ui/EnquireForm";

export default function EnquireNowSection() {
  return (
    <section>
      <div className="w-full bg-[url('/images/bg-3.png')] bg-no-repeat bg-top bg-[length:200%] mt-[86px]" >
        
        {/* space */}
        <div className="w-full h-[270px]"></div>

        {/* title */}
        <h1 className="text-center text-4xl font-semibold" style={{color: 'var(--light-blue)'}}>Enquire Now</h1>

        {/* Enquire Form */}

        <EnquireForm />

      </div>
    </section>
  );
}
