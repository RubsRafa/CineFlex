import styled from "styled-components"
import { useState } from "react"

export default function AddAssentos({ assentos, assentoSelecionado, setAssentoSelecionado, cadeiras, setCadeiras  }) {

    const [selecionar, setSelecionar] = useState()


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

    return (
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
    )
}

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