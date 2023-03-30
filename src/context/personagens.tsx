import { createContext, useEffect, useState } from "react";
import api from "../services/api";
import IPersonagem from "../types/IPersonagem";

interface IProps {
  children: React.ReactNode;
}

interface IPropsContext {
  personagens: IPersonagem[] | [];
  setPersonagens: React.Dispatch<React.SetStateAction<never[]>>;
  proximaPagina: string;
  setProximaPagina: React.Dispatch<React.SetStateAction<string>>;
  paginaAnterior: string;
  setPaginaAnterior: React.Dispatch<React.SetStateAction<string>>;
  carregarPersonagens: () => void;
}

export const PersonagensContext = createContext<IPropsContext>(null!);

export const PersonagensProvider = ({ children }: IProps) => {
  const [personagens, setPersonagens] = useState([]);
  const [proximaPagina, setProximaPagina] = useState("");
  const [paginaAnterior, setPaginaAnterior] = useState("");

  const carregarPersonagens = async () => {
    await api
      .get("/character/?page=1")
      .then((response) => {
        setPersonagens(response.data.results);
        setPaginaAnterior(response.data.info.prev);
        setProximaPagina(response.data.info.next);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    carregarPersonagens();
  }, []);

  return (
    <PersonagensContext.Provider
      value={{
        personagens,
        setPersonagens,
        paginaAnterior,
        setPaginaAnterior,
        proximaPagina,
        setProximaPagina,
        carregarPersonagens,
      }}
    >
      {children}
    </PersonagensContext.Provider>
  );
};
