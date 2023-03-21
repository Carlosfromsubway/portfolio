import styled from "styled-components"
import Seemore from "../button"
import styles from '@/styles/Home.module.css'
import Link from "next/link"
export default function Projectbox({
    src="",
    text="",
    heading="",
    date="",
    bg="",
    href=""

}) {

    
   

    return (
        <Cmover> 
        <div> 
        <Card
        bog={bg}
        > <img
        
        src={src}
        width={515}
        height={320}

      />
      <Head>{heading}</Head>
      <Typography>{text}</Typography>
      
      <Mover><Typography>{date}</Typography>
      <BMover> 
      <button className={styles.BButton}><Link href={href}> See More</Link></button>
       </BMover>
       </Mover>
      </Card>

        </div>
        </Cmover>
    )
    }

const Card = styled.div `
width: 520px;
height: 600px;
display: flex;
flex-direction:column;
color: #FFFFFF;
box-shadow: 10px 10px rgba(0, 0, 0, 0.5);
border: 3px solid black;
margin-bottom:30px;
background-color:${props=>props.bog};

`
const Typography = styled.div `
font-size: 20px;
color: black;
margin-top: 10px;
padding: 10px;

`
const Head = styled.div `
font-size: 30px;
font-weight: 300;
color: black;
justify-content: center;
margin-top: 10px;
padding: 10px;

`
const Mover = styled.div `
display flex;
flex-direction: row;
`

const BMover = styled.div `
padding-left: 320px;
position: absolute;
padding-top:
`

const Cmover = styled.div `
padding-top: 50px;

`