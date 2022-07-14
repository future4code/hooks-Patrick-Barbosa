import styled from 'styled-components'
import { useNavigate } from 'react-router-dom'
import useRequestData from '../Components/useRequestData'



const StyledH4 = styled.h4`
color:grey;
font-family:'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
font-size:2rem;
`

const StyledButton = styled.button`
border-radius:20px;
width:100px;
height:30px;
margin:20px;
`
const StyledDiv = styled.div`
display:flex;
flex-direction:column;
justify-content:center;
margin-left:32%;
width:35rem;
height:50rem;
`

const StyledBox = styled.div`
box-shadow:1px 5px 5px lightgray;

margin:10px;
width:35rem;
height:200px;
`

const Trip = () => {
    const navigate = useNavigate()

    const goBack = () => {
        navigate('/')
    }
    const goToApplication = () => {
        navigate('/ApplyToTrips')
    }
    

    return(
        <div>
            <StyledH4>Lista de Viagens</StyledH4>
            <StyledButton onClick={goBack}>Voltar</StyledButton>
            <StyledButton onClick={goToApplication}>Inscrever-se</StyledButton>
            <StyledDiv>
                <StyledBox>ds</StyledBox>
                <StyledBox>ds</StyledBox>
                <StyledBox>ds</StyledBox>
                
            </StyledDiv>
        </div>
    )
}
export default Trip