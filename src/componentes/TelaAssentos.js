import { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import Rodape from "./Rodape";
import OpcoesAssento from './OpcoesAssento';

export default function TelaAssentos({ nome, setNome, cpf, setCpf, cadeiras, setCadeiras, retornar, setAssentosMovie, sessionMovie }) {

    const [assentos, setAssentos] = useState(undefined)
    const [assentoSelecionado, setAssentoSelecionado] = useState([]);
    const [selecionar, setSelecionar] = useState()
    const { idSessao } = useParams();

    useEffect(() => {
        axios.get(`https://mock-api.driven.com.br/api/v8/cineflex/showtimes/${idSessao}/seats`)
            .then((res) => {setAssentos(res.data)
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


    function selecionarAssento(assentoEscolhido) {

        if (!assentoSelecionado.includes(assentoEscolhido.id) && assentoEscolhido.isAvailable) {
            setAssentoSelecionado([...assentoSelecionado, assentoEscolhido.id])
            setCadeiras([...cadeiras, assentoEscolhido.name])
            setSelecionar('#1AAE9E')
        }
        if (assentoSelecionado.includes(assentoEscolhido.id)) {
            setAssentoSelecionado(assentoSelecionado.filter((a) => a !== assentoEscolhido.id))
            setCadeiras(cadeiras.filter((c) => c !== assentoEscolhido.name))
        }

        if (assentoEscolhido.isAvailable === false) {
            alert('Esse assento não está disponível');
        }

    }

    function verificarInfo() {
        if (nome.length !== '') {
            if (cpf.length !== '') {
                if (assentoSelecionado.length !== []) {
                    reservarAssentos(assentoSelecionado)
                }
            }
        }

    }

    function reservarAssentos(assentosEscolhidos) {

        const objetoReservar = {
            ids: assentosEscolhidos,
            name: nome,
            cpf: cpf
        };

        axios.post(`https://mock-api.driven.com.br/api/v8/cineflex/seats/book-many`, objetoReservar)
            .then((res) => {
                console.log(res)
            })
            .catch((err) => console.log('ERRO AO ENVIAR ', err))
    }

    return (
        <>
            <Link to={`/sessoes/${sessionMovie}`}>
                <Voltar data-test="go-home-header-btn" src={retornar} alt='retornar' />
            </Link>
            <TextoInicial>
                <h1>Selecione o(s) assento(s)</h1>
            </TextoInicial>
            <ListaAssentos>
                {assentos.seats.map((a) =>
                    <Assento
                        key={a.id}
                        data-test="seat"
                        disponivel={a.isAvailable}
                        cor={selecionar}
                        escolher={assentoSelecionado.includes(a.id)}
                        onClick={() => selecionarAssento(a)}
                    >
                        <h1>{a.name}</h1></Assento>
                )}
            </ListaAssentos>
            <OpcoesAssento />
            <InfoComprador>
                <form>
                    <h1>Nome do comprador:</h1>
                    <input data-test="client-name" type='text' required onChange={(e) => setNome(e.target.value)} value={nome} placeholder="Digite seu nome..."></input>
                    <h1>CPF do comprador:</h1>
                    <input data-test="client-cpf" type='text' required onChange={(e) => setCpf(e.target.value)} value={cpf} placeholder="Digite seu CPF..."></input>
                </form>
            </InfoComprador>

            <Centralizar>
                <Link to={'/sucesso'}>
                    <Reservar onClick={() => {
                        verificarInfo()

                    }} data-test="book-seat-btn"><h1>Reservar assento(s)</h1></Reservar>
                </Link>
            </Centralizar>

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
const ListaAssentos = styled.div`
margin: 0 50px 0 50px;
padding: 20px;
display: flex;
flex-wrap: wrap;
justify-content: space-around;
`;
const Assento = styled.button`
margin: 0 10px 15px 0; 
width: 26px;
height: 26px;
background-color: ${props => props.disponivel ? '#C3CFD9' : '#FBE192'};
background-color: ${props => props.escolher && props.disponivel && props.cor};
box-shadow: 0px 2px 4px 2px rgba(0, 0, 0, 0.1);
border-radius: 50%;
border: 1px solid ${props => props.disponivel ? '#808F9D' : '#FBE192'}; 
text-align: center;
h1 {
    color: #000000; 
    font-size: 11px;
    font-family: Roboto, sans-serif;
}
`;
const InfoComprador = styled.div`
display: block;
width: 333px;
margin: 0 auto;
h1 {
    margin-top: 8px;
    color: #293845;
    font-size: 18px;
    font-family: Roboto, sans-serif;
}
input{
    width: 327px;
    height: 51px;
    border: 1px solid #D4D4D4;
    border-radius: 3px;
    font-size: 18px;
    font-style: italic;
    margin-top: 8px;
    &&::placeholder{
        font-family: Roboto, sans-serif;
        color: #AFAFAF;
    }
}
`;
const Reservar = styled.button`
width: 225px;
height: 42px;
border: 10px;
background-color: #E8833A;
margin: 40px auto;
border-radius: 3px;
text-align: center;
h1 {
    font-size: 18px;
    font-family: Roboto, sans-serif;
    color: #FFFFFF;
} 
`;
const Centralizar = styled.div`
text-align: center;
`;
const Voltar = styled.img`
width: 30px;
height: 30px;
position: absolute;
top: 20px;
left:10px;
`;