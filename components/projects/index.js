import styled from "styled-components"

export default function Projectbox({
    src="",
    text="",
    heading="",
    date="",
    me="",
    bg=""

}) {

    
   

    return (
        <div> 
        <Card
        bog={bg}
        > <img
        
        src={src}
        width={544}
        height={320}
        marR={me}
      />
      <Head>{heading}</Head>
      <Typography>{text}</Typography>
      <Typography>{date}</Typography>
       
      </Card>

        </div>
    )
    }

const Card = styled.div `
width: 550px;
height: 600px;
display: flex;
flex-direction:column;
color: #FFFFFF;
box-shadow: 10px 14px #888888;
border: 3px solid black;
margin-bottom:30px;
background-color:${props=>props.bog};

`
const Typography = styled.div `
font-size: 22px;
color: black;
margin-top: 10px;
padding: 10px;
margin-right:${props=>props.marR};
`
const Head = styled.div `
font-size: 30px;
font-weight: 300;
color: black;
justify-content: center;
margin-top: 10px;
padding: 10px;
margin-right:${props=>props.marR};
`
