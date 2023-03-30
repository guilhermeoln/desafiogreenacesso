import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "../components/Header";
import { FavoritosProvider } from "../context/favoritos";
import { PersonagensProvider } from "../context/personagens";
import Favoritos from "../pages/Favoritos";
import Home from "../pages/Home";
import NotFound from "../pages/NotFound";

export default function RoutesApp() {
  return (
    <BrowserRouter>
      <PersonagensProvider>
        <FavoritosProvider>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/favoritos" element={<Favoritos />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </FavoritosProvider>
      </PersonagensProvider>
    </BrowserRouter>
  );
}
