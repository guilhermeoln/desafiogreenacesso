import IPersonagem from "../../types/IPersonagem";
import { Botao, Container, Origem, Logo, Nome, Status, Texto } from "./styles";
import { AiFillHeart } from "react-icons/ai";
import { GiCrucifix } from "react-icons/gi";
import { RiEarthFill } from "react-icons/ri";

export default function Personagem(props: IPersonagem) {
  const { id, image, name, status, favorito, gender, origin, location } = props;

  return (
    <Container>
      <Logo src={image} alt={name} />
      <Nome>{name}</Nome>
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
      <Botao>Ver mais</Botao>
    </Container>
  );
}
