import styled from "styled-components"

export default function Skillsbox ({
    src="",
    text="",
    heading="",
    me="",
    bg=""

}) {

    
   

    return (
        <div> 
        <Card
        bog={bg}
        marR={me}
        > <img
        
        src={src}
        width={70}
        height={70}
       
      />
      <Head>{heading}</Head>
      <Typography>{text}</Typography>
       
      </Card>

        </div>
    )
    }

const Card = styled.div `
width: 380px;
height: 320px;
display: flex;
flex-direction:column;
color: #FFFFFF;
box-shadow: 10px 14px #888888;
border-radius: 8px;
align-items: center;
padding-top: 30px;
justify-items:center;
text-align: center;
margin-bottom:30px;
margin-right:${props=>props.marR};
background-color:${props=>props.bog};

`
const Typography = styled.div `
font-size: 21px;
color: #F2F2F2;
justify-content: center;
margin-top: 10px;
padding: 10px;
text-align:center;

`
const Head = styled.div `
font-size: 34px;
font-weight: bold;
color: #F2F2F2;
justify-content: center;
margin-top: 10px;
padding: 10px;
text-align:center;

`
