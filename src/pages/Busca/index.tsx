import { useEffect } from "react";
import { useParams } from "react-router-dom";
import Personagem from "../../components/Personagem";
import { usePersonagens } from "../../context/hooks/usePersonagens";
import { Botao, Container, Conteudo, Paginacao, Titulo } from "./styles";

export default function Busca() {
  const { nome } = useParams();

  const {
    filtrarPersonagens,
    personagens,
    paginaAnterior,
    proximaPagina,
    voltarPagina,
    passarPagina,
  } = usePersonagens();

  useEffect(() => {}, []);

  if (nome) {
    filtrarPersonagens(nome);
  }

  return (
    <Container>
      <Titulo>Resultados da pesquisa:</Titulo>
      <Conteudo>
        {personagens.map((personagem) => (
          <Personagem key={personagem.id} {...personagem} />
        ))}
      </Conteudo>
      <Paginacao>
        <Botao disabled={!paginaAnterior} onClick={voltarPagina}>
          Voltar
        </Botao>
        <Botao disabled={!proximaPagina} onClick={passarPagina}>
          Próxima
        </Botao>
      </Paginacao>
    </Container>
  );
}
