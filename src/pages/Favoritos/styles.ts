import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;

export const Conteudo = styled.div`
  display: grid;
  width: 80%;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 50px;
  grid-row-gap: 100px;

  @media (max-width: 900px) {
    grid-template-columns: 1fr 1fr;
    width: 100%;
    justify-items: center;
  }

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
    width: 100%;
  }
`;
