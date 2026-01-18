import { Download } from "lucide-react";
import logo from "../assets/imagens/logo-sentinel-antivirus.png"

export default function Navbar() {
  /*sistema de scroll da pagina*/
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (!element) return;
    element.scrollIntoView({
        /* 'smooth' so funciona se o navegador permitir */
        behavior: 'smooth',
        block: "start",
      });
  };

  return (
    <nav className="fixed left-0 right-0 z-50 bg-white shadow-md">
      {/*Botoes e logo*/}
      <div className="max-w-7xl mx-auto px-4 py-2 lg:px-8 lg:py-3">
        {/*Divisao dos itens da navbar*/}
        <div className="flex items-center justify-between">
          {/*Botoes da esquerda*/}
          <div className="hidden lg:flex items-center gap-5">
            <img
              src={logo}
              alt="Sentinel Logo"
              className="h-12 w-auto"
            />
            <button
              onClick={() => scrollToSection("sobre")}
              className="px-2.5 py-2.5 text-xs font-inter text-[#333] hover:text-sentinel-blue-primary transition-colors"
            >
              Sobre
            </button>
            <button
              onClick={() => scrollToSection("beneficios")}
              className="px-2.5 py-2.5 text-xs font-inter text-[#333] hover:text-sentinel-blue-primary transition-colors"
            >
              Benefícios
            </button>
            <button
              onClick={() => scrollToSection("depoimentos")}
              className="px-2.5 py-2.5 text-xs font-inter text-[#333] hover:text-sentinel-blue-primary transition-colors"
            >
              Depoimentos
            </button>
            <button
              onClick={() => scrollToSection("contato")}
              className="px-2.5 py-2.5 text-xs font-inter text-[#333] hover:text-sentinel-blue-primary transition-colors"
            >
              Contato
            </button>
            {/*Botao da direita*/}
          </div>
          <button className="flex items-center gap-2 px-6 py-4 bg-sentinel-blue-primary text-white rounded-full hover:bg-sentinel-blue-secondary transition-colors shadow-lg">
            <Download className="w-6 h-6" />
            <span className="font-roboto text-base font-medium">Baixar</span>
          </button>
        </div>
      </div>
    </nav>
  );
}
