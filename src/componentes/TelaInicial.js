import { useState } from "react";
import styled from "styled-components";

export default function TelaInicial({listaFilmes, abrirSessoesFilme }) {

  return (
    <>
      <TextoInicial>
        <h1>Selecione o filme</h1>
      </TextoInicial>
      <ListaFilmes>
        {listaFilmes.map((f) =>
          <Filmes onClick={() => {
            abrirSessoesFilme(f.id)
          }}>
            <img data-test="movie" src={f.posterURL} alt="" />
          </Filmes>
        )}
      </ListaFilmes>
    </>
  )
}
const TextoInicial = styled.div`
width: 100%;
height: 110px;
text-align: center;
h1 {
  font-size: 24px;
  font-family: Roboto, sans-serif;
  font-weight: 400;
  color: #293845;
  padding: 40px;
}
`;
const ListaFilmes = styled.div`
margin: 0 auto;
padding: 20px;
display: flex;
flex-wrap: wrap;
justify-content: space-around;
`;
const Filmes = styled.div`
margin: 0 10px 15px 0; 
width: 145px;
height: 209px;
background-color: #FFFFFF;
box-shadow: 0px 2px 4px 2px rgba(0, 0, 0, 0.1);
border-radius: 3px;
img {
  margin: 8px 0 0 8px; 
  width: 129px;
height: 193px;
background-color: #FFFFFF;
box-shadow: 0px 2px 4px 2px rgba(0, 0, 0, 0.1);
border-radius: 3px;
  
}
`;