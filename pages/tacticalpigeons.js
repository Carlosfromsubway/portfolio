import Link from "next/link";
import React from "react";
import Navbar from "@/components/navbar";
import styles from '@/styles/Home.module.css';
import Image from "next/image";

export default function Tacticalpigeons() {


    return (
        <main className={styles.main}>
            <Navbar/>
            <div className={styles.row}> 
            <div className={styles.titlecard}> 
            <Image 
            src="/tpigeons title.png"
            width={358}
            height={97}
            />
            </div>
            </div>

      <div className={styles.videobox}>
      <video width="1000" height="600" controls>
      <source src="/TacticalPigeonsPromoVid.mp4" type="video/mp4"/>
  
  Your browser does not support the video tag.
</video>
</div>
     
    <div className={styles.row}>
      <div className={styles.leftycolumn1}>
        <div className={styles.row}>
            <h1 className={styles.purpleheader}>Team LIPSTYC </h1>
          
            </div>
            <p className={styles.textcontent}>I worked in a team of 6; 3 Digital, Design, and Development students and 3 Full Stack coding students. I was on the design side and focused on creating the playable characters. I made 4 versions of playable pigeons.</p>
    </div>
 
        <div className={styles.rightycolumn1}>
        <Image
        src="/lipstyc.png"
        width={300}
        height={200}
        />
        </div>
</div>
        <div style={styles.contain}> 
      
        </div>
        
        <div className={styles.row}>
      <div className={styles.leftycolumn3}>
     
        <Image
        src="/Default v2.png"
        width={400}
        height={600}
        />
                <Image
        src="/Fancy V2.png"
        width={400}
        height={600}
        />
          
         
           
    </div>
 
        <div className={styles.rightycolumn3}>
        <Image
        src="/Hoodie Bird.png"
        width={400}
        height={600}
        />
                <Image
        src="/Tuxedo Bird.png"
        width={400}
        height={600}
        />
        </div>
</div>
<div className={styles.about}> 
<p className={styles.slidetext}> The pigeons were all created in Adobe Illustrator and referenced from various illustrations and other vectors. I attempted to give them a cartoony and playful look better associate with our young target audience. I chose to give them only a few colors each to keep their design simple and have their few colors stand out. </p>
</div>
        </main>
    )
}