import styled from "styled-components"

export default function Rodape({sessao, tela3, diaFilme, horaFilme}) {
    return (
        <RodapeContainer data-test="footer">
            <Filme>
                <img src={sessao.posterURL} alt="" />
            </Filme>
            <InfoFilme>
                <h1>{sessao.title}</h1>
                {tela3 && <h1>{diaFilme} - {horaFilme}</h1>}
            </InfoFilme>
        </RodapeContainer>
    )
}

const RodapeContainer = styled.div`
width: 100%;
height: 117px;
background-color: #DFE6ED;
border: 1px solid #9EADBA;
display: flex;
flex-wrap: wrap;
position: fixed;
bottom: 0;
left:0;
`;
const Filme = styled.div`
width: 64px;
height: 89px;
box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
border-radius: 2px;
margin: 13px 10px 0 10px; 
background-color: #FFFFFF;
img {
    margin: 8px 0 0 8px;
    width: 48px;
    height: 72px;
}
`;
const InfoFilme = styled.div`
margin: 40px 0 0 2px;
h1 {
    font-family: Roboto, sans-serif;
    font-size: 26px;
    color: #293845;
}
`;
