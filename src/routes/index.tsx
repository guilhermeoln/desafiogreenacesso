import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "../components/Header";
import { FavoritosProvider } from "../context/favoritos";
import { PersonagensProvider } from "../context/personagens";
import Home from "../pages/Home";

export default function RoutesApp() {
  return (
    <BrowserRouter>
      <PersonagensProvider>
        <FavoritosProvider>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </FavoritosProvider>
      </PersonagensProvider>
    </BrowserRouter>
  );
}
