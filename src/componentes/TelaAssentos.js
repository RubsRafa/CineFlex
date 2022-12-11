import { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import Rodape from "./Rodape";
import OpcoesAssento from './OpcoesAssento';
import AddAssentos from "./AddAssentos";
import Inputs from "./Inputs";

export default function TelaAssentos({ nome, setNome, cpf, setCpf, cadeiras, setCadeiras, retornar, setAssentosMovie, sessionMovie }) {

    const [assentos, setAssentos] = useState(undefined)
    const [assentoSelecionado, setAssentoSelecionado] = useState([]);
    const { idSessao } = useParams();

    useEffect(() => {
        axios.get(`https://mock-api.driven.com.br/api/v8/cineflex/showtimes/${idSessao}/seats`)
            .then((res) => {
                setAssentos(res.data)
                setAssentosMovie(idSessao)
            })
            .catch((err) => console.log(err.response.data))
    }, [])


    if (assentos === undefined) {
        return (
            <TextoInicial>
                <Link to={`/sessoes/${sessionMovie}`}>
                    <Voltar data-test="go-home-header-btn" src={retornar} alt='retornar' />
                </Link>
                <h1>Carregando assentos...</h1>
            </TextoInicial>
        )
    }

    return (
        <>
            <Link to={`/sessoes/${sessionMovie}`}>
                <Voltar data-test="go-home-header-btn" src={retornar} alt='retornar' />
            </Link>
            <TextoInicial>
                <h1>Selecione o(s) assento(s)</h1>
            </TextoInicial>

            <AddAssentos 
            assentos={assentos} 
            assentoSelecionado={assentoSelecionado} 
            setAssentoSelecionado={setAssentoSelecionado} 
            cadeiras={cadeiras} 
            setCadeiras={setCadeiras} />
            <OpcoesAssento />

            <Inputs 
            nome={nome} 
            setNome={setNome} 
            cpf={cpf} 
            setCpf={setCpf} 
            assentoSelecionado={assentoSelecionado} />

            <Rodape
                nomeFilme={assentos.movie.title}
                imagemFilme={assentos.movie.posterURL}
                semanaFilme={`${assentos.day.weekday} -`}
                horaFilme={assentos.name}
            />

        </>
    )
}
const TextoInicial = styled.div`
width: 100%;
height: 100px;
text-align: center;
h1 {
  font-size: 24px;
  font-family: Roboto, sans-serif;
  font-weight: 400;
  color: #293845;
  padding: 40px;
}
`;
const Voltar = styled.img`
width: 30px;
height: 30px;
position: absolute;
top: 20px;
left:10px;
`;