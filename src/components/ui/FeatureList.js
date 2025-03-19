import Image from "next/image";

import styles from "@/styles/ui/FeatureList.module.scss";

export default function FeatureList() {
    const features = [
      {
        id: 1,
        title: "Regulated",
        description: "The copy trading platform is regulated. Our technology partner is regulated. And so are we, as a brokerage. We operate under strict compliance for your peace of mind.",
        icon: "/images/choose/icon-1.png",
        iconSize: "w-18 h-18"
      },
      {
        id: 2,
        title: "0 Commissions",
        description: "When investing, the small margins matter. Blackwell Invest offers 0 commissions investing, and 0 cost to install our app.",
        icon: "/images/choose/icon-2.png",
        iconSize: "w-19 h-18"
      },
      {
        id: 3,
        title: "User-friendly",
        description: "With an intuitive interface, easy trade execution, and hassle-free management, copying top traders has never been simpler. Trade smarter, not harder!",
        icon: "/images/choose/icon-3.png",
        iconSize: "w-19 h-13"
      },
      {
        id: 4,
        title: "Tier 1 liquidity",
        description: "Blackwell Invest sources the best liquidity to provide a deep product range and broad market access. Fast order execution and transparent pricing.",
        icon: "/images/choose/icon-4.png",
        iconSize: "w-19 h-18"
      }
    ];
  
    return (
      <div className={`w-full flex flex-col gap-4 px-[74px] mt-6 ${styles.featureContainer}`}>
        {features.map((feature) => (
          <div 
            key={feature.id} 
            className={`flex items-center bg-white rounded-xl ${styles.featureListContainer}`}
          >
            {/* Icon & Title*/}
            <div className={`pl-5 flex justify-center items-center ${styles.firstContainer}`}>
              
              <div className={`w-[180px] ${styles.iconContainer}`}>
                <Image src={feature.icon} width={36} height={36} alt={feature.title} className={`${feature.iconSize} ${styles.icons}`} />
              </div>

              <h3 className={`text-lg font-bold text-blue-800 whitespace-nowrap w-[160px] ${styles.title}`}>{feature.title}</h3>

            </div>
  
            {/* description */}
            <div className={`flex-1 flex justify-center items-center ${styles.descriptionContainer}`}>
              <p className={`text-md text-black font-medium flex-1 ${styles.description}`}>{feature.description}</p>
            </div>
            
          </div>
        ))}
      </div>
    );
  }
  