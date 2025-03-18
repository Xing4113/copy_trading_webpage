"use client"; // Runs on the client side

import Image from "next/image";
import Button from "../ui/Button";
import styles from "@/styles/section/HeroSection.module.scss";

export default function HeroSection() {
  return (
    <section>
      <div className={styles.heroContainer}>
        {/* Left: Image display second in 768px max*/}
        <div className={styles.handImageContainer}>
            <Image 
                src="/images/hand.png" 
                width={925} 
                height={900} 
                alt="Trading App"
                className={styles.handImage}
            />
        </div>

        {/* Right: Description display first in 768px max*/} 
        <div className={styles.descriptionContainer}>
            
            <p> 
              <span>COPY TRADING</span> <br/> 
              <span>with Blackwell Invest</span>
            </p>

            {/* Google Play & App Store Images */}
            <div className={styles.appButtons}>
              <Image 
                src="/images/google-play.jpg" 
                width={132} 
                height={64} 
                alt="Google Play"
              />
              <Image 
                src="/images/app-store.jpg" 
                width={132} 
                height={64} 
                alt="App Store"
              />
            </div>

            <Image 
              src="/images/regular.png" 
              width={160} 
              height={160} 
              alt="Regular"
              className={styles.regularImage}
            />

        </div>

        {/* Choose & Trade Section display third 768px max*/}
        <div className={styles.chooseTrade}>
            <p> 
              <span>Choose & Trade</span> <br/> 
              <span>Ready-To-Go Strategists</span>
            </p>

            <p className={styles.tradeDescription}> 
              Browse and copy hundreds of investment strategies developed by master traders! Whether you are a pro or beginner, you can now trade quicker and more confidently.
            </p>
            
            {/* Financial Products */}
            <div className={styles.financialProducts}>
              <span>Forex</span>
              <span>Precious Metals</span>
              <span>Oil</span>
              <span>Indices</span>
            </div>

            <div className={styles.registerButtonContainer}>
                <Button 
                    title="Register Now" 
                    titleStyle={styles.registerButton}
                />
            </div>

            <p className={styles.investmentWarning}>When you invest, your capital is at risk. Be prudent.</p>
        </div>
          
      </div>
    </section>
  );
}
