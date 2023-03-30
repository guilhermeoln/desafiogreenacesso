import Personagem from "../../components/Personagem";
import { useFavoritos } from "../../context/hooks/useFavoritos";
import { Botao, Container, Conteudo, Texto } from "./styles";
import { AiOutlineHome } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

export default function Favoritos() {
  const { favoritos } = useFavoritos();

  const navigate = useNavigate();

  return (
    <Container>
      {favoritos.length > 0 ? (
        <Conteudo>
          {favoritos.map((personagemFavoritado) => (
            <Personagem
              key={personagemFavoritado.id}
              {...personagemFavoritado}
            />
          ))}
        </Conteudo>
      ) : (
        <>
          <Texto>Você não possui personagens favoritos!</Texto>
          <Botao onClick={() => navigate("/")}>
            <AiOutlineHome />
            Home
          </Botao>
        </>
      )}
    </Container>
  );
}
