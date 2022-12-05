import styled from "styled-components";
import GlobalStyle from './css/globalStyle';


export default function App() {
  return (
    <>
    <ContainerLogo>
      <GlobalStyle />
      <h1>CINEFLIX</h1>
    </ContainerLogo>

    <TextoInicial />
    </>
  );
}

const ContainerLogo = styled.div`
width: 100%;
height: 67px;
background-color: #C3CFD9;
text-align: center;
h1 {
  font-family: Roboto, sans-serif;
  font-weight: 400;
  color: #e8833a;
  font-size: 34px;
  padding: 15px;
}
`;
const TextoInicial = styled.div`
background-color: hotpink;
width: 100%;
height: 110px;
`;