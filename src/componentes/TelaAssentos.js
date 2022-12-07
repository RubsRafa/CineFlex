import { useState } from "react";
import styled from "styled-components";

export default function TelaAssentos({ setTela3, setTela4, nome, setNome, cpf, setCpf, assento, setAssento, arrayAssentos, reservarAssentos, setCadeiras, cadeiras }) {

    const [selecionar, setSelecionar] = useState('')

    function selecionarAssento(assentoEscolhido) {
        if (!assento.includes(assentoEscolhido.id)) {
            setAssento([...assento, assentoEscolhido.id])
            setCadeiras([...cadeiras, assentoEscolhido.name])
        }
    }

    function verificarInfo() {
        if (nome.length !== 0 && cpf.length !== 0 && arrayAssentos.length !== 0) {
            setTela3(false)
            setTela4(true)
            reservarAssentos(assento)
        }
    }

    return (
        <>
            <TextoInicial>
                <h1>Selecione o(s) assento(s)</h1>
            </TextoInicial>
            <ListaAssentos>
                {arrayAssentos.map((a) => <Assento disponivel={a.isAvailable} cor={selecionar} escolher={assento.includes(a.id)} onClick={() => {
                    setSelecionar('#1AAE9E')
                    selecionarAssento(a)
                }}>
                    <h1>{a.name}</h1></Assento>)}
            </ListaAssentos>
            <AssentoOpcoes>
                <Opcao>
                    <Exemplo cor={'#1AAE9E'} corFundo={'#0E7D71'}></Exemplo>
                    <p>Selecionado</p>
                </Opcao>
                <Opcao>
                    <Exemplo cor={'#C3CFD9'} corFundo={'#7B8B99'}></Exemplo>
                    <p>Disponível</p>
                </Opcao>
                <Opcao>
                    <Exemplo cor={'#FBE192'} corFundo={'#F7C52B'}></Exemplo>
                    <p>Indisponível</p>
                </Opcao>
            </AssentoOpcoes>
            <InfoComprador>
                <h1>Nome do comprador:</h1>
                <input onChange={(e) => setNome(e.target.value)} value={nome} placeholder="Digite seu nome..."></input>
                <h1>CPF do comprador:</h1>
                <input onChange={(e) => setCpf(e.target.value)} value={cpf} placeholder="Digite seu CPF..."></input>
            </InfoComprador>

            <Reservar onClick={verificarInfo}><h1>Reservar assento(s)</h1></Reservar>

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
const AssentoOpcoes = styled.div`
width: 70%;
margin: 0 auto;
display: flex;
flex-wrap: wrap;
justify-content: space-evenly;
`;
const Exemplo = styled.div`
margin: 0 10px 15px 20px; 
width: 26px;
height: 26px;
box-shadow: 0px 2px 4px 2px rgba(0, 0, 0, 0.1);
border-radius: 50%;
border: 1px solid ${props => props.corFundo};
background-color: ${props => props.cor};
`;
const Opcao = styled.div`
display: block;
p{
    font-family: Roboto, sans-serif;
    font-size: 13px;
    color: #4E5A65;
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
const Reservar = styled.div`
width: 225px;
height: 42px;
border: 10px;
background-color: #E8833A;
margin: 40px auto;
border-radius: 3px;
text-align: center;
h1 {
    padding: 12px;
    font-size: 18px;
    font-family: Roboto, sans-serif;
    color: #FFFFFF;
} 
`; 