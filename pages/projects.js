import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import styled from 'styled-components'
import Projectbox from '@/components/projects'
import Seemore from '@/components/button'
import Contactsbox from '@/components/contacts'
import Link from 'next/link'
import Navbar from '@/components/navbar'
const inter = Inter({ subsets: ['latin'] })

export default function Projects() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
      <Navbar/>


<div className={styles.purpleheader}>Projects</div>
    <div className={styles.row}>
      <div className={styles.leftycolumn}>
        <div className={styles.grow}>
    <Projectbox src="yugioh demo.png"
    heading="Role: Graphic desginer "
    text='This was a solo project where I created digital illustrations of two 
    yu-gi-oh characters. I used autodesk sketchbook to create them and a majority of the graphical assets, like the card backs.'
    date="November 2022 to December 2022"
    href="/yugioh"
    bg="#50505077"
    />
    </div>
    <div className={styles.grow}>
    <Projectbox src="Tactical Pigeons.png"
    heading="Role: Graphic desginer "
    text='Tactical pigeons is a rock paper scissors based game with pigeons competing for food as the main attraction. On this game I developed the graphics for the pigeons in illustrator and colored them all there as well.'
    date="January 2022 to April 2022"
    href="/tacticalpigeons"
    bg="#50505077"
    />
    </div>
  </div>
<div className={styles.rightycolumn}>
<div className={styles.grow}>
<Projectbox src="trackstacks.png"
    heading="Role: UI/UX designer  "
    text='An expo app that aims to assist those with ADHD properly stay on task and help them time manage. In this project I performed user research and testing. I worked along side 3 other designers to create page layouts and structures for the app.'
    date="September 2022 to December 2022"
    href="/trackstacks"
    bg="#50505077"
    />
    </div>
    <div className={styles.grow}>
    <Projectbox src="Elevate.png"
    heading="Role: UI/UX designer "
    text='Elevate is a Figma mockup of a music streaming app, simalair to apple music and spottily. I developed the layout of the main page, sign in page and purchasing pages. I referenced the previously mentioned apps to give a familiar and effective design..'
    date="January 2022 to April 2022"
    href="/elevate"
    bg="#50505077"
    />
    </div>
</div>

    </div>
      <div className={styles.purpleheader}>Graphics</div>
      
      <hr/>
        <div className={styles.rowpics}>
        <div className={styles.spacing}>
        <div className={styles.conty}> 
          <Image
          src="/Discovering china.png"
          width={550}
          height={500}
          
          />
         
         <div className={styles.overlay}>

<div className={styles.contenty}>
<h2>Indesign mulitpage magazine</h2>
<p>An 8 page magazine featuring various photos of Chinese architecture.  I used Indesign to crwate the layout and the character and paragraph styles.</p>

</div>
</div>
</div>
          </div>
          
          <div className={styles.spacing3}>
          <div className={styles.conty}>
                          <Image
                src="/Noctis edit.png"
                width={400}
                height={500}
               
                />
              <div className={styles.overlay}>

                  <div className={styles.contenty}>
                    <h2>Noctis Character Edit</h2>
                  <p>Graphical edit of a Noctis cosplayer. I used photoshop and Illustrator to create this graphic. 
                    I masked out the cosplayer from the proginal background, masked a sword figurine and added to the graphic, created a custom crystal brush and added afterglow to illuminate the night background.</p>

                  </div>
          </div>

          </div>
          
          </div>          
          <div className={styles.spacing2}>
            <div className={styles.conty}>
                    <Image
          src="/End of us photoshop.jpg"
          width={550}
          height={500}
       
          />
              <div className={styles.overlay}>

          <div className={styles.contenty}>
          <h2>Album Cover</h2>
          <p>Pure photoshop project where I created my own custom space background using various filters and colored brushes. 
            The black hole was created by my self as well and the meteors contain blur effects.</p>

          </div>
          </div>


          </div>
          </div>  
          
        </div>
        <div className={styles.rowpicsb}>
        <div className={styles.spacing}>
        <div className={styles.conty}> 
          <Image
          src="/Cloud strife.png"
          width={550}
          height={600}
          
          />
         
         <div className={styles.overlay}>

<div className={styles.contenty}>
<h2>Indesign mulitpage magazine</h2>
<p>An 8 page magazine featuring various photos of Chinese architecture.  I used Indesign to crwate the layout and the character and paragraph styles.</p>

</div>
</div>
</div>
          </div>
          
          <div className={styles.spacing3}>
          <div className={styles.conty}>
                          <Image
                src="/Atem drawing.png"
                width={570}
                height={500}
               
                />
              <div className={styles.overlay}>

                  <div className={styles.contenty}>
                    <h2>Character Drawing</h2>
                  <p>Graphical edit of a Noctis cosplayer. I used photoshop and Illustrator to create this graphic. 
                    I masked out the cosplayer from the proginal background, masked a sword figurine and added to the graphic, created a custom crystal brush and added afterglow to illuminate the night background.</p>

                  </div>
          </div>

          </div>
          
          </div>          
          <div className={styles.spacing2}>
            <div className={styles.conty}>
                    <Image
          src="/Kaiba drawing.png"
          width={580}
          height={500}
       
          />
              <div className={styles.overlay}>

          <div className={styles.contenty}>
          <h2>Character Drawing</h2>
          <p>Pure photoshop project where I created my own custom space background using various filters and colored brushes. 
            The black hole was created by my self as well and the meteors contain blur effects.</p>

          </div>
          </div>


          </div>
          </div>
          </div>  

       
 
        

          
      </main>
    </>
  )
}
