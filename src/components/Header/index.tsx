import {
  Botao,
  HeaderStyled,
  Logo,
  Favoritos,
  ContadorFavoritos,
  Input,
} from "./styles";
import logo from "../../assets/logo.png";
import { useFavoritos } from "../../context/hooks/useFavoritos";
import { useNavigate } from "react-router-dom";
import { usePersonagens } from "../../context/hooks/usePersonagens";
import { useState } from "react";

export default function Header() {
  const { favoritos } = useFavoritos();
  const { filtrarPersonagens } = usePersonagens();
  const navigate = useNavigate();

  const [nomePersonagem, setNomePersonagem] = useState("");

  return (
    <HeaderStyled>
      <Logo src={logo} onClick={() => navigate("/")} />
      <Input
        type="text"
        placeholder="Pesquise aqui"
        value={nomePersonagem}
        onChange={(event) => setNomePersonagem(event.target.value)}
        onBlur={() => filtrarPersonagens(nomePersonagem)}
      />
      <Favoritos>
        <Botao onClick={() => navigate("/favoritos")}>Favoritos</Botao>
        <ContadorFavoritos>{favoritos.length}</ContadorFavoritos>
      </Favoritos>
    </HeaderStyled>
  );
}
