import { useFavoritos } from "../../context/hooks/useFavoritos";
import { Container, Conteudo } from "./styles";

export default function Favoritos() {
  const { favoritos } = useFavoritos();

  return (
    <Container>
      <Conteudo></Conteudo>
    </Container>
  );
}
