import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "../components/Header";
import { PersonagensProvider } from "../context/personagens";
import Home from "../pages/Home";

export default function RoutesApp() {
  return (
    <BrowserRouter>
      <PersonagensProvider>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </PersonagensProvider>
    </BrowserRouter>
  );
}
