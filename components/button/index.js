import styled from "styled-components";
import styles from '@/styles/Home.module.css'
export default function Seemore({

    text=""

}){
    return(
        <div>
            <Button className={styles.BButton}>{text}See More</Button>
            
            
            
        </div>
    )
}


const Button = styled.button`

`
const Typography = styled.div `
font-size: 20px;
color: black;
margin-top: 10px;
padding: 10px;

`