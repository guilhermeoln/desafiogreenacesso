import { createContext, useState } from "react";
import IPersonagem from "../types/IPersonagem";

interface IPropsContext {
  favoritos: IPersonagem[] | [];
  setFavoritos: React.Dispatch<React.SetStateAction<IPersonagem[] | []>>;
}

interface IProps {
  children: React.ReactNode;
}

export const FavoritosContext = createContext<IPropsContext>(null!);

export const FavoritosProvider = ({ children }: IProps) => {
  const [favoritos, setFavoritos] = useState<IPersonagem[] | []>([]);

  return (
    <FavoritosContext.Provider value={{ favoritos, setFavoritos }}>
      {children}
    </FavoritosContext.Provider>
  );
};
