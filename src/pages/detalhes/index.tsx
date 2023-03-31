import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../../services/api";
import {
  Container,
  Imagem,
  InformacoesPersonagem,
  Nome,
  Status,
  Origem,
  Texto,
  Genero,
  Local,
  Botao,
} from "./styles";
import IPersonagem from "../../types/IPersonagem";
import { AiFillHeart } from "react-icons/ai";
import { GiCrucifix } from "react-icons/gi";
import { RiEarthFill } from "react-icons/ri";
import { BsGenderMale, BsGenderFemale } from "react-icons/bs";
import { HiLocationMarker } from "react-icons/hi";
import { useFavoritos } from "../../context/hooks/useFavoritos";

export default function Detalhes() {
  const { id } = useParams();

  const { favoritos, adicionarFavorito, removerFavorito } = useFavoritos();

  const [personagemSelecionado, setPersonagemSelecionado] =
    useState<IPersonagem | null>(null);

  useEffect(() => {
    async function carregarPersonagem() {
      await api
        .get(`/character/${id}`)
        .then((response) => {
          setPersonagemSelecionado(response.data);
        })
        .catch((err) => {
          console.log(err);
        });
    }

    carregarPersonagem();
  }, []);

  const personagemFavoritado = favoritos.find(
    (personagemFavorito) => personagemFavorito.id === personagemSelecionado?.id
  );

  return (
    <Container>
      <InformacoesPersonagem>
        <Imagem src={personagemSelecionado?.image} />
        <Nome>{personagemSelecionado?.name}</Nome>
        {personagemSelecionado?.gender === "Male" ? (
          <Genero>
            <BsGenderMale />
            <Texto>{personagemSelecionado?.gender}</Texto>
          </Genero>
        ) : (
          <Genero>
            <BsGenderFemale />
            <Texto>{personagemSelecionado?.gender}</Texto>
          </Genero>
        )}
        {personagemSelecionado?.status === "Alive" ? (
          <Status>
            <AiFillHeart />
            <Texto>{personagemSelecionado.status}</Texto>
          </Status>
        ) : (
          <Status>
            <GiCrucifix />
            <Texto>{personagemSelecionado?.status}</Texto>
          </Status>
        )}
        <Origem>
          <RiEarthFill />
          <Texto>{personagemSelecionado?.origin.name}</Texto>
        </Origem>
        <Local>
          <HiLocationMarker />
          <Texto>{personagemSelecionado?.location.name}</Texto>
        </Local>
        {personagemFavoritado ? (
          <Botao
            onClick={() => {
              if (personagemSelecionado) {
                removerFavorito(personagemSelecionado);
              }
            }}
          >
            Remover Favorito
          </Botao>
        ) : (
          <Botao
            onClick={() => {
              if (personagemSelecionado) {
                adicionarFavorito(personagemSelecionado);
              }
            }}
          >
            Favoritar
          </Botao>
        )}
      </InformacoesPersonagem>
    </Container>
  );
}
