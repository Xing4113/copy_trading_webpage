
import styles from "@/styles/layout/Header.module.scss";

import Image from "next/image";
import Button from "../ui/Button";
import Timer from "../ui/Timer";
import { FaUser } from "react-icons/fa6";
import { IoIosMenu } from "react-icons/io";

const Header = () => {
  return (
    <div className={`w-full flex items-center justify-between px-[132px] fixed top-0 z-30 ${styles.headerContainer}`} style={{ backgroundColor: "var(--header-color)", fontFamily: 'var(--rotis-light)' }}>
    
    {/* Left Section */}
    <Image src="/images/logo.png" width={168} height={80} alt="Logo" className={`p-3 ${styles.logoImage}`}/>
    
    {/* Center Section */}
    <Timer 
      targetDate="2025-04-16T23:59:59" 
      containerStyle={`pt-1 flex-1 max-w-[600px] ${styles.timerContainer}`} 
      timerStyle={styles.timer} 
      timeContainerStyle={styles.timeContainer}
      labelStyle={styles.label} 
      separatorStyle={styles.separator}
    />

    {/* Right Section */}

    <div className={`flex items-center justify-between gap-1.5 ${styles.registerContainer}`}>
    
      <Button title="REGISTER NOW" titleStyle="text-xs" buttonStyle="px-4 py-2.5 bg-gradient-to-b from-orange-400 to-orange-500 rounded-full"/>

      <FaUser className="text-lg text-gray-500"/>

    </div>

    <div className={`hidden pr-3 ${styles.menuContainer}`}>
      <IoIosMenu className={`text-2xl ${styles.menuIcon}`} />
    </div>
    
    
   </div>
  );
}
  
export default Header;