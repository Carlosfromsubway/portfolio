import Link from "next/link";
import React from "react";
import Navbar from "@/components/navbar";
import styles from '@/styles/Home.module.css';
import Image from "next/image";
import ImageSlider from "@/components/Imageslide";
export default function Elevate() {

    return (
        <main className={styles.main}>
            <Navbar/>
            <div className={styles.row}> 
            <div className={styles.titlecard}> 
            <Image 
            src="/elevate title.png"
            width={358}
            height={97}
            />
            </div>
            </div>
<Image
src="/elevate2.png"
width={1000}
height={500}
/>

     
    <div className={styles.row}>
      <div className={styles.leftycolumn1}>
        <div className={styles.row}>
          
            </div>
            <p className={styles.textcontent}>
Elevate is a Figma mock up of a music streaming app created by myself and another student from BCIT. In this project I developed the layout of the home page, purchase pages, log in page and the icons used on those pages. I also had my peers and classmates provide feedback through user testing. </p>
    </div>
 
        <div className={styles.rightycolumn1}>
        <Image
        src="/Group 14.png"
        width={600}
        height={120}
        />
        </div>
</div>
        <div > 
       
        </div>
        <div className={styles.row}>
      <div className={styles.leftycolumn1}>
        <div className={styles.row}>
          
        <Image
        src="/elevate3.png"
        width={600}
        height={120}
        />
 
        <div className={styles.rightycolumn1}>
        <Image
        src="/elevate4.png"
        width={300}
        height={500}
        />
        </div>
        </div>
        </div>
</div>
        </main>
    )
}