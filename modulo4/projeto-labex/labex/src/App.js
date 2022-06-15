import './App.css';
import styled from 'styled-components'
import Viagens from './components/Viagens/Viagens';
import { useState } from 'react';

const StyledH1 = styled.h1`
font-family:Verdana, Geneva, Tahoma, sans-serif;
color:grey;
`


const StyledP = styled.p`
display:inline;
color:white;
border-radius:20px;
padding:10px;
margin:30px;
background-color:gray;
`


function App() {
  const[login,setLogin]=useState(true)

  const goLogin = () => {
    setLogin({login : true})
  }

  const goLogout = () => {
    setLogin({login : false})
  }

  const renderPage = () => {
    if(login){
      return <Viagens verViagens={goLogin}/>
    }else{
      return <App verViagens={goLogout}/>
    }
  }

  return (
    <div className="App">
      <StyledH1>LabeX</StyledH1>
        <StyledP>Ver Viagens</StyledP>

        <StyledP>Área de Admin</StyledP>
         

    </div>
  );
}

export default App;
