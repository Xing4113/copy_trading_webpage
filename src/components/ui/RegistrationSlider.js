import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import Image from "next/image";

export default function RegistrationSlider() {

  const guide = [
      { id: 1, step: "Install our app, “Blackwell Invest”", imagePath: "/images/register/step-1.png" },
      { id: 2, step: "Login OR create a new account ", imagePath: "/images/register/step-2.png" },
      { id: 3, step: "Click “Account”", imagePath: "/images/register/step-3.png" },
      { id: 4, step: "Click “Link an account”", imagePath: "/images/register/step-4.png" },
      { id: 5, step: "Select “BlackwellGlobalAsia-Live” server", imagePath: "/images/register/step-5.png" },
      { id: 6, step: "Fill in your Blackwell Global trading account OR create a new account", imagePath: "/images/register/step-6.png" },
      { id: 7, step: "Click “Copy Trades”", imagePath: "/images/register/step-7.png" },
      { id: 8, step: "Click “Done”", imagePath: "/images/register/step-8.png" }
  ];

  return (
    <div className="w-full flex flex-col items-center py-6 px-[76px] relative">

      {/* Swiper Slider */}
      <Swiper
        modules={[Navigation]}
        spaceBetween={30}
        slidesPerView={3.5}
        navigation={{
            prevEl: ".swiper-button-prev-custom",
            nextEl: ".swiper-button-next-custom",
          }}
        breakpoints={{
          1024: { slidesPerView: 3.5 },
          768: { slidesPerView: 2.5 },
          640: { slidesPerView: 1.2 }
        }}
        className="w-full relative"
      >

        {/* Custom Prev Button */}
            
        {guide.map((step, index) => (
          <SwiperSlide key={step.id} className="flex flex-col items-center border rounded-3xl py-5 relative"
            style={{ borderColor: "var(--orange)", minHeight: "360px"}}
          >
            {/* Image */}
            <Image 
                src={step.imagePath}
                width={290} 
                height={250} 
                alt={`Step ${step.id}`}
                className="w-full rounded-xl px-5"
            />

            {/* Step Description */}
            <p className="font-semibold text-center px-6 leading-[20px]">{step.step}</p>

            {/* Arrow (except last slide) */}
            {index !== 0 && (
              <Image 
                src="/images/arrow.png" 
                width={82} 
                height={78} 
                alt="next step"
                className="absolute left-[-46px] top-1/2 transform -translate-y-1/2 w-[82px] h-[78px]"
                style={{backgroundColor: "var(--background)"}}
              />
            )}
          </SwiperSlide>
          
        ))}

        <button className="swiper-button-prev-custom absolute left-[20px] w-6 h-6 rounded-full top-1/2 transform -translate-y-1/2 z-50 opacity-50 cursor-pointer hover:opacity-100">
            <Image 
                src="/images/back.png" 
                width={32} 
                height={32} 
                alt="Previous"
                className="w-6 h-6"
            />
        </button>
      

        {/* Custom Next Button */}
        <button className="swiper-button-next-custom absolute right-[25px] w-6 h-6 rounded-full top-1/2 transform -translate-y-1/2 z-50 opacity-50 cursor-pointer hover:opacity-100">
            <Image 
                src="/images/next.png" 
                width={32} 
                height={32} 
                alt="Next"
                className="w-6 h-6"
            />
        </button>
        
      </Swiper>

    </div>
  );
}
