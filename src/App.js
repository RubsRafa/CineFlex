import { useState } from "react";
import GlobalStyle from './css/globalStyle';
import styled from "styled-components";

import TelaInicial from "./componentes/TelaInicial";
import TelaSessoes from "./componentes/TelaSessoes";
import TelaAssentos from "./componentes/TelaAssentos";
import TelaSucesso from "./componentes/TelaSucesso";


export default function App() {

  const [tela1, setTela1] = useState(true)
  const [tela2, setTela2] = useState(false)
  const [tela3, setTela3] = useState(false)
  const [tela4, setTela4] = useState(false)


  const [nome, setNome] = useState('');
  const [cpf, setCpf] = useState('');
  const [horaFilme, setHoraFilme] = useState('');
  const [assento, setAssento] = useState([]);

  return (
    <>
    <GlobalStyle />

    <ContainerLogo>
      <h1>CINEFLIX</h1>
    </ContainerLogo>

    {tela1 && <TelaInicial setTela1={setTela1} setTela2={setTela2} />}
    {tela2 && <TelaSessoes setTela2={setTela2} setTela3={setTela3} setHoraFilme={setHoraFilme} />}
    {tela3 && <TelaAssentos setTela3={setTela3} setTela4={setTela4} nome={nome} setNome={setNome} cpf={cpf} setCpf={setCpf} assento={assento} setAssento={setAssento}  />}
    {tela4 && <TelaSucesso setTela4={setTela4} setTela1={setTela1} nome={nome} cpf={cpf} horaFilme={horaFilme} assento={assento} />}


    {!tela1 && !tela4 && <Rodape>
                <Filme>
                    <img src="https://upload.wikimedia.org/wikipedia/pt/e/e6/Enola_Holmes_poster.jpeg" alt="" />
                </Filme>
                <InfoFilme>
                <h1>Enola Holmes</h1>
                {tela3 && <h1>Quinta-feira - {horaFilme}</h1>}
                </InfoFilme>
            </Rodape>}
    </>
  );
}
const ContainerLogo = styled.div`
width: 100%;
height: 67px;
background-color: #C3CFD9;
text-align: center;
h1 {
  font-family: Roboto, sans-serif;
  font-weight: 400;
  color: #e8833a;
  font-size: 34px;
  padding: 15px;
}
`;
const Rodape = styled.div`
width: 100%;
height: 117px;
background-color: #DFE6ED;
border: 1px solid #9EADBA;
display: flex;
flex-wrap: wrap;
position: fixed;
bottom: 0;
left:0;
`;
const Filme = styled.div`
width: 64px;
height: 89px;
box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
border-radius: 2px;
margin: 13px 10px 0 10px; 
background-color: #FFFFFF;
img {
    margin: 8px 0 0 8px;
    width: 48px;
    height: 72px;
}
`;
const InfoFilme = styled.div`
margin: 40px 0 0 2px;
h1 {
    font-family: Roboto, sans-serif;
    font-size: 26px;
    color: #293845;
}
`;
