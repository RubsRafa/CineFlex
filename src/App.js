import { useEffect, useState } from "react";
import styled from "styled-components";

import TelaInicial from "./componentes/TelaInicial";
import TelaSessoes from "./componentes/TelaSessoes";
import TelaAssentos from "./componentes/TelaAssentos";
import TelaSucesso from "./componentes/TelaSucesso";

import axios from "axios";


export default function App() {

  const [tela1, setTela1] = useState(true)
  const [tela2, setTela2] = useState(false)
  const [tela3, setTela3] = useState(false)
  const [tela4, setTela4] = useState(false)


  const [nome, setNome] = useState('');
  const [cpf, setCpf] = useState('');
  const [horaFilme, setHoraFilme] = useState('');
  const [diaFilme, setDiaFilme] = useState('');
  const [arrayAssentos, setArrayAssentos] = useState([]);
  const [assento, setAssento] = useState([]);
  const [cadeiras, setCadeiras] = useState([]);

  const [listaFilmes, setListaFilmes] = useState([]);
  const [sessao, setSessao] = useState();

  useEffect(() => {
    const promise = axios.get('https://mock-api.driven.com.br/api/v8/cineflex/movies');
    promise.then((res) => setListaFilmes(res.data));
    promise.catch((err) => console.log('ERRO AO RECEBER LISTA DE FILME', err))
  }, [])

  function abrirSessoesFilme(id) {
    const promise = axios.get(`https://mock-api.driven.com.br/api/v8/cineflex/movies/${id}/showtimes`);
    promise.then((res) => {
      setSessao(res.data)
      setTela1(false)
      setTela2(true)
    });
    promise.catch((err) => console.log('ERRO AO RECEBER ID ESPECÍFICO', err))
  }

  function abrirAssentosFilme(id) {
    const promise = axios.get(`https://mock-api.driven.com.br/api/v8/cineflex/showtimes/${id}/seats`);
    promise.then((res) => {
      setArrayAssentos(res.data.seats)
      setTela2(false)
      setTela3(true)
    });
    promise.catch((err) => console.log('ERRO AO RECEBER ID ESPECÍFICO', err))
  }

  function reservarAssentos(assentosEscolhidos) {

    const objetoReservar = {
      ids: assentosEscolhidos,
      name: nome,
      cpf: cpf
    };

    console.log(objetoReservar)

    const promise = axios.post(`https://mock-api.driven.com.br/api/v8/cineflex/seats/book-many`, objetoReservar);
    promise.then((res) => {
      console.log(res)
      setTela3(false)
      setTela4(true)
    });
    promise.catch((err) => console.log('ERRO AO ENVIAR ', err))
  }

  function reiniciarTudo () {
    setNome('');
    setCpf('');
    setHoraFilme('');
    setDiaFilme('');
    setArrayAssentos([]);
    setAssento([]);
    setSessao();
  }


  return (
    <>
      <ContainerLogo>
        <h1>CINEFLIX</h1>
      </ContainerLogo>

      {tela1 &&
        <TelaInicial
          listaFilmes={listaFilmes}
          abrirSessoesFilme={abrirSessoesFilme}
        />}

      {tela2 &&
        <TelaSessoes
          setTela2={setTela2}
          setTela3={setTela3}
          setHoraFilme={setHoraFilme}
          sessao={sessao}
          setDiaFilme={setDiaFilme}
          abrirAssentosFilme={abrirAssentosFilme}
        />}
      {tela3 &&
        <TelaAssentos
          setTela3={setTela3}
          setTela4={setTela4}
          nome={nome}
          setNome={setNome}
          cpf={cpf}
          setCpf={setCpf}
          assento={assento}
          setAssento={setAssento}
          arrayAssentos={arrayAssentos}
          reservarAssentos={reservarAssentos}
          setCadeiras={setCadeiras}
          cadeiras={cadeiras}
        />}

      {tela4 &&
        <TelaSucesso
          setTela4={setTela4}
          setTela1={setTela1}
          nome={nome}
          cpf={cpf}
          sessao={sessao}
          diaFilme={diaFilme}
          horaFilme={horaFilme}
          reiniciarTudo={reiniciarTudo}
          cadeiras={cadeiras}
        />}


      {!tela1 && !tela4 &&
        <Rodape>
          <Filme>
            <img src={sessao.posterURL} alt="" />
          </Filme>
          <InfoFilme>
            <h1>{sessao.title}</h1>
            {tela3 && <h1>{diaFilme} - {horaFilme}</h1>}
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
