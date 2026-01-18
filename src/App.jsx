import "./global.css";
import { createRoot } from "react-dom/client";
import Hero_Section from "./components/Hero_Section.jsx";
import Sobre from "./components/Sobre.jsx";
import Beneficios_Tabela from "./components/Beneficios_Tabela.jsx";
import Depoimentos from "./components/Depoimentos.jsx";
import Navbar from "./components/Navbar";
import Rodape from "./components/Rodape.jsx";

function App() {
  return (
    <>
      <Navbar/>
      <Hero_Section/>
      <Sobre/>
      <Beneficios_Tabela/>
      <Depoimentos/>
      <Rodape/>
    </>
  );
};

const rootElement = document.getElementById("root");
if (rootElement) {
  createRoot(rootElement).render(<App/>);
} else {
  console.error("Elemento root não encontrado!");
}
