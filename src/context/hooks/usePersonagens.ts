import { useContext } from "react";
import { PersonagensContext } from "../personagens";

export const usePersonagens = () => {
  const {
    personagens,
    setPersonagens,
    proximaPagina,
    setProximaPagina,
    paginaAnterior,
    setPaginaAnterior,
  } = useContext(PersonagensContext);

  return {
    personagens,
    setPersonagens,
    proximaPagina,
    setProximaPagina,
    paginaAnterior,
    setPaginaAnterior,
  };
};
