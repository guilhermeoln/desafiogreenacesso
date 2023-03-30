import styled from "styled-components";
import { corPrimaria } from "../../styles/variaveis";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: calc(100vh - 100px);
`;

export const Texto = styled.p`
  font-size: 30px;
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
