import styled from "styled-components"
import styles from '@/styles/Home.module.css'
import Link from "next/link"
export default function Navbar() {
    return (
<Card>
<Link className={styles.Links}
    href="/">Home  </Link>
    <Link className={styles.Links} href="/projects"> Portfolio</Link>
    

        <Link className={styles.Links}
    href="/"
    />

</Card>
    )
}

const Card = styled.div `
width: 120%;
height: 70px;
display: flex;
flex-direction:row;
font-size: 28px; 
align-items: flex-end;
background-color: #1f1f1f;
padding-top: 60px;
margin-top: -100px;
justify-content: flex-end;
text-align: center;
border: 2px solid #31A8FF;
`