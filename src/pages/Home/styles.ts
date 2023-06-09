import styled from "styled-components";
import { corPrimaria, corSecundaria } from "../../styles/variaveis";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 50px 0px;
`;

export const Conteudo = styled.div`
  display: grid;
  width: 80%;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 50px;
  grid-row-gap: 100px;
  margin-top: 100px;

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

export const Paginacao = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  margin-top: 80px;
`;

export const Botao = styled.button`
  padding: 10px;
  border: none;
  background-color: ${(props) => (props.disabled ? "#CED0CE" : corPrimaria)};
  color: white;
  cursor: pointer;
  border-radius: 8px;
`;

export const PaginaAtual = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 25px;
  height: 25px;
  background-color: ${corPrimaria};
  color: white;
  border-radius: 50%;
  margin: 0px 10px 0px 10px;
`;
