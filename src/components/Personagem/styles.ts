import styled from "styled-components";
import { corPrimaria, corSecundaria } from "../../styles/variaveis";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 10px;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  border-radius: 8px;
`;

export const Logo = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  margin-top: -50px;
`;

export const Nome = styled.h1`
  font-size: 18px;
  text-align: center;
  margin-top: 20px;
`;

export const Status = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px 0px;
`;

export const Botao = styled.button`
  width: 100%;
  padding: 10px;
  margin-top: 30px;
  border: none;
  background-color: ${corPrimaria};
  border-radius: 0px 0px 8px 8px;
  color: white;
  cursor: pointer;
`;

export const Origem = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Texto = styled.p`
  color: ${corPrimaria};
  font-size: 12px;
  margin-left: 5px;
`;
