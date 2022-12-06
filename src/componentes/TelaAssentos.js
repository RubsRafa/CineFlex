import { useState } from "react";
import styled from "styled-components";

export default function TelaAssentos({ setTela3, setTela4, nome, setNome, cpf, setCpf, assento, setAssento }) {

    const [selecionar, setSelecionar] = useState('#C3CFD9')
    const assentos = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21']

    return (
        <>
            <TextoInicial>
                <h1>Selecione o(s) assento(s)</h1>
            </TextoInicial>
            <ListaAssentos>
                {assentos.map((a) => <Assento cor={selecionar} escolher={assento.includes(a)} onClick={() => {
                setSelecionar('#1AAE9E') 
                setAssento([...assento, a])
            console.log (a)}
            }><h1>{a}</h1></Assento>)}
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

            <Reservar onClick={() => {
                setTela3(false)
                setTela4(true)
            }}><h1>Reservar assento(s)</h1></Reservar>

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
const Assento = styled.div`
margin: 0 10px 15px 0; 
width: 26px;
height: 26px;
background-color: #C3CFD9;
background-color: ${props => props.escolher && props.cor};
box-shadow: 0px 2px 4px 2px rgba(0, 0, 0, 0.1);
border-radius: 50%;
border: 1px solid #808F9D; 
text-align: center;
h1 {
    padding: 8px;
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