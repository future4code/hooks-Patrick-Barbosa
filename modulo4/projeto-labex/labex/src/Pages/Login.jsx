import react from 'react'
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom'

const StyledDiv = styled.div`
display:flex;
justify-content:center;
`
const StyledInside = styled.div`
display:flex;
justify-content:center;
flex-direction:column;
width:300px; 
`
const StyledInput = styled.input`
border-radius:5px;
margin:10px;
height:30px;
`
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

const Login = () => {
    const navigate = useNavigate()
    const goBack = () => {
        navigate('/')
    }
    return (
        <div>
            <StyledH4> Login  </StyledH4>
            <StyledDiv>
                <StyledInside>
                    <StyledInput placeholder='Email'></StyledInput>
                    <StyledInput placeholder='Senha'></StyledInput>
                </StyledInside>
            </StyledDiv>
            <StyledButton onClick={goBack}>Voltar</StyledButton>
            <StyledButton>Entrar</StyledButton>
        </div>
    )
}
export default Login