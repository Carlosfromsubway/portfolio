export default function Skillsbox () {

    text="",
    src=""

    return (
        <div> 
        <Card> <img
        
        src={src}
        width={70}
        height={70}
      />
      </Card>

        </div>
    )
    }

const Card = styled.div `
width: 350px;
height: 80px;
display: flex;
flex-direction:row;
color: #FFFFFF;
box-shadow: 5px 10px #888888;
border-radius: 12px;
align-content: center;
padding: 10px;
justify-items:center;
margin-bottom:30px;
`