import logo from './logo.svg';
import React from 'react';
import styled from 'styled-components'
import './App.css';

const Container = styled.div `
display:flex;
flex-direction:column;
border:1px solid black ;
height:100vh;
box-sizing:border-box;
margin:auto;
width:600px;
`
const ContainerMenssage = styled.div`
flex-grow:1;
padding:20px;
display:flex;
flex-direction:column-reverse;
`

const Inputs = styled.div`
display:flex;
`

const InputName = styled.input `
width:92px;
`
const InputMessage = styled.input`
flex-grow:1;

`

class App extends React.Component {

  state = {
    listaDeMensagem: [
      
    ],

    usuario:'',
    mensagem:''
  }

  onChangeUsuario = (event) => {
    this.setState({usuario : event.target.value})
  }

  onChangeMensagem = (event) => {
    this.setState({mensagem : event.target.value})
  }

  enviarMensagem = () => {
    const novaMensagem = {
      user: this.state.usuario,
      text: this.state.mensagem
    }
    console.log (novaMensagem)
    const novaMensagemArray = [novaMensagem,...this.state.listaDeMensagem]
    this.setState({listaDeMensagem : novaMensagemArray, mensagem: ''})
  }





  render() {
    return (
      <Container>
        <ContainerMenssage>
          {this.state.listaDeMensagem.map((mensagem, i) => {
            return <p key={i}>
              <strong>{mensagem.user}</strong>: {mensagem.text}
            </p>

          })}
        </ContainerMenssage>
        <Inputs>
          <InputName onChange={this.onChangeUsuario} value={this.state.usuario} placeholder='Usuário'/>
          <InputMessage onChange={this.onChangeMensagem} value={this.state.mensagem} placeholder='Mensagem'/>
          <button onClick={this.enviarMensagem} >Enviar</button>
        </Inputs>
        </Container>
    );
  }
}

export default App;
