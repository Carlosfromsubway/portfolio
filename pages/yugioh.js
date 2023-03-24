import Link from "next/link";
import React from "react";
import Navbar from "@/components/navbar";
import styles from '@/styles/Home.module.css';
import Image from "next/image";
import ImageSlider from "@/components/Imageslide";
export default function Yugioh() {
    const slides = [
        {url: "Default v2.png"},
        {url: "Fancy V2.png"},
        {url: "track1.png"},
        {url: "Hoodie Bird.png"},
    ];

    const contain = {
        width: "1000px",
        height: "500px",
    }
    return (
        <main className={styles.main}>
            <Navbar/>
            <div className={styles.row}> 
            <div className={styles.titlecard}> 
            <Image 
            src="/ydemo title.png"
            width={358}
            height={97}
            />
            </div>
            </div>

      <div className={styles.videobox}>
      <video width="1000" height="600" controls>
      <source src="/Yugioh intro.mp4" type="video/mp4"/>
  
  Your browser does not support the video tag.
</video>
</div>
     
    <div className={styles.row}>
      <div className={styles.leftycolumn1}>
        <div className={styles.row}>
        <Image
        src="/Atem drawing.png"
        width={500}
        height={400}
        />
          
            </div>
            
    </div>
 
        <div className={styles.rightycolumn3}>
        <Image
        src="/Kaiba drawing.png"
        width={500}
        height={400}
        />
        </div>
</div>
        <div> 
       
        </div>
        <div className={styles.about}> 
        <p className={styles.abouttext}> Both Kaiba and Atem were made in auto desk sketchbook and exported as png’s. I created them using pencil tools to create the base design, pen tools to give them both outllines around the outer edges and to color, and I used an airbrush to give Kaiba’s duel disk a glossy and glowy appearance. I used official art from the movie Dark Sides of Dimensions and the mobile game duel links as reference points to create my variants. </p>
        </div>
       </main>
    )
}