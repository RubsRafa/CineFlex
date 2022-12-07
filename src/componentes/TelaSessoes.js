import styled from "styled-components";

export default function TelaSessoes({ setHoraFilme, sessao, setDiaFilme, abrirAssentosFilme }) {
    let sessoes = sessao.days;

    return (
        <>
            <TextoInicial>
                <h1>Selecione o horário</h1>
            </TextoInicial>
            <ListaHorarios>

                <DataEHorario>

                    {sessoes.map((s) => 
                        <>
                        <Datas>{s.weekday} - {s.date}</Datas>
                        <Horarios>
                            <Hora>
                                <h1 onClick={() => {
                                    setHoraFilme(s.showtimes[0].name)
                                    setDiaFilme(`${s.weekday} - ${s.date}`)
                                    abrirAssentosFilme(s.showtimes[0].id)
                            }}>{s.showtimes[0].name}</h1>
                            </Hora>

                            <Hora>
                                <h1 onClick={() => {
                                    setHoraFilme(s.showtimes[1].name)
                                    setDiaFilme(`${s.weekday} - ${s.date}`)
                                    abrirAssentosFilme(s.showtimes[1].id)
                            }}>{s.showtimes[1].name}</h1>
                            </Hora>

                        </Horarios>
                        </>
                    )}

                </DataEHorario>
            </ListaHorarios>
        </>
    )
}
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
const Hora = styled.div`
width: 82px;
height: 43px;
border: 10px;
background-color: #E8833A;
margin: 8px 8px 22px 0;
border-radius: 3px;
h1 {
    margin: 13px 0 0 16px;
    font-size: 18px;
    font-family: Roboto, sans-serif;
    color: #FFFFFF;
} 
`; 