import IPersonagem from "../../types/IPersonagem";
import { Botao, Container, Origem, Logo, Nome, Status, Texto } from "./styles";
import { AiFillHeart, AiOutlineStar, AiFillStar } from "react-icons/ai";
import { GiCrucifix } from "react-icons/gi";
import { RiEarthFill } from "react-icons/ri";
import { useFavoritos } from "../../context/hooks/useFavoritos";
import { useNavigate } from "react-router-dom";

export default function Personagem(props: IPersonagem) {
  const { id, image, name, status, favorito, gender, origin, location } = props;

  const { favoritos, adicionarFavorito, removerFavorito } = useFavoritos();

  const navigate = useNavigate();

  const personagemFavorito = favoritos.find(
    (personagemFavoritado) => personagemFavoritado.id === id
  );

  return (
    <Container>
      <Logo src={image} alt={name} />
      <Nome>{name}</Nome>
      {personagemFavorito ? (
        <AiFillStar cursor="pointer" onClick={() => removerFavorito(props)} />
      ) : (
        <AiOutlineStar
          cursor="pointer"
          onClick={() => adicionarFavorito(props)}
        />
      )}

      {status === "Alive" ? (
        <Status>
          <AiFillHeart /> {status}
        </Status>
      ) : (
        <Status>
          <GiCrucifix />
          {status}
        </Status>
      )}
      <Origem>
        <RiEarthFill />
        <Texto>{origin.name}</Texto>
      </Origem>
      <Botao onClick={() => navigate(`/detalhes/${id}`)}>Ver mais</Botao>
    </Container>
  );
}
