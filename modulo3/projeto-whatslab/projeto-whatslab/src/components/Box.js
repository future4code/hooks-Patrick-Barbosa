import React from "react";
import styled from "styled-components";


const Container = styled.div`
display: flex;
justify-content:center;
`
const DivInside = styled.div`
display:flex;
max-width:500px;
height:100vh;
flex:1 1 0%;
border: 1px solid black;
`

const DivInputs = styled.div`
display:flex;
flex:1 1 0%;
flex-direction:column;
justify-content:flex-end;
padding:20px;
`

const DivButton = styled.div`
display:flex
`

const InputNome = styled.input`
width:100px;
`

const InputMensagem = styled.input` 
flex:1 1 0%;
`

const EnviarButton = styled.button`
`


export class Box extends React.Component {


    render() {
        const onClickEnviar = () => {
           
        }
        return (
                <Container>
                    <DivInside>
                        <DivInputs>
                           <DivButton>
                               <InputNome type="df" placeholder="Nome"/>
                               <InputMensagem type="ds" placeholder="Mensagem" />
                               <EnviarButton>Enviar</EnviarButton>
                           </DivButton>
                        </DivInputs>
                    </DivInside>
                </Container>
        )
    }
}