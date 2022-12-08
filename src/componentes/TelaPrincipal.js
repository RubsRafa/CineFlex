import { useState } from "react";
import styled from "styled-components";

import TelaInicial from '../componentes/TelaInicial';
import TelaSessoes from "../componentes/TelaSessoes";
import TelaAssentos from "../componentes/TelaAssentos";
import TelaSucesso from "../componentes/TelaSucesso";
import Rodape from '../componentes/Rodape'

import axios from "axios";
import { BrowserRouter, Routes, Route } from "react-router-dom";


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

    const [sessao, setSessao] = useState();
    console.log(sessao)

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


    function reiniciarTudo() {
        setNome('');
        setCpf('');
        setHoraFilme('');
        setDiaFilme('');
        setArrayAssentos([]);
        setAssento([]);
        setSessao();
        setCadeiras([])
    }


    return (
        <BrowserRouter>
            <ContainerLogo>
                <h1>CINEFLIX</h1>
            </ContainerLogo>

            <Routes>

                {tela1 &&
                    <Route path='/' element={<TelaInicial
                        abrirSessoesFilme={abrirSessoesFilme}
                    />} />}

                {tela2 &&
                    <Route path='/sessoes/:idFilme' element={
                        <TelaSessoes
                            setTela2={setTela2}
                            setTela3={setTela3}
                            setHoraFilme={setHoraFilme}
                            sessao={sessao}
                            setDiaFilme={setDiaFilme}
                            abrirAssentosFilme={abrirAssentosFilme}
                        />
                    } />}

                {tela3 &&
                    <Route path='/assentos/:idSessao' element={
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
                            setCadeiras={setCadeiras}
                            cadeiras={cadeiras}
                        />
                    } />}

            </Routes>


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
                <Rodape
                    sessao={sessao}
                    tela3={tela3}
                    diaFilme={diaFilme}
                    horaFilme={horaFilme}
                />}
        </BrowserRouter>
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