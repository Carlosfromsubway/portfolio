import styled from "styled-components";

export default function Seemore({

    text=""

}){
    return(
        <div>
            <Button>{text}See More</Button>
            
            
            
        </div>
    )
}


const Button = styled.button`
width: 170px;
height: 45px;
background-color:#306EE1;
color: white;
font-size: 20px;
margin-top: 20px;
border-radius: 10px;
justify-content: center;
align-items: center;
font-size: 17px;
`
const Typography = styled.div `
font-size: 20px;
color: black;
margin-top: 10px;
padding: 10px;

`