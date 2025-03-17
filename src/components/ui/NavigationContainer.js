import { useState } from "react";
import Image from "next/image";

export default function NavigationContainer() {
  const [activeNavigate, setActiveNaviaget] = useState(2);

  const navigate = [
    {
      id: 1,
      title: "Discover",
      description: "Explore all the investment Masters available on Blackwell Invest. Dive into their profiles and analyse their profitability at a glance.",
      iconPath: "/images/navigate/icon1.png",
      iconActivePath: "/images/navigate/icon1-blue.png",
      imagePath: "/images/reason/reason-1.png",
    },
    {
      id: 2,
      title: "Activity",
      description: "See the past trades made by the signals you are copying from the last 30 days or track their open positions. Monitor their strategy, and make informed decisions with timely updates of the trades shaping your portfolio.",
      iconPath: "/images/navigate/icon2.png",
      iconActivePath: "/images/navigate/icon2-blue.png",
      imagePath: "/images/reason/reason-2.png",
    },
    {
      id: 3,
      title: "Trade",
      description: "Seamlessly trade oil CFDs, indices, and currency pairs with ease.",
      iconPath: "/images/navigate/icon3.png",
      iconActivePath: "/images/navigate/icon3-blue.png",
      imagePath: "/images/reason/reason-3.png",
    },
    {
      id: 4,
      title: "Positions",
      description: "Easily track the status of all your trades and monitor your account metrics in real-time.",
      iconPath: "/images/navigate/icon4.png",
      iconActivePath: "/images/navigate/icon4-blue.png",
      imagePath: "/images/reason/reason-4.png",
    },
    {
      id: 5,
      title: "Account",
      description: "Access detailed information about your trading account, monitor copier drawdown levels, assess your profitability, and keep track of your  trade performance – all in one place!",
      iconPath: "/images/navigate/icon5.png",
      iconActivePath: "/images/navigate/icon5-blue.png",
      imagePath: "/images/reason/reason-5.png",
    },
    
  ];

  return (
    <div className="w-full flex flex-col justify-center mt-6 px-[74px]">
      
      {/* Step Buttons */}
      <div className="w-full flex">
        {navigate.map((item) => ( 
          <button 
            key={item.id}
            onClick={() => setActiveNaviaget(item.id)}
            className={`w-[86px] flex justify-center items-center rounded-t-lg cursor-pointer shadow-[0px_0px_4px_rgba(0,0,0,0.2)] pb-1 ${activeNavigate === item.id ? "bg-[#F2DF79]" : "bg-white"}`}
          >
            <Image 
                src={ activeNavigate === item.id ? item.iconActivePath : item.iconPath }
                width={60} 
                height={58} 
                alt="navigate icon"
            />
            
          </button>
        ))}
      </div>

      {/* Dynamic Content Section */}
      <div 
        className={`w-full bg-[#F2DF79] rounded-xl flex justify-center mt-[-12px]`}  
      >

        {/* Title & Description */}
        <div className="w-[660px] px-[46px] ml-2 pb-5 pt-[102px]">
            <h2 className="text-[#050CC0] text-[21px] font-bold">{navigate[activeNavigate - 1]?.title}</h2>

            <p className="text-[17px] text-black leading-[20px] mt-[15px]">{navigate[activeNavigate - 1]?.description}</p>
        </div>

        {/* Display Navigate Image */}
        <div className="relative flex justify-end pt-5">
            <Image 
                src={navigate[activeNavigate - 1]?.imagePath} 
                width={450} 
                height={150} 
                alt="navigate mobile image"
            />
        </div>

      </div>

    </div>
  );
}
