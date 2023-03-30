import styled from "styled-components";
import { corPrimaria } from "../../styles/variaveis";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 100px 0px;
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

export const Texto = styled.h3`
  color: ${corPrimaria};
`;

export const Botao = styled.button`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 90px;
  padding: 10px;
  background-color: ${corPrimaria};
  color: white;
  border: none;
  border-radius: 8px;
  margin-top: 20px;
  cursor: pointer;
`;
