import styled from "styled-components";

export default function OpcoesAssento() {

    const opcoes = [
        { cor: '#1AAE9E', corFundo: '#0E7D71', texto: 'Selecionado' },
        { cor: '#C3CFD9', corFundo: '#7B8B99', texto: 'Disponível' },
        { cor: '#FBE192', corFundo: '#F7C52B', texto: 'Indisponível' }]

    return (
        <AssentoOpcoes>
            {opcoes.map((o) =>
                <Opcao key={o.texto}>
                    <Exemplo cor={o.cor} corFundo={o.corFundo}></Exemplo>
                    <p>{o.texto}</p>
                </Opcao>
            )}
        </AssentoOpcoes>
    )
}
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