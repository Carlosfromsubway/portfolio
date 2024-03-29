import Link from "next/link";
import React from "react";
import Navbar from "@/components/navbar";
import styles from '@/styles/Home.module.css';
import Image from "next/image";
import ImageSlider from "@/components/Imageslide";
export default function TrackStacks() {
    const slides = [
        {url: "track1.png"},
        {url: "track2.png"},
        {url: "track3.png"},
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
            src="/ts title.png"
            width={358}
            height={97}
            />
            </div>
            </div>

      <div>
      <video width="1000" height="600" poster="/trackstacks thumbnail.png"controls>
      <source src="/TrackStacks.mp4" type="video/mp4"/>
  
  Your browser does not support the video tag.
</video>
</div>
     
    <div className={styles.row}>
      <div className={styles.leftycolumn}>
        <div className={styles.row}>
            <h1 className={styles.purpleheader}>Meet the team </h1>
          
            </div>
            <p className={styles.textcontent}>TrackStacks is a task managing expo app that aims to assist those with ADHD properly manage their tasks. While they’re the target audience we designed the app to be both effective and useful to those regardless if they’re ADHD. 
On this project I worked at one of the 4 UI/UX Designers to create the layout and design of the pages and user test them with our target audience.</p>
    </div>
 
        <div className={styles.rightycolumn}>
        <Image
        src="/Trackstacks logo text.png"
        width={300}
        height={400}
        />
        </div>
</div>
        <div style={contain}> 
        <ImageSlider slides={slides}/>
        </div>
        <p className={styles.slidetext}> Through the early stages of our research, we learned that the concept of New Brutalism in design increases visibility and helps ADHD individuals with focus. It’s essentially a concept of a plain style with large structures and striking features. TrackStacks is designed in a way to prevent distraction by not using overly complex visualsy. We prioritized functionality over aesthetics, as you will see through our presentation, our components are built to stand out, but in a simplistic and minimalistic manner.</p>
        </main>
    )
}