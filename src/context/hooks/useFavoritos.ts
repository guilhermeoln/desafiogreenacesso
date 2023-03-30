import { useContext } from "react";
import IPersonagem from "../../types/IPersonagem";
import { FavoritosContext } from "../favoritos";

export const useFavoritos = () => {
  const { favoritos, setFavoritos } = useContext(FavoritosContext);

  function adicionarFavorito(personagem: IPersonagem) {
    setFavoritos([...favoritos, personagem]);
  }

  function removerFavorito(personagem: IPersonagem) {
    const personagemRemovido = favoritos.filter(
      (personagemFavoritado) => personagemFavoritado.id != personagem.id
    );

    setFavoritos(personagemRemovido);
  }

  return {
    favoritos,
    setFavoritos,
    adicionarFavorito,
    removerFavorito,
  };
};
