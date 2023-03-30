import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Personagem from "../../components/Personagem";
import { usePersonagens } from "../../context/hooks/usePersonagens";
import {
  Botao,
  Container,
  Conteudo,
  PaginaAtual,
  Paginacao,
  Titulo,
} from "./styles";

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

  useEffect(() => {
    if (nome) {
      filtrarPersonagens(nome);
    }
  }, []);

  const [paginaAtual, setPaginaAtual] = useState(1);

  return (
    <Container>
      <Titulo>Resultados da pesquisa:</Titulo>
      <Conteudo>
        {personagens.map((personagem) => (
          <Personagem key={personagem.id} {...personagem} />
        ))}
      </Conteudo>
      <Paginacao>
        <Botao
          disabled={!paginaAnterior}
          onClick={() => {
            voltarPagina();
            setPaginaAtual(paginaAtual - 1);
          }}
        >
          Voltar
        </Botao>
        <PaginaAtual>{paginaAtual}</PaginaAtual>
        <Botao
          disabled={!proximaPagina}
          onClick={() => {
            passarPagina();
            setPaginaAtual(paginaAtual + 1);
          }}
        >
          Próxima
        </Botao>
      </Paginacao>
    </Container>
  );
}
