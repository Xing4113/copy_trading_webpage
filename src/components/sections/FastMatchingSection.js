"use client"; // Runs on the client side

import Image from "next/image";
import Video from "../ui/Video";
import styles from "@/styles/section/FastMatchingSection.module.scss";

export default function FastMatchingSection() {
  return (
    <section>
      <div className={styles.fastMatchingContainer}>
        
        {/* title */}
        <h1 className={styles.title}>Fast Matching</h1>

        {/* Video & Description */}
        <div className={styles.content}>

          {/* Video Section */}
          <div className={styles.videoContainer}> 
            <Image 
              src="/images/mobile-1.png" 
              width={200} 
              height={500} 
              alt="mobile-1"
              className={styles.mobileImage}
            />

            <Video 
              filePath="/videos/mobile-video.mp4" 
              fileType="video/mp4" 
              containerStyle={styles.video}
              videoStyle="rounded-md" 
            />
          </div>

          {/* List Section */}
          <div className={styles.listContainer}>
            <ul>
              {[
                "Spotlight",
                "Top Strategies",
                "Low Drawdown",
                "Medium Drawdown",
                "High Drawdown",
                "New Strategies"
              ].map((item, index) => (
                <li key={index}>
                  <Image 
                    src="/images/list-icon.png"
                    width={56} 
                    height={20} 
                    alt="list icon"
                    className={styles.listIcon}
                  />
                  {item}
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
}
