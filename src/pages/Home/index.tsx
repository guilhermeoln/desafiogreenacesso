import Personagem from "../../components/Personagem";
import { usePersonagens } from "../../context/hooks/usePersonagens";
import { Botao, Container, Conteudo, PaginaAtual, Paginacao } from "./styles";
import { useEffect, useState } from "react";

export default function Home() {
  const {
    personagens,
    paginaAnterior,
    proximaPagina,
    passarPagina,
    voltarPagina,
    carregarPersonagens,
  } = usePersonagens();

  useEffect(() => {
    carregarPersonagens();
  }, []);

  const [paginaAtual, setPaginaAtual] = useState(1);

  return (
    <Container>
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
