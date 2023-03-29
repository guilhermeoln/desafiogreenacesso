import Personagem from "../../components/Personagem";
import { usePersonagens } from "../../context/hooks/usePersonagens";
import { Botao, Container, Conteudo, Paginacao } from "./styles";

export default function Home() {
  const { personagens, paginaAnterior, proximaPagina } = usePersonagens();

  return (
    <Container>
      <Conteudo>
        {personagens.map((personagem) => (
          <Personagem key={personagem.id} {...personagem} />
        ))}
      </Conteudo>
      <Paginacao>
        <Botao disabled={!paginaAnterior}>Voltar</Botao>
        <Botao disabled={!proximaPagina}>Próxima</Botao>
      </Paginacao>
    </Container>
  );
}
