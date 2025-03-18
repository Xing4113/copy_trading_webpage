"use client"; // Runs on the client side

import styles from "@/styles/section/EasyAnalysisSection.module.scss";
import Image from "next/image";

export default function EasyAnalysisSection() {
  return (
    <section className={styles.easyAnalysisContainer}>
      {/* Title */}
      <h1 className={styles.title}>Easy Analysis</h1>

      {/* Description */}
      <p className={styles.description}>
        Instant clarity on the Masters' profile. Get a snapshot of their trade history, profitability, risk, and portfolio all in one place.
      </p>

      {/* Mobile & Function Images */}
      <div className={styles.imageContainer}>

        <div className="relative">
          <Image 
            src="/images/mobile-2.png" 
            width={200} 
            height={500} 
            alt="mobile-1"
            className={styles.mobileImage}
          />

          {/* Function Images */}
          <Image 
            src="/images/analysis/function-1.png" 
            width={200} 
            height={500} 
            alt="function-1"
            className={`${styles.functionImage} ${styles.function1}`}
          />

          <Image 
            src="/images/analysis/function-2.png" 
            width={200} 
            height={500} 
            alt="function-2"
            className={`${styles.functionImage} ${styles.function2}`}
          />

          <Image 
            src="/images/analysis/function-3.png" 
            width={200} 
            height={500} 
            alt="function-3"
            className={`${styles.functionImage} ${styles.function3}`}
          />

          <Image 
            src="/images/analysis/function-4.png" 
            width={200} 
            height={500} 
            alt="function-4"
            className={`${styles.functionImage} ${styles.function4}`}
          />

          <Image 
            src="/images/analysis/function-5.png" 
            width={200} 
            height={500} 
            alt="function-5"
            className={`${styles.functionImage} ${styles.function5}`}
          />
        </div>

      </div>
    </section>
  );
}
