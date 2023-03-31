import styled from "styled-components";
import { corPrimaria } from "../../styles/variaveis";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  padding: 100px 0px;
`;

export const InformacoesPersonagem = styled.div`
  display: flex;
  flex-direction: column;
  width: 300px;
  align-items: center;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  padding: 15px;
  border-radius: 8px;
`;

export const Imagem = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  margin-top: -80px;
`;

export const Nome = styled.h1`
  color: ${corPrimaria};
  font-size: 28px;
  margin-top: 20px;
  width: 90%;
`;

export const Status = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 5px 0px;
  width: 90%;
`;

export const Origem = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 5px 0px;
  width: 90%;
`;

export const Local = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 5px 0px;
  width: 90%;
`;

export const Texto = styled.p`
  color: ${corPrimaria};
  font-size: 15px;
  margin-left: 5px;
`;

export const Genero = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 5px 0px;
  width: 90%;
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
