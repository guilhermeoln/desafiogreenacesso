import { usePersonagens } from "../../context/hooks/usePersonagens";

export default function Home() {
  const { personagens, setPersonagens } = usePersonagens();

  return (
    <>
      {personagens.map((personagem) => (
        <p>{personagem.name}</p>
      ))}
    </>
  );
}
