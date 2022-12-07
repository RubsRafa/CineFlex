import styled from "styled-components";

export default function TelaSucesso ({setTela4, setTela1, nome, cpf, horaFilme, diaFilme, sessao, reiniciarTudo, cadeiras}) {
   
    return (
        <>
    <TextoInicial>
      <h1>Pedido feito
        com sucesso!</h1>
    </TextoInicial>

    <CaixaInfo>
        <h1>Filme e sessão</h1>
        <p>{sessao.title}</p>
        <p>{diaFilme} {horaFilme}</p>
    </CaixaInfo>
    <CaixaInfo>
        <h1>Ingressos</h1>
        {cadeiras.map ((a) => <p>Assento {a}</p>)}
    </CaixaInfo>
    <CaixaInfo>
        <h1>Filme e sessão</h1>
        <p>Nome: {nome}</p>
        <p>CPF: {cpf}</p>
    </CaixaInfo>
    
    <Finalizar onClick={() => {
        setTela4(false) 
        setTela1(true)
        reiniciarTudo()
    }}><h1>Voltar pra Home</h1></Finalizar>

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
  color: #247A6B;
  padding: 40px;
}
`;
const CaixaInfo = styled.div`
margin: 0 0 20px 29px;
width: 90%;
h1 {
    font-family: Roboto, sans-serif;
    font-size: 24px;
    color: #293845;
    font-weight: 700;
}
p {
    font-family: Roboto, sans-serif;
    font-size: 22px;
    color: #293845;
    margin-top: 8px;
}
`;
const Finalizar = styled.div`
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