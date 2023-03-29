import {
  Botao,
  HeaderStyled,
  Logo,
  Favoritos,
  ContadorFavoritos,
} from "./styles";
import logo from "../../assets/logo.png";
import { useFavoritos } from "../../context/hooks/useFavoritos";

export default function Header() {
  const { favoritos } = useFavoritos();

  return (
    <HeaderStyled>
      <Logo src={logo} />
      <Favoritos>
        <Botao>Favoritos</Botao>
        <ContadorFavoritos>{favoritos.length}</ContadorFavoritos>
      </Favoritos>
    </HeaderStyled>
  );
}
