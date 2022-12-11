import { useState } from "react";
import styled from "styled-components";
import TelaInicial from '../componentes/TelaInicial';
import TelaSessoes from "../componentes/TelaSessoes";
import TelaAssentos from "../componentes/TelaAssentos";
import TelaSucesso from "../componentes/TelaSucesso";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import retornar from '../img/return_arrow.png'

export default function TelaPrincipal() {

    const [nome, setNome] = useState('');
    const [cpf, setCpf] = useState('');
    const [horaFilme, setHoraFilme] = useState('');
    const [diaFilme, setDiaFilme] = useState('');
    const [nomeFilme, setNomeFilme] = useState('');
    const [cadeiras, setCadeiras] = useState([]);
    const [sessionMovie, setSessionMovie] = useState();
    const [assentosMovie, setAssentosMovie] = useState(); 

    function reiniciarTudo() {
        setNome('');
        setCpf('');
        setHoraFilme('');
        setDiaFilme('');
        setNomeFilme('')
        setCadeiras([])
        setSessionMovie('')
        setAssentosMovie('')
    }


    return (
        <>
            <BrowserRouter>
                <ContainerLogo>
                    <h1>CINEFLIX</h1>
                </ContainerLogo>

                <Routes>
                    <Route path="/" element={<TelaInicial
                        setNomeFilme={setNomeFilme}
                    />} />

                    <Route path="/sessoes/:idFilme" element={<TelaSessoes
                        setHoraFilme={setHoraFilme}
                        setDiaFilme={setDiaFilme}
                        retornar={retornar}
                        setSessionMovie={setSessionMovie}
                    />} />

                    <Route path="/assentos/:idSessao" element={<TelaAssentos
                        nome={nome}
                        cpf={cpf}
                        setNome={setNome}
                        setCpf={setCpf}
                        setCadeiras={setCadeiras}
                        cadeiras={cadeiras}
                        retornar={retornar}
                        setAssentosMovie={setAssentosMovie}
                        sessionMovie={sessionMovie}
                    />} />

                    <Route path="/sucesso" element={<TelaSucesso
                        nome={nome}
                        cpf={cpf}
                        diaFilme={diaFilme}
                        horaFilme={horaFilme}
                        reiniciarTudo={reiniciarTudo}
                        cadeiras={cadeiras}
                        nomeFilme={nomeFilme}
                        retornar={retornar}
                        assentosMovie={assentosMovie}
                    />} />

                </Routes>

            </BrowserRouter>
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