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
  cursor: pointer;
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

export const Favoritos = styled.div`
  display: flex;
  justify-content: center;
`;

export const ContadorFavoritos = styled.h3`
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${corPrimaria};
  background-color: white;
  width: 25px;
  height: 25px;
  position: absolute;
  border-radius: 50%;
  margin: -10px 0px 0px 50px;
`;

export const Input = styled.input`
  width: 250px;
  height: 15px;
  padding: 10px;
  border: none;
  background-color: white;
  border-radius: 8px 0px 0px 8px;

  @media (max-width: 600px) {
    width: 100px;
  }
`;

export const Pesquisa = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Icon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30px;
  height: 15px;
  padding: 10px;
  background-color: ${corSecundaria};
  border-radius: 0px 8px 8px 0px;
`;
