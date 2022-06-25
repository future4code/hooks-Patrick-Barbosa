import react from 'react'
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom'

const StyledDiv = styled.div`
display:flex;
justify-content:center;
margin:15rem;
`

const StyledButton = styled.button`
border-radius:20px;
width:120px;
height:40px;
margin:20px;
`
const StyledH4 = styled.h4`
color:grey;
font-family:'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
font-size:2rem;
`

const Home = () => {
    const navigate = useNavigate()
    const goToLogin = () => {
        navigate('/Login')
    }
    const goToTrip = () => {
        navigate('/GetTrip')
    }
    return (
        <div>
            <StyledH4>Labex</StyledH4>
            <StyledDiv>
                <StyledButton onClick={goToTrip}>Ver Viagens</StyledButton>
                <StyledButton onClick={goToLogin}>Área de Admin</StyledButton>
            </StyledDiv>
        </div>
    )
}
export default Home