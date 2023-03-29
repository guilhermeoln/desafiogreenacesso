import axios from "axios";
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

  async function passarPagina() {
    await axios
      .get(proximaPagina)
      .then((response) => {
        setPersonagens(response.data.results);
        setPaginaAnterior(response.data.info.prev);
        setProximaPagina(response.data.info.next);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  async function voltarPagina() {
    await axios
      .get(paginaAnterior)
      .then((response) => {
        setPersonagens(response.data.results);
        setPaginaAnterior(response.data.info.prev);
        setProximaPagina(response.data.info.next);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return {
    personagens,
    setPersonagens,
    proximaPagina,
    setProximaPagina,
    paginaAnterior,
    setPaginaAnterior,
    passarPagina,
    voltarPagina,
  };
};
