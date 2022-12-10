import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import styled from "styled-components";
import Rodape from "./Rodape";

export default function TelaSessoes({ setHoraFilme, setDiaFilme, setSemanaFilme, retornar }) {
    const [sessoes, setSessoes] = useState(undefined);
    const { idFilme } = useParams();


    useEffect(() => {
        axios.get(`https://mock-api.driven.com.br/api/v8/cineflex/movies/${idFilme}/showtimes`)
            .then((res) => setSessoes(res.data))
            .catch((err) => console.log(err.response.data))
    }, [])


    if (sessoes === undefined) {
        return (
            <TextoInicial>
                <Voltar src={retornar} />
                <h1>Carregando sessões....</h1>
            </TextoInicial>
        )
    }


    return (
        <>
        <Voltar src={retornar} alt='retornar' onClick={() => console.log('RETORNAR')} />
            <TextoInicial>
                <h1>Selecione o horário</h1>
            </TextoInicial>
            <ListaHorarios>

                <DataEHorario>

                    {sessoes.days.map((s) =>
                        <div key={s.id} data-test="movie-day">
                            <Datas>{s.weekday} - {s.date}</Datas>
                            <Horarios>
                                <Link to={`/assentos/${s.showtimes[0].id}`} >
                                    <Hora onClick={() => {
                                        setHoraFilme(s.showtimes[0].name)
                                        setDiaFilme(s.date)
                                        setSemanaFilme(`${s.weekday} -`)
                                    }} >
                                        <h1 data-test="showtime">{s.showtimes[0].name}</h1>
                                    </Hora>
                                </Link>

                                <Link to={`/assentos/${s.showtimes[1].id}`}>
                                    <Hora onClick={() => {
                                        setHoraFilme(s.showtimes[1].name)
                                        setDiaFilme(s.date)
                                        setSemanaFilme(`${s.weekday} -`)
                                    }} >
                                        <h1 data-test="showtime">{s.showtimes[1].name}</h1>
                                    </Hora>
                                </Link>

                            </Horarios>
                        </div>
                    )}

                    <Rodape 
                    nomeFilme={sessoes.title} 
                    imagemFilme={sessoes.posterURL} 
                    />

                </DataEHorario>
            </ListaHorarios>
        </>
    )
}
const Voltar = styled.img`
width: 30px;
height: 30px;
position: absolute;
top: 20px;
left:10px;
`;
const TextoInicial = styled.div`
width: 100%;
height: 110px;
text-align: center;
h1 {
  font-size: 24px;
  font-family: Roboto, sans-serif;
  font-weight: 400;
  color: #293845;
  padding: 40px;
}
`;
const ListaHorarios = styled.div`
margin: 0 auto;
padding: 20px;
display: flex;
flex-wrap: wrap;
justify-content: space-around;
`;
const DataEHorario = styled.div`
width: 100%;
height: 100%;
margin-bottom: 120px;
`;
const Datas = styled.h1`
font-size: 20px;
    color: #293845;
    font-family: Roboto, sans-serif;
    margin:0 0 18px 0;
`;
const Horarios = styled.div`
display: flex;
flex-wrap: wrap;
`;
const Hora = styled.button`
width: 82px;
height: 43px;
border: 10px;
background-color: #E8833A;
margin: 8px 8px 22px 0;
border-radius: 3px;
h1 {
    font-size: 18px;
    font-family: Roboto, sans-serif;
    color: #FFFFFF;
} 
`; 