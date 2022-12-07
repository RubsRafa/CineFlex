import styled from "styled-components";

export default function TelaSessoes({ setHoraFilme, sessao, setTela2, setTela3 }) {
    const sessoes = sessao.days;
    console.log(sessoes)
    return (
        <>
            <TextoInicial>
                <h1>Selecione o horário</h1>
            </TextoInicial>
            <ListaHorarios>

                <DataEHorario>

                    {sessoes.map((s) => {
                        <>
                        <Datas>{s.weekday} - {s.date}</Datas>
                        <Horarios>
                            <Hora>
                                <h1 onClick={() => {
                                    setTela2(false)
                                    setTela3(true)
                                    setHoraFilme('15:00')
                            }}>{s.id}</h1>
                            </Hora>
                        </Horarios>
                        </>
                    })}

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
height: 100px;
`;
const Datas = styled.h1`
font-size: 20px;
    color: #293845;
    font-family: Roboto, sans-serif;
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
margin: 8px 5px 0 0;
border-radius: 3px;
h1 {
    padding: 13px;
    font-size: 18px;
    font-family: Roboto, sans-serif;
    color: #FFFFFF;
} 
`; 