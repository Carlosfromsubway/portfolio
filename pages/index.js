import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import Skillsbox from '@/components/skills'
import styled from 'styled-components'
import Projectbox from '@/components/projects'
import Seemore from '@/components/button'
import Contactsbox from '@/components/contacts'
import Navbar from '@/components/navbar'
import Link from 'next/link'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
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
      
<div className={styles.colorrow}>
    <div className={styles.headercontentcolumn}>
      
    <h1 className={styles.headerfont}>Tyler Lee</h1>
    <div className={styles.row}>
    <h1 className={styles.headerstatic}>I can be your   </h1>
      <ul className={styles.list}>
      <li><span> Graphic Designer</span></li>
      </ul>
      </div>
    <p className={styles.contentfont}>
    Hi there, I'm a Digital, Design, and Development student who specializes in graphic design. 
    My main areas of expertise are in Photoshop, Illustrator, Indesign, and utilizing Autodesk sketchbook. 
    I have experience in working with teams to create visually appealing products that have been user tested towards a specific market.
    </p>
    <div className={styles.row}> 
    <div> 
      <div className={styles.hb}> 
    <button className={styles.BButton}><Link href="/projects"> View Portfolio</Link></button>
    </div>
    </div>
    <div className={styles.hb2}> 
    <button className={styles.BButton2}>Contact Me</button>
    </div>
    </div>
    </div>
    <div className={styles.spacing}>
        <div className={styles.conty2}> 
          <Image
          src="/thumbnail wordpress v2.png"
          width={1000}
          height={620}
          
          />
         
         <div className={styles.overlay2}>

<div className={styles.contenty2}>
<Image
src="/Drawing me.png"
width={500}
height={400}

/>

</div>
</div>
</div>
          </div>



</div>


<div className={styles.purpleheader}>About Me</div>
    <div className={styles.about}>
          <p className={styles.abouttext}>
             Dedicated BCIT design student seeking employment. Adept in
            Using programs such as, Adobe Photoshop, Illustrator, Indesign
            And FIgma. Flexible within team environments and able to work
            Efficiently. Committed to utilizing my skills to further improve the company
          </p>
    </div>
      
<button className={styles.BButton}><Link href="/projects"> View Portfolio</Link></button>



        <div className={styles.purpleheader}>Skills</div>
        <div className={styles.row}>
        <div class={styles.maincontainer}>

          <div class={styles.thecard}>


            <div class={styles.thefront}>

              <Image
              src="/Photoshop.png" 
              width={90}
              height={80}
              />
              <h1>Photoshop</h1>
              <p className={styles.typography}>I am the most experienced in this application and I can comfortable, masking images, color changing, creating posters and editing faces.</p></div>

            <div class={styles.theback}> 
            <Image
            src="/Noctis edit.png"
            width={550}
            height={500}
            />
           </div>

          </div>
          </div>

          <div class={styles.maincontainer2}>
          <div class={styles.thecard2}>


            <div class={styles.thefront2}>

              <Image
              src="/Illustrator.png" 
              width={90}
              height={80}
              />
              <h1>Illustrator</h1>
              <p className={styles.typography}>I have experience creating icons, vectors, logos and character Illustrations with the application.</p></div>

            <div class={styles.theback2}> 
            <Image
            src="/Bellatrix Blueberry.png"
            width={400}
            height={500}
            />
           </div>

          </div>
          </div>
          <div class={styles.maincontainer3}>
          <div class={styles.thecard3}>


            <div class={styles.thefront3}>

              <Image
              src="/Indesign.png" 
              width={90}
              height={80}
              />
              <h1>Indesign</h1>
              <p className={styles.typography}>In InDesign I've created various layouts, poster designs and an interactive project combining both the other programs to create visual assets.</p></div>

            <div class={styles.theback3}> 
            <Image
            src="/yugioh screen.png"
            width={550}
            height={500}
            />
           </div>

          </div>
          </div>
          </div>

        <div className={styles.purpleheader}>Contact</div>
      <space></space>
      
      <hr/>
        <div className={styles.row}>
          <div className={styles.contactspace}>
        <Contactsbox src="/Gmail.png" 
        heading="Email"
        text='You can reach me at either 
        tylerlee1295@gmail.com or
        tylerlee888@hotmail.com' 
        me="80px" 
        bg="linear-gradient(#6EA2D1, #F2295B)"
        
        />
        <Contactsbox src="/linkedin.png" 
        heading="Social media"
        text="I'm not the most active on Linkedin but I will respond within a day, click here to visit my page." 
        me="90px" 
        bg="linear-gradient(#B848F0, #29A3F2)"
        
        />
        <Contactsbox src="/phone.png" 
        heading="Phone"
        text="I will reply to your text within a day at
        778-558-1388." 
        me="-10px" 
        bg="linear-gradient(#E187DE, #F2295B)"
        
        />
 </div>
        </div>

          
      </main>
    </>
  )
}


const space = styled.div `
height: 200px
`
