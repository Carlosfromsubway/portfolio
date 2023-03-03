import styled from "styled-components"

export default function Skillsbox ({
    src="",
    text="",
    me="",
    bg=""

}) {

    
   

    return (
        <div> 
        <Card
        bog={bg}
        > <img
        
        src={src}
        width={70}
        height={70}
        marR={me}
      />

      <Typography>{text}</Typography>
       
      </Card>

        </div>
    )
    }

const Card = styled.div `
width: 380px;
height: 340px;
display: flex;
flex-direction:column;
color: #FFFFFF;
box-shadow: 5px 10px #888888;
border-radius: 12px;
align-content: center;
padding: 10px;
justify-items:center;
margin-bottom:30px;
margin-right:${props=>props.marR};
background-color:${props=>props.bog};
margin-left: auto;
margin-right: auto;
`
const Typography = styled.div `
font-size: 24px;
color: black;
justify-content: center;
margin-top: 10px;
padding: 10px;
text-align:center;
margin-right:${props=>props.marR};
`