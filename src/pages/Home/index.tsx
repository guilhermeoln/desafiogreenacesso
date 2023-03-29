import Personagem from "../../components/Personagem";
import { usePersonagens } from "../../context/hooks/usePersonagens";
import { Botao, Container, Conteudo, Paginacao } from "./styles";

export default function Home() {
  const {
    personagens,
    paginaAnterior,
    proximaPagina,
    passarPagina,
    voltarPagina,
  } = usePersonagens();

  return (
    <Container>
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
