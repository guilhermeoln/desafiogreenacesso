import styled from "styled-components";
import { corPrimaria, corSecundaria } from "../../styles/variaveis";

export const HeaderStyled = styled.header`
  display: flex;
  width: 100%;
  height: 100px;
  align-items: center;
  justify-content: space-between;
  background-color: ${corPrimaria};
`;

export const Logo = styled.img`
  width: 140px;
  height: 70px;
`;

export const Botao = styled.button`
  padding: 10px;
  border-radius: 8px;
  border: none;
  background-color: ${corSecundaria};
  color: ${corPrimaria};
  font-weight: 400;
  cursor: pointer;
  margin-right: 30px;
`;
