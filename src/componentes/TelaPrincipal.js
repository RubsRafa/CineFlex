import { useEffect, useState } from "react";
import styled from "styled-components";

import TelaInicial from '../componentes/TelaInicial';
import TelaSessoes from "../componentes/TelaSessoes";
import TelaAssentos from "../componentes/TelaAssentos";
import TelaSucesso from "../componentes/TelaSucesso";
import Rodape from '../componentes/Rodape'

import axios from "axios";
import { BrowserRouter, Route, Routes } from "react-router-dom";


export default function TelaPrincipal() {

    const [nome, setNome] = useState('');
    const [cpf, setCpf] = useState('');
    const [horaFilme, setHoraFilme] = useState('');
    const [semanaFilme, setSemanaFilme] = useState('');
    const [diaFilme, setDiaFilme] = useState('');
    const [nomeFilme, setNomeFilme] = useState('');
    const [imagemFilme, setImagemFilme] = useState('');
    const [cadeiras, setCadeiras] = useState([]);
    const [infoFilme, setInfoFilme] = useState(false);
    const [aparecerHorario, setAparecerHorario] = useState(false);

    // console.log(infoFilme)

    function reiniciarTudo() {
        setNome('');
        setCpf('');
        setHoraFilme('');
        setSemanaFilme('')
        setDiaFilme('');
        setNomeFilme('')
        setCadeiras([])
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
                        setImagemFilme={setImagemFilme}
                        setInfoFilme={setInfoFilme}
                    />} />

                    <Route path="/sessoes/:idFilme" element={<TelaSessoes
                        setHoraFilme={setHoraFilme}
                        setDiaFilme={setDiaFilme}
                        setSemanaFilme={setSemanaFilme}
                        setAparecerHorario={setAparecerHorario}
                    />} />

                    <Route path="/assentos/:idSessao" element={<TelaAssentos
                        nome={nome}
                        cpf={cpf}
                        setNome={setNome}
                        setCpf={setCpf}
                        setCadeiras={setCadeiras}
                        cadeiras={cadeiras}
                        setInfoFilme={setInfoFilme}
                    />} />

                    <Route path="/sucesso" element={<TelaSucesso
                        nome={nome}
                        cpf={cpf}
                        diaFilme={diaFilme}
                        horaFilme={horaFilme}
                        reiniciarTudo={reiniciarTudo}
                        cadeiras={cadeiras}
                        nomeFilme={nomeFilme}
                        semanaFilme={semanaFilme}
                    />} />

                </Routes>
                {infoFilme && (
                    <Rodape
                        nomeFilme={nomeFilme}
                        semanaFilme={semanaFilme}
                        horaFilme={horaFilme}
                        imagemFilme={imagemFilme}
                        aparecerHorario={aparecerHorario}
                    />
                )}

                {/* <Rodape
            nomeFilme={nomeFilme}
            semanaFilme={semanaFilme}
            horaFilme={horaFilme}
            imagemFilme={imagemFilme}
            /> */}


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