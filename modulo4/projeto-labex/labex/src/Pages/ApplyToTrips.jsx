import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const StyledButton = styled.button`
border-radius:20px;
width:100px;
height:30px;
margin:20px;
`
const StyledDiv = styled.div`
display:flex;
justify-content:center;
`

const Subscribe = () => {
    const navigate = useNavigate()
    const goBack = () => {
        navigate('/GetTrip')
    } 

    return (
        <div>
            <h4>Página Inscreva-se</h4>
            <StyledDiv>
                <StyledButton onClick={goBack}>Voltar</StyledButton>
                <StyledButton>Entrar</StyledButton>
            </StyledDiv>
        </div>
    )
}
export default Subscribe