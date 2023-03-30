import { Container, Texto, Botao } from "./styles";
import { TbError404 } from "react-icons/tb";
import { AiOutlineHome } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

export default function NotFound() {
  const navigate = useNavigate();

  return (
    <Container>
      <TbError404 fontSize="150px" />
      <Texto>Ops.. Página não encontrada</Texto>
      <Botao onClick={() => navigate("/")}>
        <AiOutlineHome />
        Home
      </Botao>
    </Container>
  );
}
