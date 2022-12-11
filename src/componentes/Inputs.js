import styled from "styled-components"
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Inputs({ nome, setNome, cpf, setCpf, assentoSelecionado }) {

    const navigate = useNavigate(); 

    console.log(assentoSelecionado)


    function reservarAssentos(e) {
        e.preventDefault(); 

        const objetoReservar = {
            ids: assentoSelecionado,
            name: nome,
            cpf: cpf
        };

        axios.post(`https://mock-api.driven.com.br/api/v8/cineflex/seats/book-many`, objetoReservar)
            .then((res) => {
                console.log(res)
                navigate('/sucesso')
            })
            .catch((err) => console.log('ERRO AO ENVIAR ', err))
    }

    return (
        <form onSubmit={assentoSelecionado.length !== 0 && reservarAssentos}>
            <InfoComprador>

                <label htmlFor="name">Nome do comprador:</label>
                <input id="name" data-test="client-name" type='text' required onChange={(e) => setNome(e.target.value)} value={nome} placeholder="Digite seu nome..."></input>
                <label htmlFor="cpf">CPF do comprador:</label>
                <input id="cpf" data-test="client-cpf" type='text' required onChange={(e) => setCpf(e.target.value)} value={cpf} placeholder="Digite seu CPF..."></input>

            </InfoComprador>

            <Centralizar>
                <Reservar type="submit" data-test="book-seat-btn"><h1>Reservar assento(s)</h1></Reservar>
            </Centralizar>
        </form>
    )
}

const InfoComprador = styled.div`
display: block;
width: 333px;
margin: 0 auto;
label {
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
    margin-bottom: 15px;
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