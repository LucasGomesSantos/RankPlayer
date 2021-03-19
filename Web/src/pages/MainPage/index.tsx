
import React from 'react'
import { useForm } from "react-hook-form";

import Header from '../../components/Header';
import { Container, Content } from './style';


export function MainPage(){

  const { register, handleSubmit } = useForm();
  
  const onSubmit = (data) => {
      const requestOptions = {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(data)
      };
      fetch('https://localhost:44312/v1/GameResults', requestOptions)
      .then(response => response.json())
      .then(ret => console.log(ret));
      window.alert('Obrigado, sua nota foi enviada com sucesso')
      
  }


  return(   
      <section>
      <Header/>
    <Container>
      <Content>
        <form onSubmit={handleSubmit(onSubmit)}> 
        <h1>Nova Pontuação</h1>
      <label>
          Id do Jogador:
          <input type="text" placeholder="Id do jogador" name="playerID" ref={register}/>
      </label>
      <label>
          Id do Jogo:
          <input type="text" placeholder="Id do Jogo" name="gameID" ref={register} />
      </label>
      <label>
          Pontos:
          <input type="text" placeholder="Pontos" name="win" ref={register} />
      </label>
      <button type="submit">Enviar</button>
        </form>
      </Content>
      </Container>
      </section>
  )
}

export default MainPage;