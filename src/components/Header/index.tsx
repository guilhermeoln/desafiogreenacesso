import {
  Botao,
  HeaderStyled,
  Logo,
  Favoritos,
  ContadorFavoritos,
  Input,
  Pesquisa,
  Icon,
} from "./styles";
import logo from "../../assets/logo.png";
import { useFavoritos } from "../../context/hooks/useFavoritos";
import { useNavigate } from "react-router-dom";
import { usePersonagens } from "../../context/hooks/usePersonagens";
import { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { corPrimaria, corSecundaria } from "../../styles/variaveis";

export default function Header() {
  const { favoritos } = useFavoritos();
  const navigate = useNavigate();

  const [nomePersonagem, setNomePersonagem] = useState("");

  return (
    <HeaderStyled>
      <Logo src={logo} onClick={() => navigate("/")} />
      <Pesquisa>
        <Input
          type="text"
          placeholder="Pesquise aqui"
          value={nomePersonagem}
          onChange={(event) => setNomePersonagem(event.target.value)}
        />
        <Icon
          onClick={() => {
            if (nomePersonagem.length > 0) {
              navigate(`/search/${nomePersonagem}`);
              setNomePersonagem("");
            }
          }}
        >
          <AiOutlineSearch
            fontSize="20px"
            color={corPrimaria}
            cursor="pointer"
          />
        </Icon>
      </Pesquisa>
      <Favoritos>
        <Botao onClick={() => navigate("/favoritos")}>Favoritos</Botao>
        <ContadorFavoritos>{favoritos.length}</ContadorFavoritos>
      </Favoritos>
    </HeaderStyled>
  );
}
