import {
  Botao,
  HeaderStyled,
  Logo,
  Favoritos,
  ContadorFavoritos,
} from "./styles";
import logo from "../../assets/logo.png";
import { useFavoritos } from "../../context/hooks/useFavoritos";
import { useNavigate } from "react-router-dom";

export default function Header() {
  const { favoritos } = useFavoritos();
  const navigate = useNavigate();

  return (
    <HeaderStyled>
      <Logo src={logo} onClick={() => navigate("/")} />
      <Favoritos>
        <Botao onClick={() => navigate("/favoritos")}>Favoritos</Botao>
        <ContadorFavoritos>{favoritos.length}</ContadorFavoritos>
      </Favoritos>
    </HeaderStyled>
  );
}
