import { Botao, HeaderStyled, Logo } from "./styles";
import logo from "../../assets/logo.png";

export default function Header() {
  return (
    <HeaderStyled>
      <Logo src={logo} />
      <Botao>Favoritos</Botao>
    </HeaderStyled>
  );
}
